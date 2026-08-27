# Bugsha — consumer app (the shipping identity)

**Identity:** Violet `#5B21B6` + white, and nothing else. The Kerchief mark (`assets/mark.svg`) — a square of cloth with one corner turned back — plus the wordmark in Archivo 600 / Alexandria for Arabic. Both come from the `Logo` component.

**This kit is a working click-through**, not a storyboard. Real state, real transitions:

1. **Browse** — violet header with lockup, location, search and filter control; category chips that toggle; list ⇄ map segmented control; "Tonight near you" grid and "Closing soon" compact rows.
2. **Filters** — bottom sheet with type chips, max distance, max price.
3. **Bag detail** — cover, rating, listing timestamp, pickup window, distance, contents copy, quantity stepper that caps at bags remaining, and price that recalculates with quantity.
4. **Payment** — KNET selected by default; pressing pay enters the redirect state ("Opening your bank…") for ~1s, then issues an order.
5. **Order + redemption** — the code screen with slide-to-redeem, a reserved countdown, a running-late banner, and cancel (which opens a confirm dialog and refunds).
6. **Post-pickup** — impact stats and a star review that acknowledges the rating.

Also live: the Orders tab badge appears while a bundle is active, toasts confirm each transition, EN ⇄ ع flips the whole layout to RTL, and Light ⇄ Dark switches the theme. **Reset** clears state.

Structure follows the conventional pattern for this category (location header, search, chips, cards carrying pickup window / distance / rating / price-against-worth) — it is not a copy of any competitor's interface.
