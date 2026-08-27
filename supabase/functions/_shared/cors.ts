// CORS for the public waitlist endpoints.
//
// WAITLIST_ALLOWED_ORIGINS is a comma-separated allowlist, e.g.
//   https://bugsha.app,https://www.bugsha.app,https://bugsha-launch.vercel.app
// Unset (or "*") allows any origin, which is fine for a public signup form but
// worth tightening once the production domain is final.

const RAW = (Deno.env.get('WAITLIST_ALLOWED_ORIGINS') ?? '*').trim();
const ALLOWED = RAW.split(',').map((o) => o.trim()).filter(Boolean);

export function corsHeaders(req: Request): Record<string, string> {
  const origin = req.headers.get('origin') ?? '';
  const allowAll = ALLOWED.length === 0 || ALLOWED.includes('*');
  const allowed = allowAll ? (origin || '*') : ALLOWED.includes(origin) ? origin : '';

  const headers: Record<string, string> = {
    'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    'Access-Control-Max-Age': '86400',
    Vary: 'Origin',
  };
  if (allowed) headers['Access-Control-Allow-Origin'] = allowed;
  return headers;
}

export function preflight(req: Request): Response | null {
  if (req.method !== 'OPTIONS') return null;
  return new Response('ok', { headers: corsHeaders(req) });
}

export function json(req: Request, body: unknown, status = 200): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: { ...corsHeaders(req), 'Content-Type': 'application/json' },
  });
}
