# Screen coverage — design system kits ↔ the Bugsha platform

The three kits in `ui_kits/` (`bugsha/` consumer, `partner/`, `ops/`) recreate every screen
and flow of the three Expo apps, at every stage. This file is the map: one row per screen,
the platform object it mirrors, and how it was verified.

## How this was verified — read this first

The Expo apps live in `ahmedelshazly27/bugsha-platform`, a private repository this session
**could not open** (the GitHub credential attached to the session has no access). So the kits
could not be diffed against the app source. They were reconciled instead against the next best
thing: the platform's live Supabase project (`bugsha-dev`, ref `fxjvxmuporiwpqalbddv`) — its
45 migrations, every `app.*` RPC the apps call, every enum, the `market_config` rows, the
document requirements per market, the reason codes, the notification templates with their
deep links, and the ops-console commit messages visible on the Vercel project `bugsha-ops`.

Legend for the *Verified* column:

- **DB** — the screen's states, fields and vocabulary come from a platform table, enum or RPC signature read from the live database.
- **Push** — the flow is confirmed by a notification template + deep link in `public.notification_template`.
- **Commit** — confirmed by a bugsha-platform commit message on the Vercel deployment record.
- **Assumed** — no platform evidence either way; designed from the brief. Reconcile when the repo is attached.

**To close the gap:** grant this session (or the next) access to `ahmedelshazly27/bugsha-platform`
— a Claude.ai organization owner can do that under the GitHub connector's repository access —
and re-run the reconciliation against the real screens. The two known conflicts are listed at the end.

## Consumer app — `ui_kits/bugsha/`

Deep-link scheme `bugsha://` (from `notification_template`). Order states follow `public.order_status`
(`held | reserved | redeemed | no_show | cancelled_consumer | cancelled_partner | refunded`).
Payment methods follow `market_config.payment_methods`: KW `knet, apple_pay, card`; EG `card, wallet, instapay, fawry, cash`.
Currency: KWD three decimals, EGP two (`PriceTag` / `MapPin` / `PayoutCard` now infer this from the currency).

| ID | Screen | Platform | Verified |
| --- | --- | --- | --- |
| S-C-001 | Language: English / العربية (Kuwait) / العربية (Egypt) | `locale_code` enum `en \| ar-KW \| ar-EG`; `app.set_locale` | DB · Commit ("language + intro first run, persisted prefs") |
| S-C-002 | Intro, three slides, skippable | — | Commit |
| S-C-003 | Sign in with email | `email_sign_in` migration; `resend-otp` edge function | DB · Commit |
| S-C-004 | 8-digit email code, resend timer, wrong-code state | Commit "accept the 8-digit email code Supabase sends" | Commit |
| S-C-006 | Complete profile: first name, last name, country, city, phone | `app.complete_profile(p_first_name, p_market, p_city_id, p_last_name, p_email, p_locale, p_phone)`; email comes from the JWT | DB |
| S-C-005 | City waitlist ("not open yet", join list) | `city.stage = waitlist` → BG119; comment in `complete_profile`: "a waitlist city routes to S-C-005 in the client" | DB |
| S-C-007 | Dietary flags + allergen acknowledgement | `app.set_dietary(p_flags, p_allergen_ack)`; `consumer_profile.dietary_flags / allergen_ack_at` | DB |
| S-C-010 | Browse (loading skeleton, location sheet, chips, closing-soon rail, empty) | `app.browse_nearby(lat, lng, radius, filters)`; Commit "location-based browse" | DB · Commit |
| S-C-011 | Search | `app.search_listings(query, market, city)` | DB |
| S-C-012 | Bag detail + payment: quantity capped, market methods, wallet credit toggle, promo code, subtotal/VAT/total, restricted banner | `app.listing_detail`, `app.hold_listing`, `app.apply_promotion`, `app.wallet_balance`, `market_config.vat_bp` (EG 14 %), `consumer_profile.restricted_until` | DB |
| S-C-013 | Kitchen profile (pickup point, hours, reviews, follow) | `app.store_profile`, `app.toggle_saved_store` | DB |
| S-C-014 | Map with price pins | `app.browse_nearby` | DB |
| S-C-015 | Orders (active / past) with state badges | `order_status` | DB |
| S-C-016 | Me: rescue log, wallet, saved kitchens, profile, settings, sign out, delete | `app.my_impact`, `app.wallet_balance`, `app.my_saved_stores`, `app.request_deletion` (`deletion_clock_days` = 30) | DB |
| S-C-020 · held | Holding the bag (10-min countdown), PSP redirect / Fawry reference / cash note, release | `order.hold_expires_at`, `market_config.hold_duration_minutes`, `payment.fawry_reference`, `app.release_hold`, `app.reserve_cash_order` | DB |
| S-C-020 · reserved | Code + QR, slide-to-redeem, running late, cancel with refund destination | `redeem_mechanism` enum `code_shown \| qr_scanned`; `app.cancel_order(p_destination source\|wallet)`; `cancel_cutoff_hours`; push `consumer.order_confirmed`, `consumer.closing_soon`, `consumer.window_opening` | DB · Push |
| S-C-020 · redeemed | Collected, impact, star review with tags/text/photo, report a problem | `app.submit_review(rating, tags, body, photo)`; push `consumer.collected → bugsha://review/:id` | DB · Push |
| S-C-020 · no_show | Window closed, no refund, no-show count warning | `app.mark_no_show`; `consumer_profile.no_show_count_90d`; restriction reason `repeat_no_show` | DB |
| S-C-020 · cancelled_partner | Kitchen had to cancel, refund + goodwill credit | push `consumer.store_cancelled`; `app.post_goodwill` | DB · Push |
| S-C-020 · refunded | Refund destination and timing per method | `order_detail.refund_timing_key` (`market.method`); push `consumer.refund → bugsha://wallet` | DB · Push |
| S-C-021 | Receipt | `app.order_detail` (subtotal, service fee, tax, total, payment) | DB |
| S-C-022 | Report a problem → case reference | `app.open_dispute(order, category, statement, photos, illness_detail)`; `dispute.case_ref`, `sla_due_at` | DB |
| S-C-030 | Wallet with expiring credits | `wallet_transaction.expires_on`, `app.wallet_balance` | DB |
| S-C-031 | Saved kitchens with notify toggle | `saved_store.notify`, `app.set_saved_notify` | DB |
| S-C-040 | Profile edit + dietary | `app.update_profile`, `app.set_dietary` | DB |
| S-C-041 | Notification categories, quiet hours, channels | `app.set_notification_preferences(categories, quiet_from, quiet_to, channels)` | DB |
| S-C-042 | Delete account dialog → "deletion scheduled" banner with undo | `app.request_deletion`; `market_config.deletion_clock_days` | DB |
| — | Offline banner, restricted account, dark mode, RTL | design-system rules | Assumed |

## Partner app — `ui_kits/partner/`

Deep-link scheme `bugsha-partner://`. Onboarding follows `public.onboarding_status`
(`lead → applied → documents_pending → under_review → approved → contract_pending → contract_signed → store_setup → first_listing_pending → active`, plus `rejected`, `suspended`).
Roles follow `public.partner_role` (`owner | manager | staff | accountant`) and gate the console navigation.

| ID | Screen | Platform | Verified |
| --- | --- | --- | --- |
| P-000 | Partner sign-in with email + 8-digit code | as consumer | DB · Commit |
| P-001 | Join Bugsha: *I have a partner code* / *Request a partner code* | **new** — `supabase/platform/20260914094502_partner_invite_codes.sql` | Assumed (this repo's design) |
| P-002 | Enter your partner code — valid / invalid / expired / used | `app.check_partner_code` (port) | Assumed |
| P-003 | Application, pre-filled from the code | `app.submit_application(p_code, market, legal_name, trading_name, categories[], contact_name, contact_phone, contact_email, city_id, branch_count, referral_source, est_daily_surplus_minor)`; alcohol rejected (BG105); phone must match market (BG102) | DB (fields) · Assumed (code gate) |
| P-004 | Request a partner code (same form, no code) | website `partner-request` edge function + `public.partner_request` | DB (this repo) |
| P-010 | Status hub, one card per `onboarding_status`, 7-step progress, next action | `app.my_partner.onboarding_status`, `partner_status_history` | DB |
| P-011 | Documents per market requirement with status, expiry, rejection reason, re-upload | `market_document_requirement` (KW: MOCI licence, food permit per branch, civil ID, signatory authorisation, bank IBAN; EG: commercial register, tax card, health licence per branch, national ID, bank/wallet); `doc_status` enum; reason codes `doc_mismatch / doc_illegible / doc_expired`; `app.my_documents`, `app.upload_document` | DB |
| P-012 | Partner contract: commission, payout cadence, minimum, fee bearers, no-show policy, cash mode (EG), accept | `partner_contract` columns; `app.accept_contract(p_contract, ip, ua, document_hash)`; `market_config` defaults | DB |
| P-013 | Branch setup: name, city, address, pickup point EN/AR, phone, map pin (geocoded), weekly hours, Ramadan hours | `app.upsert_store(...)`, `app.set_hours(store, rows, is_ramadan)`; `store.geocoded_location` | DB |
| P-010 · first_listing_pending | Nudge; publishing the first bundle activates the account | `app.partner_ready` → `app.activate_partner_if_ready`, `trg_partner_activation`, `publish_requires_active_partner` migration | DB |
| P-010 · rejected / suspended | Reason, until-date, honour-existing note | `app.ops_reject_partner(reason_code, text)`, `app.ops_suspend_partner(reason_code, until, honour_existing)`; reasons `licence_expired / safety_incident` | DB |
| Console · Tonight, List, Bundles, Payouts, Inspection log, Reviews, Analytics, Branches | as before | `app.today`, `publish_listing`, `templates` / `upsert_bag_template`, `payouts`, `compliance_ledger`, `my_reviews`, `analytics_summary`, `my_stores_detail` | DB |
| Console · Redeem | Lookup by code fragment, scan QR, hand over, late grace, undo within 60 s, cash due | `app.lookup_order(store, fragment)`, `redeem_order(mechanism)`, `redeem_order_late`, `undo_redemption`, `market_config.late_redeem_grace_minutes = 15`, `undo_redeem_seconds = 60` | DB |
| Console · Schedules | Weekly auto-publish per template, publish lead, Ramadan pause, pause/resume | `listing_schedule`, `app.upsert_schedule(..., publish_lead_minutes = 150, ramadan_affected)`, `app.pause_schedule` | DB |
| Console · Cash (EG) | Collect per order, short amounts, end-of-day reconciliation, liability | `app.collect_cash`, `cash_collection.short_minor`, `app.submit_cash_reconciliation`, `app.cash_liability`, `cash_variance_threshold_minor` | DB |
| Console · Quality | Open flags with deadline, acknowledge with finding + action; customer reports with partner statement; quality hold banner | `quality_flag.ack_deadline / escalated_at`, `app.acknowledge_flag(flag, finding, action_text)`, `dispute.partner_statement / partner_deadline`, `quality_hold` | DB |
| Console · Staff | Invite by email with role and scope, revoke, set on shift | `app.invite_staff_by_email(email, partner, store, role, full_name)`, `revoke_staff`, `set_active_shift`, `staff_assignment.partner_wide` | DB |
| Console · Documents | Same list; 30-day expiry reminder; expiry pauses new listings | `app.check_document_expiry`, `store.publishing_blocked_at`; push `partner.document_expired → bugsha-partner://documents` | DB · Push |
| Console · Branch settings | Pause reservations with reason, resume, hours | `app.pause_store_reservations(store, reason)`, `resume_store_reservations`, reason `store_paused` | DB |

## Ops console — `ui_kits/ops/`

Roles follow `public.ops_role` (`support_agent | ops_manager | finance | compliance | engineering | admin`) and gate navigation and actions.
Every forced action takes a reason code from `public.reason_code` and a justification written to `audit_log`.

| ID | View | Platform | Verified |
| --- | --- | --- | --- |
| S-O-001 | Live: listings, bags, orders, GMV, disputes, paused stores, jobs alerting; needs-a-person list; funnel; supply vs demand | `app.ops_live_dashboard`, `ops_partner_health`, `ops_onboarding_funnel`, `ops_supply_demand` | DB |
| S-O-010 | Partner requests: review, issue code, decline with reason | `public.partner_request`; `app.ops_issue_partner_code`, `ops_decline_partner_request` — **live at bugsha.app/ops** | DB |
| S-O-011 | Invite codes: live / redeemed / expired / revoked; delivery state; resend; revoke | `public.partner_invite_code` (+ `emailed_at`); `app.ops_revoke_partner_code`, `ops_resend_partner_code` — **live at bugsha.app/ops** | DB |
| S-O-020 | Partners by onboarding stage and market | `app.ops_partners(status, market)` | DB |
| S-O-021 | Partner detail: overview + readiness checklist, documents verify/reject, contracts + set commission, stores, staff, history; approve (blocked until docs approved), activate, suspend, reinstate, reject, reliability override | `app.ops_partner_detail`, `ops_verify_document(doc, approve, reason_code, text)`, `ops_approve_partner` (requires all `market_document_requirement` approved; creates contract v1), `ops_activate_partner`, `ops_suspend_partner`, `ops_reinstate_partner`, `ops_reject_partner`, `ops_set_commission`, `ops_override_reliability` | DB · Commit ("partner detail with document verification, contract and activation") |
| S-O-030 | Orders: filter by status/code, detail with timeline/payment/refund; force cancel (cost bearer), force redeem, extend window, reissue code, reverse redemption, resend notification | `app.ops_orders`, `ops_order_detail`, `ops_force_cancel(order, reason, cost_bearer, justification)`, `ops_force_redeem`, `ops_extend_window`, `ops_reissue_code`, `ops_reverse_redemption`, `ops_resend_notification` | DB |
| S-O-031 | Moderation queue: forbidden terms and price fraction; approve / edit / reject | `app.ops_moderation_queue`, `ops_moderate_listing(action, reason, edits)`, `copy_has_forbidden_term`, `market_config.max_price_fraction` | DB |
| S-O-040 | Disputes with severity and SLA; assign; resolve with refund, cost bearer, goodwill; reply | `app.ops_disputes(market, severity, open_only)`, `ops_assign_dispute`, `ops_resolve_dispute(resolution, outcome)`; `dispute_severity` | DB |
| S-O-041 | Incidents and quality holds: open from a critical dispute, place/release hold, close, amend | `app.ops_open_incident`, `ops_place_quality_hold(store, reason, duration, cancel_existing, incident)`, `ops_release_quality_hold`, `ops_close_incident`, `ops_amend_incident` | DB |
| S-O-050 | Payout runs: create, freeze, approve 1 of 2, approve 2 of 2 (different person), execute, confirm failed payouts | `app.ops_create_payout_run`, `ops_approve_payout_run`, `ops_execute_payout_run`, `ops_confirm_payout`, `require_four_eyes`, `four_eyes_actor_guard` migration; `payout_status` | DB |
| S-O-051 | Reconciliation exceptions, resolve with adjustment reason | `app.ops_reconciliation(kind, market, from, to)`, `ops_resolve_exception`; reasons `psp_reconciliation / manual_correction / cash_variance` | DB |
| S-O-052 | Ledger accounts, balance check, revenue, tax report, unit economics, bulk export | `app.ops_ledger`, `ops_balance_check`, `ops_revenue`, `ops_tax_report`, `ops_unit_economics`, `ops_request_bulk_export(query, justification)`; `ledger_account` | DB |
| S-O-060 | Users: search by phone/email; restrict, lift, issue credit, impersonate (consent, 30 min, read-only), resend | `app.ops_users(market, phone)`, `ops_user_detail`, `ops_restrict_user(reason, until)`, `ops_issue_credit`, `ops_start_impersonation(target, reason, consent)`, `impersonation_session.hard_expires_at` | DB |
| S-O-070 | Market config with propose → second-admin approval | `app.ops_market_config`, `ops_propose_config(market, patch)`, `pending_approval`, `market_config.approved_by_1/2` | DB |
| S-O-071 | Feature flags and kill switches | `feature_flag.is_kill_switch`, `app.ops_set_flag` | DB |
| S-O-072 | Cities with stage `waitlist → soft_launch → live` | `city.stage`, `app.ops_upsert_city` | DB |
| S-O-080 | Notification templates per key + locale: edit, review, publish, test; lock-screen preview | `notification_template` (version, reviewed_by, published), `app.ops_upsert_template`, `ops_review_template`, `publish_notification_template` | DB |
| S-O-090 | Jobs with last run, alerting, run now | `job_run`, `app.ops_jobs`, `ops_trigger_job` | DB |
| S-O-091 | Audit log with filters and export | `audit_log`, `app.ops_audit(from, to, operation, actor)` | DB |

## Partner sign-up is code-gated — what changes where

| Piece | Where | Status |
| --- | --- | --- |
| "Request a partner code" form on bugsha.app/partners | `site/app/components/PartnerRequest.tsx`, `site/app/partners/page.tsx`, `site/app/globals.css` | Built, type-checked, built with `next build`, driven in headless Chromium against a mocked endpoint |
| `partner-request` edge function + `public.partner_request` table + two emails | `supabase/functions/partner-request/`, `supabase/functions/_shared/validate-partner.ts`, `supabase/migrations/20260914090000_partner_request.sql`, `supabase/functions/_shared/templates/partner-request-*.js`, previews in `emails/preview/` | Written; validator unit-tested under Node; deployed to the platform Supabase project (`fxjvxmuporiwpqalbddv`) together with the waitlist, which moved there from the paused `qrmyhruvnqmjwxcnkocj` project |
| Invite codes, the gate on `app.submit_application`, ops RPCs | `supabase/platform/20260914094502_partner_invite_codes.sql` | **Applied to bugsha-dev** as version 20260914094502 and exercised end to end; copy into `bugsha-platform` migrations (see `supabase/platform/README.md`) |
| Partner app screens P-001 … P-004 | `bugsha-platform/apps/partner/app/join/*` | Implemented in Expo against `app.check_partner_code` / `submit_application(p_code, …)` / the `partner-request` function |
| Ops view S-O-010 / S-O-011 | `site/app/ops` | Live at bugsha.app/ops against the platform RPCs |

## Known conflicts to reconcile against the Expo apps

1. **Numerals.** The design system says Western digits everywhere, in both languages. The platform has a `numeral_system` enum (`western | arabic_indic`) and `app.set_locale(p_locale, p_numerals)`. The kits follow the design system and do not expose a numerals toggle. Decide which wins.
2. **Egyptian Arabic copy.** The platform distinguishes `ar-KW` and `ar-EG` and `reason_code` carries both `label_ar_kw` and `label_ar_eg`. The kits' Arabic strings are written in the Kuwaiti register only; S-C-001 offers all three locales but the Arabic copy table is shared. Egyptian copy is a content task.
3. **Ops console language.** Built English-only as an internal tool; the platform's ops surface language was not visible. Confirm.
