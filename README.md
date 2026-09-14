# Bugsha

Landing-page waitlist (capture + transactional email) and the Bugsha design system.

A signup goes: **waitlist panel → `waitlist-signup` edge function → `public.waitlist` → confirmation email to the subscriber + notification to the team.**

```
.claude/skills/bugsha-design/    the design system, installed as a skill
  ui_kits/bugsha/                consumer app — every stage, every order state, KW + EG
  ui_kits/partner/               partner app — code-gated sign-up, every onboarding status, role-aware console
  ui_kits/ops/                   ops console — requests & codes, partners, orders, trust, finance, platform
  COVERAGE.md                    each kit screen ↔ the platform table / RPC it mirrors, verified vs assumed
supabase/
  migrations/                    table, RLS, position fn, linter fixes, area rename
  functions/
    _shared/cors.ts              origin allowlist + JSON helper
    _shared/validate.ts          email validation, honeypot, length caps
    _shared/email.ts             Resend transport (swap here to change provider)
    _shared/templates/brand.js   design tokens + email shell
    _shared/templates/welcome.js       subscriber confirmation
    _shared/templates/admin-notify.js  internal new-signup ping
    waitlist-signup/             POST endpoint behind the form
    waitlist-unsubscribe/        one-click opt-out from the email footer
    partner-request/             POST endpoint behind "Request a partner code" on /partners
    _shared/validate-partner.ts  its input hardening (mirrors app.submit_application)
    _shared/templates/partner-request-received.js / partner-request-notify.js
    partner-code-email/          emails a partner code to the kitchen — called by a DB trigger, never by a person
    _shared/templates/partner-code-issued.js
  platform/                      invite codes, the sign-up gate, the code-email trigger — applied to the platform DB (bugsha-dev) on 2026-09-14; copy into bugsha-platform's migrations
site/                            the Next.js website source
  app/components/PartnerRequest.tsx  the partner-code request form on /partners
  app/ops/ + app/components/OpsConsole.tsx  bugsha.app/ops — the live request queue: sign in, issue, decline, revoke, resend
web/
  DownloadSection.jsx            drop-in replacement for the site's waitlist panel
  waitlist.js                    vanilla alternative, no rebuild required
emails/preview/                  rendered previews (HTML, text, PNG)
scripts/preview-emails.mjs       regenerates the previews
```

## The design system

`.claude/skills/bugsha-design/` is the Bugsha design system, placed as a Claude skill
so it loads automatically in future sessions on this repo. It carries the tokens,
components, guidelines, UI kits and brand photography.

The two rules it enforces that this codebase had to obey:

- **Violet `#5B21B6` and white — two colours only.** Never a third hue; status and
  emphasis come from tint depth and weight. The email templates were rewritten
  against this: an earlier draft used cream, gold and lilac accents, all removed.
- **The mark is the Kerchief** — a square of cloth with its top corner turned down
  (`assets/mark.svg`), one colour, the fold a lighter plane rather than a cut-out.
  The wordmark is Archivo 600.

## `site/` — the Next.js source

`site/` is `Bugsha-Website-Repo-v41`, the Next.js website source, kept in its own
directory so it does not collide with the waitlist tooling at the root.

**The waitlist is ported into it.** `DownloadSection` in
`site/app/components/SiteUI.tsx` used to be an app-store panel behind
`id="download"`; it is now the pre-launch waitlist behind `id="waitlist"`, posting
to the same edge function. Along with it:

- `site/app/globals.css` gains the `.waitlist-form` / `.waitlist-done` rules and
  `.store-badge.is-soon`, ported from the marketing kit and adapted to this repo's
  tokens and breakpoints (820 / 560, not the kit's 620).
- The three "Get the app → #download" CTAs (nav, home hero, how-it-works) now read
  "Join the waitlist → #waitlist". The app is not out; they pointed at a panel that
  no longer exists.
- The store badges are marked `is-soon` rather than linking to `mailto:`.
- A `Kerchief` component is added and used in the success block. The design system
  replaces this repo's CSS-drawn `BrandMark` with the Kerchief; the rest of the site
  still uses the old mark, which is a separate migration.

Set the endpoint at build time:

```
NEXT_PUBLIC_WAITLIST_ENDPOINT=https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/waitlist-signup
```

Verified by running `npm run dev` and driving the real page in headless Chromium
against a mock endpoint — see `site/preview/`. The payload sent is
`{email, area, source: "site-waitlist", locale}`, the success block renders, and the
page logs no errors. `tsc --noEmit` reports nothing in `app/` (the three errors it
does report are pre-existing Cloudflare Workers types in `db/` and `worker/`), and
`eslint` reports 0 errors.

**This is what is deployed.** The `bugsha` Vercel project builds this directory
from `main` and serves it at bugsha.vercel.app. `site/vercel.json` pins the build to
`next build`, so the Cloudflare Workers build script is not involved in hosting.
The older `bugsha-launch` project still serves the marketing recreation with the
dead form; `web/DownloadSection.jsx` is there if you ever want to wire that one too.

The personal photos that shipped alongside the source in the upload were not
committed.

## Partner sign-up is code-gated

A partner account can only be opened with a code issued by the Bugsha team. The chain:

1. **Request** — a kitchen fills in *Request a partner code* on `bugsha.app/partners`
   (`site/app/components/PartnerRequest.tsx`; the same screen exists in the partner app kit as P-004).
   The form posts to the `partner-request` edge function, which stores the request in
   `public.partner_request` and emails the kitchen a confirmation and the partner team a
   notification with a deep link into the ops console. Field set mirrors
   `app.submit_application` on the platform so nothing is typed twice.
2. **Issue** — at **`bugsha.app/ops`** (the kit's S-O-010 *Requests & codes*, live) an ops
   manager or admin signs in with a one-time email code, reviews the request and issues a
   single-use `BG-XXXX-XXXX` code with a 7/14/30-day expiry, or declines with a reason.
   `supabase/platform/20260914094502_partner_invite_codes.sql` adds the table and the
   `app.ops_issue_partner_code` / `ops_revoke_partner_code` / `ops_decline_partner_request` RPCs.
   **The code is emailed by the database**: an `AFTER INSERT` trigger on `partner_invite_code`
   posts to the `partner-code-email` function (signed with a Vault secret), which sends *Your
   Bugsha partner code* and writes `emailed_at` / `email_error` back on the row — the ops page
   shows delivery per code, with *Resend*. (`supabase/platform/20260914095840_partner_code_email.sql`.)
3. **Sign up** — in the partner app, *I have a partner code* (kit P-002) checks the code with
   `app.check_partner_code` and pre-fills the application; `app.submit_application` now takes
   `p_code`, rejects anything without a live code (BG130), and marks the code redeemed. The
   code-less signature is dropped so no client can bypass the gate.

Status of each piece:

| Piece | Status |
| --- | --- |
| Website form | Built and type-checked; `next build` passes; driven in headless Chromium against a mocked endpoint |
| `partner-request` function, table, emails | Deployed to the platform Supabase project (`fxjvxmuporiwpqalbddv`) alongside the waitlist functions; validator unit-tested; previews in `emails/preview/`. Email sending needs the Resend secrets set on that project (see below) |
| Platform SQL (`supabase/platform/`) | **Applied to bugsha-dev** as version `20260914094502_partner_invite_codes` and exercised end to end (issue → check → revoke, and the website form still writes to the reconciled table). The Expo partner app must now pass `p_code` to `app.submit_application`; the old signature is gone. Copy the file into `bugsha-platform/supabase/migrations/` so that repo's history matches; `rollback_…sql` restores the previous state |
| Ops console: requests & codes | **Live at `bugsha.app/ops`** (email one-time-code sign-in; `app.ops_*` RPCs decide who may act). Driven end to end in headless Chromium against mocked endpoints; issue → trigger → email verified on the real project |
| Partner app screens | Implemented in `bugsha-platform` (`apps/partner/app/join/*`): join, enter code (`app.check_partner_code`, deep link `bugsha-partner://signup?code=`), application (`app.submit_application(p_code, …)`), request a code (same edge function as the site); typechecks; pgTAP coverage in `supabase/tests/10_partner_codes.sql`, run against bugsha-dev |

To deploy the website side once the project is restored:

```
supabase db push
supabase functions deploy partner-request --no-verify-jwt
supabase secrets set PARTNER_TEAM_EMAIL=partners@bugsha.app OPS_REQUESTS_URL=https://bugsha-ops.vercel.app/requests
```

## Design-system kits — every screen, every stage

`.claude/skills/bugsha-design/ui_kits/` now holds working click-throughs of all three Expo
apps: the consumer app (`bugsha/`), the partner app (`partner/`) and the ops console (`ops/`).
Each screen is mapped in `.claude/skills/bugsha-design/COVERAGE.md` to the platform table,
enum or `app.*` RPC it mirrors, with a column saying whether it was verified against the
platform database or assumed. The kits could not be diffed against the Expo source because
`ahmedelshazly27/bugsha-platform` is private to this session; they were reconciled against the
platform's live Supabase project instead (45 migrations, every RPC, enum, config row, document
requirement, reason code and notification deep link). The three open questions that need the
app source are listed at the end of `COVERAGE.md`.

Open any kit's `index.html` in a browser. They load React and Babel from unpkg and the fonts
from Google Fonts; no build step.

## Data model

`public.waitlist` — one row per email address.

| column | notes |
| --- | --- |
| `email` | `citext`, unique. Case-insensitive, so `A@b.com` and `a@b.com` are one person. |
| `area` | The form's "Where" value — `Kuwait` or `Egypt` — for launch sequencing. |
| `status` | `subscribed` / `unsubscribed` / `bounced`. |
| `unsubscribe_token` | UUID that authorises one-click opt-out without a login. |
| `source`, `referrer`, `user_agent` | Attribution for the signup. |
| `welcome_email_sent_at` | Set only after Resend accepts the message. |

RLS is **on with no policies**, and `anon`/`authenticated` are explicitly revoked.
Nothing can read this table over the public API — every write goes through the edge
function with the service role. That keeps the subscriber list off PostgREST entirely.

## Behaviour worth knowing

- **Re-signup is not an error.** A known address returns `200` with `alreadyOnList: true` and gets the "you're already in" variant, so the form shows one success state either way.
- **Re-signing up after unsubscribing opts you back in** — it's an explicit action by the person.
- **A honeypot field (`company`) is silently dropped.** Bots get a `200` and nothing is stored.
- **Email failure never costs a signup.** The row is committed first; sends are `allSettled` and only logged on failure.
- **Position** (`#128 in line`) is counted over live subscribers, breaking ties on `(created_at, id)` so signups sharing a transaction timestamp still get distinct spots.

## Live

Everything runs on the **platform** Supabase project, `bugsha-dev` (`fxjvxmuporiwpqalbddv`),
the same database the Expo apps use. The waitlist moved there on 2026-09-14 from the
original `Bugsha` project (`qrmyhruvnqmjwxcnkocj`), which is paused and should stay paused.

| Piece | State |
| --- | --- |
| `public.waitlist` + `waitlist_position()` + `public.partner_request` | applied as migration `20260914090455_waitlist_and_partner_request` |
| `public.partner_invite_code`, `app.check_partner_code`, code-gated `app.submit_application`, `app.ops_*_partner_*` | applied as migration `20260914094502_partner_invite_codes` |
| Code-email trigger, Vault hook secret, `app.ops_resend_partner_code` | applied as migration `20260914095840_partner_code_email` |
| `partner-code-email` | deployed, `verify_jwt: false` — authenticates the database's call with the Vault secret; a real issue from SQL produced `200 {ok, sent: true}` and `emailed_at` on the row |
| `bugsha.app/ops` | **live** — the request queue; only accounts in `public.ops_user` get past sign-in |
| `waitlist-signup` | deployed, `verify_jwt: false` — a signup posted from inside Postgres returned `200 {ok, position: 1}` |
| `waitlist-unsubscribe` | deployed, `verify_jwt: false` |
| `partner-request` | deployed, `verify_jwt: false` — a request posted from inside Postgres returned `200 {ok, requestId}` |
| Secrets (`RESEND_API_KEY`, `WAITLIST_FROM_EMAIL`, `WAITLIST_ADMIN_EMAIL`, `PARTNER_TEAM_EMAIL`) | set on the project 2026-09-14. Leave optional secrets unset rather than empty: an empty value overrides the built-in default |
| Signups collected on the old project | not copied, by decision — they are not needed |
| Website | **live** at bugsha.app, both forms pointed at this project |

Endpoints:

```
https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/waitlist-signup
https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/waitlist-unsubscribe?token=…
https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/partner-request
https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/partner-code-email   (database → function only)
```

Set the secrets once (the values live in the old project's Edge Function secrets):

```
supabase link --project-ref fxjvxmuporiwpqalbddv
supabase secrets set --env-file .env
```

`verify_jwt` is off on all three by design — they are public endpoints hit by anonymous
visitors, and each implements its own protection (validation + honeypot, an unguessable
token on unsubscribe). The project's migration history now carries two versions that
this repo authored; copy both files into `bugsha-platform/supabase/migrations/` so the
platform repo matches the database:

```
supabase/migrations/20260914090455_waitlist_and_partner_request.sql
supabase/platform/20260914094502_partner_invite_codes.sql
supabase/platform/20260914095840_partner_code_email.sql
supabase/platform/20260914110851_partner_code_client_support.sql
supabase/platform/20260914111830_partner_code_status_history.sql
supabase/platform/20260914133248_client_surface.sql
```

Done on 2026-09-14: the six files sit in `bugsha-platform/supabase/migrations/`, and branch
`claude/partner-code-gate` in that repo carries the full screen pass — consumer (every order
state, restriction, deletion undo, promo, quiet hours, pickup QR), partner (code-gated join,
onboarding status hub, QR redeem with late hand-over, schedules, branch pause, quality flags
and disputes) and the ops console (every S-O screen wired to the platform RPCs).

### Still to do

**1. Attach `bugsha.app`.** The site is live at
[bugsha.vercel.app](https://bugsha.vercel.app) from the `bugsha` Vercel project
(linked to this repo, `main` → production, root directory `site/`). The domain
still has to be added to that project: **Vercel → bugsha → Settings → Domains →
Add `bugsha.app`**. No API tool exposed here can do it.

**2. Point the old marketing bundle at the endpoint** (only if you keep serving it). The shipped waitlist panel
(`DownloadSection` in `ui_kits/marketing/site-ui.jsx`) is a stub — its submit
handler flips local state and throws the address away:

```js
const submit = event => { event.preventDefault(); if(email.trim()) setDone(true); };
```

`web/DownloadSection.jsx` is a drop-in replacement: same markup, class names and
copy, so `site.css` needs no change — only the handler is wired. Paste it over the
original function, and set the endpoint before the bundle runs:

```html
<script>window.BUGSHA_WAITLIST_ENDPOINT = 'https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/waitlist-signup';</script>
```

If you'd rather not touch the bundle at all, `web/waitlist.js` attaches to any
`form.waitlist-form` in the capture phase and does the same job.

**3. Tighten CORS.** `WAITLIST_ALLOWED_ORIGINS` is unset, so any origin may post.
Set it to the real domains once they are final.

Emails link to `https://bugsha.app`, so those links start resolving as soon as the
domain is attached.

## Reproducing the database from scratch

```bash
supabase link --project-ref fxjvxmuporiwpqalbddv
supabase db push
```

## Emails

Previews live in `emails/preview/` (`.html`, `.txt` and `.png` for each). Regenerate
after any copy change:

```bash
npm run preview:emails
```

Templates are dependency-free ESM shared by Deno (the edge functions) and Node (the
preview script), so the copy has exactly one home. Voice follows the live site:
Bugsha has not launched anywhere yet, it is opening in Kuwait and Egypt, and
waitlist members get access first — no claims of history, no commercial terms.

Every subscriber email carries a plain-text alternative, a hidden preheader and a
working unsubscribe link.

## Verified against the deployed endpoint

Driven from inside Postgres (this container cannot reach `supabase.co`), then the
test rows were deleted:

| Case | Result |
| --- | --- |
| New signup, `area: Kuwait` | `200 {ok, alreadyOnList: false, position: 1}` |
| Repeat, different case + `area: Egypt` | `200 {alreadyOnList: true}`, one row, area updated |
| Second person | `position: 2` |
| `x@y` / `nope@localhost` | `400` "That email address doesn't look right." |
| No email | `400` "Please enter your email address." |
| Honeypot filled | `200`, **no row written** |
| Unsubscribe, valid token | `200` "You're off the list", status flipped |
| Unsubscribe, unknown / malformed token | `404` / `400` |
| Re-signup after unsubscribing | status back to `subscribed` |
| Unsubscribe page renders | violet + Archivo present, no `undefined` |
| **anon key `SELECT` on `waitlist`** | **`401` permission denied** |
| **anon key `INSERT` on `waitlist`** | **`401` permission denied** |

Supabase security advisors report no warnings. The one remaining INFO notice —
"RLS enabled, no policies" — is the intended design, not an oversight: the table is
deny-by-default and reachable only through the service role.

Also verified in a headless browser against a mock endpoint, using the real
`site.css` from the design system: `web/preview/*.png` shows the form, its inline
error state, and the success swap with the Kerchief mark.

## Choices made

- **Resend** for delivery — the common pairing with Supabase Edge Functions, no SDK needed. Changing provider means rewriting `sendEmail` in `_shared/email.ts` and nothing else.
- **Single opt-in.** Someone who typed their address into a waitlist form has opted in; a confirm-click step would cost signups. The schema has room for double opt-in later.
- **`area`, not `city`.** The form's "Where" select is country-level (Kuwait / Egypt). `area` is honest now and still fits city-level values when launch sequencing gets finer.
