# Bugsha — consumer app (the shipping identity)

**Identity:** Violet `#5B21B6` + white, and nothing else. The Kerchief mark (`assets/mark.svg`) — a square of cloth with one corner turned back — plus the wordmark in Archivo 600 / Alexandria for Arabic. Both come from the `Logo` component.

**This kit is a working click-through of the whole app, at every stage**, reconciled against the platform database (see `../../COVERAGE.md` for the screen-by-screen map and what was verified). Files: `data.jsx` (marketplace copy + fixtures), `screens.jsx` (marketplace screens), `stages.jsx` (everything around it: first run, auth, order states, wallet, saved kitchens, disputes, account), `kit.jsx` (shell + stage machine).

## Toolbar

- **English / العربية** — flips the whole layout to RTL. Arabic is Kuwaiti register.
- **KW / EG** — market. Changes currency (KD 3 decimals / EGP 2), payment methods (KW: KNET, Apple Pay, card · EG: card, mobile wallet, InstaPay, Fawry, cash), VAT (EG 14 %), cities, and the Arabic locale (`ar-KW` / `ar-EG`).
- **Light / Dark**, **First run / Signed in**.
- Simulations: **offline**, **restrict account** (reservations paused), **wallet credit**, **partner cancels**, **miss pickup**, **Reset**.

## Stages

1. **S-C-001 Language** → **S-C-002 Intro** (three slides, skippable) → **S-C-003 Sign in** (email) → **S-C-004 8-digit code** (resend timer, wrong-code state — `00000000` is wrong).
2. **S-C-006 Complete profile** — first name, country, city, optional phone. A city that is still on the waitlist routes to **S-C-005 City waitlist**.
3. **S-C-007 Dietary** — flags + allergen acknowledgement, skippable. Then the loading skeleton and the location sheet.
4. **Browse · Search · Map · Kitchen profile** — prices and pins in the market's currency; the heart follows a kitchen.
5. **S-C-012 Bag detail + payment** — quantity capped at bags remaining, the market's methods, wallet credit toggle, promo code (`FIRSTBAG` works), subtotal / VAT / total; a restricted account sees why it cannot reserve.
6. **S-C-020 Order — every state**: `held` (10-minute hold with PSP redirect, Fawry reference, or cash note; release), `reserved` (code, QR, slide-to-redeem, running-late, cancel with refund destination and cutoff), `redeemed` (impact, review with tags/text/photo, report a problem), `no_show`, `cancelled_partner` (refund + goodwill credit), `refunded` (destination and timing per method).
7. **S-C-021 Receipt**, **S-C-022 Report a problem** (category, statement, photos, illness detail → case reference).
8. **Me** — rescue log, **S-C-030 Wallet** (expiring credits), **S-C-031 Saved kitchens** (notify toggle), **S-C-040 Profile + dietary**, **S-C-041 Notifications** (categories, quiet hours, channels), sign out, **S-C-042 Delete account** (30-day clock with undo).

Structure follows the conventional pattern for this category — it is not a copy of any competitor's interface.
