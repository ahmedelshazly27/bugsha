// GET /functions/v1/waitlist-unsubscribe?token=<uuid>
//
// One-click opt-out linked from the footer of every waitlist email. The token
// is the row's unsubscribe_token, so the link proves ownership without a login.
// Responds with a small branded HTML page rather than JSON — a human clicked it.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.45.4';
import { preflight } from '../_shared/cors.ts';
import { brand, esc, layout } from '../_shared/templates/brand.js';

const SUPABASE_URL = Deno.env.get('SUPABASE_URL')!;
const SERVICE_ROLE_KEY = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
const SITE_URL = Deno.env.get('WAITLIST_SITE_URL') ?? 'https://bugsha.app';

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

function page(title: string, message: string, status: number): Response {
  const html = layout({
    title,
    preheader: title,
    body: `
      <h1 style="margin:0 0 12px;font-size:27px;line-height:1.2;font-weight:700;letter-spacing:-.03em;color:${brand.ink900}">${esc(title)}</h1>
      <p style="margin:0 0 18px;color:${brand.ink900}">${esc(message)}</p>
      <p style="margin:0"><a href="${esc(SITE_URL)}" style="color:${brand.violet700};font-weight:600;text-decoration:none">Back to ${brand.name} &rarr;</a></p>
    `,
  });
  return new Response(html, {
    status,
    headers: { 'Content-Type': 'text/html; charset=utf-8', 'Cache-Control': 'no-store' },
  });
}

Deno.serve(async (req: Request) => {
  const pre = preflight(req);
  if (pre) return pre;

  const token = new URL(req.url).searchParams.get('token') ?? '';
  if (!UUID_RE.test(token)) {
    return page('That link isn’t valid', 'Double-check the link in your email, or just ignore this.', 400);
  }

  const supabase = createClient(SUPABASE_URL, SERVICE_ROLE_KEY, {
    auth: { persistSession: false },
  });

  const { data, error } = await supabase
    .from('waitlist')
    .update({ status: 'unsubscribed' })
    .eq('unsubscribe_token', token)
    .select('email')
    .maybeSingle();

  if (error) {
    console.error('[waitlist-unsubscribe] update failed:', error);
    return page('Something went wrong', 'We couldn’t update your preferences just now. Please try again shortly.', 500);
  }
  if (!data) {
    return page('That link isn’t valid', 'This unsubscribe link has already been used or no longer exists.', 404);
  }

  return page(
    'You’re off the list',
    `We won’t email ${data.email} about the Bugsha launch again. No hard feelings — the food will still be there if you change your mind.`,
    200,
  );
});
