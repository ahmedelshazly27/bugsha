# Bugsha (بقشة) — design system

A two-sided marketplace for Kuwait: restaurants, bakeries, cafés and co-ops sell end-of-day surplus as discounted **surprise bags**, reserved in-app and collected in person inside a fixed pickup window. Two surfaces share this system — a **consumer app** (mobile-first, iOS/Android) and a **partner console** (mobile + tablet web).

**The product is named Bugsha (بقشة)** — the old Kuwaiti/Khaleeji word for a bundle wrapped in cloth. It is literally what the product is: a wrapped surprise you untie at home. The identity is a **mark plus wordmark**: the mark is a cloth bundle gathered at the neck and knotted, drawn in the same stroke language as the icon set (`assets/mark.svg`); the wordmark is live type — Instrument Serif in Latin, Amiri in Arabic — never an image, so it stays crisp and localisable. Both ship as the `Logo` component. See *Name & identity motif* below.

## Sources

This system was authored from a written brief only — **no codebase, Figma file, deck or existing brand was provided**, and the brief deliberately withheld all tokens. Everything here (colour, type, spacing, radii, motion, voice) is proposed, not recovered. If a codebase or Figma file exists, attach it and this system should be reconciled against it before use.

External sources actually used:
- **Icons** — [Lucide](https://lucide.dev) (ISC), copied into `assets/icons/` from `github.com/lucide-icons/lucide@main`.
- **Fonts** — Google Fonts, loaded by URL in `tokens/fonts.css` (see *Font substitution*).

## Identity — settled

**Colour: two, and only two.** Violet `#5B21B6` and white. White is always present — it is the wordmark, the mark and the light half of every surface. Violet is the only brand colour: the header field, primary actions, the countdown, the price. Supporting neutrals are a violet-tinted ink ramp (`--ink-900 #17141F` → `--ink-100`), not a second hue. **Semantic states resolve to violet or ink only** — fresh/info to ink, time/urgent/deal to violet at increasing depth. Never introduce a third colour; if a state needs more presence it gets more weight or a deeper tint.

**Mark: the Kerchief.** `assets/mark.svg` — a square of cloth rotated to a diamond with one corner turned back, cut as a single even-odd path so the fold is a true hole and the mark works on any background. It comes straight out of the name: بقشة is a square of cloth whose corners are drawn up, knotted, and untied at home. Straight edges only, no curves, no rounded corners.

**Wordmark: live type, never an image.** Archivo 600 at -0.03em in Latin, Alexandria in Arabic, with an optional ™. Both ship as the `Logo` component (`horizontal` / `stacked` / `mark`), so the lockup stays crisp and localisable.

**Numerals: Western digits everywhere, in both languages.** Prices, times, distances, order codes and counts are set as `0–9` in Arabic as well as English — this is how Kuwaiti digital products and KNET receipts behave, it keeps a mixed-script line legible, and it means a partner reading a code aloud and a consumer reading it off the screen never disagree. Arabic-Indic digits are not used anywhere in the product, including prose. Numeric spans carry `.ds-numeric` and `dir="ltr"` so they stay left-to-right inside RTL text.

**Lockup rules.** One colour only — white on violet, or violet on white. Clear space equals the mark's notch width. Minimum 14px mark-only, 24px with wordmark. Never recolour mark and wordmark differently, never outline, never place a fill behind the notch.

**Why violet.** The surplus category is teal and eco-green (Too Good To Go, Olio, Karma) and in Kuwait green reads NGO rather than F&B. Violet is vibrant enough to feel like a product people screenshot at 9pm, deep enough to hold white at 7.6:1, unclaimed in Kuwaiti F&B, and it stays credible on a partner dashboard where a franchise director has to trust it.

**How this was chosen.** Twelve colour directions and roughly thirty mark concepts were explored — see `guidelines/explore-identity.html` (identities with in-app screens), `explore-mark.html` and `explore-colour.html`. Those boards are kept as the decision record, not as live options.

## The core design problem## The core design problem

Discounted end-of-day food must feel like **a smart win, never charity or scraps**. Every rule below is downstream of that:

- Price is stated as a *win* (what you pay, next to what it's worth), never as a markdown from a clearance bin.
- Freshness and operational tightness are first-class UI: listing timestamp, window close, attestation and licence are on the surface, not in fine print.
- Sustainability is an *after-effect* shown post-pickup ("12 meals rescued"), never the sell and never guilt.
- Urgency comes from a real clock, never from manufactured scarcity.

## The four variants

Four complete directions. They are chosen with `data-variant` on `<body>`; `data-theme="dark"` layers on top. Each ships its own colour, type pairing, radii, elevation and motion character — the component code is identical across all four.

| Direction | `data-variant` | Point of view | Type |
|---|---|---|---|
| **Bugsha** ← *shipping* | `:root` (none) | بقشة is a square of cloth you tie up and untie at home. A bundle isn't surplus being cleared, it's a kitchen wrapping up what it made today. Violet + white, two colours, no third hue. | Archivo + Alexandria |
| **Cold Chain** *(retained exploration)* | `cold-chain` | Trust is the conversion lever: the app looks like the operations system behind the food — timestamped, exact, refreshed in front of you. | IBM Plex Sans + Plex Sans Arabic |

Full write-ups live in each kit's README (`ui_kits/<variant>/README.md`).

---

## CONTENT FUNDAMENTALS

**Voice.** Warm, direct, lightly playful. Short sentences. Concrete over clever. The app talks like a good shopkeeper, not a brand: it tells you what you get, when to come, and what happens if you're late.

**Arabic is Kuwaiti, not MSA.** Both surfaces and both pitch decks are written in Gulf-Kuwaiti register, not translated Modern Standard: `شلون` not `كيف`, `مو الحين` not `ليس الآن`, `على طول` not `تلقائيًا`, `هالبقشة` not `هذه الحقيبة`, `الشباب` for the counter team, `شغّال` / `مسكّر` for branch state, `بالعافية` at redemption. Verbs stay colloquial (`دوّر`, `خبّرهم`, `وريهم`, `سلّمها`, `وقّف`) and the copy uses the ها- prefix and dropped case endings a Kuwaiti reader expects. MSA is permitted in exactly one place: legal and refund terms.

**Person.** Second person for the user ("your code", "collect by 22:30"). First person plural only for commitments the company makes ("we'll refund to KNET in 3 working days"). Never "I". Partner side is imperative and impersonal ("Publish 6 bags").

**Casing.** Sentence case everywhere. Mono meta labels may be uppercased with tracking; sentences never are. Never title case.

**Numbers.** Dinar always three decimals: `KD 2.000`. Times are 24-hour with an en dash: `21:30–22:30`. Distances one decimal + `km`. Order codes `KW-` + four digits.

**Emoji.** None. Not in UI, not in push notifications. Meaning is carried by icon, tone token and copy.

**Never say:** leftovers, expired, unsold waste, "help us fight food waste" as a headline, "hurry, only 1 left!!". **Do say:** surprise bag, tonight's bags, collect between, worth KD 6.500, listed 21:04.

### Bilingual policy

Arabic is a **designed language, not a localisation layer**. Copy is written natively in each language in a Gulf-neutral register — Arabic strings here are written, not translated ("شنو داخل الكيس؟", not a literal rendering of "What's inside").

- **Numerals:** Western digits in both languages, always — see the identity section above. Arabic-Indic digits are not used anywhere in the product, including prose, so a code read aloud by staff and a code read off the screen never disagree.
- **Mixed-script lines:** Latin brand names stay Latin inside Arabic sentences and never get transliterated. Wrap them so the bidi boundary falls at a space, never mid-phrase.
- Arabic renders at `0.96×` size and `1.18×` line-height of its Latin counterpart (`--arabic-size-scale`, `--arabic-line-scale`).

### The ten strings

| Moment | EN | AR |
|---|---|---|
| Browse | Dropping now — bags going live in the next hour | ينزل الحين — أكياس تنزل خلال الساعة الجاية |
| Reserve | Reserve for KD 2.000 | احجز بـ ٢٫٠٠٠ د.ك |
| Confirm | Reserved. Collect between 21:30 and 22:30. | تم الحجز. استلم بين ٢١:٣٠ و ٢٢:٣٠. |
| Running late | Running late? Tell the partner from here. | متأخر؟ خبّر الشريك من هني. |
| Sold out | All bags claimed tonight. New bags usually drop around 8pm. | خلصت أكياس الليلة. عادة تنزل أكياس جديدة حوالي ٨ المساء. |
| Redeemed | Collected. Enjoy it. | تم الاستلام. صحتين! |
| Review | How was the bag? | كيف كان الكيس؟ |
| Refund | Refunded to KNET — it lands within 3 working days. | رجعناها على كي‑نت — توصلك خلال ٣ أيام عمل. |
| Impact | 12 meals rescued · KD 41 kept | ١٢ وجبة أنقذتها · ٤١ د.ك وفّرتها |
| Re-engagement push | 6 bags open near Salmiya tonight | ٦ أكياس مفتوحة قرب السالمية الليلة |

---

## VISUAL FOUNDATIONS

**Colour.** Four palettes in `tokens/palette.css`; components only ever reference the semantic aliases in `tokens/semantic.css` (`--color-surface-raised`, `--color-text-secondary`, `--color-brand-primary`, `--color-fresh`, `--color-time`, `--color-time-urgent`, `--color-deal`, `--color-rating`, `--color-partner-accent`…). Every variant defines light and dark. Note that `--color-time` / `--color-time-urgent` / `--color-deal` are **text-on-tint** roles and are therefore darkened in light themes to clear 4.5:1 — the bright amber and ember live on as `--color-brand-primary` and `--color-rating`. Maximum two background colours per screen: canvas and raised.

**Type.** One display face and one body face per variant, each with a deliberate Arabic partner. Scale in `tokens/typography.css`, from `display-xl 40/44` down to `micro 11/14`; body copy never below 15px. Money and time always use `--font-numeric` with tabular figures via the `.ds-numeric` class.

**Spacing & grid.** 4px base, `--space-100 = 8px` as the working unit. Consumer column caps at 420px; partner content at 1120px. Gutter 16px. Touch targets 44px floor, 52px for the one primary action on a screen.

**Radii.** Bugsha is deliberately tight: cards 10px, controls 8px, chips 6px, sheets 16px, images 8px. Nothing is a pill — the mark has straight edges and the UI agrees with it. (Retained explorations: Cold Chain 10px, Ticket 0px.)

**Borders.** Bugsha uses 1px hairlines (`--color-border-subtle #E7E4EE`) and near-flat elevation — a card is a hairline plus a 1px shadow, not a floating slab. (Ticket uses 1.5px solid ink plus dashed dividers.)

**Elevation.** Four soft levels (`--elevation-1..4`) built on one shadow hue. Ticket replaces shadow entirely with `--elevation-print`, a hard 3px offset. No inner shadows except the optional `--elevation-inset` hairline on dark surfaces.

**Backgrounds.** No gradients as decoration. The only permitted background treatments: the flat violet header field, and Ticket's 4px newsprint scanline. Cold Chain uses flat surfaces only. No full-bleed photography anywhere in chrome.

**Imagery.** A bundle's contents are unknown, so the system **never photographs contents**. Permitted: partner storefront/staff photography, packaging, warm out-of-focus interior crops, and the honest category plate (`CoverPlate` — a tinted panel with the category glyph) when no photo exists. Ticket uses no imagery at all. Photography direction: warm, available light, shot at the counter, shallow depth of field, no styling, no top-down flat-lays, no props, no cool-toned grading.

**`assets/photos/` are stand-ins, not final art.** Six warm out-of-focus tone plates (`tone-bakehouse`, `tone-bread`, `tone-mezze`, `tone-cafe`, `tone-coop`, `tone-night`) exist so the kits can be judged with imagery in place. They are procedurally generated blurred colour fields — deliberately abstract, since faking recognisable food photography would misrepresent the product. **Replace them with a real partner shoot before anything ships:** storefront exterior at dusk, the counter under working light, staff hands packing, and the packaging itself.

**Motion.** Four durations (80 / 140 / 200 / 320ms) plus a single 640ms `celebrate` reserved for reserve-confirmation and redeem-success — once, never looping. Bugsha uses `standard` easing at `fast` duration — quick and unfussy, no spring. (Per-variant character: spring (Night Market), ease-out (Diwaniya), precise (Cold Chain), near-instant standard (Ticket). Countdowns under 15 minutes get a 2s opacity pulse — the slowest urgency signal that still reads. `prefers-reduced-motion` collapses every duration to zero.

**Interaction states.** Hover is a background step, never opacity fading of text. Press is `scale(0.97)` plus the pressed background (`--motion-press-scale`). Focus is a 3px `--color-border-focus` ring at 2px offset — visible in both languages and never removed. Disabled is 45% opacity plus `not-allowed`; disabled never changes hue (a greyed-out food card must not read as spoiled).

**Transparency & blur.** Used in exactly two places: the modal scrim (`--color-surface-overlay`) and the scrim gradient under text laid over a photo (`--color-surface-scrim`). No frosted-glass chrome — it fails in direct sun.

**Layout rules.** Fixed elements: the tab bar (bottom, above safe area) and the sticky header on Cold Chain browse. Bottom sheets are the modal pattern on mobile; centred dialogs only for destructive or time-critical decisions. Sheets always carry a visible close control in addition to drag dismissal.

**Cards.** `--radius-card` + `var(--border-card)` hairline + `--elevation-card`. Content padding `--space-150/200`. Cover plates run edge to edge with 0 radius inside the card.

---

## ICONOGRAPHY

- **Set:** [Lucide](https://lucide.dev), 24px grid, round caps and joins. **Substitution flag:** no icon set was supplied with the brief; Lucide was chosen as the closest match to the stroke language this system needs. Swap it if a real set exists.
- **Location:** `assets/icons/*.svg` (50 glyphs, copied locally — not CDN-linked). Render them through the `Icon` component, which inlines the SVG so it inherits `currentColor` and the per-variant stroke width.
- **Stroke:** `--icon-stroke` — Bugsha 2, Cold Chain 1.75, Ticket 2.25.
- **Fill:** stroke-only, with two exceptions — the star at a filled rating, and the heart when saved.
- **RTL mirroring:** flips — arrows, chevrons, navigation, slide-to-redeem, progress. Never flips — clock faces, timers, media controls, logos, the KNET mark, phone numbers, star ratings. Apply via the `mirror` prop (`.ds-icon-directional`).
- **Emoji:** never used. **Unicode as icons:** never — no `→`, `★`, `✓` in copy; use the glyph.
- **Logo:** the Bugsha mark (`assets/mark.svg`) — a knotted cloth bundle at 48×48, 3.2 stroke, round caps, deliberately asymmetric so it reads as an object rather than a face. Use the `Logo` component: `horizontal` in app headers, `stacked` for splash/covers, `mark` for favicons, tab bars and the partner console. One colour only, clear space equals the knot height, minimum 20px mark-only / 28px with wordmark. Never recolour mark and wordmark differently, never outline it, never set it over a busy photo without a scrim.

## Font substitution

No font files were provided. All four pairings are Google Fonts, loaded by URL in `tokens/fonts.css` rather than shipped as binaries. **If licensed brand faces exist, send them** — the pairings are chosen for Latin/Arabic weight and rhythm harmony and would need re-tuning against a real face.

---

## Index

**Root**
- `styles.css` — the single entry point consumers link. `@import` lines only.
- `thumbnail.html` — homepage tile (Bugsha lockup on violet).
- `SKILL.md` — Agent Skills manifest.
- `readme.md` — this file.

**Tokens** (`tokens/`) — `fonts.css`, `palette.css` (raw ramps, four variants), `typography.css`, `space.css`, `elevation.css`, `motion.css`, `semantic.css` (the aliases components use, plus every variant + dark scope), `base.css` (reset, focus ring, RTL mirroring helpers).

**Components** (`components/`)
- `brand/` — Logo (mark + wordmark lockups)
- `core/` — Icon, Button, IconButton, Chip, Badge, Card, Input, SegmentedControl, Stepper, RatingStars, TabBar, BottomSheet, Dialog, Toast, Banner, Skeleton, EmptyState, Switch, ListRow
- `commerce/` — BagCard, CoverPlate, PriceTag, CountdownPill, PickupWindow, MapPin, ImpactStat, RedemptionCode, PaymentMethodRow
- `partner/` — OrderRow, ListingStep, PayoutCard, LedgerRow, PartnerStat

Each has a `.d.ts` props contract and a `.prompt.md` usage note; each directory has an `@dsCard` showcase.

**Templates** — `templates/partner-pitch/PartnerPitch.dc.html` (English) and `templates/partner-pitch-ar/PartnerPitchAr.dc.html` (full Arabic RTL mirror, not a translation layer: Alexandria throughout, Arabic-first headlines, mono/Latin retained only for order codes, prices and timestamps). The restaurant-facing pitch deck: the nightly write-off, the 60-second listing flow, illustrative unit economics, the compliance ledger, the sustainability story, onboarding timeline, and real app screens from `assets/screens/`. Bilingual throughout (English with Arabic on every key claim). Contact details and commercial terms are placeholders.

**App screens** (`assets/screens/`) — consumer: `browse-en`, `detail-en`, `code-en`, `browse-ar`, `detail-ar`, `code-ar`; partner portal: `partner-tonight-en/-ar`, `partner-list-en/-ar`, `partner-ledger-en`, `partner-analytics-en`. All captured from the live kits at 2×. Regenerate them whenever the kit changes; the pitch deck references them directly.

**UI kits** (`ui_kits/`) — **`marketing/` is the public website**, a faithful recreation of the live Next.js site the client supplied (`uploads/Bugsha-Website-Repo-v41/`): four pages (home, how it works, for businesses, our impact) behind a hash router, with `site.css` copied verbatim from the repo's `app/globals.css` and all photography copied into `assets/site/`. Its scroll scenes — cookie reveal, bag unpack, pinned app story, shared-table scale — are ported line for line from `app/page.tsx`. Two things are deliberately corrected against the repo, which shipped placeholder identity: the brand mark is the Kerchief rather than the repo's CSS-drawn rotated square, and the typeface is Archivo rather than Inter. Both should be fed back into the repo. The site is also written **pre-launch for two markets, Kuwait and Egypt** — Bugsha has not opened anywhere yet. Waitlist and partner-enquiry conversions, no cumulative statistics, no invented targets/dates/commercial terms, currency-free pricing, per-Bugsha arithmetic instead of invented history; see its README for what to swap back at launch. English only, because the repo has no Arabic route. See its README for the file-by-file source map. **`bugsha/` is the real one**: a fully click-through consumer app in the shipping identity. Every tab works: **Browse** (category chips, sorted list, closing-soon rail, how-it-works card), **Search** (live filtering by partner), **Bag detail** (quantity that recalculates price and caps at bags remaining, dietary chips, directions), **Payment** (KNET redirect state, Apple Pay), **Order + redemption** (code, slide-to-redeem, running-late banner that resolves, cancel-with-refund dialog), **Post-pickup** (impact stats, star review with free-text), **Map** (selectable price pins driving a linked card), **Orders** (active / past tabs with review history), **Me** (rescue log, language, appearance, notifications, payment methods, help). Plus filters and location sheets, an offline banner toggle, toasts, EN ⇄ العربية, light ⇄ dark, and Reset. Split across `data.jsx` (copy tables + fixtures), `screens.jsx` and `kit.jsx`. `cold-chain/` and `ticket/` are retained explorations that render browse / bag detail / redemption side by side. **`partner/` is the partner portal** — the restaurant-facing web dashboard in the shipping identity, seven working views: **Tonight** (live stats, attestation banner, orders board where Hand over flips a row to collected, pausable listing), **List a bundle** (the 60-second flow with customer preview), **My bundles** (saved presets per branch), **Payouts** (next transfer, bank on file, weekly gross/commission/net history), **Inspection log** (the compliance ledger with period + branch filters and CSV export), **Reviews** (rating summary + rows, framed as quality signal and inspection evidence), **Analytics** (sell-through, rescue volume, average price, best night, disposal cost avoided, per-branch table), **Branches** (branch states, staff, notification switches, language). Listings are real state: publish creates one, Edit opens a full editor (bilingual name, price, worth, quantity, window, nights, photo — library or upload), and pause/remove/hand-over all mutate the board. Split across `data.jsx`, `screens.jsx`, `kit.jsx` — see its README.

**Guidelines** (`guidelines/`) — 19 specimen cards: four palettes, semantic roles light + dark, urgency ladder, type scales, Arabic pairing, spacing, radii, touch targets, elevation, motion, iconography, RTL mirroring, imagery policy.

**Assets** — `assets/icons/` (50 Lucide glyphs), `assets/mark.svg` (the Kerchief mark), `assets/photos/` (6 placeholder tone plates — used by the app + partner kits, replace with a real shoot), and **`assets/site/` — the real brand photography and cutouts** from the website repo: six shot images (café at dusk, shared table, bakery counter, pickup scene, partner handover, impact kitchen), the cookie, the purple bugsha bag, six food cutouts (baguette, flatbread, croissant, coffee, salad, orange), the three app screens, two portal screens, and the favicon. These are the only genuine product photographs in the system — prefer them over the tone plates in any new marketing work.

### Intentional additions

Because no source defined a component inventory, the set above was authored from the brief. Additions beyond a standard primitive set — `CoverPlate`, `CountdownPill`, `PickupWindow`, `RedemptionCode`, `LedgerRow`, `ListingStep` — exist because the brief names them as required patterns (imagery policy, urgency-without-anxiety, redemption, compliance ledger, 60-second listing).
