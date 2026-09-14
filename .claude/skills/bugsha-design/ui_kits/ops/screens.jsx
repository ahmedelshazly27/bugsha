// Ops console — views. Each view names the app.* RPC it mirrors. English-only: this is the internal tool.
(function(){
const { Button, IconButton, Icon, Input, SegmentedControl, Badge, Card, Banner, Chip, Switch, ListRow, Toast, EmptyState, PartnerStat, Dialog, Stepper } = window.SurplusKWDesignSystem_97ec90;
const D = window.OPS;
const mono = "var(--font-plex-mono), monospace";
const Num = ({ children, ...r }) => <span className="ds-numeric" dir="ltr" style={{ fontFamily: mono }} {...r}>{children}</span>;
const H1 = ({ children, sub, action }) => <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", gap: 16, flexWrap: "wrap" }}>
  <div style={{ display: "grid", gap: 6 }}><h1 style={{ fontSize: "var(--text-title-lg-size)", lineHeight: 1.25, fontWeight: 600, margin: 0 }}>{children}</h1>
    {sub && <p style={{ margin: 0, color: "var(--color-text-secondary)", lineHeight: 1.7, maxWidth: "76ch" }}>{sub}</p>}</div>{action}</div>;
const Panel = ({ title, action, children, pad, style }) => <Card padded={false} style={style}>
  {(title || action) && <div style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "flex", justifyContent: "space-between", alignItems: "center", gap: 12 }}>
    <strong style={{ fontSize: "var(--text-headline-size)", fontWeight: 600 }}>{title}</strong>{action}</div>}
  <div style={pad ? { padding: 16, display: "grid", gap: 12 } : undefined}>{children}</div></Card>;
const Th = ({ children }) => <span style={{ fontSize: "var(--text-micro-size)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase", color: "var(--color-text-tertiary)", whiteSpace: "nowrap" }}>{children}</span>;
const Field = ({ label, children, hint }) => <label style={{ display: "grid", gap: 6, minWidth: 0 }}><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{label}</span>{children}{hint ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{hint}</span> : null}</label>;
const Select = ({ value, onChange, options, style }) => <select value={value} onChange={e => onChange(e.target.value)} style={{ minHeight: "var(--size-control-md)", padding: "0 12px", borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", color: "inherit", font: "inherit", ...style }}>
  {options.map(o => Array.isArray(o) ? <option key={o[0]} value={o[0]}>{o[1]}</option> : <option key={o} value={o}>{o}</option>)}</select>;
const Textarea = props => <textarea rows={3} {...props} style={{ padding: 10, borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", font: "inherit", resize: "vertical", ...(props.style || {}) }} />;
/** Data table: cols = [[label, gridTrack]], rows = arrays of nodes. onRow makes rows clickable. */
function Table({ cols, rows, onRow, empty }) {
  const track = cols.map(c => c[1] || "minmax(80px,1fr)").join(" ");
  return <div style={{ overflowX: "auto" }}>
    <div style={{ padding: "10px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gridTemplateColumns: track, gap: 14 }}>{cols.map(c => <Th key={c[0]}>{c[0]}</Th>)}</div>
    {rows.map((r, i) => <div key={i} onClick={onRow ? () => onRow(i) : undefined} style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gridTemplateColumns: track, gap: 14, alignItems: "center", fontSize: "var(--text-label-size)", cursor: onRow ? "pointer" : "default" }}>
      {r.map((c, k) => <span key={k} style={{ minWidth: 0, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{c}</span>)}</div>)}
    {!rows.length ? <div style={{ padding: 16 }}><EmptyState icon="inbox" title={empty || "Nothing here"} /></div> : null}</div>;
}
const STATUS_TONE = { active: "fresh", applied: "time", documents_pending: "time", under_review: "time", approved: "time", contract_pending: "time", contract_signed: "time", store_setup: "time", first_listing_pending: "time", rejected: "error", suspended: "error", lead: "neutral" };
const ORDER_TONE = { held: "urgent", reserved: "time", redeemed: "fresh", no_show: "error", cancelled_consumer: "neutral", cancelled_partner: "error", refunded: "neutral" };
const label = s => s.replace(/_/g, " ");
/** Action modal: reason code (from public.reason_code) + free text + optional four-eyes note. */
function ActionModal({ title, body, reasons, needsText, fourEyes, confirm = "Confirm", tone = "primary", onConfirm, onClose, children }) {
  const [reason, setReason] = React.useState(reasons ? reasons[0][0] : null); const [text, setText] = React.useState("");
  return <div style={{ position: "fixed", inset: 0, zIndex: 60, display: "grid", placeItems: "center", padding: 24, background: "var(--color-surface-overlay)" }}>
    <div style={{ width: "100%", maxWidth: 520, background: "var(--color-surface-raised)", borderRadius: "var(--radius-card)", border: "1px solid var(--color-border-subtle)", boxShadow: "var(--elevation-raised)", padding: 20, display: "grid", gap: 14 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}><strong style={{ fontSize: "var(--text-title-size)", fontWeight: 600 }}>{title}</strong><IconButton icon="x" label="Close" onClick={onClose} /></div>
      {body ? <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{body}</p> : null}
      {children}
      {reasons ? <Field label="Reason code"><div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{reasons.map(([k, l]) => <Chip key={k} selected={reason === k} onClick={() => setReason(k)}>{l}</Chip>)}</div></Field> : null}
      {needsText !== false ? <Field label="Justification (written to audit_log)"><Textarea value={text} onChange={e => setText(e.target.value)} placeholder="Why — a person reads this later." /></Field> : null}
      {fourEyes ? <Banner tone="info" title="Four-eyes">This change needs a second approver before it applies. It will sit in Pending approvals until then.</Banner> : null}
      <div style={{ display: "flex", gap: 8, justifyContent: "flex-end" }}><Button variant="secondary" onClick={onClose}>Cancel</Button><Button variant={tone} disabled={needsText !== false && text.trim().length < 6} onClick={() => onConfirm({ reason, text })}>{confirm}</Button></div></div></div>;
}

/* ---------- Live (app.ops_live_dashboard, app.ops_partner_health, app.ops_jobs) ---------- */
function Live({ market, go, role }) {
  const live = market === "KW" ? { listings: 14, bags: 61, orders: 38, gmv: "KD 96.500", disputes: 2, paused: 2, jobs: 1 } : { listings: 6, bags: 27, orders: 19, gmv: "EGP 1,140.00", disputes: 1, paused: 0, jobs: 1 };
  const health = D.PARTNERS.filter(p => p.market === market && p.health.length).flatMap(p => p.health.map(h => ({ ...h, partner: p })));
  return <React.Fragment>
    <H1 sub={`Tonight in ${market === "KW" ? "Kuwait" : "Egypt"} — live listings, money moving, and what needs a person.`}>Live</H1>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 12 }}>
      <PartnerStat label="Live listings" value={String(live.listings)} sub={`${live.bags} bags remaining`} icon="package" tone="fresh" />
      <PartnerStat label="Orders today" value={String(live.orders)} sub="reserved + redeemed" icon="shopping-bag" />
      <PartnerStat label="GMV today" value={live.gmv} sub="captured, before commission" icon="banknote" />
      <PartnerStat label="Open disputes" value={String(live.disputes)} sub={`${live.paused} paused stores · ${live.jobs} job alerting`} icon="shield-alert" tone={live.disputes ? "urgent" : "neutral"} /></div>
    <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1.2fr) minmax(0,1fr)", gap: 16, alignItems: "start" }}>
      <Panel title="Needs a person">
        {D.DISPUTES.filter(d => d.market === market && !d.resolution && (d.severity === "critical" || !d.owner)).map(d => <ListRow key={d.ref} icon="flag" label={<span><Num>{d.ref}</Num> · {label(d.category)} · {d.consumer}</span>} value={<Badge tone={d.severity === "critical" ? "error" : "time"} uppercase>{d.severity}{d.owner ? "" : " · unassigned"}</Badge>} chevron onClick={() => go("disputes")} />)}
        {health.map((h, i) => <ListRow key={i} icon="activity" label={<span>{h.partner.trading} · {label(h.kind)}</span>} value={<Badge tone={h.severity >= 3 ? "error" : "time"}>sev {h.severity}</Badge>} chevron onClick={() => go("partners", h.partner.id)} />)}
        {D.JOBS.filter(j => j.alerting).map(j => <ListRow key={j.name} icon="zap" label={<span><Num>{j.name}</Num> · {j.error}</span>} value={<Badge tone="error">job</Badge>} chevron onClick={() => go("jobs")} />)}
        {D.REQUESTS.filter(r => r.market === market && r.status === "new").length ? <ListRow icon="inbox" label={`${D.REQUESTS.filter(r => r.market === market && r.status === "new").length} new partner requests`} value={<Badge tone="time">codes to issue</Badge>} chevron onClick={() => go("requests")} /> : null}
        {D.MODERATION.length && market === "KW" ? <ListRow icon="eye" label={`${D.MODERATION.length} listings in moderation`} value={<Badge tone="time">flagged copy</Badge>} chevron onClick={() => go("moderation")} /> : null}
        {D.PENDING.length && role === "admin" ? <ListRow icon="scale" label={`${D.PENDING.length} config change awaiting second approval`} value={<Badge tone="time">four-eyes</Badge>} chevron onClick={() => go("config")} /> : null}
      </Panel>
      <div style={{ display: "grid", gap: 12 }}>
        <Panel title="Onboarding funnel (30 days)">
          {["applied", "documents_pending", "under_review", "contract_pending", "store_setup", "first_listing_pending", "active"].map(st => { const n = D.PARTNERS.filter(p => p.market === market && p.status === st).length + (st === "active" ? 3 : st === "applied" ? 2 : 0); return <div key={st} style={{ display: "grid", gridTemplateColumns: "160px 1fr 32px", gap: 10, alignItems: "center", padding: "6px 16px" }}>
            <span style={{ fontSize: "var(--text-caption-size)" }}>{label(st)}</span><span style={{ height: 8, borderRadius: 4, background: "var(--color-surface-sunken)", overflow: "hidden" }}><span style={{ display: "block", height: "100%", width: `${Math.min(100, n * 18)}%`, background: st === "active" ? "var(--color-brand-primary)" : "var(--color-border-strong)" }} /></span><Num style={{ fontSize: "var(--text-caption-size)" }}>{n}</Num></div>; })}
          <div style={{ padding: "8px 16px 12px" }}><Button size="sm" variant="ghost" onClick={() => go("partners")}>All partners</Button></div></Panel>
        <Panel title="Supply vs demand · last 7 nights" pad>
          <div style={{ display: "flex", gap: 6, alignItems: "flex-end", height: 96 }}>{[[34, 28], [41, 40], [38, 35], [52, 51], [61, 58], [66, 66], [61, 38]].map(([s, d], i) => <div key={i} style={{ flex: 1, display: "flex", gap: 2, alignItems: "flex-end", height: 96 }}>
            <span style={{ flex: 1, height: s * 1.4, background: "var(--color-border-default)", borderRadius: 2 }} /><span style={{ flex: 1, height: d * 1.4, background: "var(--color-brand-primary)", borderRadius: 2 }} /></div>)}</div>
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>Grey: bags listed · Violet: bags sold. Tonight is still open.</span></Panel></div></div>
  </React.Fragment>;
}

/* ---------- Partner requests & invite codes (public.partner_request, public.partner_invite_code — added by this repo) ---------- */
function Requests({ market, state, setState, toast }) {
  const [tab, setTab] = React.useState("requests"); const [sel, setSel] = React.useState(null); const [modal, setModal] = React.useState(null);
  const reqs = state.requests.filter(r => r.market === market); const codes = state.codes.filter(c => c.market === market);
  const r = state.requests.find(x => x.id === sel);
  const gen = () => "BG-" + Math.random().toString(36).slice(2, 6).toUpperCase() + "-" + Math.random().toString(36).slice(2, 6).toUpperCase();
  const issue = ({ text }) => { const code = gen(); setState(s => ({ ...s, requests: s.requests.map(x => x.id === r.id ? { ...x, status: "code_issued", code } : x), codes: [{ code, to: r.trading, email: r.email, market: r.market, by: "You", at: "now", expires: "28 Sep", status: "issued" }, ...s.codes] })); setModal(null); toast(`Code ${code} issued and emailed to ${r.email}`); };
  const decline = ({ reason, text }) => { setState(s => ({ ...s, requests: s.requests.map(x => x.id === r.id ? { ...x, status: "declined", declineReason: reason } : x) })); setModal(null); toast("Request declined"); };
  const revoke = (code) => setState(s => ({ ...s, codes: s.codes.map(c => c.code === code ? { ...c, status: "revoked", revokedReason: "Revoked by ops" } : c) }));
  const tone = { new: "time", contacted: "info", code_issued: "fresh", declined: "neutral", issued: "time", redeemed: "fresh", expired: "neutral", revoked: "error" };
  return <React.Fragment>
    <H1 sub="Kitchens ask for a partner code on the website or in the partner app. Ops reviews the request, issues a code (14-day expiry, single use) and the code unlocks sign-up. Nothing else opens a partner account." action={<SegmentedControl value={tab} onChange={setTab} options={[{ value: "requests", label: `Requests · ${reqs.filter(x => x.status === "new").length} new` }, { value: "codes", label: `Codes · ${codes.length}` }]} />}>Partner requests & codes</H1>
    {tab === "requests" ? <div style={{ display: "grid", gridTemplateColumns: r ? "minmax(0,1fr) 400px" : "1fr", gap: 16, alignItems: "start" }}>
      <Panel><Table cols={[["Kitchen", "minmax(160px,1.4fr)"], ["City"], ["Contact", "minmax(140px,1.2fr)"], ["Branches", "80px"], ["Surplus / night", "110px"], ["Source", "80px"], ["Received", "110px"], ["Status", "110px"]]}
        rows={reqs.map(x => [<strong>{x.trading}</strong>, x.city, <span>{x.contact} · <Num>{x.phone}</Num></span>, <Num>{x.branches}</Num>, <Num>{x.surplus}</Num>, x.source, <Num>{x.at}</Num>, <Badge tone={tone[x.status]}>{label(x.status)}</Badge>])} onRow={i => setSel(reqs[i].id)} empty="No requests" /></Panel>
      {r ? <Panel title={r.trading} action={<IconButton icon="x" label="Close" onClick={() => setSel(null)} />} pad>
        <div style={{ display: "grid", gap: 4, fontSize: "var(--text-label-size)" }}>
          {[["Legal name", r.legal], ["Market · city", `${r.market} · ${r.city}`], ["Categories", r.cats.join(", ")], ["Contact", `${r.contact} · ${r.phone} · ${r.email}`], ["Branches", r.branches], ["Surplus on a typical night", r.surplus], ["Heard about us", r.referral || "—"], ["Received", `${r.at} · ${r.source}`]].map(([k, v]) => <div key={k} style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 8 }}><span style={{ color: "var(--color-text-secondary)" }}>{k}</span><span>{v}</span></div>)}</div>
        {r.status === "code_issued" ? <Banner tone="fresh" title={`Code ${r.code} issued`}>Sign-up with this code pre-fills the legal and trading name. It expires in 14 days and can be used once.</Banner> : null}
        {r.status === "declined" ? <Banner tone="info" title={`Declined · ${r.declineReason}`} /> : null}
        {r.status === "new" || r.status === "contacted" ? <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          <Button iconStart="key" onClick={() => setModal("issue")}>Issue partner code</Button>
          <Button variant="secondary" onClick={() => { setState(s => ({ ...s, requests: s.requests.map(x => x.id === r.id ? { ...x, status: "contacted" } : x) })); toast("Marked as contacted"); }}>Mark contacted</Button>
          <Button variant="ghost" onClick={() => setModal("decline")}>Decline</Button></div> : null}
      </Panel> : null}</div>
      : <Panel><Table cols={[["Code", "150px"], ["Issued to", "minmax(150px,1.2fr)"], ["Email", "minmax(160px,1.2fr)"], ["Issued by", "110px"], ["Issued", "110px"], ["Expires", "90px"], ["Status", "110px"], ["", "150px"]]}
        rows={codes.map(c => [<Num style={{ fontWeight: 700 }}>{c.code}</Num>, c.to, c.email, c.by, <Num>{c.at}</Num>, <Num>{c.expires}</Num>, <Badge tone={tone[c.status]}>{c.status}{c.redeemedAt ? " · " + c.redeemedAt : ""}</Badge>,
          c.status === "issued" ? <span style={{ display: "flex", gap: 6 }}><Button size="sm" variant="ghost" iconStart="send" onClick={() => toast("Email resent")}>Resend</Button><Button size="sm" variant="ghost" onClick={() => { revoke(c.code); toast("Code revoked"); }}>Revoke</Button></span> : <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{c.revokedReason || ""}</span>])} /></Panel>}
    {modal === "issue" ? <ActionModal title={`Issue a partner code to ${r.trading}`} body={`An email goes to ${r.email} with the code and the sign-up link. The code is tied to this request, so sign-up pre-fills the kitchen's details.`} confirm="Issue and email" onConfirm={issue} onClose={() => setModal(null)}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><Field label="Expires in"><Select value="14" onChange={() => {}} options={[["7", "7 days"], ["14", "14 days"], ["30", "30 days"]]} /></Field><Field label="Owner"><Select value="me" onChange={() => {}} options={[["me", "You"], ["sara", "Sara M."], ["ahmed", "Ahmed E."]]} /></Field></div></ActionModal> : null}
    {modal === "decline" ? <ActionModal title={`Decline ${r.trading}`} reasons={[["category_not_eligible", "Category not eligible"], ["outside_launch_area", "Outside launch area"], ["duplicate", "Duplicate request"], ["no_response", "No response"], ["other", "Other"]]} confirm="Decline" tone="danger" onConfirm={decline} onClose={() => setModal(null)} /> : null}
  </React.Fragment>;
}

/* ---------- Partners (app.ops_partners, app.ops_onboarding_funnel) ---------- */
function Partners({ market, go }) {
  const [status, setStatus] = React.useState("all");
  const list = D.PARTNERS.filter(p => p.market === market && (status === "all" || p.status === status));
  const stages = ["all", "applied", "documents_pending", "under_review", "contract_pending", "store_setup", "first_listing_pending", "active", "suspended", "rejected"];
  return <React.Fragment>
    <H1 sub="Every partner in this market with where they are in onboarding. Click through for documents, contract, staff, history and the actions.">Partners</H1>
    <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{stages.map(s => <Chip key={s} selected={status === s} count={s === "all" ? D.PARTNERS.filter(p => p.market === market).length : D.PARTNERS.filter(p => p.market === market && p.status === s).length || undefined} onClick={() => setStatus(s)}>{label(s)}</Chip>)}</div>
    <Panel><Table cols={[["Partner", "minmax(180px,1.4fr)"], ["City", "110px"], ["Categories", "110px"], ["Status", "150px"], ["Branches", "80px"], ["Reliability", "90px"], ["Owner", "90px"], ["Created", "80px"]]}
      rows={list.map(p => [<strong>{p.trading}</strong>, p.city, p.cats.join(", "), <Badge tone={STATUS_TONE[p.status]}>{label(p.status)}</Badge>, <Num>{p.branches}</Num>, p.reliability != null ? <Num>{(p.reliability * 100).toFixed(0)}%</Num> : "—", p.owner, <Num>{p.created}</Num>])} onRow={i => go("partners", list[i].id)} empty="No partners at this stage" /></Panel>
  </React.Fragment>;
}

/* ---------- Partner detail (app.ops_partner_detail + ops_verify_document / ops_approve_partner / ops_activate_partner / ops_suspend_partner / ops_reinstate_partner / ops_reject_partner / ops_set_commission / ops_override_reliability) ---------- */
function PartnerDetail({ id, state, setState, toast, back, role }) {
  const p = state.partners.find(x => x.id === id);
  const [tab, setTab] = React.useState("overview"); const [modal, setModal] = React.useState(null);
  const patch = f => setState(s => ({ ...s, partners: s.partners.map(x => x.id === id ? f(x) : x) }));
  const docsOk = p.docs.every(d => d[2] === "approved");
  const canApprove = ["applied", "documents_pending", "under_review"].includes(p.status);
  const canActivate = ["contract_pending", "contract_signed", "store_setup", "first_listing_pending"].includes(p.status);
  const manager = ["ops_manager", "admin", "compliance"].includes(role);
  const transition = (to, reason, text) => patch(x => ({ ...x, status: to, history: [...x.history, [x.status, to, "now", "You", reason || text || null]], suspendedUntil: to === "suspended" ? "30 Sep" : x.suspendedUntil }));
  const verify = (i, ok, reason) => patch(x => ({ ...x, docs: x.docs.map((d, k) => k === i ? [d[0], d[1], ok ? "approved" : "rejected", d[3], ok ? null : reason] : d) }));
  const tabs = ["overview", "documents", "contract", "stores", "staff", "history"];
  return <React.Fragment>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}><Button variant="ghost" size="sm" iconStart="arrow-left" onClick={back}>Partners</Button></div>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 16, flexWrap: "wrap" }}>
      <div style={{ display: "grid", gap: 6 }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}><h1 style={{ fontSize: "var(--text-title-lg-size)", fontWeight: 600, margin: 0 }}>{p.trading}</h1><Badge tone={STATUS_TONE[p.status]} uppercase>{label(p.status)}</Badge>{p.market === "EG" ? <Badge tone="neutral">EG</Badge> : <Badge tone="neutral">KW</Badge>}</div>
        <span style={{ color: "var(--color-text-secondary)" }}>{p.legal} · {p.city} · {p.cats.join(", ")} · owner {p.owner}</span>
        {p.status === "suspended" ? <Banner tone="error" title={`Suspended until ${p.suspendedUntil} · ${label(p.suspendReason)}`}>Reserved bundles are honoured; new listings are blocked. Reinstate once the renewed document is approved.</Banner> : null}
        {p.health.map((h, i) => <Banner key={i} tone="time" title={`Health task · ${label(h.kind)} · severity ${h.severity}`}>Opened {h.opened}. Resolves when the underlying issue clears.</Banner>)}</div>
      {manager ? <div style={{ display: "flex", gap: 8, flexWrap: "wrap", justifyContent: "flex-end" }}>
        {canApprove ? <Button disabled={!docsOk} onClick={() => setModal("approve")} title={docsOk ? "" : "All required documents must be approved first"}>Approve</Button> : null}
        {canActivate ? <Button onClick={() => setModal("activate")}>Activate</Button> : null}
        {p.status === "active" ? <Button variant="danger" onClick={() => setModal("suspend")}>Suspend</Button> : null}
        {p.status === "suspended" ? <Button onClick={() => setModal("reinstate")}>Reinstate</Button> : null}
        {canApprove ? <Button variant="ghost" onClick={() => setModal("reject")}>Reject</Button> : null}
        <Button variant="secondary" onClick={() => setModal("commission")}>Set commission</Button></div> : null}</div>
    {canApprove && !docsOk ? <Banner tone="time" title="Approval is blocked until every required document is approved">app.ops_approve_partner checks market_document_requirement — verify the documents below first.</Banner> : null}
    <SegmentedControl value={tab} onChange={setTab} options={tabs.map(t => ({ value: t, label: t[0].toUpperCase() + t.slice(1) }))} />
    {tab === "overview" ? <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 12 }}>
      <PartnerStat label="Reliability" value={p.reliability != null ? `${(p.reliability * 100).toFixed(0)}%` : "—"} sub="redeemed vs cancelled by partner" icon="activity" tone={p.reliability != null && p.reliability < 0.8 ? "urgent" : "neutral"} />
      <PartnerStat label="Branches" value={String(p.branches)} sub={`${p.stores.length} set up`} icon="store" />
      <PartnerStat label="Est. surplus / night" value={p.surplus} sub={`referral: ${p.referral}`} icon="package" />
      <PartnerStat label="Contact" value={p.contact} sub={`${p.phone} · ${p.email}`} icon="user" />
      <Card padded style={{ gridColumn: "1 / -1", display: "grid", gap: 6 }}>
        <strong style={{ fontSize: "var(--text-label-size)" }}>Onboarding checklist (app.partner_ready)</strong>
        {[["All required documents approved", docsOk], ["Contract accepted", p.contracts.some(c => c.accepted)], ["At least one branch with opening hours", p.stores.length > 0], ["First listing published", p.status === "active"]].map(([l, ok]) => <span key={l} style={{ display: "flex", gap: 8, alignItems: "center", fontSize: "var(--text-label-size)" }}><Icon name={ok ? "circle-check" : "circle-alert"} size={16} style={{ color: ok ? "var(--color-fresh)" : "var(--color-text-tertiary)" }} />{l}</span>)}
        {manager && p.reliability != null ? <div><Button size="sm" variant="ghost" onClick={() => setModal("reliability")}>Override reliability</Button></div> : null}</Card></div> : null}
    {tab === "documents" ? <Panel title="Documents (app.ops_verify_document)">
      <Table cols={[["Document", "minmax(200px,1.4fr)"], ["Expiry", "120px"], ["Status", "120px"], ["Reason", "minmax(120px,1fr)"], ["", "220px"]]} rows={p.docs.map((d, i) => [d[1], d[3] ? <Num>{d[3]}</Num> : "no expiry", <Badge tone={{ approved: "fresh", under_review: "time", pending: "time", rejected: "error", expired: "error" }[d[2]]}>{label(d[2])}</Badge>, d[4] ? label(d[4]) : "",
        manager && d[2] !== "approved" ? <span style={{ display: "flex", gap: 6 }}><Button size="sm" variant="secondary" iconStart="eye" onClick={() => toast("Opening scan.pdf")}>View</Button><Button size="sm" onClick={() => { verify(i, true); toast(`${d[1]} approved`); }}>Approve</Button><Button size="sm" variant="ghost" onClick={() => setModal({ reject: i })}>Reject</Button></span> : <Button size="sm" variant="secondary" iconStart="eye" onClick={() => toast("Opening scan.pdf")}>View</Button>])} /></Panel> : null}
    {tab === "contract" ? <Panel title="Contracts (public.partner_contract)">
      {p.contracts.length ? <Table cols={[["Version", "80px"], ["Commission", "110px"], ["Payouts", "100px"], ["Minimum", "110px"], ["Accepted", "minmax(160px,1fr)"]]} rows={p.contracts.map(c => [<Num>v{c.version}</Num>, <Num>{c.commissionBp / 100}%</Num>, c.cadence, <Num>{c.min}</Num>, c.accepted ? <span><Num>{c.accepted}</Num> · {c.by} · {c.ip}</span> : <Badge tone="time">awaiting acceptance</Badge>])} />
        : <div style={{ padding: 16 }}><EmptyState icon="pen-line" title="No contract yet" body="A contract is created from market_config defaults when the partner is approved." /></div>}</Panel> : null}
    {tab === "stores" ? <Panel title="Branches (public.store)">{p.stores.length ? p.stores.map(s => <ListRow key={s[0]} icon="store" label={s[0]} value={<Badge tone={s[1] === "live" ? "fresh" : "neutral"}>{s[1]}</Badge>} />) : <div style={{ padding: 16 }}><EmptyState icon="store" title="No branches yet" body="The partner adds branches during store_setup." /></div>}</Panel> : null}
    {tab === "staff" ? <Panel title="Staff (public.staff_assignment)"><Table cols={[["Name", "minmax(160px,1fr)"], ["Role", "120px"], ["Scope", "140px"]]} rows={p.staff.map(s => [s[0], <Badge tone="neutral">{s[1]}</Badge>, s[2] === "all" ? "all branches" : s[2]])} /></Panel> : null}
    {tab === "history" ? <Panel title="Status history (public.partner_status_history)"><Table cols={[["When", "120px"], ["From", "150px"], ["To", "150px"], ["Actor", "110px"], ["Reason", "minmax(160px,1fr)"]]} rows={[...p.history].reverse().map(h => [<Num>{h[2]}</Num>, label(h[0]), <Badge tone={STATUS_TONE[h[1]]}>{label(h[1])}</Badge>, h[3], h[4] || ""])} /></Panel> : null}
    {modal === "approve" ? <ActionModal title={`Approve ${p.trading}`} body="Creates contract v1 from market_config defaults and moves the partner to contract_pending. The partner accepts the contract in the app." confirm="Approve" onConfirm={({ text }) => { transition("contract_pending", null, text); patch(x => ({ ...x, contracts: [{ version: 1, commissionBp: 1500, cadence: "weekly", min: p.market === "KW" ? "KD 10.000" : "EGP 250.00", accepted: null }] })); setModal(null); toast("Approved · contract v1 created"); }} onClose={() => setModal(null)} /> : null}
    {modal === "activate" ? <ActionModal title={`Activate ${p.trading} now`} body="Normally activation is automatic when documents, contract and branch hours are all in place. Use this to activate ahead of that — the reason is audited." confirm="Activate" onConfirm={({ text }) => { transition("active", "ops_activated", text); setModal(null); toast("Partner active"); }} onClose={() => setModal(null)} /> : null}
    {modal === "suspend" ? <ActionModal title={`Suspend ${p.trading}`} reasons={[["licence_expired", "Food licence expired"], ["safety_incident", "Food safety incident"]]} confirm="Suspend" tone="danger" onConfirm={({ reason, text }) => { transition("suspended", reason, text); patch(x => ({ ...x, suspendReason: reason })); setModal(null); toast("Partner suspended"); }} onClose={() => setModal(null)}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><Field label="Until"><Input value="30 Sep 2026" onChange={() => {}} /></Field><Field label="Existing reservations"><Select value="honour" onChange={() => {}} options={[["honour", "Honour — customers still collect"], ["cancel", "Cancel and refund"]]} /></Field></div></ActionModal> : null}
    {modal === "reinstate" ? <ActionModal title={`Reinstate ${p.trading}`} confirm="Reinstate" onConfirm={({ text }) => { transition("active", null, text); patch(x => ({ ...x, health: [], docs: x.docs.map(d => d[2] === "expired" ? [d[0], d[1], "approved", "1 Sep 2027", null] : d) })); setModal(null); toast("Partner reinstated"); }} onClose={() => setModal(null)} /> : null}
    {modal === "reject" ? <ActionModal title={`Reject ${p.trading}`} reasons={[["docs_unverifiable", "Documents could not be verified"], ["category_not_eligible", "Category not eligible"], ["duplicate", "Duplicate application"]]} confirm="Reject" tone="danger" onConfirm={({ reason, text }) => { transition("rejected", reason, text); setModal(null); toast("Application rejected"); }} onClose={() => setModal(null)} /> : null}
    {modal === "commission" ? <ActionModal title="Set commission" body="Creates a new contract version. Below the four-eyes threshold it applies from the effective date; the partner is notified." confirm="Create version" onConfirm={({ text }) => { patch(x => ({ ...x, contracts: [{ version: (x.contracts[0]?.version || 0) + 1, commissionBp: 1400, cadence: "weekly", min: x.contracts[0]?.min || "KD 10.000", accepted: null }, ...x.contracts] })); setModal(null); toast("Contract v2 created · 14%"); }} onClose={() => setModal(null)}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><Field label="Commission"><Input value="14" onChange={() => {}} suffix="%" /></Field><Field label="Effective from"><Input value="1 Oct 2026" onChange={() => {}} /></Field></div></ActionModal> : null}
    {modal === "reliability" ? <ActionModal title="Override reliability score" body="Overrides the computed score until the next recompute. Visible to the partner as their score." confirm="Override" onConfirm={({ text }) => { patch(x => ({ ...x, reliability: 0.9 })); setModal(null); toast("Reliability overridden to 90%"); }} onClose={() => setModal(null)}><Field label="Score"><Input value="90" onChange={() => {}} suffix="%" /></Field></ActionModal> : null}
    {modal && modal.reject != null ? <ActionModal title={`Reject ${p.docs[modal.reject][1]}`} reasons={[["doc_mismatch", "Details do not match"], ["doc_illegible", "Document illegible"], ["doc_expired", "Document expired"]]} confirm="Reject document" tone="danger" onConfirm={({ reason, text }) => { verify(modal.reject, false, reason); setModal(null); toast("Document rejected · partner notified"); }} onClose={() => setModal(null)} /> : null}
  </React.Fragment>;
}

/* ---------- Orders (app.ops_orders, ops_order_detail, ops_force_cancel, ops_force_redeem, ops_extend_window, ops_reissue_code, ops_reverse_redemption) ---------- */
function Orders({ market, state, setState, toast, role }) {
  const [q, setQ] = React.useState(""); const [st, setSt] = React.useState("all"); const [sel, setSel] = React.useState(null); const [modal, setModal] = React.useState(null);
  const list = state.orders.filter(o => o.market === market && (st === "all" || o.status === st) && (!q || o.code.toLowerCase().includes(q.toLowerCase()) || o.consumer.toLowerCase().includes(q.toLowerCase())));
  const o = state.orders.find(x => x.code === sel);
  const patch = f => setState(s => ({ ...s, orders: s.orders.map(x => x.code === sel ? f(x) : x) }));
  const manager = ["ops_manager", "admin", "support_agent"].includes(role);
  return <React.Fragment>
    <H1 sub="Search by code or customer. Every forced action needs a reason code and a justification, and lands in the audit log.">Orders</H1>
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <Input icon="search" value={q} onChange={e => setQ(e.target.value)} placeholder="KW-4821 or a name" style={{ width: 260 }} />
      {["all", "held", "reserved", "redeemed", "no_show", "cancelled_partner", "refunded"].map(s => <Chip key={s} selected={st === s} onClick={() => setSt(s)}>{label(s)}</Chip>)}</div>
    <div style={{ display: "grid", gridTemplateColumns: o ? "minmax(0,1fr) 420px" : "1fr", gap: 16, alignItems: "start" }}>
      <Panel><Table cols={[["Code", "100px"], ["Store", "minmax(160px,1.3fr)"], ["Customer", "110px"], ["Status", "140px"], ["Method", "90px"], ["Total", "100px"], ["Window", "110px"], ["Created", "70px"]]}
        rows={list.map(x => [<Num style={{ fontWeight: 700 }}>{x.code}</Num>, x.store, x.consumer, <Badge tone={ORDER_TONE[x.status]}>{label(x.status)}</Badge>, label(x.method), <Num>{x.total}</Num>, <Num>{x.window}</Num>, <Num>{x.created}</Num>])} onRow={i => setSel(list[i].code)} empty="No orders match" /></Panel>
      {o ? <Panel title={<span><Num>{o.code}</Num> · {o.consumer}</span>} action={<IconButton icon="x" label="Close" onClick={() => setSel(null)} />} pad>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><Badge tone={ORDER_TONE[o.status]} uppercase>{label(o.status)}</Badge><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{o.store}</span></div>
        <div style={{ display: "grid", gap: 4, fontSize: "var(--text-label-size)" }}>
          {[["Customer", `${o.consumer} · ${o.phone}`], ["Window", o.window], ["Total", o.total], ["Payment", `${label(o.method)} · ${o.payment} · ${o.psp}`], o.redeemed ? ["Redeemed", o.redeemed] : null, o.refund ? ["Refund", o.refund] : null, o.holdExpires ? ["Hold expires", o.holdExpires] : null].filter(Boolean).map(([k, v]) => <div key={k} style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 8 }}><span style={{ color: "var(--color-text-secondary)" }}>{k}</span><span>{v}</span></div>)}</div>
        <div style={{ display: "grid", gap: 4 }}><strong style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>Timeline</strong>
          {[["held", o.created], ["reserved", o.payment === "captured" || o.status !== "held" ? "+0:06" : null], [o.status, o.status === "redeemed" ? "22:11" : o.status === "no_show" ? "23:15" : o.status === "cancelled_partner" ? "21:15" : o.status === "refunded" ? "21:20" : null]].filter(x => x[1]).map(([s, t], i) => <span key={i} style={{ display: "flex", gap: 8, fontSize: "var(--text-caption-size)" }}><Num style={{ width: 50, color: "var(--color-text-tertiary)" }}>{t}</Num>{label(s)}</span>)}</div>
        {manager ? <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {["held", "reserved"].includes(o.status) ? <Button size="sm" variant="danger" onClick={() => setModal("cancel")}>Force cancel</Button> : null}
          {o.status === "reserved" || o.status === "no_show" ? <Button size="sm" onClick={() => setModal("redeem")}>Force redeem</Button> : null}
          {o.status === "reserved" ? <Button size="sm" variant="secondary" onClick={() => setModal("extend")}>Extend window</Button> : null}
          {o.status === "reserved" ? <Button size="sm" variant="secondary" onClick={() => setModal("reissue")}>Reissue code</Button> : null}
          {o.status === "redeemed" ? <Button size="sm" variant="secondary" onClick={() => setModal("reverse")}>Reverse redemption</Button> : null}
          <Button size="sm" variant="ghost" iconStart="send" onClick={() => toast("Confirmation resent")}>Resend notification</Button></div> : null}
      </Panel> : null}</div>
    {modal === "cancel" ? <ActionModal title={`Force cancel ${o.code}`} reasons={[["partner_cancelled", "Partner cancelled"], ["quality_issue", "Quality issue"], ["consumer_request", "Customer request"], ["duplicate_capture", "Duplicate charge"]]} confirm="Cancel and refund" tone="danger" onConfirm={({ reason, text }) => { patch(x => ({ ...x, status: "refunded", payment: "refunded", refund: `${x.total} · source · ${reason}` })); setModal(null); toast("Order cancelled · refund posted"); }} onClose={() => setModal(null)}>
      <Field label="Cost bearer"><SegmentedControl value="platform" onChange={() => {}} options={[{ value: "platform", label: "Platform" }, { value: "partner", label: "Partner" }]} /></Field></ActionModal> : null}
    {modal === "redeem" ? <ActionModal title={`Force redeem ${o.code}`} reasons={[["counter_error", "Counter could not redeem"], ["late_grace", "Handed over after grace"], ["other", "Other"]]} confirm="Mark redeemed" onConfirm={() => { patch(x => ({ ...x, status: "redeemed", redeemed: "now · forced · You" })); setModal(null); toast("Order marked redeemed"); }} onClose={() => setModal(null)} /> : null}
    {modal === "extend" ? <ActionModal title={`Extend window · ${o.code}`} reasons={[["partner_delay", "Partner running late"], ["consumer_delay", "Customer running late"]]} confirm="Extend" onConfirm={() => { patch(x => ({ ...x, window: x.window.split("–")[0] + "–23:00" })); setModal(null); toast("Window extended to 23:00"); }} onClose={() => setModal(null)}><Field label="New end"><Input value="23:00" onChange={() => {}} /></Field></ActionModal> : null}
    {modal === "reissue" ? <ActionModal title={`Reissue code · ${o.code}`} reasons={[["code_leaked", "Code shared publicly"], ["consumer_request", "Customer request"]]} confirm="Reissue" onConfirm={() => { const c = o.code.split("-")[0] + "-" + (4900 + Math.floor(Math.random() * 90)); setState(s => ({ ...s, orders: s.orders.map(x => x.code === o.code ? { ...x, code: c } : x) })); setSel(c); setModal(null); toast(`New code ${c} sent`); }} onClose={() => setModal(null)} /> : null}
    {modal === "reverse" ? <ActionModal title={`Reverse redemption · ${o.code}`} reasons={[["wrong_order", "Wrong order redeemed"], ["staff_error", "Staff error"]]} confirm="Reverse" tone="danger" onConfirm={() => { patch(x => ({ ...x, status: "reserved", redeemed: null })); setModal(null); toast("Redemption reversed"); }} onClose={() => setModal(null)} /> : null}
  </React.Fragment>;
}

/* ---------- Moderation (app.ops_moderation_queue, ops_moderate_listing; app.copy_has_forbidden_term) ---------- */
function Moderation({ state, setState, toast }) {
  const [modal, setModal] = React.useState(null);
  const act = (id, action) => setState(s => ({ ...s, moderation: s.moderation.map(m => m.id === id ? { ...m, status: action } : m) }));
  return <React.Fragment>
    <H1 sub="Listings whose copy hit a forbidden term (leftovers, expired, waste…) or whose price breaks the market's max fraction. Approve, edit the copy, or reject with a reason — the partner sees the outcome.">Moderation queue</H1>
    <Panel>{state.moderation.map(m => <div key={m.id} style={{ padding: "14px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gridTemplateColumns: "minmax(0,1fr) auto", gap: 12, alignItems: "center" }}>
      <div style={{ display: "grid", gap: 4 }}>
        <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><strong>{m.title}</strong><span dir="rtl" style={{ color: "var(--color-text-secondary)" }}>{m.titleAr}</span><Badge tone={m.status === "flagged" ? "urgent" : m.status === "rejected" ? "error" : "fresh"}>{m.status}</Badge></div>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{m.store} · <Num>{m.price}</Num> of <Num>{m.value}</Num> · flagged <Num>{m.flagged}</Num> · <span style={{ color: "var(--color-error)" }}>{m.reason}</span></span></div>
      {m.status === "flagged" ? <div style={{ display: "flex", gap: 6 }}><Button size="sm" onClick={() => { act(m.id, "approved"); toast("Listing approved"); }}>Approve</Button><Button size="sm" variant="secondary" onClick={() => setModal({ edit: m.id })}>Edit copy</Button><Button size="sm" variant="ghost" onClick={() => setModal({ reject: m.id })}>Reject</Button></div> : null}</div>)}
      {!state.moderation.some(m => m.status === "flagged") ? <div style={{ padding: 16 }}><EmptyState icon="circle-check" title="Queue is clear" /></div> : null}</Panel>
    {modal && modal.edit ? <ActionModal title="Edit listing copy" body="The edited title replaces the partner's; they are told why." needsText={false} confirm="Save and approve" onConfirm={() => { setState(s => ({ ...s, moderation: s.moderation.map(m => m.id === modal.edit ? { ...m, status: "edited", title: "Surprise bundle" } : m) })); setModal(null); toast("Copy edited · listing live"); }} onClose={() => setModal(null)}>
      <Field label="Title (English)"><Input value="Surprise bundle" onChange={() => {}} /></Field><Field label="Title (Arabic)"><Input value="بقشة مفاجأة" dir="rtl" onChange={() => {}} /></Field></ActionModal> : null}
    {modal && modal.reject ? <ActionModal title="Reject listing" reasons={[["forbidden_copy", "Forbidden term"], ["price_fraction", "Price above max fraction"], ["misleading", "Misleading description"]]} confirm="Reject" tone="danger" onConfirm={() => { act(modal.reject, "rejected"); setModal(null); toast("Listing rejected · partner notified"); }} onClose={() => setModal(null)} /> : null}
  </React.Fragment>;
}

/* ---------- Disputes (app.ops_disputes, ops_assign_dispute, ops_resolve_dispute) + Incidents (ops_incidents, ops_open_incident, ops_place_quality_hold, ops_release_quality_hold, ops_close_incident, ops_amend_incident) ---------- */
function Trust({ market, state, setState, toast, tab0 = "disputes" }) {
  const [tab, setTab] = React.useState(tab0); const [sel, setSel] = React.useState(null); const [modal, setModal] = React.useState(null);
  const disputes = state.disputes.filter(d => d.market === market); const d = state.disputes.find(x => x.ref === sel);
  const incidents = state.incidents.filter(i => i.market === market);
  const pd = f => setState(s => ({ ...s, disputes: s.disputes.map(x => x.ref === sel ? f(x) : x) }));
  const pi = (ref, f) => setState(s => ({ ...s, incidents: s.incidents.map(x => x.ref === ref ? f(x) : x) }));
  return <React.Fragment>
    <H1 sub="Customer reports with an SLA, and incidents that group them by store. Critical (illness) reports are read within two hours and can place a quality hold on the store." action={<SegmentedControl value={tab} onChange={setTab} options={[{ value: "disputes", label: `Disputes · ${disputes.filter(x => !x.resolution).length} open` }, { value: "incidents", label: `Incidents · ${incidents.filter(x => !x.closed).length} open` }]} />}>Trust & safety</H1>
    {tab === "disputes" ? <div style={{ display: "grid", gridTemplateColumns: d ? "minmax(0,1fr) 440px" : "1fr", gap: 16, alignItems: "start" }}>
      <Panel><Table cols={[["Case", "90px"], ["Severity", "90px"], ["Category", "110px"], ["Order", "90px"], ["Partner", "minmax(150px,1.2fr)"], ["Owner", "90px"], ["SLA due", "110px"], ["Status", "100px"]]}
        rows={disputes.map(x => [<Num style={{ fontWeight: 700 }}>{x.ref}</Num>, <Badge tone={x.severity === "critical" ? "error" : x.severity === "high" ? "urgent" : "time"} uppercase>{x.severity}</Badge>, label(x.category), <Num>{x.order}</Num>, x.partner, x.owner || <Badge tone="time">unassigned</Badge>, <Num>{x.sla}</Num>, x.resolution ? <Badge tone="fresh">resolved</Badge> : <Badge tone="time">open</Badge>])} onRow={i => setSel(disputes[i].ref)} /></Panel>
      {d ? <Panel title={<span><Num>{d.ref}</Num> · {label(d.category)}</span>} action={<IconButton icon="x" label="Close" onClick={() => setSel(null)} />} pad>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}><Badge tone={d.severity === "critical" ? "error" : "time"} uppercase>{d.severity}</Badge><Badge tone="neutral">opened {d.opened}</Badge><Badge tone="neutral">SLA {d.sla}</Badge></div>
        <div style={{ display: "grid", gap: 6 }}><strong style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>Customer · {d.consumer} · <Num>{d.order}</Num></strong><span>{d.statement}</span></div>
        <div style={{ display: "grid", gap: 6 }}><strong style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>Partner · {d.partner} · statement by {d.partnerDeadline}</strong><span>{d.partnerStatement || <em style={{ color: "var(--color-text-tertiary)" }}>No statement yet.</em>}</span></div>
        {d.resolution ? <Banner tone="fresh" title="Resolved">{d.resolution}</Banner> : <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {!d.owner ? <Button size="sm" variant="secondary" onClick={() => { pd(x => ({ ...x, owner: "You" })); toast("Assigned to you"); }}>Assign to me</Button> : null}
          <Button size="sm" onClick={() => setModal("resolve")}>Resolve</Button>
          {d.severity === "critical" ? <Button size="sm" variant="danger" onClick={() => setModal("hold")}>Open incident + hold</Button> : null}
          <Button size="sm" variant="ghost" iconStart="message-square" onClick={() => toast("Reply sent to customer")}>Reply</Button></div>}
      </Panel> : null}</div>
      : <Panel>{incidents.map(i => <div key={i.ref} style={{ padding: "14px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gap: 8 }}>
        <div style={{ display: "flex", justifyContent: "space-between", gap: 10, flexWrap: "wrap" }}><span style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}><Num style={{ fontWeight: 700 }}>{i.ref}</Num><strong>{i.partner} · {i.store}</strong>{i.categories.map(c => <Badge key={c} tone="neutral">{label(c)}</Badge>)}{i.hold ? <Badge tone="error">quality hold</Badge> : null}{i.closed ? <Badge tone="fresh">closed {i.closed}</Badge> : <Badge tone="time">open since {i.opened}</Badge>}</span>
          {!i.closed ? <span style={{ display: "flex", gap: 6 }}>{i.hold ? <Button size="sm" variant="secondary" onClick={() => { pi(i.ref, x => ({ ...x, hold: false })); toast("Quality hold released"); }}>Release hold</Button> : <Button size="sm" variant="secondary" onClick={() => { pi(i.ref, x => ({ ...x, hold: true })); toast("Quality hold placed"); }}>Place hold</Button>}<Button size="sm" onClick={() => setModal({ close: i.ref })}>Close</Button></span> : <Button size="sm" variant="ghost" onClick={() => toast("Amendment recorded")}>Amend</Button>}</div>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
          <span><strong>Platform action</strong> · {i.action}</span><span><strong>Partner response</strong> · {i.response || <em>none yet</em>}</span></div>
        {i.resolution ? <span style={{ fontSize: "var(--text-caption-size)" }}>{i.resolution}</span> : null}</div>)}</Panel>}
    {modal === "resolve" ? <ActionModal title={`Resolve ${d.ref}`} reasons={[["quality_issue", "Quality issue"], ["never_received", "Not collected — store fault"], ["goodwill", "Goodwill"], ["no_fault", "No fault found"]]} confirm="Resolve" onConfirm={({ reason, text }) => { pd(x => ({ ...x, resolution: `${label(reason)} · refund ${x.market === "KW" ? "KD 1.000" : "EGP 30.00"} · partner bears · goodwill credit` })); setModal(null); toast("Dispute resolved · refund posted"); }} onClose={() => setModal(null)}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 12 }}><Field label="Refund"><Input value={d.market === "KW" ? "1.000" : "30.00"} onChange={() => {}} suffix={d.market === "KW" ? "KD" : "EGP"} /></Field><Field label="Cost bearer"><Select value="partner" onChange={() => {}} options={["partner", "platform"]} /></Field><Field label="Goodwill credit"><Input value={d.market === "KW" ? "0.500" : "15.00"} onChange={() => {}} suffix={d.market === "KW" ? "KD" : "EGP"} /></Field></div></ActionModal> : null}
    {modal === "hold" ? <ActionModal title={`Open incident for ${d.partner}`} body="Places a quality hold on the store: new listings pause, reserved bundles are still honoured unless you cancel them. The partner is asked for a statement." confirm="Open incident + hold" tone="danger" onConfirm={({ text }) => { setState(s => ({ ...s, incidents: [{ ref: "INC-00" + (43 + s.incidents.length), market: d.market, partner: d.partner.split(" · ")[0], store: d.partner.split(" · ")[1], categories: ["food_safety"], orders: [d.order], opened: "now", closed: null, hold: true, reports: 1, response: null, action: "Quality hold placed — " + text }, ...s.incidents] })); setModal(null); setTab("incidents"); toast("Incident opened · hold placed"); }} onClose={() => setModal(null)}>
      <Field label="Cancel existing reservations?"><SegmentedControl value="no" onChange={() => {}} options={[{ value: "no", label: "No — honour them" }, { value: "yes", label: "Yes — cancel and refund" }]} /></Field><Field label="Expected duration"><Select value="48h" onChange={() => {}} options={["24h", "48h", "until cleared"]} /></Field></ActionModal> : null}
    {modal && modal.close ? <ActionModal title={`Close ${modal.close}`} confirm="Close incident" onConfirm={({ text }) => { pi(modal.close, x => ({ ...x, closed: "now", hold: false, resolution: "Closed · " + text })); setModal(null); toast("Incident closed · signed off"); }} onClose={() => setModal(null)} /> : null}
  </React.Fragment>;
}

/* ---------- Finance: payout runs (four-eyes), reconciliation, ledger & reports ---------- */
function Finance({ market, state, setState, toast, role, me }) {
  const [tab, setTab] = React.useState("runs"); const [sel, setSel] = React.useState(null); const [modal, setModal] = React.useState(null);
  const runs = state.runs.filter(r => r.market === market); const run = state.runs.find(r => r.id === sel);
  const pr = f => setState(s => ({ ...s, runs: s.runs.map(r => r.id === sel ? f(r) : r) }));
  const finance = ["finance", "admin"].includes(role);
  const RUN_TONE = { draft: "neutral", frozen: "time", approved_1: "time", approved_2: "fresh", executing: "time", executed: "fresh" };
  const PAY_TONE = { pending: "neutral", ready: "time", held: "urgent", approved: "time", executing: "time", paid: "fresh", failed: "error", carried: "neutral" };
  return <React.Fragment>
    <H1 sub="Weekly payout runs need two different approvers before they execute. Reconciliation matches PSP settlement files and cash reports against the ledger; anything off becomes an exception." action={<SegmentedControl value={tab} onChange={setTab} options={[{ value: "runs", label: "Payout runs" }, { value: "recon", label: `Reconciliation · ${state.exceptions.filter(x => x.market === market && x.status === "open").length}` }, { value: "reports", label: "Ledger & reports" }]} />}>Finance</H1>
    {tab === "runs" ? <div style={{ display: "grid", gap: 12 }}>
      <Panel title="Runs" action={finance ? <Button size="sm" iconStart="plus" onClick={() => { setState(s => ({ ...s, runs: [{ id: "run-new-" + Date.now(), market, period: "14 – 20 Sep", status: "draft", frozen: null, approver1: null, approver2: null, executed: null, payouts: [] }, ...s.runs] })); toast("Run created for 14 – 20 Sep"); }}>Create run</Button> : null}>
        <Table cols={[["Period", "150px"], ["Status", "120px"], ["Frozen", "120px"], ["Approver 1", "170px"], ["Approver 2", "170px"], ["Executed", "120px"], ["Payouts", "80px"]]} rows={runs.map(r => [<strong>{r.period}</strong>, <Badge tone={RUN_TONE[r.status]}>{label(r.status)}</Badge>, r.frozen ? <Num>{r.frozen}</Num> : "—", r.approver1 || "—", r.approver2 || "—", r.executed ? <Num>{r.executed}</Num> : "—", <Num>{r.payouts.length}</Num>])} onRow={i => setSel(runs[i].id)} /></Panel>
      {run ? <Panel title={`Run · ${run.period}`} action={<div style={{ display: "flex", gap: 6 }}>
        {finance && run.status === "draft" ? <Button size="sm" onClick={() => { pr(r => ({ ...r, status: "frozen", frozen: "now" })); toast("Run frozen — ledger entries pinned"); }}>Freeze</Button> : null}
        {finance && run.status === "frozen" ? <Button size="sm" onClick={() => { pr(r => ({ ...r, status: "approved_1", approver1: me + " · now" })); toast("First approval recorded"); }}>Approve (1 of 2)</Button> : null}
        {finance && run.status === "approved_1" ? <Button size="sm" disabled={run.approver1 && run.approver1.startsWith(me)} title={run.approver1 && run.approver1.startsWith(me) ? "You gave the first approval — a different person must give the second" : ""} onClick={() => { pr(r => ({ ...r, status: "approved_2", approver2: me + " · now" })); toast("Second approval recorded · run can execute"); }}>Approve (2 of 2)</Button> : null}
        {finance && run.status === "approved_2" ? <Button size="sm" onClick={() => { pr(r => ({ ...r, status: "executed", executed: "now", payouts: r.payouts.map(p => [p[0], p[1], p[2], p[3], p[4], p[5], p[6] === "ready" ? "paid" : p[6]]) })); toast("Payouts sent to the bank"); }}>Execute</Button> : null}
        <IconButton icon="x" label="Close" onClick={() => setSel(null)} /></div>}>
        {run.status === "approved_1" && run.approver1 && run.approver1.startsWith(me) ? <div style={{ padding: "12px 16px 0" }}><Banner tone="info" title="Four-eyes">You gave the first approval. A second finance user has to approve before the run executes.</Banner></div> : null}
        <Table cols={[["Partner", "minmax(160px,1.3fr)"], ["Gross", "110px"], ["Netted (cash)", "110px"], ["Carry in", "100px"], ["Net", "110px"], ["Carry out", "100px"], ["Status", "90px"], ["", "150px"]]} rows={run.payouts.map((p, i) => [p[0], <Num>{p[1]}</Num>, <Num>{p[2]}</Num>, <Num>{p[3]}</Num>, <Num style={{ fontWeight: 700 }}>{p[4]}</Num>, <Num>{p[5]}</Num>, <Badge tone={PAY_TONE[p[6]]}>{p[6]}</Badge>,
          p[6] === "failed" && finance ? <Button size="sm" variant="secondary" onClick={() => { pr(r => ({ ...r, payouts: r.payouts.map((x, k) => k === i ? [...x.slice(0, 6), "paid"] : x) })); toast("Payout confirmed with bank reference"); }}>Confirm retry</Button> : p[6] === "held" ? <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>below minimum / suspended</span> : ""])} empty="No payouts in this run yet" /></Panel> : null}</div> : null}
    {tab === "recon" ? <Panel title="Exceptions (app.ops_reconciliation, ops_resolve_exception)"><Table cols={[["Kind", "90px"], ["Type", "130px"], ["Reference", "minmax(160px,1.2fr)"], ["Payment", "90px"], ["Expected", "110px"], ["Actual", "110px"], ["Status", "90px"], ["", "150px"]]}
      rows={state.exceptions.filter(x => x.market === market).map(x => [x.kind, label(x.type), x.ref, <Num>{x.payment}</Num>, <Num>{x.expected}</Num>, <Num>{x.actual}</Num>, <Badge tone={x.status === "open" ? "urgent" : "fresh"}>{x.status}</Badge>, x.status === "open" && finance ? <Button size="sm" variant="secondary" onClick={() => setModal({ resolve: x.id })}>Resolve</Button> : <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{x.resolution || ""}</span>])} /></Panel> : null}
    {tab === "reports" ? <div style={{ display: "grid", gap: 12 }}>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,minmax(0,1fr))", gap: 12 }}>
        <PartnerStat label="Balance check" value="balanced" sub="debits = credits · every transaction" icon="scale" tone="fresh" />
        <PartnerStat label="Revenue · MTD" value={market === "KW" ? "KD 1,412.250" : "EGP 18,900.00"} sub="commission_revenue" icon="trending-up" />
        <PartnerStat label={market === "EG" ? "VAT payable · MTD" : "Tax report"} value={market === "EG" ? "EGP 2,646.00" : "n/a"} sub={market === "EG" ? "14% on commission" : "no VAT in KW"} icon="file-text" />
        <PartnerStat label="Unit economics" value={market === "KW" ? "KD 0.318" : "EGP 6.40"} sub="net revenue per bag · this month" icon="chart-column" /></div>
      <Panel title="Ledger accounts (app.ops_ledger)"><Table cols={[["Account", "minmax(200px,1.4fr)"], ["Debits", "130px"], ["Credits", "130px"], ["Balance", "130px"]]} rows={[["platform_bank", "KD 9,812.500", "KD 3,104.250", "KD 6,708.250"], ["partner_payable", "KD 2,644.000", "KD 8,940.000", "−KD 6,296.000"], ["commission_revenue", "KD 0.000", "KD 1,412.250", "−KD 1,412.250"], ["psp_fees", "KD 118.400", "KD 0.000", "KD 118.400"], ["refunds_payable", "KD 54.000", "KD 54.000", "KD 0.000"], ["consumer_wallet_liability", "KD 12.500", "KD 41.500", "−KD 29.000"], ["unreconciled_suspense", "KD 1.950", "KD 0.000", "KD 1.950"]].map(r => [<Num>{r[0]}</Num>, <Num>{r[1]}</Num>, <Num>{r[2]}</Num>, <Num style={{ fontWeight: 600 }}>{r[3]}</Num>])} /></Panel>
      <div style={{ display: "flex", gap: 8 }}><Button variant="secondary" iconStart="download" onClick={() => toast("Tax report exported")}>Tax report</Button><Button variant="secondary" iconStart="download" onClick={() => toast("Revenue export queued")}>Revenue CSV</Button><Button variant="ghost" onClick={() => toast("Bulk export requested · justification logged")}>Bulk export…</Button></div></div> : null}
    {modal && modal.resolve ? <ActionModal title="Resolve exception" reasons={[["psp_reconciliation", "PSP reconciliation"], ["manual_correction", "Manual correction"], ["cash_variance", "Cash variance"]]} confirm="Post adjustment" onConfirm={({ reason, text }) => { setState(s => ({ ...s, exceptions: s.exceptions.map(x => x.id === modal.resolve ? { ...x, status: "resolved", resolution: reason } : x) })); setModal(null); toast("Adjustment posted · exception resolved"); }} onClose={() => setModal(null)} /> : null}
  </React.Fragment>;
}

/* ---------- Users (app.ops_users, ops_user_detail, ops_restrict_user, ops_issue_credit, ops_start_impersonation, ops_resend_notification) ---------- */
function Users({ market, state, setState, toast, role }) {
  const [q, setQ] = React.useState(""); const [sel, setSel] = React.useState(null); const [modal, setModal] = React.useState(null);
  const list = state.users.filter(u => u.market === market && (!q || u.phone.replace(/\s/g, "").includes(q.replace(/\s/g, "")) || u.email.includes(q.toLowerCase()) || u.name.toLowerCase().includes(q.toLowerCase())));
  const u = state.users.find(x => x.id === sel); const pu = f => setState(s => ({ ...s, users: s.users.map(x => x.id === sel ? f(x) : x) }));
  return <React.Fragment>
    <H1 sub="Look a customer up by phone or email. Restriction pauses reservations; credits land in the wallet; impersonation is read-only, consented, and expires in 30 minutes.">Users</H1>
    <Input icon="search" value={q} onChange={e => setQ(e.target.value)} placeholder="+965 5512 4821 or email" style={{ width: 320 }} />
    <div style={{ display: "grid", gridTemplateColumns: u ? "minmax(0,1fr) 420px" : "1fr", gap: 16, alignItems: "start" }}>
      <Panel><Table cols={[["Name", "minmax(140px,1fr)"], ["Phone", "150px"], ["City", "100px"], ["Since", "90px"], ["Orders", "70px"], ["No-shows (90d)", "110px"], ["Reliability", "90px"], ["Status", "150px"]]}
        rows={list.map(x => [<strong>{x.name}</strong>, <Num>{x.phone}</Num>, x.city, x.since, <Num>{x.orders}</Num>, <Num>{x.noShows}</Num>, <Num>{(x.reliability * 100).toFixed(0)}%</Num>, x.restricted ? <Badge tone="error">restricted · {x.restricted.split(" · ")[0]}</Badge> : <Badge tone="fresh">ok</Badge>])} onRow={i => setSel(list[i].id)} /></Panel>
      {u ? <Panel title={u.name} action={<IconButton icon="x" label="Close" onClick={() => setSel(null)} />} pad>
        <div style={{ display: "grid", gap: 4, fontSize: "var(--text-label-size)" }}>{[["Phone", u.phone], ["Email", u.email], ["Locale", u.locale], ["City", u.city], ["Dietary", u.dietary.join(", ") || "—"], ["Wallet", u.wallet], ["No-shows", `${u.noShows} in 90 days`], ["Restriction", u.restricted || "none"]].map(([k, v]) => <div key={k} style={{ display: "grid", gridTemplateColumns: "100px 1fr", gap: 8 }}><span style={{ color: "var(--color-text-secondary)" }}>{k}</span><span>{v}</span></div>)}</div>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {u.restricted ? <Button size="sm" variant="secondary" onClick={() => { pu(x => ({ ...x, restricted: null })); toast("Restriction lifted"); }}>Lift restriction</Button> : <Button size="sm" variant="danger" onClick={() => setModal("restrict")}>Restrict</Button>}
          <Button size="sm" variant="secondary" iconStart="gift" onClick={() => setModal("credit")}>Issue credit</Button>
          {["support_agent", "admin"].includes(role) ? <Button size="sm" variant="secondary" iconStart="eye" onClick={() => setModal("impersonate")}>Impersonate</Button> : null}
          <Button size="sm" variant="ghost" iconStart="send" onClick={() => toast("Last notification resent")}>Resend notification</Button></div>
        <Panel title="Recent orders">{state.orders.filter(o => o.consumer === u.name).map(o => <ListRow key={o.code} icon="shopping-bag" label={<span><Num>{o.code}</Num> · {o.store}</span>} value={<Badge tone={ORDER_TONE[o.status]}>{label(o.status)}</Badge>} />)}</Panel>
      </Panel> : null}</div>
    {modal === "restrict" ? <ActionModal title={`Restrict ${u.name}`} reasons={[["repeat_no_show", "Repeated no-shows"], ["suspected_abuse", "Suspected abuse"]]} confirm="Restrict" tone="danger" onConfirm={({ reason }) => { pu(x => ({ ...x, restricted: "28 Sep · " + reason })); setModal(null); toast("Reservations paused until 28 Sep"); }} onClose={() => setModal(null)}><Field label="Until"><Input value="28 Sep 2026" onChange={() => {}} /></Field></ActionModal> : null}
    {modal === "credit" ? <ActionModal title={`Issue credit to ${u.name}`} reasons={[["goodwill", "Goodwill"], ["quality_issue", "Quality issue"], ["partner_cancelled", "Partner cancelled"]]} confirm="Issue credit" onConfirm={() => { pu(x => ({ ...x, wallet: market === "KW" ? "KD 1.000" : "EGP 90.00" })); setModal(null); toast("Credit issued · expires in 90 days"); }} onClose={() => setModal(null)}><Field label="Amount" hint="Above the support cap this needs a second approver."><Input value={market === "KW" ? "0.500" : "30.00"} onChange={() => {}} suffix={market === "KW" ? "KD" : "EGP"} /></Field></ActionModal> : null}
    {modal === "impersonate" ? <ActionModal title={`View the app as ${u.name}`} body="Read-only. The customer consented on the call; the session is logged and hard-expires after 30 minutes." confirm="Start session" onConfirm={() => { setModal(null); toast("Impersonation started · expires 30 min · read-only"); }} onClose={() => setModal(null)}><Field label="Consent captured"><Select value="verbal" onChange={() => {}} options={[["verbal", "Verbal on the call"], ["chat", "In-app chat"], ["email", "Email"]]} /></Field></ActionModal> : null}
  </React.Fragment>;
}

/* ---------- Platform: config (four-eyes), feature flags, cities ---------- */
function Config({ market, state, setState, toast, role, me }) {
  const [tab, setTab] = React.useState("config"); const [modal, setModal] = React.useState(null);
  const cfg = D.CONFIG[market]; const admin = role === "admin";
  return <React.Fragment>
    <H1 sub="market_config drives caps, windows, cutoffs and payouts. Changes are proposed, then approved by a second admin. Kill switches flip instantly and are audited." action={<SegmentedControl value={tab} onChange={setTab} options={[{ value: "config", label: "Market config" }, { value: "flags", label: "Feature flags" }, { value: "cities", label: "Cities" }]} />}>Platform</H1>
    {tab === "config" ? <div style={{ display: "grid", gridTemplateColumns: "minmax(0,1fr) 360px", gap: 16, alignItems: "start" }}>
      <Panel title={`market_config · ${market} · v${cfg.version}`} action={admin ? <Button size="sm" onClick={() => setModal("propose")}>Propose change</Button> : null}>
        <Table cols={[["Key", "minmax(200px,1.2fr)"], ["Value", "160px"]]} rows={Object.entries(cfg).filter(([k]) => k !== "version").map(([k, v]) => [<Num>{k}</Num>, <Num>{String(v)}</Num>])} /></Panel>
      <Panel title="Pending approvals (four-eyes)">{state.pending.map(p => <div key={p.id} style={{ padding: "12px 16px", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gap: 6 }}>
        <strong><Num>{p.operation}</Num></strong><span style={{ fontSize: "var(--text-caption-size)" }}>{p.patch}</span><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>First: {p.first}</span>
        {admin ? (p.first.startsWith(me) ? <Banner tone="info" title="You proposed this — a different admin must approve." /> : <div><Button size="sm" onClick={() => { setState(s => ({ ...s, pending: s.pending.filter(x => x.id !== p.id) })); toast("Applied · config v" + (cfg.version + 1)); }}>Approve and apply</Button></div>) : null}</div>)}
        {!state.pending.length ? <div style={{ padding: 16 }}><EmptyState icon="scale" title="Nothing pending" /></div> : null}</Panel></div> : null}
    {tab === "flags" ? <Panel title="feature_flag"><Table cols={[["Key", "minmax(200px,1.2fr)"], ["Market", "80px"], ["Kill switch", "100px"], ["Enabled", "120px"]]} rows={state.flags.filter(f => f.market === market).map(f => [<Num>{f.key}</Num>, f.market, f.kill ? <Badge tone="error">kill switch</Badge> : "", <Switch checked={f.enabled} label={f.key} disabled={!["engineering", "admin"].includes(role)} onChange={v => { setState(s => ({ ...s, flags: s.flags.map(x => x.key === f.key ? { ...x, enabled: v } : x) })); toast(`${f.key} ${v ? "enabled" : "disabled"} · audited`); }} />])} /></Panel> : null}
    {tab === "cities" ? <Panel title="city (stage: waitlist → soft_launch → live)" action={admin ? <Button size="sm" iconStart="plus" onClick={() => toast("Add city")}>Add city</Button> : null}>
      <Table cols={[["City", "minmax(160px,1fr)"], ["Arabic", "140px"], ["Stage", "150px"], ["Radius", "90px"], ["Partners", "80px"], ["Waitlist", "80px"]]} rows={state.cities.filter(c => c.market === market).map(c => [<strong>{c.name}</strong>, <span dir="rtl">{c.ar}</span>, admin ? <Select value={c.stage} onChange={v => { setState(s => ({ ...s, cities: s.cities.map(x => x.name === c.name ? { ...x, stage: v } : x) })); toast(`${c.name} → ${v}${v === "live" ? " · waitlist emailed" : ""}`); }} options={["waitlist", "soft_launch", "live"]} style={{ minHeight: 32, padding: "0 8px" }} /> : <Badge tone={c.stage === "live" ? "fresh" : "time"}>{label(c.stage)}</Badge>, <Num>{c.radius} m</Num>, <Num>{c.partners}</Num>, c.waitlist ? <Num>{c.waitlist}</Num> : "—"])} /></Panel> : null}
    {modal === "propose" ? <ActionModal title={`Propose a change to market_config · ${market}`} fourEyes confirm="Propose" onConfirm={({ text }) => { setState(s => ({ ...s, pending: [...s.pending, { id: "pa" + Date.now(), operation: "market_config." + market, patch: "hold_duration_minutes 10 → 12", first: me + " · now" }] })); setModal(null); toast("Proposed · waiting for a second admin"); }} onClose={() => setModal(null)}>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}><Field label="Key"><Select value="hold_duration_minutes" onChange={() => {}} options={Object.keys(cfg).filter(k => k !== "version")} /></Field><Field label="New value"><Input value="12" onChange={() => {}} /></Field></div></ActionModal> : null}
  </React.Fragment>;
}

/* ---------- Notifications (app.ops_templates, ops_upsert_template, ops_review_template, publish_notification_template, ops_notifications, ops_resend_notification) ---------- */
function Notifications({ state, setState, toast, role }) {
  const [sel, setSel] = React.useState(null); const [locale, setLocale] = React.useState("en");
  const t = state.templates[sel]; const list = state.templates.map((x, i) => ({ ...x, i })).filter(x => x.locale === locale);
  const pt = f => setState(s => ({ ...s, templates: s.templates.map((x, i) => i === sel ? f(x) : x) }));
  return <React.Fragment>
    <H1 sub="Push and email copy per key and locale. Edits create a new version; a second person reviews; publish makes it live. Every send is logged and can be resent." action={<SegmentedControl value={locale} onChange={setLocale} options={[{ value: "en", label: "English" }, { value: "ar-KW", label: "Arabic · KW" }, { value: "ar-EG", label: "Arabic · EG" }]} />}>Notifications</H1>
    <div style={{ display: "grid", gridTemplateColumns: t ? "minmax(0,1fr) 440px" : "1fr", gap: 16, alignItems: "start" }}>
      <Panel><Table cols={[["Key", "minmax(180px,1.1fr)"], ["Title", "minmax(200px,1.4fr)"], ["Deep link", "170px"], ["v", "40px"], ["Status", "120px"]]} rows={list.map(x => [<Num>{x.key}</Num>, x.title, <Num>{x.link}</Num>, <Num>{x.version}</Num>, x.published ? <Badge tone="fresh">published</Badge> : x.reviewed ? <Badge tone="time">reviewed</Badge> : <Badge tone="neutral">draft</Badge>])} onRow={i => setSel(list[i].i)} empty={`No ${locale} templates yet — authored natively, never translated.`} /></Panel>
      {t ? <Panel title={<Num>{t.key}</Num>} action={<IconButton icon="x" label="Close" onClick={() => setSel(null)} />} pad>
        <Field label="Title"><Input value={t.title} onChange={e => pt(x => ({ ...x, title: e.target.value, published: false, reviewed: null }))} dir={t.locale === "en" ? "ltr" : "rtl"} /></Field>
        <Field label="Body"><Textarea value={t.body} onChange={e => pt(x => ({ ...x, body: e.target.value, published: false, reviewed: null }))} dir={t.locale === "en" ? "ltr" : "rtl"} /></Field>
        <Field label="Deep link"><Input value={t.link} onChange={() => {}} /></Field>
        <Card padded style={{ background: "var(--color-surface-inverse)", color: "#fff", display: "grid", gap: 4 }}><span style={{ fontSize: "var(--text-micro-size)", opacity: .7 }}>Preview · lock screen</span><strong>{t.title.replace("{store}", "Kuwait Bakehouse").replace("{minutes}", "15").replace("{document}", "Food permit")}</strong><span style={{ fontSize: "var(--text-caption-size)", opacity: .85 }}>{t.body.replace("{code}", "KW-4821").replace("{window}", "21:30–22:30").replace("{time}", "22:30").replace("{amount}", "KD 2.000").replace("{distance}", "1.4 km")}</span></Card>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
          {!t.reviewed ? <Button size="sm" variant="secondary" onClick={() => { pt(x => ({ ...x, reviewed: "You", version: x.version + 1 })); toast("Marked reviewed · v" + (t.version + 1)); }}>Mark reviewed</Button> : null}
          {t.reviewed && !t.published ? <Button size="sm" onClick={() => { pt(x => ({ ...x, published: true })); toast("Published"); }}>Publish</Button> : null}
          <Button size="sm" variant="ghost" iconStart="send" onClick={() => toast("Test push sent to you")}>Send test</Button></div>
      </Panel> : null}</div>
  </React.Fragment>;
}

/* ---------- Jobs (app.ops_jobs, ops_trigger_job) + Audit log (app.ops_audit) ---------- */
function Jobs({ state, setState, toast, role }) {
  return <React.Fragment>
    <H1 sub="Scheduled jobs and their last run. A failed run alerts on Live; trigger a job by hand after fixing the cause.">Jobs</H1>
    <Panel><Table cols={[["Job", "minmax(200px,1.2fr)"], ["Cadence", "120px"], ["Last run", "120px"], ["Status", "90px"], ["Rows", "60px"], ["Duration", "80px"], ["Error", "minmax(160px,1.4fr)"], ["", "100px"]]}
      rows={state.jobs.map(j => [<Num>{j.name}</Num>, j.cadence, <Num>{j.last}</Num>, <Badge tone={j.status === "ok" ? "fresh" : "error"}>{j.status}</Badge>, <Num>{j.rows}</Num>, <Num>{j.dur}</Num>, <span style={{ color: "var(--color-error)" }}>{j.error || ""}</span>, ["engineering", "admin"].includes(role) ? <Button size="sm" variant="secondary" iconStart="play" onClick={() => { setState(s => ({ ...s, jobs: s.jobs.map(x => x.name === j.name ? { ...x, status: "ok", alerting: false, error: null, last: "now" } : x) })); toast(`${j.name} triggered`); }}>Run now</Button> : ""])} /></Panel>
  </React.Fragment>;
}
function Audit({ state }) {
  const [op, setOp] = React.useState(""); const [actor, setActor] = React.useState("");
  const rows = state.audit.filter(a => (!op || a.op.includes(op)) && (!actor || a.actor.toLowerCase().includes(actor.toLowerCase())));
  return <React.Fragment>
    <H1 sub="Every ops action with who, what, why. Append-only; export any range.">Audit log</H1>
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}><Input icon="search" value={op} onChange={e => setOp(e.target.value)} placeholder="operation" style={{ width: 220 }} /><Input icon="user" value={actor} onChange={e => setActor(e.target.value)} placeholder="actor" style={{ width: 180 }} /><Button variant="secondary" iconStart="download" style={{ alignSelf: "end" }}>Export</Button></div>
    <Panel><Table cols={[["When", "110px"], ["Actor", "110px"], ["Role", "100px"], ["Operation", "190px"], ["Target", "minmax(180px,1.2fr)"], ["Reason", "130px"], ["Justification", "minmax(180px,1.4fr)"]]} rows={rows.map(a => [<Num>{a.at}</Num>, a.actor, <Badge tone="neutral">{a.role}</Badge>, <Num>{a.op}</Num>, a.target, a.reason ? label(a.reason) : "", a.just || ""])} /></Panel>
  </React.Fragment>;
}

Object.assign(window, { OpsScreens: { Live, Requests, Partners, PartnerDetail, Orders, Moderation, Trust, Finance, Users, Config, Notifications, Jobs, Audit } });
})();
