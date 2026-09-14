# Partner portal — UI kit

The restaurant-facing surface. Tablet/desktop web, used by a shift manager standing up at 22:45 and read cold by a franchise ops director or a PAFN inspector.

**Files** — `index.html` (mount), `data.jsx` (copy tables EN + Kuwaiti Arabic, fixtures), `screens.jsx` (the original console views), `onboarding.jsx` (sign-in, code-gated sign-up, request a code, one screen per onboarding status), `console.jsx` (redeem, schedules, cash, quality, staff, documents, branch settings), `kit.jsx` (stage machine, role-aware shell). See `../../COVERAGE.md` for the screen-by-screen map against the platform.

## Toolbar

- **English / العربية**, **KW / EG** (documents, contract terms, cash view and phone formats follow the market), **role** (`owner · manager · staff · accountant` — the navigation is gated per role), **stage** (signed out, or jump to any `onboarding_status`, or the active console), **Expire permit** (document-expired state: new listings paused), **Quality hold**.

## Getting in — a partner account opens only with a code from Bugsha

| ID | Screen |
| --- | --- |
| P-000 | **Sign in** with the kitchen's email and an 8-digit code (`00000000` is the wrong-code state). An email that already belongs to a kitchen lands in its console or status hub. |
| P-001 | **Join Bugsha as a partner** — an email with no kitchen yet gets two doors: *I have a partner code* / *Request a partner code*. |
| P-002 | **Enter your partner code** — `BG-XXXX-XXXX`; valid (pre-fills the kitchen), invalid, expired (`BG-7K2M-9Q4A`), already used (`BG-USED-0000`). |
| P-003 | **Application** — the `app.submit_application` field set, pre-filled from the code: legal name, trading name, categories, contact, city, branches, surplus per night, referral. |
| P-004 | **Request a partner code** — the same form without a code; "request sent, reply within two working days". Mirrors the website form. |
| P-010 | **Status hub** — one screen per `onboarding_status` with a 7-step progress line and the next action: `applied` → upload documents; `documents_pending` (statuses per document, rejection reasons, re-upload); `under_review`; `approved` / `contract_pending` → review and accept the contract; `contract_signed` / `store_setup` → branch details, map pin, weekly + Ramadan hours; `first_listing_pending` → publish a bundle and the account activates on its own; `active`; `rejected` (reason); `suspended` (reason, until, existing orders honoured). |
| P-011 / 012 / 013 | **Documents**, **Contract**, **Branch setup** — the three onboarding tasks, also reachable from the console. |

## Console views

## Views

| | Screen | What it proves |
|---|---|---|
| 1 | **Tonight** | Live board with the night's listings — each row carries its photo, sell-through, Edit, Pause and Remove. Four stats, the attestation banner, and per-order **Hand over** — tap and the row flips to collected with a toast. Listing can be paused, which shows the warning banner. |
| 2 | **List a bundle** | The 60-second flow, and it really publishes: start from a saved bundle chip, set quantity, window, bilingual name, price, worth, photo, attestation → the listing appears on Tonight. Optionally save the settings back as a reusable bundle. Customer preview panel alongside so the manager sees exactly what the buyer sees. |
| 3 | **My bundles** | Saved presets per branch. **Add bundle** and **Edit** open the real editor: bilingual name, price, original value, quantity, window, nights it runs, and a photo (pick from the partner's library or upload a file). Delete included. **Use now** publishes it to tonight. |
| 4 | **Payouts** | Next transfer, bank on file, and weekly history with gross / commission / net and paid status. |
| 5 | **Inspection log** | The compliance ledger: order, listed, window end, collected, attested — filterable by period and branch, CSV export. This is the screen a regulator sees. |
| 6 | **Reviews** | Rating summary plus review rows. Framed in-product as quality signal *and* inspection evidence. |
| 7 | **Analytics** | Sell-through, rescue volume, average price, best night, disposal cost avoided, meals and kilos diverted, and a per-branch table. Operations numbers only — the publishable sustainability claim and co-branded marketing assets live in the pitch decks, not here. |
| 8 | **Branches** | Branch list with live/closed state, staff on shift, notification switches, language — plus **branch settings**: pause reservations with a reason, resume, opening and Ramadan hours. |
| 9 | **Redeem** | Type the last digits of a code or scan the QR; the order card shows cash due (EG), the late-grace state, already-handed-over; confirm hand-over with a 60-second undo. |
| 10 | **Schedules** | Auto-publish a saved bundle on set nights with a publish lead and Ramadan pause; add, edit, pause. |
| 11 | **Cash** (Egypt only) | Collect per cash order (or record a short amount), end-of-day reconciliation with a variance warning, cash owed to Bugsha. |
| 12 | **Quality** | Open flags with a deadline — acknowledge with what you found and what you changed; customer reports needing a partner statement; the quality-hold banner. |
| 13 | **Documents** | Every required document with status and expiry; a 30-day reminder; an expired document pauses new listings until the renewal is approved. |
| 14 | **Staff** | Invite by email with role and scope, revoke, set on shift. |

## Rules it follows

- **Density over expressiveness.** Partner side uses the same tokens but tighter: `--text-body` for rows, mono for every time and amount, no photography.
- **Numbers are mono and Western-numeral in both languages** so a code read aloud matches the screen.
- **Nothing is destructive without a second surface.** Pause is reversible from its own banner.
- **Arabic is Kuwaiti, not MSA** — `بقشة`, `شغّال`, `مسكّر الليلة`, `الشباب في هالفرع`, `سلّمها`.
- Composes only design-system components — `OrderRow`, `PartnerStat`, `ListingStep`, `LedgerRow`, `PayoutCard`, `PickupWindow`, plus core primitives.
