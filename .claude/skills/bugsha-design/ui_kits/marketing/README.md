# Marketing site — UI kit

A faithful recreation of the **live Bugsha website**, built from the Next.js source the client supplied (`Bugsha-Website-Repo-v41`), not designed from scratch. Four pages, scroll-driven, with the real brand photography.

**Source of truth** — `uploads/Bugsha-Website-Repo-v41/`:

| Recreated here | From |
|---|---|
| `site.css` | `app/globals.css` — copied, minus the `@import "tailwindcss"` line (no Tailwind utilities are used in the markup), plus the two brand corrections below |
| `site-ui.jsx` | `app/components/SiteUI.tsx` — BrandMark, Arrow, Phone, ScreenPhone, CookieReveal, SiteHeader, SiteFooter, MotionProvider, DownloadSection |
| `home.jsx` | `app/page.tsx` — the home page and its three scroll scenes |
| `pages.jsx` | `app/how-it-works/page.tsx`, `app/partners/page.tsx`, `app/impact/page.tsx` |
| `app.jsx` | Next's file routing, replaced by a hash router (`#/`, `#/how-it-works`, `#/partners`, `#/impact`) |
| `../../assets/site/` | `public/assets/` — photography, bag + food cutouts, app and portal screenshots, favicon |

The scroll maths in `home.jsx` (bag bouquet timings, shared-table scene, app-story stepper) and the reveal/parallax observer in `site-ui.jsx` are ported line for line — same easings, same progress windows, same rAF scheduling and cleanup.

## Pages

**Home** — hero with parallax café photograph, phone and floating note → mission statement on cream → **cookie reveal** (155svh pin: the cookie rolls across the viewport, spinning 1080°, wiping a clip-path fill across "Good food deserves another chance") → **bag unpack** (255svh pin: six food cutouts rise out of the purple bugsha on staggered progress windows against a soft sun shape) → **app story** (300svh pin: phone screen swaps browse → detail → code as the copy blocks cross-fade) → **shared table** (215svh pin: the meal photograph scales from .72 to 1.035 while the intro line lifts away and the copy fades up) → local story → impact numbers → FAQ accordion → download panel.

**How it works** — cream hero with the pickup-scene photograph and caption card, three phone cards, four "before you pay" columns on aubergine, next-page CTA.

**Partners** — photograph-led hero, three benefit columns, dark portal section with the browser-chrome window showing the real partner console plus the inspection log inset, three model figures, violet closing CTA.

**Impact** — dark hero with the circular counter and two food cutouts, four-figure ledger, two story photographs, three principles on cream.

## Pre-launch posture

Bugsha has **not launched anywhere** — this is the first launch, across **two markets: Kuwait and Egypt**. The site is written as a launch site with two conversions: waitlist for eaters, partner enquiry for kitchens. Nothing on it claims history, and nothing states commercial terms.

- **Nav + hero CTA** are `Join the waitlist`; the secondary is `List your kitchen`.
- **`DownloadSection` is now the waitlist panel** (`#waitlist`, still exported under the old name so every page keeps working): email + country (Kuwait / Egypt), with a confirmed state. Store badges remain for recognition but read `SOON ON THE App Store` / `SOON ON Google Play` and are non-interactive (`.store-badge.is-soon`).
- **Every cumulative statistic was removed.** The repo shipped "1,284 meals rescued so far", "642 kg kept from landfill", "8 Kuwait areas live" — untrue before opening, and checkable by any partner or regulator. They are replaced by **per-Bugsha arithmetic** (~2 meals, ~0.5 kg, ~1.3 kg CO₂e, ~65% below counter price), which is defensible model maths rather than invented history. The impact page states outright that this is the first launch and nothing on it is a claim about the past, and commits to publishing running totals from launch night.
- **No invented specifics.** Earlier drafts of this page carried a launch-area list (Salmiya, Shaab…), a first-year target (100,000 meals) and partner commercial terms (no fees until launch, first placement, first-year pricing locked). None of that came from the brief, so all of it is gone. Do not reintroduce a number, a city list, a date or a commercial term that the business has not actually decided.
- **Currency-free pricing.** Because the two markets price in KD and EGP, the hero proof reads `~⅓ price — of the counter` rather than a dinar figure. Keep it that way, or split the copy per market.
- **Geography is stated as countries, not neighbourhoods** — `Opening in Kuwait & Egypt`, footer `Kuwait · Egypt`, and "our cities' kitchens" / "FROM LOCAL KITCHENS" where the repo said Kuwait.
- **FAQ opens with "When does Bugsha launch?"** and answers honestly: not open anywhere yet, signing first kitchens in both markets, opening city by city.

At launch: swap the waitlist panel for real store links, drop `.is-soon`, restore cumulative figures from the real ledger, and replace the hero chip with a live nearby count.

## Two deliberate deviations from the repo

The repo shipped placeholder brand identity; this recreation uses the settled one.

1. **The mark is the Kerchief.** The repo draws its mark in CSS — a violet rounded square rotated 45° with a white inner border and a small white diamond notched into the top edge. That is not the Bugsha mark. `BrandMark` now renders the Kerchief (the same geometry as `assets/mark.svg`: a cloth square with one corner turned back, the fold a lighter plane rather than a cut-out so it never shows a hole at 25px). `.brand-mark` is reduced to a sizing shell that sets `color` plus `--mark-fold` / `--mark-fold-o`; the `.inverse` variant flips to a white mark with the footer's own `#17121d` as the fold, since a white fold on a white mark would vanish.
2. **The typeface is Archivo.** The repo specifies `Inter`. Archivo is the settled brand face and the one every product surface uses, so the site now matches. The sheet's unusual weights (760 on the wordmark, 690 in the nav, 840 on kickers) are preserved exactly — Archivo is loaded as a variable font (`wght@100..900`) so they interpolate rather than snapping. Alexandria and IBM Plex Mono load alongside for future Arabic copy and figures. The favicon now points at `assets/mark.svg` instead of the repo's.

**Feed these two changes back into the repo** — until then, the shipped site and this recreation differ on both.

## Notes

- **Tokens.** The site sheet carries its own variables (`--violet`, `--ink`, `--cream`, `--muted`, `--line`, `--ease`) rather than importing the design system's. `--violet: #5b21b6` is identical to `--violet-700`; `--ink: #1b1720` is a hair warmer than `--ink-900: #17141F`, and `--cream: #f5f0e8` and `--violet-dark: #331064` have no design-system equivalent yet. Left as the repo has them — the repo is the shipped site.
- **English only.** The repo has no Arabic route, so this kit doesn't invent one. The consumer app and partner portal kits remain fully bilingual.
- **Reduced motion** is respected throughout — every pin collapses to a static block and every scene resolves to its end state, per the repo's media query.
