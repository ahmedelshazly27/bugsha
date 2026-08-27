// POST /functions/v1/waitlist-signup
//
// Public endpoint behind the landing-page waitlist form. It writes the signup
// with the service role (the table is RLS-locked with no policies), then sends
// the subscriber a confirmation and the team a notification.
//
// Contract
//   body    { email, city?, source?, locale?, company? }   company = honeypot
//   200     { ok: true, alreadyOnList: boolean, position: number|null }
//   400     { ok: false, error: "<human readable>" }
//
// Resubmitting a known email is not an error: it returns 200 with
// alreadyOnList true, so the form shows the same success state either way.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';
import { json, preflight } from '../_shared/cors.ts';
import { clean, parseSignup } from '../_shared/validate.ts';
import { emailConfig, sendEmail } from '../_shared/email.ts';
import { welcomeEmail } from '../_shared/templates/welcome.js';
import { adminNotifyEmail } from '../_shared/templates/admin-notify.js';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SITE_URL = Deno.env.get('WAITLIST_SITE_URL') ?? 'https://bugsha.com';
const FUNCTIONS_URL = `${SUPABASE_URL}/functions/v1`;
const PROJECT_REF = SUPABASE_URL.replace(/^https:\/\//, '').split('.')[0];
const DASHBOARD_URL = `https://supabase.com/dashboard/project/${PROJECT_REF}/editor`;

Deno.serve(async (req: Request) => {
  const pre = preflight(req);
  if (pre) return pre;

  if (req.method !== 'POST') {
    return json(req, { ok: false, error: 'Method not allowed.' }, 405);
  }

  let raw: unknown;
  try {
    raw = await req.json();
  } catch {
    return json(req, { ok: false, error: 'Expected a JSON body.' }, 400);
  }

  const parsed = parseSignup(raw);
  if (!parsed.ok) {
    // Honeypot: look successful, store nothing.
    if (parsed.silent) return json(req, { ok: true, alreadyOnList: false, position: null });
    return json(req, { ok: false, error: parsed.error }, 400);
  }

  const { email, city, source, locale } = parsed.value;
  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  // Was this address already with us? Drives copy in both emails.
  const { data: existing } = await supabase
    .from('waitlist')
    .select('id, status')
    .eq('email', email)
    .maybeSingle();
  const alreadyOnList = Boolean(existing);

  const row = {
    email,
    city: city ?? null,
    locale: locale ?? null,
    source: source ?? 'landing-page',
    referrer: clean(req.headers.get('referer'), 500) ?? null,
    user_agent: clean(req.headers.get('user-agent'), 400) ?? null,
    // A re-signup after unsubscribing is an explicit opt-back-in.
    status: 'subscribed',
    updated_at: new Date().toISOString(),
  };

  const { data: saved, error: saveError } = await supabase
    .from('waitlist')
    .upsert(row, { onConflict: 'email' })
    .select('id, email, city, unsubscribe_token')
    .single();

  if (saveError || !saved) {
    console.error('[waitlist-signup] insert failed:', saveError);
    return json(req, { ok: false, error: 'We couldn’t save that just now. Please try again.' }, 500);
  }

  // Nice-to-haves. Never let them break a signup that already landed.
  const [{ data: position }, { count: total }] = await Promise.all([
    supabase.rpc('waitlist_position', { p_email: saved.email }),
    supabase
      .from('waitlist')
      .select('id', { count: 'exact', head: true })
      .eq('status', 'subscribed'),
  ]);

  const unsubscribeUrl = `${FUNCTIONS_URL}/waitlist-unsubscribe?token=${saved.unsubscribe_token}`;

  const subscriberMail = welcomeEmail({
    email: saved.email,
    city: saved.city ?? undefined,
    position: typeof position === 'number' ? position : undefined,
    siteUrl: SITE_URL,
    unsubscribeUrl,
    alreadyOnList,
  });

  const { admin } = emailConfig();
  const sends: Promise<unknown>[] = [
    sendEmail({
      to: saved.email,
      subject: subscriberMail.subject,
      html: subscriberMail.html,
      text: subscriberMail.text,
    }).then((result) => {
      if (result.sent) {
        return supabase
          .from('waitlist')
          .update({ welcome_email_sent_at: new Date().toISOString() })
          .eq('id', saved.id);
      }
    }),
  ];

  if (admin) {
    const teamMail = adminNotifyEmail({
      email: saved.email,
      city: saved.city ?? undefined,
      source: row.source ?? undefined,
      referrer: row.referrer ?? undefined,
      userAgent: row.user_agent ?? undefined,
      total: typeof total === 'number' ? total : undefined,
      dashboardUrl: DASHBOARD_URL,
      alreadyOnList,
    });
    sends.push(
      sendEmail({
        to: admin,
        subject: teamMail.subject,
        html: teamMail.html,
        text: teamMail.text,
        replyTo: saved.email,
      }),
    );
  }

  await Promise.allSettled(sends);

  return json(req, {
    ok: true,
    alreadyOnList,
    position: typeof position === 'number' ? position : null,
  });
});
