// Bugsha app — screens. Mounted by kit.jsx; exported on window because Babel scripts don't share scope.
(function () {
const NS = window.SurplusKWDesignSystem_97ec90;
const { Logo, Button, IconButton, Icon, Chip, Badge, Input, SegmentedControl, Stepper, RatingStars,
  BagCard, CoverPlate, PriceTag, CountdownPill, PickupWindow, PaymentMethodRow, RedemptionCode,
  ImpactStat, Banner, EmptyState, Card, MapPin } = NS;
/* Switch and ListRow are new; fall back to a local copy until the bundle recompiles. */
const Switch = NS.Switch || function Switch({ checked, onChange, label }) {
  return <button type="button" role="switch" aria-checked={!!checked} aria-label={label} onClick={() => onChange(!checked)}
    style={{ width: 46, height: 28, flex: "none", padding: 3, cursor: "pointer", borderRadius: "var(--radius-pill)", border: "none",
      background: checked ? "var(--color-brand-primary)" : "var(--color-border-default)", display: "flex",
      justifyContent: checked ? "flex-end" : "flex-start" }}>
    <span style={{ width: 22, height: 22, borderRadius: "var(--radius-pill)", background: "#fff", boxShadow: "0 1px 2px rgba(0,0,0,.2)" }} /></button>;
};
const ListRow = NS.ListRow || function ListRow({ icon, label, value, chevron, onClick }) {
  const Tag = onClick ? "button" : "div";
  return <Tag onClick={onClick} style={{ display: "flex", alignItems: "center", gap: "var(--space-150)", width: "100%", minHeight: 52,
    padding: "var(--space-150) var(--space-200)", textAlign: "start", background: "transparent", border: "none",
    borderBottom: "1px solid var(--color-border-subtle)", color: "var(--color-text-primary)", font: "inherit", cursor: onClick ? "pointer" : "default" }}>
    {icon && <Icon name={icon} size={18} style={{ color: "var(--color-text-secondary)", flex: "none" }} />}
    <span style={{ flex: 1, minWidth: 0, fontSize: "var(--text-label-size)", fontWeight: 500 }}>{label}</span>
    {typeof value === "string" ? <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>{value}</span> : value}
    {chevron && <Icon name="chevron-right" size={16} mirror style={{ color: "var(--color-text-tertiary)", flex: "none" }} />}</Tag>;
};
const { bugshaCat: catLabel, bugshaMfmt: mfmt, bugshaKd: kd, bugshaSort: sortBags, BugshaBags: BAGS, BugshaPast: PAST } = window;

const MK = m => window.BugshaStages.MARKETS[m || "KW"];
const Num = ({ children, ...r }) => <span className="ds-numeric" dir="ltr" {...r}>{children}</span>;
const H = ({ children, size = "var(--text-headline-size)", ...r }) =>
  <strong style={{ fontSize: size, fontWeight: 600, letterSpacing: "-0.015em" }} {...r}>{children}</strong>;

function SectionHead({ title, meta }) {
  return <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 10, marginTop: 6 }}>
    <H>{title}</H>{meta ? <Num style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{meta}</Num> : null}</div>;
}

/* ---------- browse ---------- */
function Header({ t, ar, onFilter, onSearch, onLoc, filter, setFilter, count }) {
  const cats = [["all", t.all], ["bakery", t.bakery], ["meals", t.meals], ["cafe", t.cafe], ["grocery", t.grocery], ["sweets", t.sweets]];
  return <div style={{ background: "var(--color-surface-brand)", color: "#fff", padding: "16px 16px 12px", display: "grid", gap: 12 }}>
    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
      <Logo lang={ar ? "ar" : "en"} size={20} color="#fff" fold="var(--color-surface-brand)" foldOpacity={1} />
      <button onClick={onLoc} style={{ display: "inline-flex", alignItems: "center", gap: 4, background: "none", border: "none",
        color: "#fff", cursor: "pointer", fontSize: "var(--text-label-size)", fontWeight: 500, padding: 0 }}>
        <Icon name="map-pin" size={15} />{t.loc}<Icon name="chevron-down" size={14} /></button>
    </div>
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <button onClick={onSearch} style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, minHeight: 40, padding: "0 12px", cursor: "pointer",
        borderRadius: "var(--radius-control)", background: "var(--color-surface-raised)", border: "none",
        color: "var(--color-text-secondary)", fontSize: "var(--text-label-size)", textAlign: "start" }}>
        <Icon name="search" size={16} /><span style={{ flex: 1 }}>{t.search}</span></button>
      <IconButton icon="funnel" label={t.filters} onClick={onFilter} size={40}
        style={{ background: "rgba(255,255,255,.2)", color: "#fff", borderRadius: "var(--radius-control)" }} />
    </div>
    <div style={{ display: "flex", gap: 6, overflow: "auto", marginInline: -16, padding: "0 16px" }}>
      {cats.map(([k, l]) => <button key={k} onClick={() => setFilter(k)} style={{ flex: "none", minHeight: 32, padding: "0 13px",
        borderRadius: "var(--radius-chip)", cursor: "pointer", border: "none", fontSize: "var(--text-caption-size)", fontWeight: 600,
        background: filter === k ? "#fff" : "rgba(255,255,255,.18)", color: filter === k ? "var(--color-brand-primary)" : "#fff" }}>{l}</button>)}
    </div>
    <Num style={{ fontSize: "var(--text-caption-size)", opacity: .85 }}>{t.bundles(count)} · {t.nearest}</Num>
  </div>;
}

function Browse({ t, ar, go, filter, setFilter, sort, market = "KW" }) {
  const sc = MK(market).scale, cur = MK(market).currency;
  const pool = sortBags(filter === "all" ? BAGS : BAGS.filter(b => b.cat === filter), sort);
  const soon = pool.filter(b => b.m <= 45), rest = pool.filter(b => b.m > 45);
  const hero = rest[0] || soon[0];
  const card = b => <BagCard key={b.id} partner={ar ? b.pa : b.p} title={t.surprise} category={b.cat}
    cover={`../../assets/photos/${b.img}.png`} priceNow={b.now * sc} priceWas={b.was * sc} currency={cur} from={b.from} to={b.to}
    distanceKm={b.km} bagsLeft={b.left} rating={b.r} ratingCount={b.rc} minutesLeft={b.m}
    countdownFormat={mfmt(ar)} leftFormat={t.left} tags={[catLabel(t, b.cat)]} onClick={() => go({ screen: "detail", bag: b })} />;
  return <div>
    <Header t={t} ar={ar} filter={filter} setFilter={setFilter} count={pool.length}
      onFilter={() => go({ sheet: "filters" })} onSearch={() => go({ screen: "search" })} onLoc={() => go({ sheet: "location" })} />
    <div style={{ padding: "14px 16px 24px", display: "grid", gap: 12 }}>
      {pool.length === 0 ? <EmptyState icon="shopping-bag" title={t.empty} body={t.emptyBody} actionLabel={t.clear} onAction={() => setFilter("all")} />
      : <React.Fragment>
        {soon.length ? <React.Fragment><SectionHead title={t.closing} meta="< 45 min" />
          {soon.map(b => <BagCard key={b.id} layout="row" partner={ar ? b.pa : b.p} title={t.surprise} category={b.cat}
            cover={`../../assets/photos/${b.img}.png`} priceNow={b.now * sc} priceWas={b.was * sc} currency={cur} from={b.from} to={b.to}
            distanceKm={b.km} bagsLeft={b.left} rating={b.r} minutesLeft={b.m} countdownFormat={mfmt(ar)} leftFormat={t.left}
            onClick={() => go({ screen: "detail", bag: b })} />)}</React.Fragment> : null}
        {hero ? <React.Fragment><SectionHead title={t.tonight} meta={t.bundles(rest.length)} />{rest.map(card)}</React.Fragment> : null}
      </React.Fragment>}
      <Card padded style={{ display: "grid", gap: 6, background: "var(--color-brand-tint)", border: "none" }}>
        <H size="var(--text-label-size)">{t.howto}</H>
        <span style={{ color: "var(--color-text-secondary)", fontSize: "var(--text-caption-size)" }}>{t.steps[0][1]}</span>
        <Button variant="ghost" size="sm" onClick={() => go({ sheet: "howto" })} style={{ justifySelf: "start", paddingInline: 0 }}>{t.howto} →</Button>
      </Card>
    </div>
  </div>;
}

/* ---------- search ---------- */
function Search({ t, ar, go, market = "KW" }) {
  const sc = MK(market).scale, cur = MK(market).currency;
  const [q, setQ] = React.useState("");
  const hits = q ? BAGS.filter(b => (ar ? b.pa : b.p).toLowerCase().includes(q.toLowerCase())) : BAGS.slice(0, 3);
  return <div style={{ display: "grid", gap: 0, alignContent: "start" }}>
    <div style={{ display: "flex", gap: 10, alignItems: "center", padding: "14px 16px", background: "var(--color-surface-raised)",
      borderBottom: "1px solid var(--color-border-subtle)" }}>
      <IconButton icon="chevron-left" label="Back" mirror onClick={() => go({ screen: "browse" })} />
      <Input autoFocus value={q} onChange={e => setQ(e.target.value)} placeholder={t.search} icon="search" style={{ flex: 1 }} />
    </div>
    <div style={{ padding: "12px 16px", display: "grid", gap: 8 }}>
      {hits.map(b => <button key={b.id} onClick={() => go({ screen: "detail", bag: b })} style={{ display: "flex", gap: 12, alignItems: "center",
        background: "none", border: "none", padding: "8px 0", cursor: "pointer", textAlign: "start" }}>
        <img src={`../../assets/photos/${b.img}.png`} alt="" width="48" height="48"
          style={{ borderRadius: "var(--radius-image)", objectFit: "cover", flex: "none" }} />
        <span style={{ display: "grid", gap: 2, minWidth: 0, flex: 1 }}>
          <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{ar ? b.pa : b.p}</strong>
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
            {catLabel(t, b.cat)} · <Num>{b.km} km</Num></span></span>
        <PriceTag now={b.now * sc} was={b.was * sc} currency={cur} /></button>)}
      {q && !hits.length ? <EmptyState icon="search" title={t.empty} body={t.emptyBody} /> : null}
    </div>
  </div>;
}

/* ---------- detail ---------- */
function Detail({ t, ar, b, qty, setQty, method, setMethod, go, paying, onPay, market = "KW", walletBal = 0, useCredit, setUseCredit, promo, setPromo, restricted, saved, toggleSaved }) {
  const ST = window.BugshaStages, s = ST.S[ar ? "ar" : "en"], cur = ST.MARKETS[market].currency, m = ST.money;
  return <div>
    <CoverPlate src={`../../assets/photos/${b.img}.png`} category={b.cat} height={200} radius="0">
      <div style={{ position: "absolute", insetInlineStart: 12, top: 14 }}>
        <IconButton icon="chevron-left" label="Back" variant="solid" size={38} mirror onClick={() => go({ screen: "browse" })} /></div>
      <div style={{ position: "absolute", insetInlineEnd: 12, top: 14, display: "flex", gap: 8 }}>
        <IconButton icon="share-2" label="Share" variant="solid" size={38} />
        <IconButton icon="heart" label="Save" variant="solid" size={38} onClick={toggleSaved} style={saved ? { color: "var(--color-brand-primary)" } : undefined} /></div>
      <div style={{ position: "absolute", insetInlineStart: 16, bottom: 14, display: "flex", gap: 6 }}>
        <Badge tone="brand">{catLabel(t, b.cat)}</Badge>
        <Badge tone="neutral">{t.perDay}</Badge></div>
    </CoverPlate>
    <div style={{ padding: 16, display: "grid", gap: 16 }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10 }}>
        <div style={{ minWidth: 0, display: "grid", gap: 6 }}>
          <h2 style={{ fontSize: "var(--text-title-lg-size)", fontWeight: 600, letterSpacing: "-0.02em" }}><button onClick={() => go({ screen: "store", bag: b })} style={{ all: "unset", cursor: "pointer" }}>{ar ? b.pa : b.p}</button></h2>
          <RatingStars value={b.r} count={b.rc} />
          <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
            {t.listedAt} <Num>{b.listed}</Num> · {b.left <= 1 ? t.one : t.left(b.left)}</span></div>
        <CountdownPill minutesLeft={b.m} format={mfmt(ar)} /></div>

      <Card padded style={{ display: "grid", gap: 10 }}>
        <PickupWindow day={ar ? "الليلة" : "Tonight"} from={b.from} to={b.to} size="lg" />
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>
          <Icon name="navigation" size={15} /><Num>{b.km} km</Num> · {ar ? "قطعة 10، السالمية" : "Block 10, Salmiya"}
          <Button variant="ghost" size="sm" style={{ marginInlineStart: "auto", paddingInline: 0 }}>{t.directions}</Button></div>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{t.collectBody}</span>
      </Card>

      <div style={{ display: "grid", gap: 8 }}>
        <H>{t.inside}</H>
        <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{t.insideBody}</p>
        <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginTop: 2 }}>{t.dietary.map(d => <Chip key={d}>{d}</Chip>)}</div>
      </div>

      <div style={{ display: "grid", gap: 12, padding: "14px 0", borderTop: "1px solid var(--color-border-subtle)", borderBottom: "1px solid var(--color-border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 10 }}>
          <div style={{ display: "grid", gap: 3 }}>
            <PriceTag now={b.now * qty * ST.MARKETS[market].scale} was={b.was * qty * ST.MARKETS[market].scale} currency={cur} size="lg" />
            <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
              {t.worth} <Num>{m(market, b.was * qty)}</Num> · {t.save} <Num>{m(market, (b.was - b.now) * qty)}</Num></span></div>
          <div style={{ display: "grid", gap: 4, justifyItems: "end" }}>
            <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{t.qty}</span>
            <Stepper value={qty} max={b.left} onChange={setQty} /></div>
        </div>
      </div>

      <ST.PaymentBlock s={s} market={market} method={method} setMethod={setMethod} qty={qty} unit={b.now} walletBal={walletBal}
        useCredit={useCredit} setUseCredit={setUseCredit} promo={promo} setPromo={setPromo} restricted={restricted} />
      {paying ? <Banner tone="info" title={s.opening(s[method])}>{t.payNote}</Banner> : null}
      <Button size="lg" fullWidth loading={paying} disabled={restricted} onClick={onPay}>
        {method === "cash" ? s.payCash : `${s.pay} · ${s[method]}`}</Button>
    </div>
  </div>;
}

/* ---------- map tab ---------- */
function MapTab({ t, ar, go, sel, setSel, market = "KW" }) {
  const sc = MK(market).scale, cur = MK(market).currency;
  const b = BAGS[sel];
  return <div style={{ position: "relative", height: "100%", display: "grid", gridTemplateRows: "1fr auto" }}>
    <div style={{ position: "relative", background: "var(--color-surface-sunken)", overflow: "hidden" }}>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} aria-hidden="true">
        {[14, 32, 50, 68, 86].map(y => <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="var(--color-border-subtle)" strokeWidth=".6" />)}
        {[12, 34, 56, 78].map(x => <line key={x} x1={x} y1="0" x2={x} y2="100" stroke="var(--color-border-subtle)" strokeWidth=".6" />)}
        <path d="M0 78 L34 78 L34 100" stroke="var(--color-border-default)" strokeWidth="1.6" fill="none" />
        <path d="M56 0 L56 44 L100 44" stroke="var(--color-border-default)" strokeWidth="1.6" fill="none" />
      </svg>
      <div style={{ position: "absolute", insetInline: 12, top: 12, display: "flex", gap: 8, alignItems: "center" }}>
        <span style={{ flex: 1, display: "flex", alignItems: "center", gap: 8, minHeight: 40, padding: "0 12px", borderRadius: "var(--radius-control)",
          background: "var(--color-surface-raised)", boxShadow: "var(--elevation-card)", fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>
          <Icon name="map-pin" size={15} />{t.loc}</span>
        <IconButton icon="funnel" label={t.filters} variant="solid" size={40} onClick={() => go({ sheet: "filters" })} />
      </div>
      {BAGS.map((x, i) => <span key={x.id} style={{ position: "absolute", insetInlineStart: `${x.x}%`, top: `${x.y}%`, transform: "translate(-50%,-50%)" }}>
        <button onClick={() => setSel(i)} aria-label={ar ? x.pa : x.p} style={{ all: "unset", cursor: "pointer" }}>
          <MapPin price={x.now * sc} currency={cur} selected={i === sel} soldOut={x.left === 0} /></button></span>)}
      <span style={{ position: "absolute", insetInlineEnd: 12, bottom: 12 }}>
        <IconButton icon="navigation" label={t.directions} variant="solid" size={40} /></span>
    </div>
    <div style={{ padding: "12px 12px 14px", background: "var(--color-surface-canvas)", borderTop: "1px solid var(--color-border-subtle)", display: "grid", gap: 8 }}>
      <Num style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{t.pins(BAGS.length)}</Num>
      <BagCard layout="row" partner={ar ? b.pa : b.p} title={t.surprise} category={b.cat} cover={`../../assets/photos/${b.img}.png`}
        priceNow={b.now * sc} priceWas={b.was * sc} currency={cur} from={b.from} to={b.to} distanceKm={b.km} bagsLeft={b.left} rating={b.r}
        minutesLeft={b.m} countdownFormat={mfmt(ar)} onClick={() => go({ screen: "detail", bag: b })} />
    </div>
  </div>;
}

/* ---------- orders ---------- */
function Orders({ t, ar, order, go, onOpen, market = "KW" }) {
  const sc = MK(market).scale, cur = MK(market).currency;
  const [tab, setTab] = React.useState("active");
  return <div style={{ display: "grid", gap: 0, alignContent: "start" }}>
    <div style={{ padding: "16px 16px 10px", background: "var(--color-surface-raised)", borderBottom: "1px solid var(--color-border-subtle)", display: "grid", gap: 12 }}>
      <H size="var(--text-title-size)">{t.tabs[2]}</H>
      <SegmentedControl fullWidth value={tab} onChange={setTab} options={[{ value: "active", label: t.active }, { value: "past", label: t.past }]} />
    </div>
    {tab === "active" ? (order
      ? <div style={{ padding: 16, display: "grid", gap: 12 }}>
          <div role="button" tabIndex={0} onClick={onOpen} onKeyDown={e => e.key === "Enter" && onOpen()} style={{ cursor: "pointer" }}>
            <Card padded style={{ display: "grid", gap: 10 }}>
              <div style={{ display: "flex", justifyContent: "space-between", gap: 10, alignItems: "center" }}>
                <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{ar ? order.bag.pa : order.bag.p}</strong>
                <Badge tone={order.state === "redeemed" ? "fresh" : order.state === "reserved" ? "time" : order.state === "held" ? "urgent" : "neutral"}>{window.BugshaStages.S[ar ? "ar" : "en"].st[order.state]}</Badge></div>
              <PickupWindow day={ar ? "الليلة" : "Tonight"} from={order.bag.from} to={order.bag.to} />
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
                <Num style={{ fontSize: "var(--text-title-size)", fontWeight: 600 }}>{order.code}</Num>
                <Button size="sm">{t.code}</Button></div>
            </Card></div>
        </div>
      : <div style={{ padding: "28px 16px" }}><EmptyState icon="shopping-bag" title={t.noOrders} body={t.noOrdersBody}
          actionLabel={t.browseCta} onAction={() => go({ screen: "browse", tab: "browse" })} /></div>)
    : <div style={{ padding: 16, display: "grid", gap: 8 }}>
        {PAST.map(p => <Card key={p.id} padded style={{ display: "grid", gap: 8 }}>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 10 }}>
            <strong style={{ fontSize: "var(--text-label-size)", fontWeight: 600 }}>{ar ? p.pa : p.p}</strong>
            <Num style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{ar ? p.dateAr : p.date}</Num></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 10 }}>
            <RatingStars value={p.rated} size={15} /><PriceTag now={p.now * sc} was={p.was * sc} currency={cur} /></div>
        </Card>)}
      </div>}
  </div>;
}

/* ---------- order + redemption ---------- */
function Order({ t, ar, order, go, onRedeem, onRate, rated, told, onTell }) {
  const b = order.bag, done = order.state === "redeemed";
  return <div style={{ padding: "16px 16px 24px", display: "grid", gap: 14, alignContent: "start" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <IconButton icon="chevron-left" label="Back" mirror onClick={() => go({ screen: "browse", tab: "orders" })} />
      <H>{done ? t.collected : t.reserved}</H><IconButton icon="info" label={t.help} /></div>
    {!done ? <p style={{ margin: 0, textAlign: "center", color: "var(--color-text-secondary)" }}>{t.code}</p> : null}
    <RedemptionCode code={order.code} partner={ar ? b.pa : b.p} window={`${b.from}–${b.to}`} quantity={order.qty}
      state={order.state} onRedeem={onRedeem} bagLabel={ar ? "بقشة" : undefined}
      slideLabel={ar ? "اسحب لما الموظف يكون جاهز" : undefined} doneLabel={ar ? "تم الاستلام" : undefined} />
    {!done ? <React.Fragment>
      <CountdownPill minutesLeft={26} state="reserved" format={mfmt(ar)} style={{ justifySelf: "center" }} />
      <Card padded style={{ display: "grid", gap: 8 }}>
        <PickupWindow day={ar ? "الليلة" : "Tonight"} from={b.from} to={b.to} size="lg" />
        <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>
          <Icon name="navigation" size={15} /><Num>{b.km} km</Num> · {ar ? "قطعة 10، السالمية" : "Block 10, Salmiya"}
          <Button variant="secondary" size="sm" style={{ marginInlineStart: "auto" }}>{t.directions}</Button></div>
      </Card>
      <Banner tone={told ? "fresh" : "time"} title={told ? t.told : t.late}
        action={told ? undefined : <Button size="sm" variant="secondary" onClick={onTell}>{t.tell}</Button>}>{told ? undefined : t.lateBody}</Banner>
      <Button variant="ghost" onClick={() => go({ dialog: "cancel" })}>{t.drop}</Button>
    </React.Fragment> : <React.Fragment>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
        <ImpactStat icon="shopping-bag" value={12} unit={ar ? "بقشة" : "bundles"} label={t.rescued} />
        <ImpactStat icon="wallet" value="KD 41" tone="brand" label={t.kept} /></div>
      <Card padded style={{ display: "grid", gap: 10, justifyItems: "center" }}>
        <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>{rated ? t.thanks : t.rate}</span>
        <RatingStars value={rated || 0} size={28} onRate={onRate} />
        {rated ? <React.Fragment>
          <Input placeholder={t.reviewPh} style={{ width: "100%" }} />
          <Button size="sm" variant="secondary">{t.sendReview}</Button></React.Fragment> : null}
      </Card>
    </React.Fragment>}
  </div>;
}

/* ---------- me ---------- */
function Me({ t, ar, lang, setLang, dark, setDark, go, market = "KW", profile = {}, walletBal = 0, savedCount = 0, restricted, deletion, onSignOut }) {
  const ST = window.BugshaStages, s = ST.S[ar ? "ar" : "en"];
  return <div style={{ display: "grid", gap: 0, alignContent: "start" }}>
    <div style={{ background: "var(--color-surface-brand)", color: "#fff", padding: "18px 16px 20px", display: "grid", gap: 14 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <span style={{ width: 48, height: 48, borderRadius: "var(--radius-control)", background: "rgba(255,255,255,.22)",
          display: "grid", placeItems: "center", fontWeight: 600, fontSize: 18 }}>{(profile.first || (ar ? "ن" : "N")).slice(0, 1)}</span>
        <span style={{ display: "grid", gap: 2, flex: 1, minWidth: 0 }}>
          <strong style={{ fontSize: "var(--text-title-size)", fontWeight: 600 }}>{profile.first ? `${profile.first} ${(profile.last || "").slice(0, 1)}${profile.last ? "." : ""}` : t.me}</strong>
          <span style={{ fontSize: "var(--text-caption-size)", opacity: .85 }}>{t.member} · {market === "KW" ? s.kw : s.eg}</span></span>
        <IconButton icon="pen-line" label={s.profile} onClick={() => go({ screen: "profile" })} style={{ color: "#fff" }} />
      </div>
    </div>
    <div style={{ padding: 16, display: "grid", gap: 14 }}>
      {restricted ? <Banner tone="error" title={s.restricted}>{s.restrictedBody("14 Sep", s.reasons.repeat_no_show)}</Banner> : null}
      {deletion ? <Banner tone="time" title={s.deleteQueued(ST.MARKETS[market].deletionDays)} action={<Button size="sm" variant="secondary" onClick={() => go({ undelete: true })}>{ar ? "تراجع" : "Undo"}</Button>} /> : null}
      <H>{t.impact}</H>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 8 }}>
        <ImpactStat icon="shopping-bag" value={12} label={t.rescued} />
        <ImpactStat icon="wallet" value={ST.money(market, 41)} tone="brand" label={t.kept} />
        <ImpactStat icon="leaf" value="10.8" label={s.kg} />
      </div>
      <Card style={{ display: "grid", overflow: "hidden" }}>
        <ListRow icon="wallet" label={s.walletTitle} value={<Num>{ST.money(market, walletBal)}</Num>} chevron onClick={() => go({ screen: "wallet" })} />
        <ListRow icon="heart" label={s.saved} value={String(savedCount)} chevron onClick={() => go({ screen: "saved" })} />
        <ListRow icon="user" label={s.profile} value={s.dietary} chevron onClick={() => go({ screen: "profile" })} />
      </Card>
      <H>{t.settings}</H>
      <Card style={{ display: "grid", overflow: "hidden" }}>
        <ListRow icon="languages" label={t.lang} value={<SegmentedControl value={lang} onChange={setLang}
          options={[{ value: "en", label: "EN" }, { value: "ar", label: "ع" }]} />} />
        <ListRow icon="moon" label={t.theme} value={<SegmentedControl value={dark ? "dark" : "light"} onChange={v => setDark(v === "dark")}
          options={[{ value: "light", label: t.light }, { value: "dark", label: t.dark }]} />} />
        <ListRow icon="bell" label={t.notifs} chevron onClick={() => go({ screen: "notifs" })} />
        <ListRow icon="credit-card" label={t.payment} value={market === "KW" ? "KNET" : "Card"} chevron />
        <ListRow icon="info" label={t.howto} chevron onClick={() => go({ sheet: "howto" })} />
        <ListRow icon="circle-help" label={t.help} chevron />
        <ListRow icon="file-text" label={t.terms} chevron />
      </Card>
      <Card style={{ display: "grid", overflow: "hidden" }}>
        <ListRow icon="log-out" label={s.signOut} chevron onClick={onSignOut} />
        <ListRow icon="trash-2" label={<span style={{ color: "var(--color-error)" }}>{s.deleteAcc}</span>} chevron onClick={() => go({ dialog: "delete" })} />
      </Card>
    </div>
  </div>;
}

Object.assign(window, { BugshaScreens: { Browse, Search, Detail, MapTab, Orders, Order, Me, SectionHead, Num } });
})();
