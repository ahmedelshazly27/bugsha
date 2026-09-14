// Ops console — fixtures. Shapes follow the platform tables: partner, partner_document, partner_contract, order, dispute,
// incident, quality_hold, payout_run, payout, reconciliation_exception, market_config, feature_flag, city, notification_template,
// job_run, audit_log — plus the two tables this repo adds for code-gated sign-up: partner_request and partner_invite_code.
(function(){
const REQUESTS = [
 { id: "r1", legal: "Al Boom Kitchen Co.", trading: "Al Boom", market: "KW", city: "Salmiya · Hawalli", cats: ["meals"], contact: "Fahad A.", phone: "+965 6612 2300", email: "fahad@alboom.kw", branches: 2, surplus: "KD 35", referral: "Instagram", at: "14 Sep · 09:12", status: "new", source: "website" },
 { id: "r2", legal: "Sweet Nile Bakery", trading: "Sweet Nile", market: "EG", city: "Zamalek · Cairo", cats: ["bakery", "sweets"], contact: "Mariam H.", phone: "+20 100 234 5678", email: "mariam@sweetnile.eg", branches: 1, surplus: "EGP 700", referral: "Partner referral", at: "13 Sep · 18:40", status: "new", source: "website" },
 { id: "r3", legal: "Dar Al Qahwa W.L.L.", trading: "Dar Al Qahwa", market: "KW", city: "Kuwait City · Al Asimah", cats: ["cafe"], contact: "Noor S.", phone: "+965 9900 4411", email: "noor@daralqahwa.com", branches: 4, surplus: "KD 60", referral: "Sales visit", at: "12 Sep · 11:05", status: "contacted", source: "app" },
 { id: "r4", legal: "Co-op Jabriya", trading: "Co-op Jabriya", market: "KW", city: "Jabriya · Hawalli", cats: ["grocery"], contact: "Board office", phone: "+965 2531 0000", email: "ops@coopjabriya.kw", branches: 1, surplus: "KD 120", referral: "Sales visit", at: "9 Sep · 15:30", status: "code_issued", source: "website", code: "BG-4F8Q-2NJ7" },
 { id: "r5", legal: "Shisha Lounge Ltd", trading: "Cloud 9", market: "KW", city: "Salmiya · Hawalli", cats: ["other"], contact: "R. M.", phone: "+965 5000 0000", email: "info@cloud9.kw", branches: 1, surplus: "—", referral: "", at: "8 Sep · 22:10", status: "declined", source: "website", declineReason: "Category not eligible" },
];
const CODES = [
 { code: "BG-4F8Q-2NJ7", to: "Co-op Jabriya", email: "ops@coopjabriya.kw", market: "KW", by: "Sara M.", at: "10 Sep · 10:02", expires: "24 Sep", status: "issued" },
 { code: "BG-9M2K-77QA", to: "Kuwait Bakehouse", email: "yousef@kuwaitbakehouse.com", market: "KW", by: "Sara M.", at: "1 Sep · 14:20", expires: "15 Sep", status: "redeemed", redeemedAt: "2 Sep · 09:41" },
 { code: "BG-7K2M-9Q4A", to: "Beit Beirut", email: "hello@beitbeirut.kw", market: "KW", by: "Ahmed E.", at: "20 Aug · 16:00", expires: "3 Sep", status: "expired" },
 { code: "BG-A1B2-C3D4", to: "Cairo Crumbs", email: "owner@cairocrumbs.eg", market: "EG", by: "Sara M.", at: "5 Sep · 12:15", expires: "19 Sep", status: "revoked", revokedReason: "Duplicate request" },
];
const PARTNERS = [
 { id: "p1", trading: "Kuwait Bakehouse", legal: "Kuwait Bakehouse Co. W.L.L.", market: "KW", city: "Hawalli", cats: ["bakery"], status: "active", branches: 3, contact: "Yousef K.", phone: "+965 5512 3456", email: "yousef@kuwaitbakehouse.com", surplus: "KD 25", referral: "Founder network", reliability: 0.94, created: "2 Sep", activated: "12 Sep", owner: "Sara M.",
   docs: [["moci_licence", "MOCI commercial licence", "approved", "1 Mar 2027"], ["food_permit", "Food permit · Salmiya", "approved", "12 Oct 2026"], ["civil_id", "Civil ID", "approved", "1 Mar 2027"], ["signatory_authorisation", "Signatory authorisation", "approved", null], ["bank_iban", "Bank IBAN", "approved", null]],
   contracts: [{ version: 1, commissionBp: 1500, cadence: "weekly", min: "KD 10.000", accepted: "12 Sep 14:02", by: "Yousef K.", ip: "185.31.x.x" }],
   stores: [["Salmiya · Block 10", "live"], ["Shaab · Arabian Gulf St", "live"], ["Jabriya · Block 4", "paused"]],
   staff: [["Yousef K.", "owner", "all"], ["Anitha R.", "staff", "Salmiya"], ["Hassan M.", "staff", "Salmiya"], ["Dana S.", "accountant", "all"]],
   history: [["lead", "applied", "2 Sep 09:41", "Yousef K.", null], ["applied", "documents_pending", "2 Sep 09:41", "system", null], ["documents_pending", "under_review", "4 Sep 12:10", "system", null], ["under_review", "approved", "8 Sep 10:15", "Sara M.", "documents verified on call"], ["approved", "contract_pending", "8 Sep 10:15", "system", null], ["contract_pending", "contract_signed", "12 Sep 14:02", "Yousef K.", null], ["contract_signed", "store_setup", "12 Sep 14:03", "system", null], ["store_setup", "first_listing_pending", "12 Sep 15:20", "Yousef K.", null], ["first_listing_pending", "active", "12 Sep 20:58", "system", "onboarding_complete"]],
   health: [] },
 { id: "p2", trading: "Beit Beirut", legal: "Beit Beirut Restaurants K.S.C.C.", market: "KW", city: "Al Asimah", cats: ["meals"], status: "under_review", branches: 2, contact: "Rami H.", phone: "+965 9977 1122", email: "rami@beitbeirut.kw", surplus: "KD 40", referral: "Sales visit", reliability: null, created: "11 Sep", activated: null, owner: "Ahmed E.",
   docs: [["moci_licence", "MOCI commercial licence", "approved", "30 Jun 2027"], ["food_permit", "Food permit · Kuwait City", "under_review", "15 Jan 2027"], ["civil_id", "Civil ID", "under_review", "2 Feb 2028"], ["signatory_authorisation", "Signatory authorisation", "pending", null], ["bank_iban", "Bank IBAN", "approved", null]],
   contracts: [], stores: [], staff: [["Rami H.", "owner", "all"]],
   history: [["lead", "applied", "11 Sep 16:20", "Rami H.", null], ["applied", "documents_pending", "11 Sep 16:20", "system", null], ["documents_pending", "under_review", "13 Sep 09:02", "system", null]], health: [] },
 { id: "p3", trading: "Ubon Café", legal: "Ubon Hospitality W.L.L.", market: "KW", city: "Hawalli", cats: ["cafe"], status: "contract_pending", branches: 1, contact: "Lina T.", phone: "+965 6600 8899", email: "lina@ubon.cafe", surplus: "KD 18", referral: "Instagram", reliability: null, created: "6 Sep", activated: null, owner: "Sara M.",
   docs: [["moci_licence", "MOCI commercial licence", "approved", "1 Dec 2026"], ["food_permit", "Food permit · Salmiya", "approved", "1 Dec 2026"], ["civil_id", "Civil ID", "approved", "9 Sep 2029"], ["signatory_authorisation", "Signatory authorisation", "approved", null], ["bank_iban", "Bank IBAN", "approved", null]],
   contracts: [{ version: 1, commissionBp: 1500, cadence: "weekly", min: "KD 10.000", accepted: null }], stores: [], staff: [["Lina T.", "owner", "all"]],
   history: [["lead", "applied", "6 Sep 11:00", "Lina T.", null], ["under_review", "approved", "10 Sep 15:44", "Sara M.", "all documents approved"], ["approved", "contract_pending", "10 Sep 15:44", "system", null]], health: [] },
 { id: "p4", trading: "Sadu Sweets", legal: "Sadu Sweets Co.", market: "KW", city: "Farwaniya", cats: ["sweets"], status: "suspended", branches: 1, contact: "Mona A.", phone: "+965 5511 7788", email: "mona@sadusweets.kw", surplus: "KD 22", referral: "Partner referral", reliability: 0.71, created: "20 Aug", activated: "28 Aug", owner: "Ahmed E.", suspendedUntil: "30 Sep", suspendReason: "licence_expired",
   docs: [["moci_licence", "MOCI commercial licence", "approved", "1 Jan 2027"], ["food_permit", "Food permit · Farwaniya", "expired", "31 Aug 2026"], ["civil_id", "Civil ID", "approved", "1 Jan 2027"], ["signatory_authorisation", "Signatory authorisation", "approved", null], ["bank_iban", "Bank IBAN", "approved", null]],
   contracts: [{ version: 1, commissionBp: 1500, cadence: "weekly", min: "KD 10.000", accepted: "27 Aug 10:10", by: "Mona A.", ip: "185.31.x.x" }], stores: [["Farwaniya · Block 1", "paused"]], staff: [["Mona A.", "owner", "all"]],
   history: [["first_listing_pending", "active", "28 Aug 21:10", "system", "onboarding_complete"], ["active", "suspended", "1 Sep 08:00", "system", "licence_expired"]], health: [{ kind: "document_expired", severity: 3, opened: "1 Sep" }] },
 { id: "p5", trading: "Cairo Crumbs", legal: "Cairo Crumbs LLC", market: "EG", city: "Cairo", cats: ["bakery"], status: "documents_pending", branches: 1, contact: "Omar F.", phone: "+20 122 000 1122", email: "owner@cairocrumbs.eg", surplus: "EGP 900", referral: "Website", reliability: null, created: "13 Sep", activated: null, owner: "Ahmed E.",
   docs: [["commercial_register", "Commercial register extract", "approved", "1 Jan 2028"], ["tax_card", "Tax card", "rejected", null, "doc_illegible"], ["health_licence", "Health licence · Zamalek", "pending", "1 Jun 2027"], ["national_id", "National ID", "pending", "1 Jan 2030"], ["bank_or_wallet", "Bank account or wallet", "pending", null]],
   contracts: [], stores: [], staff: [["Omar F.", "owner", "all"]], history: [["lead", "applied", "13 Sep 10:30", "Omar F.", null], ["applied", "documents_pending", "13 Sep 10:30", "system", null]], health: [] },
 { id: "p6", trading: "Zamalek Kitchen", legal: "Zamalek Kitchen S.A.E.", market: "EG", city: "Cairo", cats: ["meals"], status: "active", branches: 2, contact: "Hana R.", phone: "+20 100 555 7788", email: "hana@zamalekkitchen.eg", surplus: "EGP 1,400", referral: "Sales visit", reliability: 0.88, created: "25 Aug", activated: "3 Sep", owner: "Ahmed E.",
   docs: [["commercial_register", "Commercial register extract", "approved", "1 Jan 2028"], ["tax_card", "Tax card", "approved", "1 Jan 2028"], ["health_licence", "Health licence · Zamalek", "approved", "1 Jun 2027"], ["national_id", "National ID", "approved", "1 Jan 2030"], ["bank_or_wallet", "Bank account or wallet", "approved", null]],
   contracts: [{ version: 1, commissionBp: 1500, cadence: "weekly", min: "EGP 250.00", accepted: "2 Sep 11:20", by: "Hana R.", ip: "41.34.x.x" }], stores: [["Zamalek · 26 July St", "live"], ["Maadi · Road 9", "live"]], staff: [["Hana R.", "owner", "all"], ["Karim S.", "manager", "all"]],
   history: [["first_listing_pending", "active", "3 Sep 19:50", "system", "onboarding_complete"]], health: [{ kind: "cash_variance", severity: 2, opened: "12 Sep" }] },
];
const ORDERS = [
 { code: "KW-4821", store: "Kuwait Bakehouse · Salmiya", consumer: "Noura A.", phone: "+965 5xxx 4821", status: "reserved", method: "knet", total: "KD 2.000", window: "21:30–22:30", created: "21:04", payment: "captured", psp: "knet · ref 7X9…", market: "KW" },
 { code: "KW-4822", store: "Kuwait Bakehouse · Salmiya", consumer: "Rahul S.", phone: "+965 5xxx 4822", status: "redeemed", method: "apple_pay", total: "KD 4.000", window: "21:30–22:30", created: "21:06", payment: "captured", psp: "tap · ref A21…", market: "KW", redeemed: "22:11 · code_shown · Anitha R." },
 { code: "KW-4819", store: "Beit Beirut · Kuwait City", consumer: "Mishari K.", phone: "+965 6xxx 4819", status: "no_show", method: "knet", total: "KD 3.000", window: "22:00–23:00", created: "20:12", payment: "captured", psp: "knet · ref 7X1…", market: "KW" },
 { code: "KW-4812", store: "Ubon Café · Salmiya", consumer: "Maria D.", phone: "+965 9xxx 4812", status: "cancelled_partner", method: "card", total: "KD 2.500", window: "20:30–21:30", created: "19:58", payment: "refunded", psp: "tap · ref B77…", market: "KW", refund: "KD 2.500 · source · 3 working days" },
 { code: "KW-4808", store: "Sadu Sweets · Farwaniya", consumer: "Dalal S.", phone: "+965 5xxx 4808", status: "held", method: "knet", total: "KD 2.000", window: "21:00–22:00", created: "21:41", payment: "pending", psp: "knet · redirect", market: "KW", holdExpires: "21:51" },
 { code: "EG-1207", store: "Zamalek Kitchen · Zamalek", consumer: "Youssef M.", phone: "+20 1xx xxx 1207", status: "reserved", method: "cash", total: "EGP 45.00", window: "21:00–22:00", created: "20:12", payment: "none", psp: "cash at counter", market: "EG" },
 { code: "EG-1199", store: "Zamalek Kitchen · Maadi", consumer: "Salma K.", phone: "+20 1xx xxx 1199", status: "refunded", method: "fawry", total: "EGP 60.00", window: "20:30–21:30", created: "18:40", payment: "refunded", psp: "fawry · ref 934…", market: "EG", refund: "EGP 60.00 · wallet · instant" },
];
const MODERATION = [
 { id: "m1", store: "Beit Beirut · Kuwait City", title: "Leftovers box", titleAr: "علبة بواقي", reason: "forbidden term: leftovers", price: "KD 3.000", value: "KD 9.000", flagged: "20:58", status: "flagged" },
 { id: "m2", store: "Sadu Sweets · Farwaniya", title: "Sweets box — expired stock cleared", titleAr: "صندوق حلويات", reason: "forbidden term: expired", price: "KD 2.000", value: "KD 8.000", flagged: "20:36", status: "flagged" },
 { id: "m3", store: "Kuwait Bakehouse · Shaab", title: "Bakery mix", titleAr: "خليط المخبز", reason: "price above max fraction (0.45 of value)", price: "KD 3.500", value: "KD 6.500", flagged: "21:02", status: "flagged" },
];
const DISPUTES = [
 { ref: "DS-2409", order: "KW-4801", market: "KW", severity: "critical", category: "illness", consumer: "Noura A.", statement: "Felt unwell about 3 hours after the bag. Photos of the box attached.", partner: "Kuwait Bakehouse · Salmiya", partnerStatement: null, partnerDeadline: "15 Sep 12:00", owner: "Sara M.", sla: "14 Sep 11:00", opened: "13 Sep 09:12", resolution: null },
 { ref: "DS-2411", order: "KW-4812", market: "KW", severity: "standard", category: "never_received", consumer: "Maria D.", statement: "Store was closed when I arrived at 21:10.", partner: "Ubon Café · Salmiya", partnerStatement: "We closed early due to a power cut; we cancelled all orders at 21:15.", partnerDeadline: "16 Sep", owner: null, sla: "16 Sep 18:00", opened: "14 Sep 07:50", resolution: null },
 { ref: "DS-2398", order: "KW-4795", market: "KW", severity: "standard", category: "quality", consumer: "Dalal S.", statement: "Only bread, no pastries as described.", partner: "Kuwait Bakehouse · Salmiya", partnerStatement: "Friday's bag ran short on pastries; we added an extra loaf.", partnerDeadline: "13 Sep", owner: "Ahmed E.", sla: "13 Sep 18:00", opened: "11 Sep 22:40", resolution: "Partial refund KD 1.000 · partner bears · goodwill KD 0.500" },
 { ref: "DS-0311", order: "EG-1180", market: "EG", severity: "high", category: "missing", consumer: "Salma K.", statement: "Bag had two items, listing said four to six.", partner: "Zamalek Kitchen · Maadi", partnerStatement: null, partnerDeadline: "15 Sep", owner: null, sla: "15 Sep 12:00", opened: "13 Sep 21:30", resolution: null },
];
const INCIDENTS = [
 { ref: "INC-0042", market: "KW", partner: "Kuwait Bakehouse", store: "Salmiya · Block 10", categories: ["food_safety"], orders: ["KW-4801"], opened: "13 Sep 10:00", closed: null, hold: true, reports: 1, response: null, action: "Quality hold placed 13 Sep 10:05 — new listings paused, reserved bundles honoured." },
 { ref: "INC-0039", market: "KW", partner: "Sadu Sweets", store: "Farwaniya · Block 1", categories: ["licence"], orders: [], opened: "1 Sep 08:00", closed: null, hold: false, reports: 0, response: "Renewal submitted to the municipality 9 Sep.", action: "Partner suspended until 30 Sep pending renewed food permit." },
 { ref: "INC-0031", market: "EG", partner: "Zamalek Kitchen", store: "Maadi · Road 9", categories: ["cash_variance"], orders: ["EG-1150", "EG-1151"], opened: "10 Sep 09:30", closed: "12 Sep 16:00", hold: false, reports: 0, response: "Float miscounted; corrected.", action: "Variance EGP 120 netted from payout run 2026-W37.", resolution: "Closed · no further action" },
];
const PAYOUT_RUNS = [
 { id: "run-w37", market: "KW", period: "7 – 13 Sep", status: "approved_1", frozen: "14 Sep 02:00", approver1: "Dana F. · 14 Sep 09:10", approver2: null, executed: null, payouts: [
   ["Kuwait Bakehouse", "KD 230.000", "KD 0.000", "KD 0.000", "KD 195.500", "KD 0.000", "ready"], ["Ubon Café", "KD 84.000", "KD 0.000", "KD 0.000", "KD 71.400", "KD 0.000", "ready"], ["Sadu Sweets", "KD 12.500", "KD 0.000", "KD 0.000", "KD 10.625", "KD 0.000", "held"], ["Beit Beirut", "KD 6.000", "KD 0.000", "KD 3.200", "KD 8.300", "KD 0.000", "held"]] },
 { id: "run-w36", market: "KW", period: "31 Aug – 6 Sep", status: "executed", frozen: "7 Sep 02:00", approver1: "Dana F. · 7 Sep 09:02", approver2: "Ahmed E. · 7 Sep 10:15", executed: "7 Sep 11:00", payouts: [
   ["Kuwait Bakehouse", "KD 212.500", "KD 0.000", "KD 0.000", "KD 180.625", "KD 0.000", "paid"], ["Ubon Café", "KD 66.000", "KD 0.000", "KD 0.000", "KD 56.100", "KD 0.000", "paid"], ["Sadu Sweets", "KD 40.000", "KD 0.000", "KD 0.000", "KD 34.000", "KD 0.000", "failed"]] },
 { id: "run-eg-w37", market: "EG", period: "7 – 13 Sep", status: "draft", frozen: null, approver1: null, approver2: null, executed: null, payouts: [
   ["Zamalek Kitchen", "EGP 6,300.00", "EGP 1,080.00", "EGP 0.00", "EGP 4,275.00", "EGP 0.00", "pending"], ["Cairo Crumbs", "EGP 0.00", "EGP 0.00", "EGP 0.00", "EGP 0.00", "EGP 0.00", "pending"]] },
];
const EXCEPTIONS = [
 { id: "x1", kind: "settlement", type: "amount_mismatch", ref: "knet · 7X9…", payment: "KW-4821", expected: "KD 2.000", actual: "KD 1.950", market: "KW", status: "open", created: "14 Sep 03:10" },
 { id: "x2", kind: "settlement", type: "missing_in_file", ref: "tap · A21…", payment: "KW-4822", expected: "KD 4.000", actual: "—", market: "KW", status: "open", created: "14 Sep 03:10" },
 { id: "x3", kind: "cash", type: "variance", ref: "Zamalek Kitchen · Maadi · 12 Sep", payment: "—", expected: "EGP 540.00", actual: "EGP 420.00", market: "EG", status: "resolved", created: "13 Sep 03:05", resolution: "cash_variance · netted from payout" },
];
const USERS = [
 { id: "u1", name: "Noura A.", phone: "+965 5512 4821", email: "noura@example.com", market: "KW", city: "Hawalli", since: "Mar 2026", orders: 12, noShows: 0, reliability: 1.0, restricted: null, wallet: "KD 0.500", locale: "en", dietary: ["vegetarian"] },
 { id: "u2", name: "Mishari K.", phone: "+965 6611 4819", email: "mishari@example.com", market: "KW", city: "Al Asimah", since: "Jul 2026", orders: 5, noShows: 3, reliability: 0.4, restricted: "28 Sep · repeat_no_show", wallet: "KD 0.000", locale: "ar-KW", dietary: [] },
 { id: "u3", name: "Salma K.", phone: "+20 100 777 1199", email: "salma@example.com", market: "EG", city: "Cairo", since: "Aug 2026", orders: 7, noShows: 0, reliability: 1.0, restricted: null, wallet: "EGP 60.00", locale: "ar-EG", dietary: ["no_nuts"] },
];
const CONFIG = {
 KW: { currency: "KWD", commission_bp: 1500, hold_duration_minutes: 10, cancel_cutoff_hours: 2, late_redeem_grace_minutes: 15, undo_redeem_seconds: 60, reservation_cap_default: 3, reservation_cap_new_user: 1, reservation_cap_cash: 0, max_price_fraction: 0.40, payout_cadence: "weekly", payout_day: 0, payout_min_minor: "KD 10.000", refund_cap_support_minor: "KD 10.000", adjustment_four_eyes_minor: "KD 50.000", deletion_clock_days: 30, financial_retention_years: 10, vat_bp: 0, version: 4 },
 EG: { currency: "EGP", commission_bp: 1500, hold_duration_minutes: 10, cancel_cutoff_hours: 2, late_redeem_grace_minutes: 15, undo_redeem_seconds: 60, reservation_cap_default: 3, reservation_cap_new_user: 1, reservation_cap_cash: 1, max_price_fraction: 0.40, payout_cadence: "weekly", payout_day: 0, payout_min_minor: "EGP 250.00", refund_cap_support_minor: "EGP 300.00", adjustment_four_eyes_minor: "EGP 1,500.00", deletion_clock_days: 30, financial_retention_years: 10, vat_bp: 1400, version: 3 },
};
const PENDING = [{ id: "pa1", operation: "market_config.KW", patch: "commission_bp 1500 → 1400", first: "Ahmed E. · 13 Sep 17:20", second: null }];
const FLAGS = [
 { key: "consumer.apple_pay", market: "KW", enabled: true, kill: false }, { key: "consumer.cash_orders", market: "EG", enabled: true, kill: true }, { key: "partner.bulk_publish", market: "KW", enabled: false, kill: false },
 { key: "consumer.campaign_ramadan", market: "KW", enabled: false, kill: false }, { key: "psp.fawry", market: "EG", enabled: true, kill: true }, { key: "ops.impersonation", market: "KW", enabled: true, kill: true },
];
const CITIES = [
 { name: "Al Asimah", ar: "العاصمة", market: "KW", stage: "live", radius: 5000, partners: 3 }, { name: "Hawalli", ar: "حولي", market: "KW", stage: "live", radius: 5000, partners: 4 }, { name: "Farwaniya", ar: "الفروانية", market: "KW", stage: "live", radius: 6000, partners: 1 },
 { name: "Ahmadi", ar: "الأحمدي", market: "KW", stage: "live", radius: 8000, partners: 0 }, { name: "Jahra", ar: "الجهراء", market: "KW", stage: "live", radius: 8000, partners: 0 }, { name: "Mubarak Al-Kabeer", ar: "مبارك الكبير", market: "KW", stage: "live", radius: 6000, partners: 0 },
 { name: "Cairo", ar: "القاهرة", market: "EG", stage: "live", radius: 6000, partners: 2 }, { name: "Giza", ar: "الجيزة", market: "EG", stage: "live", radius: 6000, partners: 0 }, { name: "Alexandria", ar: "الإسكندرية", market: "EG", stage: "live", radius: 6000, partners: 0 },
 { name: "Qalyubia", ar: "القليوبية", market: "EG", stage: "waitlist", radius: 6000, partners: 0, waitlist: 214 }, { name: "Dakahlia", ar: "الدقهلية", market: "EG", stage: "waitlist", radius: 6000, partners: 0, waitlist: 88 }, { name: "Port Said", ar: "بورسعيد", market: "EG", stage: "waitlist", radius: 6000, partners: 0, waitlist: 41 },
];
const TEMPLATES = [
 { key: "consumer.order_confirmed", locale: "en", title: "Reserved at {store}", body: "Code {code} · collect {window}", link: "bugsha://order/:id", version: 3, published: true, reviewed: "Sara M." },
 { key: "consumer.closing_soon", locale: "en", title: "{minutes} minutes left to collect", body: "The window closes at {time}", link: "bugsha://redeem/:id", version: 2, published: true, reviewed: "Sara M." },
 { key: "consumer.collected", locale: "en", title: "Collected — enjoy it", body: "Rate your bag in a tap", link: "bugsha://review/:id", version: 1, published: true, reviewed: "Ahmed E." },
 { key: "consumer.store_cancelled", locale: "en", title: "{store} had to cancel", body: "Full refund on the way, nothing for you to do", link: "bugsha://order/:id", version: 2, published: true, reviewed: "Sara M." },
 { key: "consumer.refund", locale: "en", title: "Refund sent", body: "{amount} is on its way to your bank", link: "bugsha://wallet", version: 1, published: true, reviewed: "Ahmed E." },
 { key: "consumer.window_opening", locale: "en", title: "Pickup opens in {minutes} minutes", body: "{distance} from you", link: "bugsha://order/:id", version: 1, published: true, reviewed: "Sara M." },
 { key: "consumer.campaign", locale: "en", title: "Ramadan Kareem", body: "Iftar surplus from {time}. Suhoor bakery from {time2}.", link: "bugsha://campaign/:key", version: 1, published: false, reviewed: null },
 { key: "partner.document_expired", locale: "en", title: "New listings paused — {document} expired", body: "Bags already sold are unaffected. Customers will collect as normal.", link: "bugsha-partner://documents", version: 1, published: true, reviewed: "Ahmed E." },
 { key: "consumer.order_confirmed", locale: "ar-KW", title: "محجوزة من {store}", body: "الرمز {code} · استلم {window}", link: "bugsha://order/:id", version: 3, published: true, reviewed: "Sara M." },
];
const JOBS = [
 { name: "materialise_schedules", last: "14 Sep 02:00", status: "ok", rows: 41, dur: "1.2s", alerting: false, cadence: "daily 02:00" }, { name: "release_expired_holds", last: "14 Sep 08:01", status: "ok", rows: 3, dur: "0.1s", alerting: false, cadence: "every minute" },
 { name: "mark_no_shows", last: "14 Sep 00:15", status: "ok", rows: 2, dur: "0.3s", alerting: false, cadence: "nightly" }, { name: "send_window_reminders", last: "13 Sep 21:15", status: "ok", rows: 18, dur: "0.8s", alerting: false, cadence: "every 5 min" },
 { name: "check_document_expiry", last: "14 Sep 03:00", status: "ok", rows: 1, dur: "0.2s", alerting: false, cadence: "daily 03:00" }, { name: "reconcile_settlement", last: "14 Sep 03:10", status: "error", rows: 0, dur: "4.0s", alerting: true, cadence: "daily 03:10", error: "KNET settlement file missing for 13 Sep" },
 { name: "claim_notifications", last: "14 Sep 08:02", status: "ok", rows: 7, dur: "0.4s", alerting: false, cadence: "every minute" }, { name: "dst_integrity_check", last: "14 Sep 04:00", status: "ok", rows: 0, dur: "0.1s", alerting: false, cadence: "daily 04:00" },
];
const AUDIT = [
 { at: "14 Sep 09:10", actor: "Dana F.", role: "finance", op: "ops_approve_payout_run", target: "payout_run · run-w37", reason: null, just: "first approval" },
 { at: "13 Sep 17:20", actor: "Ahmed E.", role: "admin", op: "ops_propose_config", target: "market_config · KW", reason: null, just: "commission 15% → 14% for founding partners" },
 { at: "13 Sep 10:05", actor: "Sara M.", role: "ops_manager", op: "ops_place_quality_hold", target: "store · Salmiya · Block 10", reason: "safety_incident", just: "DS-2409 illness report" },
 { at: "12 Sep 20:58", actor: "system", role: "system", op: "transition_partner", target: "partner · Kuwait Bakehouse", reason: "onboarding_complete", just: null },
 { at: "10 Sep 15:44", actor: "Sara M.", role: "ops_manager", op: "ops_approve_partner", target: "partner · Ubon Café", reason: null, just: "all documents approved" },
 { at: "10 Sep 10:02", actor: "Sara M.", role: "ops_manager", op: "ops_issue_partner_code", target: "partner_request · Co-op Jabriya", reason: null, just: "sales visit 9 Sep, board approved" },
 { at: "8 Sep 22:15", actor: "Sara M.", role: "ops_manager", op: "ops_decline_partner_request", target: "partner_request · Cloud 9", reason: "category_not_eligible", just: null },
 { at: "1 Sep 08:00", actor: "system", role: "system", op: "ops_suspend_partner", target: "partner · Sadu Sweets", reason: "licence_expired", just: "food_permit expired 31 Aug" },
];
Object.assign(window, { OPS: { REQUESTS, CODES, PARTNERS, ORDERS, MODERATION, DISPUTES, INCIDENTS, PAYOUT_RUNS, EXCEPTIONS, USERS, CONFIG, PENDING, FLAGS, CITIES, TEMPLATES, JOBS, AUDIT } });
})();
