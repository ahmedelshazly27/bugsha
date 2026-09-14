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

`20260914110851_partner_code_client_support.sql` (applied) moves the gate's error codes to
`BG122`–`BG128` — `BG130`/`BG131` turned out to be the platform's four-eyes and re-auth codes —
and adds `app.my_partners()` for the partner app's post-sign-in routing.

`20260914111830_partner_code_status_history.sql` (applied) fixes a bug the pgTAP run caught:
the application's status-history row cited a reason code that did not exist, so every real
sign-up would have failed on the foreign key. It now uses the registered reason
`partner_code` and keeps the code in `reason_text`.

`20260914133248_client_surface.sql` (applied) exposes what the design-system screens needed and
the RPCs did not return: `my_profile()` gains the restriction and deletion fields, `cancel_deletion()`
undoes a scheduled deletion, `my_partner()` carries status history and suspension, and
`my_quality_flags()` / `my_disputes()` / `respond_dispute()` give the partner app its quality page.

**All six files are now also in `bugsha-platform/supabase/migrations/`** (ported 2026-09-14),
alongside the Expo partner-app screens (`apps/partner/app/join/*`), the ops console's
`/requests` view and pgTAP coverage (`supabase/tests/10_partner_codes.sql`).

## What the platform gains

| Object | Purpose |
| --- | --- |
| `public.partner_invite_code` | Single-use `BG-XXXX-XXXX` codes, 14-day expiry, issued by an ops user, tied to a request |
| `public.partner_request` | The website's request table (from `../migrations/20260914090455_…`), reconciled: `market` becomes the `public.market` enum, `owner_ops_user` and the invite-code link are added |
| `app.check_partner_code(text)` | Anon-safe check for the partner app's "Enter your partner code" screen; returns `ok / invalid / expired / redeemed / revoked` plus the pre-fill |
| `app.submit_application(p_code, …)` | **Now requires a valid code** (`BG122`; `BG123` wrong market) and redeems it; the code-less signature is dropped so nothing can bypass the gate |
| `app.ops_issue_partner_code`, `ops_revoke_partner_code`, `ops_decline_partner_request`, `ops_partner_requests`, `ops_partner_codes` | The ops console's "Requests & codes" view |

## Client changes this implies (Expo apps)

- **Partner app** — after email sign-in, a user with no `staff_assignment` lands on
  *Join Bugsha as a partner* with two paths: *I have a partner code* → code screen →
  application (pre-filled from the code) → status hub; *Request a partner code* →
  the same form the website has, posting to `partner-request`. See
  `.claude/skills/bugsha-design/ui_kits/partner/onboarding.jsx` (screens P-000 … P-013).
- **Ops app** — a *Requests & codes* view (S-O-010 / S-O-011). Already live on the web at
  `bugsha.app/ops`; port to the Expo ops app from `ui_kits/ops/screens.jsx` when convenient.
- **Consumer app** — no change.

## Emailing the code

`20260914095840_partner_code_email.sql` (also applied) makes the database send it: an
`AFTER INSERT` trigger on `partner_invite_code` posts `{code}` through pg_net to the
`partner-code-email` edge function, signed with a shared secret kept in Supabase Vault
(`app.hook_secret()`, service role only). The function sends *Your Bugsha partner code*
via Resend and writes `emailed_at` / `email_error` / `email_attempts` back on the row.
`app.ops_resend_partner_code(code)` posts again. `app.notify()` is not used because the
kitchen has no app user yet.

## The ops console

`bugsha.app/ops` (this repo, `site/app/ops`) is the live S-O-010 / S-O-011 view: email
one-time-code sign-in, then `app.ops_partner_requests`, `ops_partner_codes`,
`ops_issue_partner_code`, `ops_decline_partner_request`, `ops_revoke_partner_code`,
`ops_resend_partner_code`. Only `ops_manager` and `admin` can act; other ops roles see
the queue read-only; anyone else is told they are not on the ops team.

## Until the apps catch up

The website form already works: requests land in `public.partner_request` and email the
partner team. The partner app's sign-up call fails with `BG130` until it sends `p_code`.
