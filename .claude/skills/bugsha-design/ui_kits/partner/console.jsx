// Partner portal — console views added on top of screens.jsx: Redeem, Schedules, Cash, Quality, Staff, Documents, Branch settings.
// Mirrors app.lookup_order / redeem_order / redeem_order_late / undo_redemption, app.upsert_schedule / pause_schedule,
// app.collect_cash / submit_cash_reconciliation, app.acknowledge_flag + dispute partner statements, app.invite_staff_by_email / revoke_staff,
// app.my_documents, app.pause_store_reservations / resume_store_reservations, app.respond_to_review.
(function(){
const { Button, IconButton, Icon, Input, SegmentedControl, Stepper, Badge, Card, Banner, Chip, Switch, ListRow, Toast, EmptyState, PartnerStat, RatingStars, OrderRow } = window.SurplusKWDesignSystem_97ec90;
const mono = "var(--font-plex-mono), monospace";
const Num = ({ children, ...r }) => <span className="ds-numeric" dir="ltr" style={{ fontFamily: mono }} {...r}>{children}</span>;
const H1 = ({ children, sub }) => <div style={{ display: "grid", gap: 6 }}><h1 style={{ fontSize: "var(--text-title-lg-size)", lineHeight: 1.25, fontWeight: 600, margin: 0 }}>{children}</h1>
  {sub && <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "70ch" }}>{sub}</p>}</div>;
const Panel = ({ title, action, children, pad }) => <Card padded={false}>
  {(title || action) && <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
    <strong style={{ fontSize: "var(--text-headline-size)", fontWeight: 600 }}>{title}</strong>{action}</div>}
  <div style={pad ? { padding: 16, display: "grid", gap: 12 } : undefined}>{children}</div></Card>;
const Th = ({ children }) => <span style={{ fontSize: "var(--text-micro-size)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--color-text-tertiary)" }}>{children}</span>;
const Field = ({ label, children }) => <label style={{ display: "grid", gap: 6, minWidth: 0 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{label}</span>{children}</label>;

const COPY = {
en: {
  redeem: "Redeem", redeemNote: "Type the last digits of the customer's code, or scan the QR on their phone. The counter never needs the app open.",
  lookup: "Code or last 4 digits", find: "Find", scan: "Scan QR", found: "Found", notFound: "No order matches. Check the code with the customer.", handOver: "Confirm hand-over", redeemed: "Handed over", undo: "Undo", undoIn: s => `Undo · ${s}s`,
  late: "Window closed", lateGrace: "Inside the 15-minute grace period — you can still hand it over.", lateOver: "Grace period over. Ask Ops to force-redeem if the customer is here.", alreadyDone: "Already handed over", cashDue: "Cash due",
  mech: { code_shown: "Code shown", qr_scanned: "QR scanned" }, recent: "Redeemed tonight",
  schedules: "Schedules", schedulesNote: "Auto-publish a saved bundle on set nights. Listings go live at your lead time before the window; you can still edit or pause them.", addSchedule: "Add schedule", template: "Bundle", nights: "Nights", window: "Window", qty: "Quantity", lead: "Publish lead", leadHint: "minutes before the window", ramadanAffected: "Pause during Ramadan", active: "Active", paused: "Paused", pause: "Pause", resume: "Resume", saveSched: "Save schedule", edit: "Edit", cancel: "Cancel",
  cash: "Cash", cashNote: "Egypt only. Cash orders are paid at the counter; record what you collected and reconcile at end of day. The variance shows up on your statement.", collect: "Collect", expected: "Expected", collected: "Collected", short: "Short", eod: "End of day", eodBody: "Report the cash in the drawer from Bugsha orders. Anything off by more than the threshold opens a task with Ops.", reported: "Reported", submitEod: "Submit reconciliation", eodDone: "Reconciliation submitted", note: "Note (optional)", liability: "Cash owed to Bugsha", liabilityBody: "Commission on cash orders is netted from your next payout.",
  quality: "Quality", qualityNote: "Flags come from reviews and customer reports. Acknowledge each one with what you found and what you changed — that record is what inspectors and Ops read.", flags: "Open flags", noFlags: "No open flags", noFlagsBody: "Nice. Flags from reviews and reports land here with a deadline.", ackBy: d => `Acknowledge by ${d}`, escalated: "Escalated", finding: "What you found", action: "What you changed", ack: "Acknowledge", acked: "Acknowledged",
  disputes: "Customer reports", disputeBy: d => `Your statement by ${d}`, statement: "Your statement", sendStatement: "Send statement", sent: "Statement sent", sev: { critical: "Critical", high: "High", standard: "Standard" },
  hold: "Quality hold", holdBody: "Ops paused new listings on this branch while a report is investigated. Reserved bundles are still handed over.",
  staff: "Staff", staffNote: "Invite by email. Staff redeem and collect cash; managers list and edit; accountants see payouts and statements; owners do everything.", invite: "Invite", inviteEmail: "Email", role: "Role", roles: { owner: "Owner", manager: "Manager", staff: "Staff", accountant: "Accountant" }, scope: "Scope", allBranches: "All branches", thisBranch: "This branch", pending: "Invited", claimed: "Active", revoked: "Revoked", revoke: "Revoke", invited: "Invitation sent", sendInvite: "Send invite", onShift: "On shift now", setShift: "Set on shift",
  documents: "Documents", docsNote: "Approved documents with an expiry are checked daily. Thirty days out you get a reminder; on expiry new listings pause until the renewal is approved.",
  branch: "Branch settings", pauseRes: "Pause reservations", pauseBody: "Hide tonight's bundles from customers without cancelling reserved ones.", pauseReason: "Reason", reasons: [["store_paused", "Temporarily paused"], ["staffing", "Staffing"], ["unexpected_closure", "Unexpected closure"], ["quality_concern", "Quality concern"]], pausedUntil: t => `Paused until ${t}`, resumeRes: "Resume reservations", closeDay: "Closed today", hours: "Opening hours", ramadan: "Ramadan hours", saved: "Saved",
  respond: "Respond", responded: "Response sent", responsePh: "Thank the customer or explain — customers see this under their review.", moderated: "Response under review",
  window_closing: "Window closing",
},
ar: {
  redeem: "التسليم", redeemNote: "اكتب آخر أرقام رمز الزبون، أو امسح الـ QR من تلفونه. الكاونتر ما يحتاج التطبيق مفتوح.",
  lookup: "الرمز أو آخر 4 أرقام", find: "دوّر", scan: "امسح QR", found: "لقيناه", notFound: "ما فيه طلب يطابق. شيّك الرمز مع الزبون.", handOver: "أكّد التسليم", redeemed: "تسلّمت", undo: "تراجع", undoIn: s => `تراجع · ${s} ث`,
  late: "الوقت قفل", lateGrace: "داخل مهلة الـ 15 دقيقة — تقدر تسلّمها.", lateOver: "خلصت المهلة. اطلب من التشغيل يسلّمها بالقوة إذا الزبون موجود.", alreadyDone: "تسلّمت من قبل", cashDue: "كاش مستحق",
  mech: { code_shown: "ورّى الرمز", qr_scanned: "مسح QR" }, recent: "تسلّمت الليلة",
  schedules: "الجداول", schedulesNote: "نشر تلقائي لبقشة محفوظة بليالٍ محددة. القوائم تنزل قبل الوقت بالمهلة اللي تحددها؛ وتقدر تعدّلها أو توقّفها.", addSchedule: "أضف جدول", template: "البقشة", nights: "الليالي", window: "الوقت", qty: "الكمية", lead: "مهلة النشر", leadHint: "دقيقة قبل الوقت", ramadanAffected: "وقّف في رمضان", active: "شغّال", paused: "موقوف", pause: "وقّف", resume: "رجّعه", saveSched: "احفظ الجدول", edit: "عدّل", cancel: "إلغاء",
  cash: "الكاش", cashNote: "مصر بس. الطلبات الكاش تندفع عند الكاونتر؛ سجّل اللي قبضته وسوِّ التسوية بنهاية اليوم. الفرق يطلع بكشفك.", collect: "اقبض", expected: "المتوقع", collected: "المقبوض", short: "ناقص", eod: "نهاية اليوم", eodBody: "بلّغ عن الكاش بالدرج من طلبات بقشة. أي فرق فوق الحد يفتح مهمة مع التشغيل.", reported: "المبلّغ", submitEod: "أرسل التسوية", eodDone: "انرسلت التسوية", note: "ملاحظة (اختياري)", liability: "كاش مستحق لبقشة", liabilityBody: "عمولة الطلبات الكاش تنخصم من تحويلك الجاي.",
  quality: "الجودة", qualityNote: "الملاحظات تجي من التقييمات وبلاغات الزباين. أقرّ بكل وحدة وقول شنو لقيت وشنو غيّرت — هالسجل هو اللي يقراه المفتش والتشغيل.", flags: "ملاحظات مفتوحة", noFlags: "ما فيه ملاحظات مفتوحة", noFlagsBody: "زين. الملاحظات من التقييمات والبلاغات تنزل هني بموعد.", ackBy: d => `أقرّ قبل ${d}`, escalated: "متصعّدة", finding: "شنو لقيت", action: "شنو غيّرت", ack: "أقرّ", acked: "تم الإقرار",
  disputes: "بلاغات الزباين", disputeBy: d => `ردك قبل ${d}`, statement: "ردك", sendStatement: "أرسل الرد", sent: "انرسل الرد", sev: { critical: "حرج", high: "عالي", standard: "عادي" },
  hold: "إيقاف جودة", holdBody: "التشغيل وقّف النشر الجديد على هالفرع لين ينتهي التحقيق بالبلاغ. البقش المحجوزة تتسلّم عادي.",
  staff: "الشباب", staffNote: "ادعُ بالإيميل. الموظف يسلّم ويقبض الكاش؛ المدير ينشر ويعدّل؛ المحاسب يشوف التحويلات والكشوف؛ المالك كل شي.", invite: "ادعُ", inviteEmail: "الإيميل", role: "الدور", roles: { owner: "مالك", manager: "مدير", staff: "موظف", accountant: "محاسب" }, scope: "النطاق", allBranches: "كل الفروع", thisBranch: "هالفرع", pending: "مدعو", claimed: "نشط", revoked: "ملغي", revoke: "ألغِ", invited: "انرسلت الدعوة", sendInvite: "أرسل الدعوة", onShift: "على الشفت الحين", setShift: "حطه على الشفت",
  documents: "المستندات", docsNote: "المستندات المعتمدة اللي لها انتهاء تنشيّك يوميًا. قبل 30 يوم يجيك تذكير؛ وعند الانتهاء يتوقف النشر الجديد لين يُعتمد التجديد.",
  branch: "إعدادات الفرع", pauseRes: "وقّف الحجز", pauseBody: "خبّي بقش الليلة عن الزباين بدون ما تلغي المحجوزة.", pauseReason: "السبب", reasons: [["store_paused", "توقيف مؤقت"], ["staffing", "نقص موظفين"], ["unexpected_closure", "إغلاق مفاجئ"], ["quality_concern", "مشكلة جودة"]], pausedUntil: t => `موقوف لين ${t}`, resumeRes: "رجّع الحجز", closeDay: "مسكّر اليوم", hours: "أوقات الدوام", ramadan: "دوام رمضان", saved: "انحفظ",
  respond: "رد", responded: "انرسل الرد", responsePh: "اشكر الزبون أو وضّح — الزباين يشوفونه تحت تقييمهم.", moderated: "الرد قيد المراجعة",
  window_closing: "الوقت يقرب يخلص",
}};

/* ---------- Redeem (app.lookup_order → redeem_order; late grace; undo) ---------- */
function Redeem({ c, t, ar, store, market }) {
  const { orders, setOrders } = store;
  const [q, setQ] = React.useState(""); const [hit, setHit] = React.useState(null); const [toast, setToast] = React.useState(null); const [undo, setUndo] = React.useState(null);
  React.useEffect(() => { if (!undo) return; if (undo.left <= 0) { setUndo(null); return; } const id = setTimeout(() => setUndo(u => u && { ...u, left: u.left - 1 }), 1000); return () => clearTimeout(id); }, [undo]);
  const search = () => { const frag = q.replace(/\D/g, ""); const o = orders.find(x => frag && x.code.replace(/\D/g, "").endsWith(frag)); setHit(o ? o.code : "none"); };
  const order = orders.find(o => o.code === hit);
  const redeem = (code, mech) => { setOrders(os => os.map(o => o.code === code ? { ...o, status: "collected", mech } : o)); setToast(code + " · " + c.redeemed); setUndo({ code, left: 60 }); };
  const undoIt = () => { setOrders(os => os.map(o => o.code === undo.code ? { ...o, status: "waiting", mech: null } : o)); setUndo(null); setToast(c.undo); };
  return <React.Fragment>
    <H1 sub={c.redeemNote}>{c.redeem}</H1>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 360px", gap: 16, alignItems: "start" }}>
      <div style={{ display: "grid", gap: 12 }}>
        <Panel pad>
          <div style={{ display: "flex", gap: 8, alignItems: "end" }}>
            <Input label={c.lookup} icon="hash" value={q} onChange={e => { setQ(e.target.value); setHit(null); }} placeholder="4821" style={{ flex: 1, fontFamily: mono }} />
            <Button onClick={search} disabled={q.replace(/\D/g, "").length < 2}>{c.find}</Button>
            <Button variant="secondary" iconStart="scan-line" onClick={() => { const o = orders.find(x => x.status !== "collected"); if (o) { setQ(o.code); setHit(o.code); } }}>{c.scan}</Button></div>
          {hit === "none" ? <Banner tone="error" title={c.notFound} /> : null}
          {order ? <Card padded style={{ display: "grid", gap: 12, background: "var(--color-surface-canvas)" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
              <span style={{ display: "grid", gap: 2 }}><Num style={{ fontSize: "var(--text-title-lg-size)", fontWeight: 700, letterSpacing: ".08em" }}>{order.code}</Num>
                <span style={{ color: "var(--color-text-secondary)" }}>{ar ? order.customerAr : order.customer} · {order.qty} {ar ? "بقشة" : order.qty > 1 ? "bundles" : "bundle"} · <Num>{t.tonight} 21:30–{order.by}</Num></span></span>
              <Badge tone={order.status === "collected" ? "fresh" : order.status === "late" ? "urgent" : "time"} uppercase>{order.status === "collected" ? c.redeemed : order.status === "late" ? c.late : t.waitingS}</Badge></div>
            {order.cash ? <Banner tone="time" title={`${c.cashDue} · ${market === "EG" ? "EGP " + (30 * order.qty).toFixed(2) : "KD " + (2 * order.qty).toFixed(3)}`}>{c.collect}</Banner> : null}
            {order.status === "late" ? <Banner tone="time" title={c.late}>{c.lateGrace}</Banner> : null}
            {order.status === "collected" ? <Banner tone="fresh" title={c.alreadyDone}>{c.mech[order.mech || "code_shown"]} · <Num>22:11</Num></Banner>
              : <Button size="lg" onClick={() => redeem(order.code, q === order.code ? "qr_scanned" : "code_shown")}>{c.handOver}</Button>}</Card> : null}
        </Panel>
        <Panel title={c.recent}>{orders.filter(o => o.status === "collected").map(o => <OrderRow key={o.code} code={o.code} customer={ar ? o.customerAr : o.customer} quantity={o.qty > 1 ? o.qty : undefined} pickupBy={o.by} status="collected" statusLabel={c.mech[o.mech || "code_shown"]} bagLabel={ar ? "بقشة" : undefined} />)}</Panel>
      </div>
      <div style={{ display: "grid", gap: 12 }}>
        <Panel title={t.board}>{orders.filter(o => o.status !== "collected").map(o => <OrderRow key={o.code} code={o.code} customer={ar ? o.customerAr : o.customer} quantity={o.qty > 1 ? o.qty : undefined} pickupBy={o.by} status={o.status} statusLabel={o.status === "late" ? t.late : t.waitingS} actionLabel={t.handOver} bagLabel={ar ? "بقشة" : undefined} onCheckIn={() => redeem(o.code, "code_shown")} />)}
          {!orders.some(o => o.status !== "collected") ? <div style={{ padding: 16 }}><EmptyState icon="circle-check" title={t.done} body={ar ? "كل الطلبات تسلّمت." : "Every order tonight has been handed over."} /></div> : null}</Panel>
      </div></div>
    {toast && <Toast tone="success" action={undo ? <button onClick={undoIt} style={{ all: "unset", cursor: "pointer" }}>{c.undoIn(undo.left)}</button> : undefined} onClose={() => setToast(null)}>{toast}</Toast>}
  </React.Fragment>;
}

/* ---------- Schedules (public.listing_schedule) ---------- */
function Schedules({ c, t, ar, store }) {
  const { presets, schedules, setSchedules } = store;
  const [editing, setEditing] = React.useState(null); const [toast, setToast] = React.useState(null);
  const DAYS = [["sat", "Sat", "السبت"], ["sun", "Sun", "الأحد"], ["mon", "Mon", "الاثنين"], ["tue", "Tue", "الثلاثاء"], ["wed", "Wed", "الأربعاء"], ["thu", "Thu", "الخميس"], ["fri", "Fri", "الجمعة"]];
  const blank = () => ({ id: "s" + Math.random().toString(36).slice(2, 6), template: presets[0]?.id, days: ["sat", "sun", "mon", "tue", "wed", "thu"], window: "21:30–22:30", qty: 6, lead: 150, ramadan: true, active: true, isNew: true });
  const save = () => { setSchedules(ss => editing.isNew ? [...ss, { ...editing, isNew: false }] : ss.map(s => s.id === editing.id ? editing : s)); setEditing(null); setToast(c.saveSched); };
  const set = (k, v) => setEditing({ ...editing, [k]: v });
  return <React.Fragment>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}><H1 sub={c.schedulesNote}>{c.schedules}</H1><Button iconStart="plus" onClick={() => setEditing(blank())}>{c.addSchedule}</Button></div>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill,minmax(300px,1fr))", gap: 12 }}>
      {schedules.map(s => { const p = presets.find(x => x.id === s.template) || presets[0]; return <Card key={s.id} padded style={{ display: "grid", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}><strong style={{ fontWeight: 600 }}>{ar ? p.ar : p.en}</strong><Badge tone={s.active ? "fresh" : "neutral"}>{s.active ? c.active : c.paused}</Badge></div>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{s.days.map(d => DAYS.find(x => x[0] === d)[ar ? 2 : 1]).join(ar ? "، " : ", ")}</span>
        <Num style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{s.qty} × · {s.window} · −{s.lead} min</Num>
        {s.ramadan ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)", display: "flex", gap: 6, alignItems: "center" }}><Icon name="moon" size={13} />{c.ramadanAffected}</span> : null}
        <div style={{ display: "flex", gap: 8 }}><Button size="sm" variant="secondary" onClick={() => setEditing({ ...s })}>{c.edit}</Button>
          <Button size="sm" variant="ghost" onClick={() => setSchedules(ss => ss.map(x => x.id === s.id ? { ...x, active: !x.active } : x))}>{s.active ? c.pause : c.resume}</Button></div></Card>; })}
      {!schedules.length ? <EmptyState icon="calendar" title={c.schedules} body={c.schedulesNote} actionLabel={c.addSchedule} onAction={() => setEditing(blank())} /> : null}
    </div>
    {editing ? <div style={{ position: "fixed", inset: 0, zIndex: 60, display: "grid", placeItems: "center", padding: 24, background: "var(--color-surface-overlay)" }} dir={t.dir}>
      <div style={{ width: "100%", maxWidth: 520, background: "var(--color-surface-raised)", borderRadius: "var(--radius-card)", border: "1px solid var(--color-border-subtle)", boxShadow: "var(--elevation-raised)", padding: 20, display: "grid", gap: 14 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><strong style={{ fontSize: "var(--text-title-size)", fontWeight: 600 }}>{c.addSchedule}</strong><IconButton icon="x" label={c.cancel} onClick={() => setEditing(null)} /></div>
        <Field label={c.template}><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{presets.map(p => <Chip key={p.id} selected={editing.template === p.id} onClick={() => set("template", p.id)}>{ar ? p.ar : p.en}</Chip>)}</div></Field>
        <Field label={c.nights}><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{DAYS.map(([k, en, arn]) => <Chip key={k} selected={editing.days.includes(k)} onClick={() => set("days", editing.days.includes(k) ? editing.days.filter(x => x !== k) : [...editing.days, k])}>{ar ? arn : en}</Chip>)}</div></Field>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}>
          <Field label={c.window}><Input value={editing.window} onChange={e => set("window", e.target.value)} style={{ fontFamily: mono }} /></Field>
          <Field label={c.qty}><div><Stepper value={editing.qty} min={1} max={40} onChange={v => set("qty", v)} /></div></Field>
          <Field label={c.lead}><Input value={String(editing.lead)} onChange={e => set("lead", Number(e.target.value) || 0)} suffix="min" /></Field></div>
        <ListRow icon="moon" label={c.ramadanAffected} value={<Switch checked={editing.ramadan} onChange={v => set("ramadan", v)} label={c.ramadanAffected} />} />
        <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}><Button variant="secondary" onClick={() => setEditing(null)}>{c.cancel}</Button><Button onClick={save}>{c.saveSched}</Button></div></div></div> : null}
    {toast && <Toast tone="success" onClose={() => setToast(null)}>{toast}</Toast>}
  </React.Fragment>;
}

/* ---------- Cash (EG: app.collect_cash, app.submit_cash_reconciliation, app.cash_liability) ---------- */
function Cash({ c, t, ar, store }) {
  const { orders, setOrders } = store;
  const [reported, setReported] = React.useState(""); const [done, setDone] = React.useState(false); const [toast, setToast] = React.useState(null);
  const cashOrders = orders.filter(o => o.cash);
  const expected = cashOrders.filter(o => o.status === "collected").reduce((n, o) => n + 30 * o.qty, 0);
  const collect = (code, amt) => { setOrders(os => os.map(o => o.code === code ? { ...o, status: "collected", collectedMinor: amt } : o)); setToast(code + " · " + c.collected); };
  const cols = "auto minmax(0,1fr) auto auto auto";
  return <React.Fragment>
    <H1 sub={c.cashNote}>{c.cash}</H1>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3,minmax(0,1fr))", gap: 12 }}>
      <PartnerStat label={c.expected} value={`EGP ${expected.toFixed(2)}`} sub={t.tonight} icon="banknote" />
      <PartnerStat label={c.liability} value="EGP 84.00" sub={c.liabilityBody} icon="wallet" tone="urgent" />
      <PartnerStat label={c.eod} value={done ? c.eodDone : "—"} sub={done ? `${c.reported} EGP ${Number(reported).toFixed(2)}` : c.eodBody} icon="clipboard-check" tone={done ? "fresh" : "neutral"} /></div>
    <Panel title={t.board}>
      {cashOrders.map(o => <div key={o.code} style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gridTemplateColumns: cols, gap: 14, alignItems: "center" }}>
        <Num style={{ fontWeight: 700 }}>{o.code}</Num><span>{ar ? o.customerAr : o.customer} · {o.qty}×</span>
        <Num style={{ color: "var(--color-text-secondary)" }}>EGP {(30 * o.qty).toFixed(2)}</Num>
        <Badge tone={o.status === "collected" ? "fresh" : "time"}>{o.status === "collected" ? c.collected : c.expected}</Badge>
        {o.status === "collected" ? <span /> : <div style={{ display: "flex", gap: 6 }}><Button size="sm" onClick={() => collect(o.code, 30 * o.qty)}>{c.collect} · EGP {(30 * o.qty).toFixed(2)}</Button><Button size="sm" variant="ghost" onClick={() => collect(o.code, 30 * o.qty - 5)}>{c.short} 5</Button></div>}</div>)}
      {!cashOrders.length ? <div style={{ padding: 16 }}><EmptyState icon="banknote" title={c.cash} body={c.cashNote} /></div> : null}</Panel>
    <Panel title={c.eod} pad>
      <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{c.eodBody}</p>
      <div style={{ display: "grid", gridTemplateColumns: "200px 1fr auto", gap: 12, alignItems: "end" }}>
        <Field label={c.reported}><Input value={reported} onChange={e => setReported(e.target.value)} suffix="EGP" placeholder={expected.toFixed(2)} /></Field>
        <Field label={c.note}><Input /></Field>
        <Button disabled={!reported || done} onClick={() => { setDone(true); setToast(c.eodDone); }}>{c.submitEod}</Button></div>
      {reported && Math.abs(Number(reported) - expected) > 20 ? <Banner tone="time" title={`${c.short} · EGP ${Math.abs(Number(reported) - expected).toFixed(2)}`}>{c.eodBody}</Banner> : null}</Panel>
    {toast && <Toast tone="success" onClose={() => setToast(null)}>{toast}</Toast>}
  </React.Fragment>;
}

/* ---------- Quality (public.quality_flag → app.acknowledge_flag; public.dispute partner_statement; quality_hold) ---------- */
function Quality({ c, t, ar, store, hold }) {
  const { flags, setFlags, disputes, setDisputes } = store;
  const [open, setOpen] = React.useState(null); const [finding, setFinding] = React.useState(""); const [action, setAction] = React.useState(""); const [toast, setToast] = React.useState(null);
  const [stmt, setStmt] = React.useState({});
  const ack = id => { setFlags(fs => fs.map(f => f.id === id ? { ...f, acked: true, finding, action } : f)); setOpen(null); setFinding(""); setAction(""); setToast(c.acked); };
  return <React.Fragment>
    <H1 sub={c.qualityNote}>{c.quality}</H1>
    {hold ? <Banner tone="error" title={c.hold}>{c.holdBody}</Banner> : null}
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: 16, alignItems: "start" }}>
      <Panel title={c.flags}>
        {flags.filter(f => !f.acked).map(f => <div key={f.id} style={{ padding: "14px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
            <span style={{ display: "flex", gap: 8, alignItems: "center" }}><Badge tone={f.severity === "critical" ? "error" : f.severity === "high" ? "urgent" : "time"} uppercase>{c.sev[f.severity]}</Badge><strong style={{ fontWeight: 600 }}>{ar ? f.catAr : f.cat}</strong></span>
            <span style={{ fontSize: "var(--text-caption-size)", color: f.escalated ? "var(--color-error)" : "var(--color-text-secondary)" }}>{f.escalated ? c.escalated : c.ackBy(f.deadline)}</span></div>
          <span style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{ar ? f.ar : f.en} · <Num>{f.order}</Num></span>
          {open === f.id ? <div style={{ display: "grid", gap: 10 }}>
            <Field label={c.finding}><Input value={finding} onChange={e => setFinding(e.target.value)} /></Field>
            <Field label={c.action}><Input value={action} onChange={e => setAction(e.target.value)} /></Field>
            <div style={{ display: "flex", gap: 8 }}><Button size="sm" disabled={!finding.trim() || !action.trim()} onClick={() => ack(f.id)}>{c.ack}</Button><Button size="sm" variant="ghost" onClick={() => setOpen(null)}>{t.cancelEdit}</Button></div></div>
            : <div><Button size="sm" variant="secondary" onClick={() => setOpen(f.id)}>{c.ack}</Button></div>}</div>)}
        {!flags.some(f => !f.acked) ? <div style={{ padding: 16 }}><EmptyState icon="circle-check" title={c.noFlags} body={c.noFlagsBody} /></div> : null}
        {flags.filter(f => f.acked).map(f => <div key={f.id} style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gap: 4, opacity: .75 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><Badge tone="fresh">{c.acked}</Badge><strong style={{ fontWeight: 600 }}>{ar ? f.catAr : f.cat}</strong></div>
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{c.finding}: {f.finding} · {c.action}: {f.action}</span></div>)}
      </Panel>
      <Panel title={c.disputes}>
        {disputes.map(d => <div key={d.ref} style={{ padding: "14px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}><span style={{ display: "flex", gap: 8, alignItems: "center" }}><Num style={{ fontWeight: 700 }}>{d.ref}</Num><Badge tone={d.severity === "critical" ? "error" : "time"} uppercase>{c.sev[d.severity]}</Badge></span>
            <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{d.sent ? c.sent : c.disputeBy(d.deadline)}</span></div>
          <span style={{ color: "var(--color-text-secondary)", lineHeight: 1.7 }}>{ar ? d.ar : d.en} · <Num>{d.order}</Num></span>
          {d.sent ? <span style={{ fontSize: "var(--text-caption-size)" }}>{d.sent}</span> : <div style={{ display: "grid", gap: 8 }}>
            <textarea value={stmt[d.ref] || ""} onChange={e => setStmt({ ...stmt, [d.ref]: e.target.value })} rows={3} placeholder={c.statement} style={{ padding: 10, borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", font: "inherit", resize: "vertical" }} />
            <div><Button size="sm" disabled={!(stmt[d.ref] || "").trim()} onClick={() => { setDisputes(ds => ds.map(x => x.ref === d.ref ? { ...x, sent: stmt[d.ref] } : x)); setToast(c.sent); }}>{c.sendStatement}</Button></div></div>}</div>)}
      </Panel></div>
    {toast && <Toast tone="success" onClose={() => setToast(null)}>{toast}</Toast>}
  </React.Fragment>;
}

/* ---------- Staff (public.staff_assignment: invite_staff_by_email, revoke_staff, set_active_shift) ---------- */
function Staff({ c, t, ar, store }) {
  const { staff, setStaff } = store;
  const [email, setEmail] = React.useState(""); const [role, setRole] = React.useState("staff"); const [wide, setWide] = React.useState(false); const [toast, setToast] = React.useState(null);
  const ok = /^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(email);
  const invite = () => { setStaff(ss => [...ss, { id: "u" + Date.now(), en: email, ar: email, email, role, wide, state: "pending" }]); setEmail(""); setToast(c.invited); };
  return <React.Fragment>
    <H1 sub={c.staffNote}>{c.staff}</H1>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 340px", gap: 16, alignItems: "start" }}>
      <Panel title={t.staff}>
        {staff.map(s => <div key={s.id} style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gridTemplateColumns: "auto minmax(0,1fr) auto auto auto", gap: 12, alignItems: "center" }}>
          <Icon name="user" size={18} style={{ color: "var(--color-text-secondary)" }} />
          <span style={{ display: "grid", minWidth: 0 }}><strong style={{ fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{ar ? s.ar : s.en}</strong><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{c.roles[s.role]} · {s.wide ? c.allBranches : c.thisBranch}{s.shift ? " · " + c.onShift : ""}</span></span>
          <Badge tone={s.state === "claimed" ? "fresh" : s.state === "pending" ? "time" : "neutral"}>{c[s.state]}</Badge>
          {s.role === "staff" && s.state === "claimed" && !s.shift ? <Button size="sm" variant="ghost" onClick={() => setStaff(ss => ss.map(x => ({ ...x, shift: x.id === s.id })))}>{c.setShift}</Button> : <span />}
          {s.role !== "owner" && s.state !== "revoked" ? <Button size="sm" variant="ghost" onClick={() => setStaff(ss => ss.map(x => x.id === s.id ? { ...x, state: "revoked", shift: false } : x))}>{c.revoke}</Button> : <span />}</div>)}
      </Panel>
      <Panel title={c.invite} pad>
        <Field label={c.inviteEmail}><Input icon="mail" value={email} onChange={e => setEmail(e.target.value)} placeholder="name@kitchen.com" /></Field>
        <Field label={c.role}><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{["manager", "staff", "accountant"].map(r => <Chip key={r} selected={role === r} onClick={() => setRole(r)}>{c.roles[r]}</Chip>)}</div></Field>
        <Field label={c.scope}><SegmentedControl value={wide ? "all" : "one"} onChange={v => setWide(v === "all")} options={[{ value: "one", label: c.thisBranch }, { value: "all", label: c.allBranches }]} /></Field>
        <Button disabled={!ok} onClick={invite} iconStart="send">{c.sendInvite}</Button></Panel></div>
    {toast && <Toast tone="success" onClose={() => setToast(null)}>{toast}</Toast>}
  </React.Fragment>;
}

/* ---------- Documents in the console (same list; expiry + publishing-block banner) ---------- */
function DocumentsView({ c, oc, ar, market, docs, setDocs, expired }) {
  const soon = docs.find(d => d.status === "approved" && d.expiry && d.soon);
  return <React.Fragment>
    <H1 sub={c.docsNote}>{c.documents}</H1>
    {expired ? <Banner tone="error" title={oc.docExpired(ar ? docs[1].ar : docs[1].en)}>{oc.docExpiredBody}</Banner>
      : soon ? <Banner tone="time" title={oc.docExpiring(ar ? soon.ar : soon.en, 21)} /> : null}
    <window.PartnerOnboarding.Documents c={oc} ar={ar} market={market} docs={docs} setDocs={setDocs} embedded />
  </React.Fragment>;
}

/* ---------- Branch settings (pause_store_reservations / resume, set_hours) ---------- */
function BranchSettings({ c, oc, t, ar, market, store, setStore, paused, setPaused }) {
  const [reason, setReason] = React.useState("store_paused"); const [toast, setToast] = React.useState(null);
  return <React.Fragment>
    <H1>{c.branch}</H1>
    <Panel title={c.pauseRes} pad>
      <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{c.pauseBody}</p>
      {paused ? <Banner tone="time" title={c.pausedUntil("23:59")} action={<Button size="sm" variant="secondary" onClick={() => { setPaused(false); setToast(c.resumeRes); }}>{c.resumeRes}</Button>}>{ar ? c.reasons.find(r => r[0] === reason)[1] : c.reasons.find(r => r[0] === reason)[1]}</Banner>
        : <div style={{ display: "flex", gap: 8, alignItems: "end", flexWrap: "wrap" }}><Field label={c.pauseReason}><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{c.reasons.map(([k, l]) => <Chip key={k} selected={reason === k} onClick={() => setReason(k)}>{l}</Chip>)}</div></Field>
          <Button variant="secondary" iconStart="pause" onClick={() => { setPaused(true); setToast(c.pausedUntil("23:59")); }}>{c.pauseRes}</Button></div>}</Panel>
    <Panel title={c.hours} pad>
      <window.PartnerOnboarding.StoreSetup c={oc} ar={ar} market={market} store={store} setStore={setStore} onSave={() => setToast(c.saved)} embedded /></Panel>
    {toast && <Toast tone="success" onClose={() => setToast(null)}>{toast}</Toast>}
  </React.Fragment>;
}

Object.assign(window, { PartnerConsole: { COPY, Redeem, Schedules, Cash, Quality, Staff, DocumentsView, BranchSettings } });
})();
