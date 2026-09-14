# Platform port — code-gated partner sign-up

This folder is **not** applied by this repo's `supabase db push`. It holds SQL written
against the platform's database (Supabase project `bugsha-dev`, ref
`fxjvxmuporiwpqalbddv`, schema as of 2026-09-14) whose migrations live in the
private `ahmedelshazly27/bugsha-platform` repository, which this session could not
open. Copy the file into `bugsha-platform/supabase/migrations/` with a fresh
timestamp and apply it there.

## What the platform gains

| Object | Purpose |
| --- | --- |
| `public.partner_invite_code` | Single-use `BG-XXXX-XXXX` codes, 14-day expiry, issued by an ops user, tied to a request |
| `public.partner_request` | Mirror of the website's request table so the ops console reads one queue |
| `app.check_partner_code(text)` | Anon-safe check for the partner app's "Enter your partner code" screen; returns `ok / invalid / expired / redeemed / revoked` plus the pre-fill |
| `app.submit_application(p_code, …)` | **Now requires a valid code** and redeems it; the code-less signature is dropped so nothing can bypass the gate |
| `app.ops_issue_partner_code`, `ops_revoke_partner_code`, `ops_decline_partner_request`, `ops_partner_requests`, `ops_partner_codes` | The ops console's "Requests & codes" view |

## Client changes this implies (Expo apps)

- **Partner app** — after email sign-in, a user with no `staff_assignment` lands on
  *Join Bugsha as a partner* with two paths: *I have a partner code* → code screen →
  application (pre-filled from the code) → status hub; *Request a partner code* →
  the same form the website has, posting to `partner-request`. See
  `.claude/skills/bugsha-design/ui_kits/partner/onboarding.jsx` (screens P-000 … P-013).
- **Ops app** — a *Requests & codes* view (S-O-010 / S-O-011) that lists requests,
  issues and revokes codes, declines with a reason. See `ui_kits/ops/screens.jsx`.
- **Consumer app** — no change.

## Until the port lands

The website form already works on its own: requests land in this repo's
`public.partner_request` (waitlist project) and email the partner team. Ops can
issue codes by hand from that table until the platform functions exist.
