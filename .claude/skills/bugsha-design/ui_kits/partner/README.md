# Partner portal — UI kit

The restaurant-facing surface. Tablet/desktop web, used by a shift manager standing up at 22:45 and read cold by a franchise ops director or a PAFN inspector.

**Files** — `index.html` (mount), `data.jsx` (copy tables EN + Kuwaiti Arabic, fixtures), `screens.jsx` (the seven views), `kit.jsx` (sidebar shell + app).

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
| 7 | **Branches** | Branch list with live/closed state, staff on shift, notification switches, language. |

## Rules it follows

- **Density over expressiveness.** Partner side uses the same tokens but tighter: `--text-body` for rows, mono for every time and amount, no photography.
- **Numbers are mono and Western-numeral in both languages** so a code read aloud matches the screen.
- **Nothing is destructive without a second surface.** Pause is reversible from its own banner.
- **Arabic is Kuwaiti, not MSA** — `بقشة`, `شغّال`, `مسكّر الليلة`, `الشباب في هالفرع`, `سلّمها`.
- Composes only design-system components — `OrderRow`, `PartnerStat`, `ListingStep`, `LedgerRow`, `PayoutCard`, `PickupWindow`, plus core primitives.
