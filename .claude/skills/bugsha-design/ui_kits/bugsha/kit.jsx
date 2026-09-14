// Bugsha app — shell, stage machine and routing. Screens live in screens.jsx (marketplace) and stages.jsx (everything around it).
(function () {
const NS = window.SurplusKWDesignSystem_97ec90;
const { Button, IconButton, Icon, Chip, Input, SegmentedControl, TabBar, Toast, BottomSheet, Dialog, Banner, Card, Logo, Skeleton } = NS;
const { BugshaT: T, BugshaBags: BAGS } = window;
const { Browse, Search, Detail, MapTab, Orders, Order, Me } = window.BugshaScreens;
const ST = window.BugshaStages;

function Howto({ t }) {
  return <div style={{ display: "grid", gap: 16 }}>
    {t.steps.map(([h, b], i) => <div key={h} style={{ display: "flex", gap: 12 }}>
      <span className="ds-numeric" style={{ width: 28, height: 28, flex: "none", borderRadius: "var(--radius-chip)",
        background: "var(--color-brand-tint)", color: "var(--color-brand-primary)", display: "grid", placeItems: "center", fontWeight: 600 }}>{i + 1}</span>
      <span style={{ display: "grid", gap: 3 }}>
        <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{h}</strong>
        <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-caption-size)" }}>{b}</span></span>
    </div>)}
  </div>;
}
function Loading() {
  return <div style={{ padding: 16, display: "grid", gap: 12 }}>
    <Skeleton height={44} radius="var(--radius-control)" /><Skeleton height={20} width="40%" />
    {[0, 1].map(i => <div key={i} style={{ display: "grid", gap: 8, padding: 12, borderRadius: "var(--radius-card)", background: "var(--color-surface-raised)", border: "1px solid var(--color-border-subtle)" }}>
      <Skeleton height={120} radius="var(--radius-image)" /><Skeleton height={18} width="60%" /><Skeleton height={14} width="45%" /></div>)}
  </div>;
}

const STAGES = ["language", "intro", "signin", "code", "profile", "citywait", "dietary", "app"];

function App() {
  const [locale, setLocale] = React.useState("en");
  const lang = locale.startsWith("ar") ? "ar" : "en";
  const setLang = l => setLocale(l === "ar" ? (market === "EG" ? "ar-EG" : "ar-KW") : "en");
  const [dark, setDark] = React.useState(false);
  const [market, setMarket] = React.useState("KW");
  const t = T[lang], ar = lang === "ar", s = ST.S[lang];
  const [stage, setStage] = React.useState("language");
  const [email, setEmail] = React.useState("");
  const [profile, setProfile] = React.useState({ first: "", last: "", phone: "", email: "", city: "hawalli" });
  const [flags, setFlags] = React.useState([]); const [ack, setAck] = React.useState(false);
  const [waitCity, setWaitCity] = React.useState(null);
  const [tab, setTab] = React.useState("browse");
  const [screen, setScreen] = React.useState("browse");
  const [loading, setLoading] = React.useState(false);
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState("closest");
  const [maxPrice, setMaxPrice] = React.useState("3.000");
  const [bag, setBag] = React.useState(BAGS[0]);
  const [qty, setQty] = React.useState(1);
  const [method, setMethod] = React.useState("knet");
  const [useCredit, setUseCredit] = React.useState(false);
  const [promo, setPromo] = React.useState(null);
  const [paying, setPaying] = React.useState(false);
  const [order, setOrder] = React.useState(null);
  const [showQr, setShowQr] = React.useState(false);
  const [sel, setSel] = React.useState(0);
  const [sheet, setSheet] = React.useState(null);
  const [dialog, setDialog] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [rated, setRated] = React.useState(0);
  const [told, setTold] = React.useState(false);
  const [offline, setOffline] = React.useState(false);
  const [restricted, setRestricted] = React.useState(false);
  const [deletion, setDeletion] = React.useState(false);
  const [walletBal, setWalletBal] = React.useState(0);
  const [saved, setSaved] = React.useState([]);
  const [notify, setNotify] = React.useState([]);
  const [prefs, setPrefs] = React.useState({ cats: ["order", "saved", "deals"], from: "23:00", to: "08:00", ch: ["push"] });
  const [cancelDest, setCancelDest] = React.useState("source");

  React.useEffect(() => { document.body.dataset.theme = dark ? "dark" : "light"; document.body.dir = t.dir; }, [dark, lang]);
  React.useEffect(() => { if (!toast) return; const id = setTimeout(() => setToast(null), 2600); return () => clearTimeout(id); }, [toast]);
  React.useEffect(() => { setMethod(ST.MARKETS[market].methods[0]); }, [market]);
  // hold countdown: public.order.hold_expires_at → app.release_expired_holds
  React.useEffect(() => { if (!order || order.state !== "held") return; if (order.holdSecs <= 0) { release(); return; }
    const id = setTimeout(() => setOrder(o => o && o.state === "held" ? { ...o, holdSecs: o.holdSecs - 1 } : o), 1000); return () => clearTimeout(id); }, [order]);

  const go = o => {
    if (o.screen) setScreen(o.screen);
    if (o.bag) { setBag(o.bag); setQty(1); }
    if (o.tab) setTab(o.tab);
    if (o.sheet !== undefined) setSheet(o.sheet);
    if (o.dialog !== undefined) setDialog(o.dialog);
    if (o.undelete) { setDeletion(false); setToast(ar ? "ألغينا الحذف" : "Deletion cancelled"); }
  };
  const enterApp = () => { setStage("app"); setLoading(true); setTimeout(() => { setLoading(false); setSheet("location"); }, 900); };
  // app.hold_listing → order 'held' → PSP → app.confirm_order → 'reserved'
  const hold = () => { if (restricted) return;
    const o = { bag, qty, code: "KW-" + (4800 + Math.floor(Math.random() * 99)), state: "held", method, holdSecs: ST.MARKETS[market].holdMin * 60, refundTo: "source", promo, credit: useCredit };
    if (method === "knet" || method === "applepay" || method === "card" || method === "wallet" || method === "instapay") {
      setPaying(true); setTimeout(() => { setPaying(false); setOrder({ ...o, state: "reserved" }); setScreen("order"); setTab("orders"); setRated(0); setTold(false); setShowQr(false);
        setToast(ar ? "تم الحجز · رمزك جاهز" : "Reserved · your code is ready"); }, 1200);
    } else if (method === "cash") { setOrder({ ...o, state: "reserved" }); setScreen("order"); setTab("orders"); setRated(0); setTold(false); setShowQr(false); setToast(ar ? "تم الحجز · ادفع عند الكاونتر" : "Reserved · pay at the counter"); }
    else { setOrder(o); setScreen("order"); setTab("orders"); }
  };
  const paid = () => { setOrder(o => ({ ...o, state: "reserved" })); setRated(0); setTold(false); setToast(ar ? "تم الحجز · رمزك جاهز" : "Reserved · your code is ready"); };
  const release = () => { setOrder(null); setScreen("browse"); setTab("browse"); setToast(ar ? "فكّينا الحجز" : "Bag released"); };
  const cancel = () => { setDialog(null); const wallet = cancelDest === "wallet" || order.method === "fawry";
    if (wallet) setWalletBal(b => b + order.bag.now * order.qty);
    setOrder(o => ({ ...o, state: "refunded", refundTo: wallet ? "wallet" : "source" })); setToast(t.cancelled); };
  const partnerCancels = () => { if (!order || order.state !== "reserved") return; setWalletBal(b => b + 0.5); setOrder(o => ({ ...o, state: "cancelled_partner" })); setScreen("order"); setTab("orders"); };
  const missPickup = () => { if (!order || order.state !== "reserved") return; setOrder(o => ({ ...o, state: "no_show" })); setScreen("order"); setTab("orders"); };
  const reset = () => { setMarket("KW"); setLocale(l => l.startsWith("ar") ? "ar-KW" : "en"); setOrder(null); setScreen("browse"); setTab("browse"); setRated(0); setTold(false); setFilter("all"); setOffline(false); setRestricted(false); setDeletion(false); setWalletBal(0); setSaved([]); setPromo(null); setUseCredit(false); setStage("language"); setProfile({ first: "", last: "", phone: "", email: "", city: "hawalli" }); setFlags([]); setAck(false); };
  const toggleSaved = () => setSaved(v => v.includes(bag.id) ? v.filter(x => x !== bag.id) : [...v, bag.id]);

  const flow = () => {
    if (stage === "language") return <ST.Language s={s} locale={locale} setLocale={l => { setLocale(l); if (l === "ar-EG") setMarket("EG"); if (l === "ar-KW") setMarket("KW"); }} onNext={() => setStage("intro")} />;
    if (stage === "intro") return <ST.Intro s={s} onDone={() => setStage("signin")} />;
    if (stage === "signin") return <ST.SignIn s={s} onCode={e => { setEmail(e); setProfile(p => ({ ...p, email: e })); setStage("code"); }} />;
    if (stage === "code") return <ST.Code s={s} email={email} onBack={() => setStage("signin")} onVerified={() => setStage("profile")} />;
    if (stage === "profile") return <ST.Profile s={s} ar={ar} market={market} setMarket={setMarket} profile={profile} setProfile={setProfile} onDone={() => setStage("dietary")} onWaitlist={c => { setWaitCity(c); setStage("citywait"); }} />;
    if (stage === "citywait") return <ST.CityWait s={s} ar={ar} city={waitCity} onBack={() => setStage("profile")} />;
    if (stage === "dietary") return <ST.Dietary s={s} flags={flags} setFlags={setFlags} ack={ack} setAck={setAck} onDone={enterApp} />;
    return null;
  };

  const body = () => {
    if (stage !== "app") return flow();
    if (loading) return <Loading />;
    if (screen === "order" && order) return <ST.OrderState s={s} ar={ar} market={market} order={order} go={go} rated={rated} told={told} showQr={showQr} setShowQr={setShowQr}
      onTell={() => { setTold(true); setToast(t.told); }} onPaid={paid} onRelease={release}
      onRedeem={() => { setOrder(o => ({ ...o, state: "redeemed" })); setToast(t.collected); }} onRate={v => setRated(v)} />;
    if (screen === "receipt" && order) return <ST.Receipt s={s} ar={ar} market={market} order={order} go={go} />;
    if (screen === "problem" && order) return <ST.Problem s={s} ar={ar} order={order} go={go} />;
    if (screen === "wallet") return <ST.Wallet s={s} ar={ar} market={market} balance={walletBal} go={go} />;
    if (screen === "saved") return <ST.Saved s={s} ar={ar} market={market} saved={saved} setSaved={setSaved} notify={notify} setNotify={setNotify} go={go} />;
    if (screen === "store") return <ST.Store s={s} ar={ar} market={market} b={bag} saved={saved} toggleSaved={toggleSaved} go={go} />;
    if (screen === "profile") return <ST.ProfileEdit s={s} ar={ar} market={market} profile={profile} setProfile={setProfile} flags={flags} setFlags={setFlags} ack={ack} setAck={setAck} go={go} />;
    if (screen === "notifs") return <ST.Notifs s={s} ar={ar} prefs={prefs} setPrefs={setPrefs} go={go} />;
    if (screen === "detail") return <Detail t={t} ar={ar} b={bag} qty={qty} setQty={setQty} method={method} setMethod={setMethod} go={go} paying={paying} onPay={hold}
      market={market} walletBal={walletBal} useCredit={useCredit} setUseCredit={setUseCredit} promo={promo} setPromo={setPromo} restricted={restricted} saved={saved.includes(bag.id)} toggleSaved={toggleSaved} />;
    if (screen === "search") return <Search t={t} ar={ar} go={go} market={market} />;
    if (tab === "map") return <MapTab t={t} ar={ar} go={go} sel={sel} setSel={setSel} market={market} />;
    if (tab === "orders") return <Orders t={t} ar={ar} order={order} go={go} onOpen={() => setScreen("order")} market={market} />;
    if (tab === "me") return <Me t={t} ar={ar} lang={lang} setLang={setLang} dark={dark} setDark={setDark} go={go} market={market} profile={profile} walletBal={walletBal}
      savedCount={saved.length} restricted={restricted} deletion={deletion} onSignOut={() => { setStage("signin"); setOrder(null); setScreen("browse"); setTab("browse"); }} />;
    return <Browse t={t} ar={ar} go={go} filter={filter} setFilter={setFilter} sort={sort} market={market} />;
  };
  const caption = stage !== "app" ? ({ language: "S-C-001 · Language", intro: "S-C-002 · Intro", signin: "S-C-003 · Sign in", code: "S-C-004 · Email code", profile: "S-C-006 · Complete profile", citywait: "S-C-005 · City waitlist", dietary: "S-C-007 · Dietary" }[stage])
    : loading ? "S-C-010 · Loading" : screen === "detail" ? "S-C-012 · Bag detail + payment" : screen === "order" ? `S-C-020 · Order · ${order.state}` : screen === "receipt" ? "S-C-021 · Receipt"
    : screen === "problem" ? "S-C-022 · Report a problem" : screen === "wallet" ? "S-C-030 · Wallet" : screen === "saved" ? "S-C-031 · Saved kitchens" : screen === "store" ? "S-C-013 · Kitchen profile"
    : screen === "profile" ? "S-C-040 · Profile" : screen === "notifs" ? "S-C-041 · Notifications" : screen === "search" ? "S-C-011 · Search"
    : tab === "map" ? "S-C-014 · Map" : tab === "orders" ? "S-C-015 · Orders" : tab === "me" ? "S-C-016 · Me" : "S-C-010 · Browse";

  return <div>
    <div className="bar">
      <SegmentedControl value={lang} onChange={setLang} options={[{ value: "en", label: "English" }, { value: "ar", label: "العربية" }]} />
      <SegmentedControl value={market} onChange={v => { setMarket(v); setProfile(p => ({ ...p, city: ST.MARKETS[v].cities[0][0] })); if (lang === "ar") setLocale(v === "EG" ? "ar-EG" : "ar-KW"); }} options={[{ value: "KW", label: "KW" }, { value: "EG", label: "EG" }]} />
      <SegmentedControl value={dark ? "dark" : "light"} onChange={v => setDark(v === "dark")} options={[{ value: "light", label: t.light }, { value: "dark", label: t.dark }]} />
      <SegmentedControl value={stage === "app" ? "app" : "first"} onChange={v => v === "app" ? (setStage("app"), setProfile(p => ({ ...p, first: p.first || (ar ? "نورة" : "Noura"), email: p.email || "noura@example.com" }))) : (setStage("language"))}
        options={[{ value: "first", label: ar ? "أول تشغيل" : "First run" }, { value: "app", label: ar ? "مسجّل" : "Signed in" }]} />
    </div>
    <div className="bar" style={{ paddingTop: 8 }}>
      <Button variant="secondary" size="sm" onClick={() => setOffline(o => !o)}>{offline ? (ar ? "متصل" : "Online") : t.offline}</Button>
      <Button variant="secondary" size="sm" onClick={() => setRestricted(r => !r)}>{restricted ? (ar ? "رفع الإيقاف" : "Lift restriction") : (ar ? "إيقاف الحجز" : "Restrict account")}</Button>
      <Button variant="secondary" size="sm" onClick={() => setWalletBal(b => b ? 0 : 2.5)}>{walletBal ? (ar ? "صفّر المحفظة" : "Empty wallet") : (ar ? "رصيد بالمحفظة" : "Wallet credit")}</Button>
      <Button variant="secondary" size="sm" disabled={!order || order.state !== "reserved"} onClick={partnerCancels}>{ar ? "المطبخ يلغي" : "Partner cancels"}</Button>
      <Button variant="secondary" size="sm" disabled={!order || order.state !== "reserved"} onClick={missPickup}>{ar ? "فوّت الاستلام" : "Miss pickup"}</Button>
      <Button variant="ghost" size="sm" onClick={reset}>{ar ? "تصفير" : "Reset"}</Button>
    </div>
    <div className="wrap">
      <div>
        <div className="phone" dir={t.dir}>
          <div className="scroll" key={stage + screen + tab}>
            {offline && stage === "app" ? <div style={{ padding: "10px 12px 0" }}><Banner tone="offline" title={t.offline}>{t.offlineBody}</Banner></div> : null}
            {body()}
          </div>
          {stage === "app" ? <TabBar value={tab} onChange={v => { setTab(v); setScreen(v === "browse" ? "browse" : v === "orders" && order ? "order" : "browse"); }}
            items={t.tabs.map((l, i) => ({ value: ["browse", "map", "orders", "me"][i], label: l,
              icon: ["house", "map", "shopping-bag", "user"][i],
              badge: i === 2 && order && (order.state === "reserved" || order.state === "held") ? 1 : undefined }))} /> : null}
          {toast ? <div style={{ position: "absolute", insetInline: 14, bottom: 92, zIndex: 60 }}><Toast tone="success">{toast}</Toast></div> : null}

          <BottomSheet open={sheet === "filters"} title={t.filters} onClose={() => setSheet(null)}
            footer={<Button fullWidth onClick={() => setSheet(null)}>{t.apply}</Button>}>
            <div style={{ display: "grid", gap: 16 }}>
              <div style={{ display: "grid", gap: 8 }}>
                <strong style={{ fontSize: "var(--text-label-size)" }}>{t.type}</strong>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {[["bakery", t.bakery], ["meals", t.meals], ["cafe", t.cafe], ["grocery", t.grocery], ["sweets", t.sweets]].map(([k, l]) =>
                    <Chip key={k} selected={filter === k} onClick={() => setFilter(filter === k ? "all" : k)}>{l}</Chip>)}
                </div>
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                <strong style={{ fontSize: "var(--text-label-size)" }}>{t.sort}</strong>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
                  {t.sortOpts.map(([k, l]) => <Chip key={k} selected={sort === k} onClick={() => setSort(k)}>{l}</Chip>)}
                </div>
              </div>
              <div style={{ display: "grid", gap: 8 }}>
                <strong style={{ fontSize: "var(--text-label-size)" }}>{s.dietary}</strong>
                <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>{s.flags.slice(0, 4).map(([k, l]) => <Chip key={k} selected={flags.includes(k)} onClick={() => setFlags(flags.includes(k) ? flags.filter(x => x !== k) : [...flags, k])}>{l}</Chip>)}</div>
              </div>
              <Input label={t.maxPrice} value={maxPrice} onChange={e => setMaxPrice(e.target.value)} suffix={ST.MARKETS[market].currency} />
              <Button variant="ghost" onClick={() => { setFilter("all"); setSort("closest"); }}>{t.clear}</Button>
            </div>
          </BottomSheet>

          <BottomSheet open={sheet === "howto"} title={t.howto} onClose={() => setSheet(null)}
            footer={<Button fullWidth onClick={() => setSheet(null)}>{t.got}</Button>}><Howto t={t} /></BottomSheet>

          <BottomSheet open={sheet === "location"} title={t.locTitle} onClose={() => setSheet(null)}
            footer={<div style={{ display: "grid", gap: 8 }}>
              <Button fullWidth onClick={() => { setSheet(null); setToast(ar ? "نرتّب حسب المسافة" : "Sorting by distance"); }}>{t.locAllow}</Button>
              <Button fullWidth variant="ghost" onClick={() => setSheet(null)}>{t.locDeny}</Button></div>}>
            <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{t.locBody}</p>
          </BottomSheet>

          <BottomSheet open={dialog === "cancel"} title={t.cancel} onClose={() => setDialog(null)}
            footer={<div style={{ display: "flex", gap: 8 }}><Button variant="secondary" fullWidth onClick={() => setDialog(null)}>{t.keep}</Button><Button variant="danger" fullWidth onClick={cancel}>{t.drop}</Button></div>}>
            <div style={{ display: "grid", gap: 12 }}>
              <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{s.cancelCutoff(`${ST.MARKETS[market].cutoffH} h`)}.</p>
              <strong style={{ fontSize: "var(--text-label-size)" }}>{s.cancelDest}</strong>
              <SegmentedControl fullWidth value={cancelDest} onChange={setCancelDest} options={[{ value: "source", label: s.cancelSource }, { value: "wallet", label: s.cancelWallet }]} />
              <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{cancelDest === "wallet" ? s.refundTo.wallet_credit : (order ? s.refundTo[order.method] : "")}</span>
            </div>
          </BottomSheet>

          <Dialog open={dialog === "delete"} title={s.deleteTitle} body={s.deleteBody(ST.MARKETS[market].deletionDays)} tone="danger"
            cancelLabel={t.keep} confirmLabel={s.deleteConfirm} onCancel={() => setDialog(null)}
            onConfirm={() => { setDialog(null); setDeletion(true); setToast(s.deleteQueued(ST.MARKETS[market].deletionDays)); }} />
        </div>
        <div className="cap">{caption}</div>
      </div>
    </div>
  </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
