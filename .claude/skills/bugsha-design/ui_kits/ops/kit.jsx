// Ops console — shell, role and market switching, routing. Roles follow public.ops_role.
(function(){
const { Logo, Icon, SegmentedControl, Badge, Button, Toast } = window.SurplusKWDesignSystem_97ec90;
const S = window.OpsScreens, D = window.OPS;

const NAV = [
  ["live", "Live", "activity", ["support_agent", "ops_manager", "finance", "compliance", "engineering", "admin"]],
  ["requests", "Requests & codes", "key", ["ops_manager", "admin"]],
  ["partners", "Partners", "store", ["ops_manager", "compliance", "admin", "support_agent"]],
  ["orders", "Orders", "shopping-bag", ["support_agent", "ops_manager", "admin"]],
  ["moderation", "Moderation", "eye", ["ops_manager", "compliance", "admin"]],
  ["disputes", "Trust & safety", "shield-alert", ["support_agent", "ops_manager", "compliance", "admin"]],
  ["finance", "Finance", "scale", ["finance", "admin"]],
  ["users", "Users", "users", ["support_agent", "ops_manager", "admin"]],
  ["config", "Platform", "settings", ["engineering", "admin"]],
  ["notifications", "Notifications", "bell", ["ops_manager", "engineering", "admin"]],
  ["jobs", "Jobs", "zap", ["engineering", "admin"]],
  ["audit", "Audit log", "history", ["compliance", "admin", "ops_manager"]],
];
const ROLES = ["support_agent", "ops_manager", "finance", "compliance", "engineering", "admin"];
const NAMES = { support_agent: "Lulwa A.", ops_manager: "Sara M.", finance: "Dana F.", compliance: "Khaled R.", engineering: "Omar T.", admin: "Ahmed E." };

function App(){
  const [market, setMarket] = React.useState("KW");
  const [role, setRole] = React.useState("ops_manager");
  const [view, setView] = React.useState("live");
  const [partnerId, setPartnerId] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [state, setState] = React.useState({ requests: D.REQUESTS, codes: D.CODES, partners: D.PARTNERS, orders: D.ORDERS, moderation: D.MODERATION, disputes: D.DISPUTES, incidents: D.INCIDENTS, runs: D.PAYOUT_RUNS, exceptions: D.EXCEPTIONS, users: D.USERS, pending: D.PENDING, flags: D.FLAGS, cities: D.CITIES, templates: D.TEMPLATES, jobs: D.JOBS, audit: D.AUDIT });
  React.useEffect(() => { if (!toast) return; const id = setTimeout(() => setToast(null), 3200); return () => clearTimeout(id); }, [toast]);
  const nav = NAV.filter(n => n[3].includes(role));
  React.useEffect(() => { if (!nav.some(n => n[0] === view)) setView("live"); }, [role]);
  const go = (v, id) => { setView(v); if (id) setPartnerId(id); else if (v !== "partners") setPartnerId(null); };
  const me = NAMES[role];
  const counts = { requests: state.requests.filter(r => r.market === market && r.status === "new").length, disputes: state.disputes.filter(d => d.market === market && !d.resolution).length, moderation: state.moderation.filter(m => m.status === "flagged").length, jobs: state.jobs.filter(j => j.alerting).length, finance: state.exceptions.filter(x => x.market === market && x.status === "open").length, config: role === "admin" ? state.pending.length : 0 };
  const props = { market, state, setState, toast: setToast, role, me, go };
  const body = view === "live" ? <S.Live {...props} /> : view === "requests" ? <S.Requests {...props} /> : view === "partners" ? (partnerId ? <S.PartnerDetail {...props} id={partnerId} back={() => setPartnerId(null)} /> : <S.Partners {...props} />)
    : view === "orders" ? <S.Orders {...props} /> : view === "moderation" ? <S.Moderation {...props} /> : view === "disputes" ? <S.Trust {...props} /> : view === "finance" ? <S.Finance {...props} /> : view === "users" ? <S.Users {...props} />
    : view === "config" ? <S.Config {...props} /> : view === "notifications" ? <S.Notifications {...props} /> : view === "jobs" ? <S.Jobs {...props} /> : <S.Audit {...props} />;
  const cap = { live: "S-O-001", requests: "S-O-010 / S-O-011", partners: partnerId ? "S-O-021" : "S-O-020", orders: "S-O-030", moderation: "S-O-031", disputes: "S-O-040 / S-O-041", finance: "S-O-050 / 051 / 052", users: "S-O-060", config: "S-O-070 / 071 / 072", notifications: "S-O-080", jobs: "S-O-090", audit: "S-O-091" }[view];
  return <div>
    <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", padding: "12px 16px", background: "#EDEBF3", borderBottom: "1px solid var(--color-border-subtle)" }}>
      <SegmentedControl value={market} onChange={setMarket} options={[{ value: "KW", label: "Kuwait" }, { value: "EG", label: "Egypt" }]} />
      <SegmentedControl value={role} onChange={setRole} options={ROLES.map(r => ({ value: r, label: r.replace("_", " ") }))} />
      <span style={{ alignSelf: "center", fontFamily: "var(--font-plex-mono)", fontSize: 11, letterSpacing: ".08em", color: "var(--color-text-tertiary)" }}>{cap}</span></div>
    <div style={{ display: "grid", gridTemplateColumns: "232px minmax(0,1fr)", minHeight: "calc(100vh - 65px)", background: "var(--color-surface-canvas)" }}>
      <aside style={{ background: "var(--color-surface-inverse)", color: "var(--color-text-inverse)", padding: "18px 12px", display: "grid", alignContent: "start", gap: 2 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "2px 8px 16px" }}><Logo lockup="mark" size={24} color="#fff" fold="var(--color-surface-inverse)" foldOpacity={1} /><span style={{ fontWeight: 600, fontSize: "var(--text-label-size)" }}>Bugsha · Ops</span></div>
        {nav.map(([k, l, icon]) => <button key={k} onClick={() => go(k)} style={{ display: "flex", alignItems: "center", gap: 10, textAlign: "start", padding: "8px 12px", minHeight: 40, borderRadius: "var(--radius-control)", border: "none", cursor: "pointer", fontSize: "var(--text-label-size)", fontFamily: "inherit",
          fontWeight: view === k ? 600 : 400, background: view === k ? "rgba(255,255,255,.14)" : "transparent", color: "inherit" }}><Icon name={icon} size={16} /><span style={{ flex: 1 }}>{l}</span>{counts[k] ? <Badge tone="deal">{counts[k]}</Badge> : null}</button>)}
        <div style={{ marginTop: "auto", paddingTop: 20, display: "grid", gap: 6, fontSize: "var(--text-caption-size)", opacity: .75 }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "10px 8px 0", borderTop: "1px solid rgba(255,255,255,.12)" }}><Icon name="user" size={15} /><span>{me} · {role.replace("_", " ")}</span></div>
          <span style={{ padding: "0 8px" }}>Market scope: {role === "support_agent" ? "KW" : "KW · EG"}</span></div></aside>
      <div style={{ display: "grid", gridTemplateRows: "auto minmax(0,1fr)" }}>
        <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "12px 28px", borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-surface-raised)" }}>
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}><Badge tone="neutral" uppercase>{market === "KW" ? "Kuwait · KWD" : "Egypt · EGP"}</Badge><span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>Tonight · <span className="ds-numeric" style={{ fontFamily: "var(--font-plex-mono)" }}>21:44 {market === "KW" ? "AST" : "EET"}</span></span></div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}><Button size="sm" variant="ghost" iconStart="search" onClick={() => go("orders")}>Find order</Button><Button size="sm" variant="ghost" iconStart="log-out">Sign out</Button></div></header>
        <main style={{ padding: "24px 28px 40px", display: "grid", alignContent: "start", gap: 18, maxWidth: 1280 }}>{body}</main></div></div>
    {toast ? <div style={{ position: "fixed", insetInline: 0, bottom: 20, display: "grid", justifyItems: "center", zIndex: 70, pointerEvents: "none" }}><Toast tone="success">{toast}</Toast></div> : null}
  </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
})();
