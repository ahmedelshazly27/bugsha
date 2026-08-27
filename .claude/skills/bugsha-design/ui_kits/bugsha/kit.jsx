(function () {
const NS = window.SurplusKWDesignSystem_97ec90;
const { Button, IconButton, Icon, Chip, Input, SegmentedControl, TabBar, Toast, BottomSheet, Dialog, Banner, Card, Logo } = NS;
const { BugshaT: T, BugshaBags: BAGS } = window;
const { Browse, Search, Detail, MapTab, Orders, Order, Me } = window.BugshaScreens;

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

function App() {
  const [lang, setLang] = React.useState("en");
  const [dark, setDark] = React.useState(false);
  const t = T[lang], ar = lang === "ar";
  const [tab, setTab] = React.useState("browse");
  const [screen, setScreen] = React.useState("browse");
  const [filter, setFilter] = React.useState("all");
  const [sort, setSort] = React.useState("closest");
  const [maxPrice, setMaxPrice] = React.useState("3.000");
  const [bag, setBag] = React.useState(BAGS[0]);
  const [qty, setQty] = React.useState(1);
  const [method, setMethod] = React.useState("knet");
  const [paying, setPaying] = React.useState(false);
  const [order, setOrder] = React.useState(null);
  const [sel, setSel] = React.useState(0);
  const [sheet, setSheet] = React.useState(null);
  const [dialog, setDialog] = React.useState(null);
  const [toast, setToast] = React.useState(null);
  const [rated, setRated] = React.useState(0);
  const [told, setTold] = React.useState(false);
  const [offline, setOffline] = React.useState(false);
  const [notified, setNotified] = React.useState(false);

  React.useEffect(() => { document.body.dataset.theme = dark ? "dark" : "light"; document.body.dir = t.dir; }, [dark, lang]);
  React.useEffect(() => { if (!toast) return; const id = setTimeout(() => setToast(null), 2600); return () => clearTimeout(id); }, [toast]);

  const go = o => {
    if (o.screen) setScreen(o.screen);
    if (o.bag) { setBag(o.bag); setQty(1); }
    if (o.tab) setTab(o.tab);
    if (o.sheet !== undefined) setSheet(o.sheet);
    if (o.dialog !== undefined) setDialog(o.dialog);
  };
  const pay = () => { setPaying(true); setTimeout(() => { setPaying(false);
    setOrder({ bag, qty, code: "KW-" + (4800 + Math.floor(Math.random() * 99)), state: "ready" });
    setScreen("order"); setTab("orders"); setRated(0); setTold(false);
    setToast(ar ? "تم الحجز · رمزك جاهز" : "Reserved · your code is ready"); }, 1200); };
  const reset = () => { setOrder(null); setScreen("browse"); setTab("browse"); setRated(0); setTold(false); setFilter("all"); setOffline(false); setNotified(false); };

  const body = () => {
    if (screen === "order" && order) return <Order t={t} ar={ar} order={order} go={go} rated={rated} told={told}
      onTell={() => { setTold(true); setToast(t.told); }}
      onRedeem={() => { setOrder(o => ({ ...o, state: "redeemed" })); setToast(t.collected); }}
      onRate={v => { setRated(v); }} />;
    if (screen === "detail") return <Detail t={t} ar={ar} b={bag} qty={qty} setQty={setQty} method={method}
      setMethod={setMethod} go={go} paying={paying} onPay={pay} />;
    if (screen === "search") return <Search t={t} ar={ar} go={go} />;
    if (tab === "map") return <MapTab t={t} ar={ar} go={go} sel={sel} setSel={setSel} />;
    if (tab === "orders") return <Orders t={t} ar={ar} order={order} go={go} onOpen={() => setScreen("order")} />;
    if (tab === "me") return <Me t={t} ar={ar} lang={lang} setLang={setLang} dark={dark} setDark={setDark} go={go} />;
    return <Browse t={t} ar={ar} go={go} filter={filter} setFilter={setFilter} sort={sort} />;
  };
  const caption = screen === "detail" ? (ar ? "تفاصيل البقشة" : "Bag detail")
    : screen === "order" ? (ar ? "الرمز والاستلام" : "Code & redemption")
    : screen === "search" ? (ar ? "بحث" : "Search")
    : tab === "map" ? t.map : tab === "orders" ? t.tabs[2] : tab === "me" ? t.tabs[3] : t.tabs[0];

  return <div>
    <div className="bar">
      <SegmentedControl value={lang} onChange={setLang} options={[{ value: "en", label: "English" }, { value: "ar", label: "العربية" }]} />
      <SegmentedControl value={dark ? "dark" : "light"} onChange={v => setDark(v === "dark")} options={[{ value: "light", label: t.light }, { value: "dark", label: t.dark }]} />
      <Button variant="secondary" size="sm" onClick={() => setOffline(o => !o)}>{offline ? (ar ? "متصل" : "Online") : t.offline}</Button>
      <Button variant="secondary" size="sm" onClick={() => setSheet("howto")}>{t.howto}</Button>
      <Button variant="ghost" size="sm" onClick={reset}>{ar ? "تصفير" : "Reset"}</Button>
    </div>
    <div className="wrap">
      <div>
        <div className="phone" dir={t.dir}>
          <div className="scroll" key={screen + tab}>
            {offline ? <div style={{ padding: "10px 12px 0" }}><Banner tone="offline" title={t.offline}>{t.offlineBody}</Banner></div> : null}
            {body()}
          </div>
          <TabBar value={tab} onChange={v => { setTab(v); setScreen(v === "browse" ? "browse" : v === "orders" && order ? "order" : "browse"); }}
            items={t.tabs.map((l, i) => ({ value: ["browse", "map", "orders", "me"][i], label: l,
              icon: ["house", "map", "shopping-bag", "user"][i],
              badge: i === 2 && order && order.state !== "redeemed" ? 1 : undefined }))} />
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
              <Input label={t.maxPrice} value={maxPrice} onChange={e => setMaxPrice(e.target.value)} suffix="KD" />
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

          <Dialog open={dialog === "cancel"} title={t.cancel} body={t.cancelBody} tone="danger"
            cancelLabel={t.keep} confirmLabel={t.drop} onCancel={() => setDialog(null)}
            onConfirm={() => { setDialog(null); setOrder(null); setScreen("browse"); setTab("browse"); setToast(t.cancelled); }} />
        </div>
        <div className="cap">{caption}</div>
      </div>
    </div>
  </div>;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
})();
