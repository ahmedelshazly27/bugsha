# Bugsha

Landing-page waitlist (capture + transactional email) and the Bugsha design system.

A signup goes: **waitlist panel → `waitlist-signup` edge function → `public.waitlist` → confirmation email to the subscriber + notification to the team.**

```
.claude/skills/bugsha-design/    the design system, installed as a skill
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
site/                            the Next.js website source (no waitlist — see below)
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

**It is not what is deployed at `bugsha-launch`, and it has no waitlist.** Its
`DownloadSection` (`site/app/components/SiteUI.tsx`) is the older app-store panel
behind `id="download"`; the string "waitlist" does not appear anywhere in it. The
live pre-launch site is the marketing recreation in
`.claude/skills/bugsha-design/ui_kits/marketing/`, which is where the waitlist panel
and `site.css` actually live — and that is what `web/DownloadSection.jsx` targets.

Porting the waitlist into this Next.js source is a separate job; ask if you want it.

The personal photos that shipped alongside the source in the upload were not
committed.

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

Applied to the **Bugsha** project (`qrmyhruvnqmjwxcnkocj`) in the
`ahmedelshazly2345-gmailcom's projects` org:

| Piece | State |
| --- | --- |
| `public.waitlist` + `waitlist_position()` | applied (4 migrations) |
| `waitlist-signup` | deployed, v4, `verify_jwt: false` |
| `waitlist-unsubscribe` | deployed, v4, `verify_jwt: false` |
| Secrets (`RESEND_API_KEY`, …) | set — sending verified against `delivered@resend.dev` |
| Landing page wiring | **not done** — see below |

Endpoint: `https://qrmyhruvnqmjwxcnkocj.supabase.co/functions/v1/waitlist-signup`

`verify_jwt` is off on both by design — they are public endpoints hit by anonymous
visitors, and each implements its own protection (validation + honeypot on signup,
an unguessable token on unsubscribe).

### Still to do

**1. Point the landing page at the endpoint.** The shipped waitlist panel
(`DownloadSection` in `ui_kits/marketing/site-ui.jsx`) is a stub — its submit
handler flips local state and throws the address away:

```js
const submit = event => { event.preventDefault(); if(email.trim()) setDone(true); };
```

`web/DownloadSection.jsx` is a drop-in replacement: same markup, class names and
copy, so `site.css` needs no change — only the handler is wired. Paste it over the
original function, and set the endpoint before the bundle runs:

```html
<script>window.BUGSHA_WAITLIST_ENDPOINT = 'https://qrmyhruvnqmjwxcnkocj.supabase.co/functions/v1/waitlist-signup';</script>
```

If you'd rather not touch the bundle at all, `web/waitlist.js` attaches to any
`form.waitlist-form` in the capture phase and does the same job.

**2. Tighten CORS.** `WAITLIST_ALLOWED_ORIGINS` is unset, so any origin may post.
Set it to the real domains once they are final.

**3. Check `bugsha.app` actually serves the site.** Emails now link to
`https://bugsha.app` (the `WAITLIST_SITE_URL` default), but that domain is not
attached to the `bugsha-launch` Vercel project — it only has its two `vercel.app`
hostnames. Until it is, the "See how Bugsha works" button points nowhere.

## Reproducing the database from scratch

```bash
supabase link --project-ref qrmyhruvnqmjwxcnkocj
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
