# Platform port — code-gated partner sign-up

This folder is **not** applied by this repo's `supabase db push`. It holds SQL written
against the platform's database (Supabase project `bugsha-dev`, ref
`fxjvxmuporiwpqalbddv`) whose migration history lives in the private
`ahmedelshazly27/bugsha-platform` repository.

**State: applied.** `20260914094502_partner_invite_codes.sql` was applied to bugsha-dev on
2026-09-14 as that version and exercised in a transaction (issue a code → check it →
request marked `code_issued` → revoke → check returns `revoked`, request back to
`contacted`); the website's `partner-request` function still writes to the reconciled
table. Copy the file, unchanged, into `bugsha-platform/supabase/migrations/` so that
repo's history matches the database. `rollback_20260914094502_partner_invite_codes.sql`
restores the previous `app.submit_application` and drops everything else.

## What the platform gains

| Object | Purpose |
| --- | --- |
| `public.partner_invite_code` | Single-use `BG-XXXX-XXXX` codes, 14-day expiry, issued by an ops user, tied to a request |
| `public.partner_request` | The website's request table (from `../migrations/20260914090455_…`), reconciled: `market` becomes the `public.market` enum, `owner_ops_user` and the invite-code link are added |
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

## Emailing the code

`app.ops_issue_partner_code` records the code and returns the row (code, expiry,
`issued_to_email`) but does not send mail: the kitchen has no app user yet, so
`app.notify()` cannot address it. The ops console sends the email from the returned row.

## Until the apps catch up

The website form already works: requests land in `public.partner_request` and email the
partner team. The partner app's sign-up call fails with `BG130` until it sends `p_code`.
