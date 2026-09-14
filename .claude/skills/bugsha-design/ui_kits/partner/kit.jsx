// Partner portal — shell, auth + onboarding stage machine, and the console.
// Stages follow public.onboarding_status; the console is role-aware per public.partner_role.
(function(){
const { Logo, Icon, SegmentedControl, Badge, Button, Banner, Toast } = window.SurplusKWDesignSystem_97ec90;
const COPY = window.PARTNER_COPY;
const OB = window.PartnerOnboarding, CN = window.PartnerConsole;

/* nav: key, icon, roles that can see it, markets it applies to */
const NAV = [
  ["tonight", "moon", ["owner", "manager", "staff", "accountant"]],
  ["list", "plus", ["owner", "manager"]],
  ["redeem", "scan-line", ["owner", "manager", "staff"]],
  ["bundles", "package", ["owner", "manager"]],
  ["schedules", "calendar", ["owner", "manager"]],
  ["cash", "banknote", ["owner", "manager", "staff", "accountant"], ["EG"]],
  ["payouts", "wallet", ["owner", "accountant"]],
  ["ledger", "file-text", ["owner", "manager", "accountant"]],
  ["reviews", "star", ["owner", "manager"]],
  ["analytics", "chart-column", ["owner", "manager", "accountant"]],
  ["quality", "shield-alert", ["owner", "manager"]],
  ["documents", "clipboard-check", ["owner", "manager", "accountant"]],
  ["staff", "users", ["owner", "manager"]],
  ["branches", "store", ["owner", "manager"]],
];
const NAV_LABEL = {
  en: { tonight: "Tonight", list: "List a bundle", redeem: "Redeem", bundles: "My bundles", schedules: "Schedules", cash: "Cash", payouts: "Payouts", ledger: "Inspection log", reviews: "Reviews", analytics: "Analytics", quality: "Quality", documents: "Documents", staff: "Staff", branches: "Branches" },
  ar: { tonight: "الليلة", list: "أدرج بقشة", redeem: "التسليم", bundles: "البقش المحفوظة", schedules: "الجداول", cash: "الكاش", payouts: "المستحقات", ledger: "سجل التفتيش", reviews: "التقييمات", analytics: "التحليلات", quality: "الجودة", documents: "المستندات", staff: "الشباب", branches: "الفروع" },
};
const ROLE_LABEL = { en: { owner: "Owner", manager: "Manager", staff: "Staff", accountant: "Accountant" }, ar: { owner: "مالك", manager: "مدير", staff: "موظف", accountant: "محاسب" } };
const STATUSES = ["applied", "documents_pending", "under_review", "approved", "contract_pending", "contract_signed", "store_setup", "first_listing_pending", "active", "rejected", "suspended"];

function Shell({ t, ar, lang, setLang, view, setView, role, market, liveQty, stores, storeIdx, setStoreIdx, alert, children }) {
  const nav = NAV.filter(([k, , roles, mk]) => roles.includes(role) && (!mk || mk.includes(market)));
  const L = NAV_LABEL[lang];
  return <div dir={t.dir} style={{ display: "grid", gridTemplateColumns: "244px minmax(0,1fr)", minHeight: "100vh", background: "var(--color-surface-canvas)" }}>
    <aside style={{ background: "var(--color-surface-inverse)", color: "var(--color-text-inverse)", padding: "18px 12px", display: "grid", alignContent: "start", gap: 2 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "2px 8px 16px" }}>
        <Logo lockup="mark" size={24} color="#fff" fold="var(--color-surface-inverse)" foldOpacity={1} /><span style={{ fontWeight: 600, fontSize: "var(--text-label-size)" }}>{t.brand}</span></div>
      <select value={storeIdx} onChange={e => setStoreIdx(Number(e.target.value))} aria-label={t.switchBranch}
        style={{ display: "block", width: "100%", textAlign: "start", padding: "10px 12px", marginBottom: 10, borderRadius: "var(--radius-control)", border: "1px solid rgba(255,255,255,.16)", background: "rgba(255,255,255,.06)", color: "inherit", cursor: "pointer", minHeight: 44, font: "inherit", fontSize: "var(--text-label-size)", fontWeight: 600 }}>
        {stores.map((s, i) => <option key={i} value={i} style={{ color: "#000" }}>{ar ? s.ar : s.en}</option>)}</select>
      {nav.map(([k, icon]) => <button key={k} onClick={() => setView(k)} style={{ display: "flex", alignItems: "center", gap: 10, textAlign: "start", padding: "8px 12px", minHeight: 40,
        borderRadius: "var(--radius-control)", border: "none", cursor: "pointer", fontSize: "var(--text-label-size)", fontFamily: "inherit",
        fontWeight: view === k ? 600 : 400, background: view === k ? "rgba(255,255,255,.14)" : "transparent", color: "inherit" }}>
        <Icon name={icon} size={16} /><span style={{ flex: 1 }}>{L[k]}</span>{k === "quality" && alert.flags ? <Badge tone="deal">{alert.flags}</Badge> : null}{k === "documents" && alert.docs ? <Badge tone="deal">!</Badge> : null}</button>)}
      <div style={{ marginTop: "auto", paddingTop: 20, display: "grid", gap: 10 }}>
        <div style={{ padding: "0 8px" }}><SegmentedControl value={lang} onChange={setLang} options={[{ value: "en", label: "EN" }, { value: "ar", label: "ع" }]} /></div>
        <div style={{ display: "flex", gap: 8, alignItems: "center", padding: "10px 8px 0", borderTop: "1px solid rgba(255,255,255,.12)", fontSize: "var(--text-caption-size)", opacity: .75 }}>
          <Icon name="user" size={15} /><span>{ar ? "يوسف ك." : "Yousef K."} · {ROLE_LABEL[lang][role]}</span></div></div>
    </aside>
    <div style={{ display: "grid", gridTemplateRows: "auto minmax(0,1fr)" }}>
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "12px 28px", borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-surface-raised)" }}>
        <div style={{ display: "flex", gap: 10, alignItems: "center", flexWrap: "wrap" }}>
          <Badge tone="fresh">{t.live} · {liveQty}</Badge>
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{t.closesIn} <span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate", fontFamily: "var(--font-plex-mono), monospace" }}>46 min · 22:30</span></span>
          {alert.paused ? <Badge tone="urgent">{CN.COPY[lang].pausedUntil("23:59")}</Badge> : null}
          {alert.expired ? <Badge tone="error">{OB.COPY[lang].docExpired(ar ? "تصريح الأغذية" : "Food permit")}</Badge> : null}</div>
        <span className="ds-numeric" style={{ fontFamily: "var(--font-plex-mono), monospace", fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>21:44</span>
      </header>
      <main style={{ padding: "24px 28px 40px", display: "grid", alignContent: "start", gap: 18, maxWidth: "var(--layout-max-partner)" }}>{children}</main>
    </div>
  </div>;
}

function App(){
  const [lang, setLang] = React.useState("en"); const t = COPY[lang]; const ar = lang === "ar";
  const oc = OB.COPY[lang], cc = CN.COPY[lang]; oc.dir = t.dir;
  const [market, setMarket] = React.useState("KW");
  const [role, setRole] = React.useState("owner");
  const [auth, setAuth] = React.useState("signin");   // signin | code | join | entercode | apply | request | hub | docs | contract | store | app
  const [email, setEmail] = React.useState("");
  const [seed, setSeed] = React.useState(null);
  const [status, setStatus] = React.useState("applied");
  const [docs, setDocs] = React.useState(OB.defaultDocs("KW"));
  const [contract, setContract] = React.useState({ version: 1, commissionBp: 1500, accepted: false });
  const [storeForm, setStoreForm] = React.useState({ name: "", city: "hawalli", address: "", phone: "", pickupEn: "", pickupAr: "", hours: OB.defaultHours(), ramadanHours: OB.defaultHours().map(h => ({ ...h, open: "20:00", close: "02:00" })), saved: false });
  const [view, setView] = React.useState("tonight");
  const [storeIdx, setStoreIdx] = React.useState(0);
  const [listings, setListings] = React.useState(window.PARTNER_LISTINGS);
  const [presets, setPresets] = React.useState(window.PARTNER_PRESETS);
  const [orders, setOrders] = React.useState(window.PARTNER_ORDERS.map((o, i) => ({ ...o, cash: i % 2 === 1 })));
  const [schedules, setSchedules] = React.useState([{ id: "s1", template: "bakery", days: ["sat", "sun", "mon", "tue", "wed", "thu"], window: "21:30–22:30", qty: 6, lead: 150, ramadan: true, active: true }]);
  const [flags, setFlags] = React.useState(window.PARTNER_FLAGS);
  const [disputes, setDisputes] = React.useState(window.PARTNER_DISPUTES);
  const [staff, setStaff] = React.useState(window.PARTNER_STAFF_FULL);
  const [paused, setPaused] = React.useState(false);
  const [expired, setExpired] = React.useState(false);
  const [hold, setHold] = React.useState(false);
  const store = { listings, setListings, presets, setPresets, orders, setOrders, schedules, setSchedules, flags, setFlags, disputes, setDisputes, staff, setStaff };
  React.useEffect(() => { document.documentElement.dir = t.dir; document.body.dir = t.dir; }, [lang]);
  React.useEffect(() => { setDocs(OB.defaultDocs(market)); setStoreForm(f => ({ ...f, city: OB.CITIES[market][0][0] })); }, [market]);
  // app.publish_listing on a first_listing_pending partner → trg_partner_activation → active
  const baseline = React.useRef(listings.length);
  React.useEffect(() => { if (status === "first_listing_pending" && listings.length > baseline.current) setStatus("active"); if (status !== "first_listing_pending") baseline.current = listings.length; }, [listings, status]);

  // jump straight to a stage from the toolbar, with the fixtures each stage implies
  const jump = st => {
    setStatus(st); const i = OB.stageIndex(st);
    setDocs(OB.defaultDocs(market).map((d, k) => i >= 3 || st === "active" || st === "suspended" ? { ...d, status: "approved", file: "scan.pdf", expiry: d.requiresExpiry ? (k === 1 ? "12 Oct 2026" : "1 Mar 2027") : null, soon: k === 1 }
      : st === "under_review" ? { ...d, status: k === 0 ? "approved" : "under_review", file: "scan.pdf", expiry: d.requiresExpiry ? "1 Mar 2027" : null }
      : st === "documents_pending" ? { ...d, status: k === 0 ? "approved" : k === 2 ? "rejected" : "missing", file: k === 0 || k === 2 ? "scan.pdf" : null, expiry: k === 0 ? "1 Mar 2027" : null, reason: k === 2 ? "doc_illegible" : null } : d));
    setContract(c => ({ ...c, accepted: i >= 4 || st === "active" || st === "suspended" }));
    setStoreForm(f => ({ ...f, saved: i >= 5 || st === "active" || st === "suspended", name: i >= 5 || st === "active" || st === "suspended" ? (ar ? "السالمية · قطعة 10" : "Salmiya · Block 10") : f.name }));
    setAuth(st === "active" ? "app" : "hub"); setEmail("yousef@kuwaitbakehouse.com");
  };
  const advanceIfReady = () => { if (docs.every(d => d.status === "approved") && contract.accepted && storeForm.saved) { setStatus("active"); return true; } return false; };
  const liveQty = listings.filter(l => l.live).reduce((n, l) => n + (l.qty - l.sold), 0);
  const stores = window.PARTNER_BRANCHES;
  const alert = { flags: flags.filter(f => !f.acked).length, docs: expired || docs.some(d => d.soon), paused, expired };

  /* ---- toolbar ---- */
  const bar = <div style={{ display: "flex", gap: 10, justifyContent: "center", flexWrap: "wrap", padding: "12px 16px", background: "#EDEBF3", borderBottom: "1px solid var(--color-border-subtle)" }} dir="ltr">
    <SegmentedControl value={lang} onChange={setLang} options={[{ value: "en", label: "English" }, { value: "ar", label: "العربية" }]} />
    <SegmentedControl value={market} onChange={setMarket} options={[{ value: "KW", label: "KW" }, { value: "EG", label: "EG" }]} />
    <SegmentedControl value={role} onChange={setRole} options={["owner", "manager", "staff", "accountant"].map(r => ({ value: r, label: ROLE_LABEL.en[r] }))} />
    <select value={auth === "app" ? "active" : ["hub", "docs", "contract", "store"].includes(auth) ? status : "signedout"} onChange={e => e.target.value === "signedout" ? (setAuth("signin"), setEmail("")) : jump(e.target.value)}
      style={{ minHeight: 40, padding: "0 12px", borderRadius: "var(--radius-control)", border: "1px solid var(--color-border-default)", background: "var(--color-surface-raised)", font: "inherit", fontSize: "var(--text-label-size)", fontWeight: 600 }}>
      <option value="signedout">Signed out</option>{STATUSES.map(s => <option key={s} value={s}>{s}</option>)}</select>
    <Button variant="secondary" size="sm" onClick={() => setExpired(x => !x)}>{expired ? "Renew permit" : "Expire permit"}</Button>
    <Button variant="secondary" size="sm" onClick={() => setHold(x => !x)}>{hold ? "Release hold" : "Quality hold"}</Button>
  </div>;

  /* ---- auth + onboarding ---- */
  let body;
  if (auth === "signin") body = <OB.SignIn c={oc} onCode={e => { setEmail(e); setAuth("code"); }} />;
  else if (auth === "code") body = <OB.Code c={oc} email={email} onBack={() => setAuth("signin")} onVerified={() => setAuth(email.includes("kuwaitbakehouse") ? (status === "active" ? "app" : "hub") : "join")} />;
  else if (auth === "join") body = <OB.Join c={oc} email={email} onHaveCode={() => setAuth("entercode")} onRequest={() => setAuth("request")} onSignOut={() => setAuth("signin")} />;
  else if (auth === "entercode") body = <OB.EnterCode c={oc} ar={ar} onBack={() => setAuth("join")} onValid={s => { setSeed({ ...s, email }); setMarket(s.market); setAuth("apply"); }} />;
  else if (auth === "apply") body = <OB.ApplicationForm c={oc} ar={ar} market={market} setMarket={setMarket} seed={seed} mode="apply" onBack={() => setAuth("entercode")} onSubmit={() => { setStatus("applied"); setAuth("hub"); }} />;
  else if (auth === "request") body = <OB.ApplicationForm c={oc} ar={ar} market={market} setMarket={setMarket} seed={null} mode="request" onBack={() => setAuth("join")} onSubmit={() => setAuth("join")} />;
  else if (auth === "hub") body = <OB.StatusHub c={oc} ar={ar} market={market} status={status} docs={docs} contract={contract} store={storeForm} onSignOut={() => setAuth("signin")}
    onGo={k => { if (k === "console" || k === "list") { setAuth("app"); setView(k === "list" ? "list" : "tonight"); } else setAuth(k); }} />;
  else if (auth === "docs") body = <OB.Documents c={oc} ar={ar} market={market} docs={docs} setDocs={d => { setDocs(d); if (status === "applied") setStatus("documents_pending"); }} onBack={() => setAuth("hub")} />;
  else if (auth === "contract") body = <OB.Contract c={oc} ar={ar} market={market} contract={contract} onBack={() => setAuth("hub")} onAccept={() => { setContract(c => ({ ...c, accepted: true })); setStatus("contract_signed"); setAuth("hub"); }} />;
  else if (auth === "store") body = <OB.StoreSetup c={oc} ar={ar} market={market} store={storeForm} setStore={setStoreForm} onBack={() => setAuth("hub")}
    onSave={() => { setStoreForm(f => ({ ...f, saved: true })); setStatus("first_listing_pending"); setAuth("hub"); }} />;
  else {
    const V = { tonight: window.PartnerTonight, list: window.PartnerListBundle, bundles: window.PartnerBundles, payouts: window.PartnerPayouts, ledger: window.PartnerLedger, reviews: window.PartnerReviews, analytics: window.PartnerImpact, branches: window.PartnerBranches }[view];
    const onList = () => setView("list");
    const onDone = () => { setView("tonight"); if (status === "first_listing_pending") setStatus("active"); };
    const blocked = expired || hold || paused;
    const inner = view === "redeem" ? <CN.Redeem c={cc} t={t} ar={ar} store={store} market={market} />
      : view === "schedules" ? <CN.Schedules c={cc} t={t} ar={ar} store={store} />
      : view === "cash" ? <CN.Cash c={cc} t={t} ar={ar} store={store} />
      : view === "quality" ? <CN.Quality c={cc} t={t} ar={ar} store={store} hold={hold} />
      : view === "staff" ? <CN.Staff c={cc} t={t} ar={ar} store={store} />
      : view === "documents" ? <CN.DocumentsView c={cc} oc={oc} ar={ar} market={market} docs={docs} setDocs={setDocs} expired={expired} />
      : view === "branches" ? <React.Fragment><window.PartnerBranches t={t} ar={ar} lang={lang} setLang={setLang} /><CN.BranchSettings c={cc} oc={oc} t={t} ar={ar} market={market} store={storeForm} setStore={setStoreForm} paused={paused} setPaused={setPaused} /></React.Fragment>
      : <V key={view + lang} t={t} ar={ar} lang={lang} setLang={setLang} store={store} onList={onList} onDone={onDone} />;
    body = <Shell t={t} ar={ar} lang={lang} setLang={setLang} view={view} setView={setView} role={role} market={market} liveQty={liveQty} stores={stores} storeIdx={storeIdx} setStoreIdx={setStoreIdx} alert={alert}>
      {status === "first_listing_pending" ? <Banner tone="time" title={oc.stages.first_listing_pending}>{oc.stageBody.first_listing_pending}</Banner> : null}
      {expired && (view === "tonight" || view === "list") ? <Banner tone="error" title={oc.docExpired(ar ? "تصريح الأغذية" : "Food permit")} action={<Button size="sm" variant="secondary" onClick={() => setView("documents")}>{cc.documents}</Button>}>{oc.docExpiredBody}</Banner> : null}
      {hold && (view === "tonight" || view === "list") ? <Banner tone="error" title={cc.hold}>{cc.holdBody}</Banner> : null}
      {paused && view === "tonight" ? <Banner tone="time" title={cc.pausedUntil("23:59")} action={<Button size="sm" variant="secondary" onClick={() => setPaused(false)}>{cc.resumeRes}</Button>}>{cc.pauseBody}</Banner> : null}
      {inner}
    </Shell>;
  }
  return <div>{bar}{body}</div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
})();
