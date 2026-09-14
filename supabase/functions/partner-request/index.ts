// POST /functions/v1/partner-request
//
// Public endpoint behind the "Request a partner code" form on bugsha.app/partners
// (and the same screen in the partner app). Stores the request with the service
// role, confirms to the kitchen, and pings the partner team. The code itself is
// issued by a person from the ops console — never from here.
//
// Contract
//   body    { market, legalName, tradingName, categories[], contactName, contactPhone,
//             contactEmail, city?, branchCount?, estDailySurplus?, referralSource?,
//             source?, locale?, website? }                       website = honeypot
//   200     { ok: true, requestId: uuid, repeat: boolean }
//   400     { ok: false, error: "<human readable>" }
//
// A second request from the same email is stored (kitchens open branches) but
// flagged `repeat` so the team sees it is not a new lead.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';
import { json, preflight } from '../_shared/cors.ts';
import { clean } from '../_shared/validate.ts';
import { parsePartnerRequest } from '../_shared/validate-partner.ts';
import { emailConfig, sendEmail } from '../_shared/email.ts';
import { partnerRequestReceivedEmail } from '../_shared/templates/partner-request-received.js';
import { partnerRequestNotifyEmail } from '../_shared/templates/partner-request-notify.js';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SITE_URL = Deno.env.get('WAITLIST_SITE_URL') ?? 'https://bugsha.app';
const PARTNER_TEAM_EMAIL = Deno.env.get('PARTNER_TEAM_EMAIL') ?? Deno.env.get('WAITLIST_ADMIN_EMAIL') ?? '';
const OPS_REQUESTS_URL = Deno.env.get('OPS_REQUESTS_URL') ?? 'https://bugsha-ops.vercel.app/requests';

Deno.serve(async (req: Request) => {
  const pre = preflight(req);
  if (pre) return pre;
  if (req.method !== 'POST') return json(req, { ok: false, error: 'Method not allowed.' }, 405);

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json(req, { ok: false, error: 'Expected a JSON body.' }, 400);
  }

  const parsed = parsePartnerRequest(raw);
  if (!parsed.ok) {
    if (parsed.silent) return json(req, { ok: true, requestId: null, repeat: false });
    return json(req, { ok: false, error: parsed.error }, 400);
  }
  const v = parsed.value;

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, { auth: { persistSession: false } });

  const { count: priorCount } = await supabase
    .from('partner_request')
    .select('id', { count: 'exact', head: true })
    .eq('contact_email', v.contactEmail);
  const repeat = (priorCount ?? 0) > 0;

  const row = {
    market: v.market,
    legal_name: v.legalName,
    trading_name: v.tradingName,
    categories: v.categories,
    contact_name: v.contactName,
    contact_phone: v.contactPhone,
    contact_email: v.contactEmail,
    city: v.city ?? null,
    branch_count: v.branchCount,
    est_daily_surplus: v.estDailySurplus ?? null,
    referral_source: v.referralSource ?? null,
    source: v.source ?? 'site-partners',
    locale: v.locale ?? null,
    referrer: clean(req.headers.get('referer'), 500) ?? null,
    user_agent: clean(req.headers.get('user-agent'), 400) ?? null,
    status: 'new',
  };

  const { data: saved, error: saveError } = await supabase
    .from('partner_request')
    .insert(row)
    .select('id')
    .single();

  if (saveError || !saved) {
    console.error('[partner-request] insert failed:', saveError);
    return json(req, { ok: false, error: 'We couldn’t save that just now. Please try again.' }, 500);
  }

  // Nice-to-haves. Never let them break a request that already landed.
  const { count: openTotal } = await supabase
    .from('partner_request')
    .select('id', { count: 'exact', head: true })
    .eq('status', 'new');

  const confirm = partnerRequestReceivedEmail({
    contactName: v.contactName,
    tradingName: v.tradingName,
    market: v.market,
    city: v.city,
    categories: v.categories,
    branchCount: v.branchCount,
    siteUrl: SITE_URL,
  });

  const sends: Promise<unknown>[] = [
    sendEmail({ to: v.contactEmail, subject: confirm.subject, html: confirm.html, text: confirm.text }).then((r) => {
      if (r.sent) return supabase.from('partner_request').update({ confirmation_sent_at: new Date().toISOString() }).eq('id', saved.id);
    }),
  ];

  if (PARTNER_TEAM_EMAIL) {
    const notify = partnerRequestNotifyEmail({
      tradingName: v.tradingName,
      legalName: v.legalName,
      market: v.market,
      city: v.city,
      categories: v.categories,
      contactName: v.contactName,
      contactPhone: v.contactPhone,
      contactEmail: v.contactEmail,
      branchCount: v.branchCount,
      estDailySurplus: v.estDailySurplus,
      referralSource: v.referralSource,
      source: row.source ?? undefined,
      referrer: row.referrer ?? undefined,
      userAgent: row.user_agent ?? undefined,
      openTotal: typeof openTotal === 'number' ? openTotal : undefined,
      dashboardUrl: `${OPS_REQUESTS_URL}?id=${saved.id}`,
      repeat,
    });
    sends.push(sendEmail({ to: PARTNER_TEAM_EMAIL, subject: notify.subject, html: notify.html, text: notify.text, replyTo: v.contactEmail }));
  }

  // emailConfig() is read here only so a missing RESEND key is logged once per request.
  emailConfig();
  await Promise.allSettled(sends);

  return json(req, { ok: true, requestId: saved.id, repeat });
});
