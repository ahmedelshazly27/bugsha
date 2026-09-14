# Ops console — UI kit

The internal platform: what the Bugsha team uses to onboard partners, watch tonight, settle
money and handle trouble. Desktop web, English only. Every view names the `app.*` RPC it
mirrors on the platform database, and every forced action asks for a reason code and a
justification because that is what `audit_log` stores.

**Files** — `index.html` (mount), `data.jsx` (fixtures shaped like the platform tables),
`screens.jsx` (thirteen views), `kit.jsx` (shell, role and market switching).

## Toolbar

- **Kuwait / Egypt** — market scope; every list, count and currency follows it.
- **Role** — `support_agent · ops_manager · finance · compliance · engineering · admin` (the `ops_role` enum). Navigation and action buttons are gated per role; four-eyes checks compare the acting user's name against the first approver.

## Views

| ID | View | What it proves |
| --- | --- | --- |
| S-O-001 | **Live** | Tonight's numbers for the market, a "needs a person" list (critical or unassigned disputes, partner health tasks, alerting jobs, new partner requests, moderation, pending approvals), the onboarding funnel, supply vs demand. |
| S-O-010 | **Requests & codes · Requests** | Kitchens that asked for a partner code (website or app). Open one, issue a code (14-day, single use — emailed with the sign-up link), mark contacted, or decline with a reason. |
| S-O-011 | **Requests & codes · Codes** | Every code with issued / redeemed / expired / revoked state; resend, revoke. |
| S-O-020 | **Partners** | Filter by onboarding stage and market. |
| S-O-021 | **Partner detail** | Overview with the readiness checklist (`app.partner_ready`), documents with verify / reject (reason codes), contracts and set commission, branches, staff, status history. Approve is blocked until every required document is approved, exactly as `ops_approve_partner` enforces. Activate, suspend (with until-date and honour-existing), reinstate, reject, override reliability. |
| S-O-030 | **Orders** | Search, filter by `order_status`, detail with timeline and payment; force cancel (cost bearer), force redeem, extend window, reissue code, reverse redemption, resend notification. |
| S-O-031 | **Moderation** | Listings flagged for forbidden terms or price above the max fraction; approve, edit copy, reject. |
| S-O-040 | **Trust & safety · Disputes** | Severity, SLA, owner; assign, resolve with refund + cost bearer + goodwill, reply; a critical dispute can open an incident and place a quality hold. |
| S-O-041 | **Trust & safety · Incidents** | Incidents grouped by store with platform action and partner response; place / release hold, close, amend. |
| S-O-050 | **Finance · Payout runs** | Create, freeze, approve 1 of 2, approve 2 of 2 (a different person — the button disables for the first approver), execute; confirm failed payouts. |
| S-O-051 | **Finance · Reconciliation** | Settlement and cash exceptions; resolve with an adjustment reason. |
| S-O-052 | **Finance · Ledger & reports** | Balance check, revenue, tax, unit economics, ledger accounts, exports with justification. |
| S-O-060 | **Users** | Search by phone or email; restrict / lift, issue credit, impersonate (consent captured, read-only, 30-minute hard expiry), resend. |
| S-O-070 | **Platform · Market config** | `market_config` values; propose a change → second admin approves (four-eyes). |
| S-O-071 | **Platform · Feature flags** | Flags and kill switches, engineering/admin only. |
| S-O-072 | **Platform · Cities** | Stage `waitlist → soft_launch → live`; going live emails the city's waitlist. |
| S-O-080 | **Notifications** | Templates per key and locale with lock-screen preview; edit → review → publish; send test. |
| S-O-090 | **Jobs** | Scheduled jobs, last run, alerting, run now. |
| S-O-091 | **Audit log** | Every action with actor, role, target, reason, justification. |

## Rules it follows

- Composes only design-system components plus a local `Table` and `ActionModal`.
- Two colours. Severity and status come from the badge tones, never a third hue.
- Numbers, codes and keys are mono (`--font-numeric`) and Western-numeral.
- Nothing destructive without a reason code and a justification; anything financial above threshold needs two people.
