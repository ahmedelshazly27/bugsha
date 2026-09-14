// POST /functions/v1/partner-code-email
//
// Emails a partner code to the kitchen it was issued to. Called by the database:
// an AFTER INSERT trigger on public.partner_invite_code posts here through pg_net
// the moment ops issues a code, and app.ops_resend_partner_code posts again on
// "Resend". Nothing else should call it, so it authenticates with a shared secret
// that lives in Supabase Vault (app.hook_secret(), service-role only) rather than
// a user JWT.
//
// Contract
//   headers  x-bugsha-hook: <secret>
//   body     { code }
//   200      { ok: true, sent: true }            email accepted by Resend
//   200      { ok: true, sent: false, reason }   code revoked / redeemed / expired — nothing to send
//   401      { ok: false, error }                bad or missing secret
//   404/500  { ok: false, error }
//
// Every attempt is recorded on the row (emailed_at, email_error, email_attempts)
// so the ops console can show whether the kitchen actually got the code.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';
import { json, preflight } from '../_shared/cors.ts';
import { emailConfig, sendEmail } from '../_shared/email.ts';
import { partnerCodeIssuedEmail } from '../_shared/templates/partner-code-issued.js';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SITE_URL = Deno.env.get('WAITLIST_SITE_URL') ?? 'https://bugsha.app';
const PARTNER_TEAM_EMAIL = Deno.env.get('PARTNER_TEAM_EMAIL') ?? Deno.env.get('WAITLIST_ADMIN_EMAIL') ?? '';

function sameSecret(a: string, b: string): boolean {
  if (a.length !== b.length || a.length === 0) return false;
  let diff = 0;
  for (let i = 0; i < a.length; i++) diff |= a.charCodeAt(i) ^ b.charCodeAt(i);
  return diff === 0;
}

Deno.serve(async (req: Request) => {
  const pre = preflight(req);
  if (pre) return pre;
  if (req.method !== 'POST') return json(req, { ok: false, error: 'Method not allowed.' }, 405);

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

  const { data: expected, error: secretError } = await supabase.schema('app').rpc('hook_secret');
  if (secretError || typeof expected !== 'string' || !expected) {
    console.error('[partner-code-email] hook secret unavailable:', secretError);
    return json(req, { ok: false, error: 'Hook secret is not configured.' }, 500);
  }
  if (!sameSecret(req.headers.get('x-bugsha-hook') ?? '', expected)) {
    return json(req, { ok: false, error: 'Unauthorized.' }, 401);
  }

  let body: { code?: unknown } = {};
  try {
    body = await req.json();
  } catch {
    return json(req, { ok: false, error: 'Expected a JSON body.' }, 400);
  }
  const code = typeof body.code === 'string' ? body.code.trim().toUpperCase() : '';
  if (!/^BG-[A-HJ-NP-Z2-9]{4}-[A-HJ-NP-Z2-9]{4}$/.test(code)) {
    return json(req, { ok: false, error: 'Not a partner code.' }, 400);
  }

  const { data: row, error: rowError } = await supabase
    .from('partner_invite_code')
    .select('code, market, issued_to_name, issued_to_email, trading_name, legal_name, expires_at, redeemed_at, revoked_at, request_id, email_attempts')
    .eq('code', code)
    .maybeSingle();
  if (rowError) {
    console.error('[partner-code-email] lookup failed:', rowError);
    return json(req, { ok: false, error: 'Lookup failed.' }, 500);
  }
  if (!row) return json(req, { ok: false, error: 'Unknown code.' }, 404);

  const skip = row.revoked_at ? 'revoked' : row.redeemed_at ? 'redeemed' : new Date(row.expires_at) < new Date() ? 'expired' : null;
  if (skip) return json(req, { ok: true, sent: false, reason: skip });

  // The kitchen's contact name lives on the request, when there is one.
  let contactName: string | undefined;
  if (row.request_id) {
    const { data: request } = await supabase.from('partner_request').select('contact_name').eq('id', row.request_id).maybeSingle();
    contactName = request?.contact_name ?? undefined;
  }

  const mail = partnerCodeIssuedEmail({
    code: row.code,
    tradingName: row.trading_name ?? row.issued_to_name,
    contactName,
    email: row.issued_to_email,
    market: row.market,
    expiresAt: row.expires_at,
    deepLink: `bugsha-partner://signup?code=${encodeURIComponent(row.code)}`,
    siteUrl: SITE_URL,
  });

  emailConfig(); // logs once when RESEND_API_KEY is missing
  const result = await sendEmail({
    to: row.issued_to_email,
    subject: mail.subject,
    html: mail.html,
    text: mail.text,
    replyTo: PARTNER_TEAM_EMAIL || undefined,
  });

  await supabase
    .from('partner_invite_code')
    .update({
      email_attempts: (row.email_attempts ?? 0) + 1,
      ...(result.sent ? { emailed_at: new Date().toISOString(), email_error: null } : { email_error: result.error ?? 'send failed' }),
    })
    .eq('code', row.code);

  if (!result.sent) return json(req, { ok: false, error: result.error ?? 'Email was not sent.' }, 502);
  return json(req, { ok: true, sent: true });
});
