# Bugsha

Landing-page waitlist: capture + transactional email.

A signup goes: **landing page form → `waitlist-signup` edge function → `public.waitlist` table → confirmation email to the subscriber + notification to the team.**

```
supabase/
  migrations/20260827120000_waitlist.sql   table, constraints, RLS, position fn
  functions/
    _shared/cors.ts                        origin allowlist + JSON helper
    _shared/validate.ts                    email validation, honeypot, length caps
    _shared/email.ts                       Resend transport (swap here to change provider)
    _shared/templates/brand.js             design tokens + email shell
    _shared/templates/welcome.js           subscriber confirmation
    _shared/templates/admin-notify.js      internal new-signup ping
    waitlist-signup/index.ts               POST endpoint behind the form
    waitlist-unsubscribe/index.ts          one-click opt-out from the email footer
web/
  WaitlistForm.jsx                         React component for the site source
  waitlist.js                              vanilla drop-in for the built page
emails/preview/                            rendered previews (HTML, text, PNG)
scripts/preview-emails.mjs                 regenerates the previews
```

## Data model

`public.waitlist` — one row per email address.

| column | notes |
| --- | --- |
| `email` | `citext`, unique. Case-insensitive, so `A@b.com` and `a@b.com` are one person. |
| `city` | Optional area from the form, for launch sequencing. |
| `status` | `subscribed` / `unsubscribed` / `bounced`. |
| `unsubscribe_token` | UUID that authorises one-click opt-out without a login. |
| `source`, `referrer`, `user_agent` | Attribution for the signup. |
| `welcome_email_sent_at` | Set only after Resend accepts the message. |

RLS is **on with no policies**, and `anon`/`authenticated` are explicitly revoked. Nothing can read this table over the public API — every write goes through the edge function with the service role. That keeps the subscriber list off PostgREST entirely.

## Behaviour worth knowing

- **Re-signup is not an error.** A known address returns `200` with `alreadyOnList: true` and gets the "you're already in" variant, so the form shows one success state either way.
- **Re-signing up after unsubscribing opts you back in** — it's an explicit action by the person.
- **A honeypot field (`company`) is silently dropped.** Bots get a `200` and nothing is stored.
- **Email failure never costs a signup.** The row is committed first; sends are `allSettled` and only logged on failure.
- **Position** (`#128 in line`) is counted over live subscribers via `waitlist_position()`.

## Live

Applied to the **Bugsha** project (`qrmyhruvnqmjwxcnkocj`) in the
`ahmedelshazly2345-gmailcom's projects` org:

| Piece | State |
| --- | --- |
| `public.waitlist` + `waitlist_position()` | applied (3 migrations) |
| `waitlist-signup` | deployed, v1, `verify_jwt: false` |
| `waitlist-unsubscribe` | deployed, v1, `verify_jwt: false` |
| Secrets (`RESEND_API_KEY`, …) | **not set** — see below |
| Landing page wiring | **not done** — see below |

Endpoint: `https://qrmyhruvnqmjwxcnkocj.supabase.co/functions/v1/waitlist-signup`

`verify_jwt` is off on both by design — they are public endpoints hit by
anonymous visitors, and each implements its own protection (validation +
honeypot on signup, an unguessable token on unsubscribe).

### Still to do

**1. Set the email secrets.** Until `RESEND_API_KEY` is set, signups are stored
correctly and both emails are skipped with a logged warning — the endpoint still
returns `200`. Verify a sending domain in Resend, then:

```bash
cp .env.example .env    # fill in RESEND_API_KEY, WAITLIST_FROM_EMAIL, WAITLIST_ADMIN_EMAIL
supabase link --project-ref qrmyhruvnqmjwxcnkocj
supabase secrets set --env-file .env
```

Or paste them into **Project Settings → Edge Functions → Secrets** in the dashboard.

**2. Point the landing page at the endpoint.** The deployed `bugsha-launch` site
has a `.waitlist-form` that posts nowhere, and its source is not in this repo, so
this step has to happen wherever that source lives. Two options:

- Render `web/WaitlistForm.jsx` and set `VITE_WAITLIST_ENDPOINT`.
- Or drop in `web/waitlist.js`, which needs no rebuild:

```html
<script>window.BUGSHA_WAITLIST_ENDPOINT = 'https://qrmyhruvnqmjwxcnkocj.supabase.co/functions/v1/waitlist-signup';</script>
<script src="/waitlist.js" defer></script>
```

Both expect the field names `email`, `city` and `company` (honeypot).

**3. Tighten CORS.** `WAITLIST_ALLOWED_ORIGINS` is unset, so any origin may post.
Set it to the real domains once they are final.

## Reproducing the database from scratch

```bash
supabase link --project-ref qrmyhruvnqmjwxcnkocj
supabase db push
```

## Emails

Previews live in `emails/preview/` (`.html`, `.txt` and `.png` for each). Regenerate after any copy change:

```bash
npm run preview:emails
```

Templates are dependency-free ESM shared by Deno (the edge functions) and Node (the preview script), so the copy has exactly one home. Palette is lifted from the live site: purple `#5B21B6`, ink `#1b1720`, cream `#f5f0e8`.

Every subscriber email carries a plain-text alternative, a hidden preheader and a working unsubscribe link.

## Verified against the deployed endpoint

Driven from inside Postgres (this container cannot reach `supabase.co`), then
the test rows were deleted:

| Case | Result |
| --- | --- |
| New signup | `200 {ok, alreadyOnList: false, position: 1}` |
| Repeat, different case (`smoke.test@EXAMPLE.com`) | `200 {alreadyOnList: true}`, same row, city updated |
| Second person | `position: 2` |
| `nope@localhost` | `400` "That email address doesn't look right." |
| No email | `400` "Please enter your email address." |
| Honeypot filled | `200`, **no row written** |
| Unsubscribe, valid token | `200` "You're off the list", status flipped |
| Unsubscribe, unknown token | `404` |
| Unsubscribe, malformed token | `400` |
| Re-signup after unsubscribing | status back to `subscribed` |
| **anon key `SELECT` on `waitlist`** | **`401` permission denied** |
| **anon key `INSERT` on `waitlist`** | **`401` permission denied** |

Supabase security advisors report no warnings. The one remaining INFO notice —
"RLS enabled, no policies" — is the intended design, not an oversight: the table
is deny-by-default and reachable only through the service role.

Also verified locally before deploying:

- `web/preview/*.png` — the form, its inline error state, and the success swap, driven through headless Chromium against a mock endpoint using the live site's own stylesheet.
- `emails/preview/*.png` — both subscriber emails and the team notification as rendered.

## Choices made

- **Resend** for delivery — it's the common pairing with Supabase Edge Functions and needs no SDK. Changing provider means rewriting `sendEmail` in `_shared/email.ts` and nothing else.
- **Single opt-in.** Someone who typed their address into a waitlist form has opted in; a confirm-click step would cost signups. The schema has room for double opt-in later if a market requires it.
- **The area picker ships empty** (`areas={[]}` hides it). Fill in the real launch areas — the sample data uses Cairo districts as a placeholder only.
