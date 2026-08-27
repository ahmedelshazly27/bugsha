// Partner portal — shell + app.
(function(){
const { Logo, Icon, SegmentedControl, Badge } = window.SurplusKWDesignSystem_97ec90;
const COPY = window.PARTNER_COPY;
const ICONS = ["moon","plus","package","banknote","file-text","star","chart-column","store"];

function Shell({t,ar,view,setView,lang,setLang,liveQty,children}){
  return (
  <div dir={t.dir} style={{display:"grid",gridTemplateColumns:"244px minmax(0,1fr)",minHeight:"100vh",background:"var(--color-surface-canvas)"}}>
    <aside style={{background:"var(--color-surface-inverse)",color:"var(--color-text-inverse)",padding:"18px 12px",display:"grid",alignContent:"start",gap:4}}>
      <div style={{display:"flex",alignItems:"center",gap:10,padding:"2px 8px 16px"}}>
        <Logo lockup="mark" size={24} color="#fff" fold="var(--color-surface-inverse)" foldOpacity={1}/>
        <span style={{fontWeight:600,fontSize:"var(--text-label-size)"}}>{t.brand}</span></div>

      <button style={{display:"grid",gap:2,textAlign:"start",padding:"10px 12px",marginBottom:10,borderRadius:"var(--radius-control)",border:"1px solid rgba(255,255,255,.16)",background:"rgba(255,255,255,.06)",color:"inherit",cursor:"pointer",minHeight:44}}>
        <span style={{fontSize:"var(--text-label-size)",fontWeight:600}}>{t.branch}</span>
        <span style={{fontSize:"var(--text-caption-size)",opacity:.7}}>{t.area} · {t.switchBranch}</span></button>

      {t.nav.map((n,i)=>(
        <button key={n} onClick={()=>setView(i)} style={{display:"flex",alignItems:"center",gap:10,textAlign:"start",padding:"10px 12px",minHeight:44,
          borderRadius:"var(--radius-control)",border:"none",cursor:"pointer",fontSize:"var(--text-body-size)",fontFamily:"inherit",
          fontWeight:view===i?600:400,background:view===i?"rgba(255,255,255,.14)":"transparent",color:"inherit"}}>
          <Icon name={ICONS[i]} size={17}/><span>{n}</span></button>))}

      <div style={{marginTop:"auto",paddingTop:24,display:"grid",gap:10}}>
        <div style={{padding:"0 8px"}}><SegmentedControl value={lang} onChange={setLang} options={[{value:"en",label:"EN"},{value:"ar",label:"ع"}]}/></div>
        <div style={{display:"flex",gap:8,alignItems:"center",padding:"10px 8px 0",borderTop:"1px solid rgba(255,255,255,.12)",fontSize:"var(--text-caption-size)",opacity:.75}}>
          <Icon name="user" size={15}/><span>{t.signedIn}</span></div></div>
    </aside>

    <div style={{display:"grid",gridTemplateRows:"auto minmax(0,1fr)"}}>
      <header style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:16,padding:"12px 28px",
        borderBottom:"1px solid var(--color-border-subtle)",background:"var(--color-surface-raised)"}}>
        <div style={{display:"flex",gap:10,alignItems:"center"}}>
          <Badge tone="fresh">{t.live} · {liveQty}</Badge>
          <span style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{t.closesIn} <span className="ds-numeric" dir="ltr" style={{unicodeBidi:"isolate",fontFamily:"var(--font-plex-mono), monospace"}}>46 min · 22:30</span></span></div>
        <span className="ds-numeric" style={{fontFamily:"var(--font-plex-mono), monospace",fontSize:"var(--text-caption-size)",color:"var(--color-text-tertiary)"}}>21:44</span>
      </header>
      <main style={{padding:"24px 28px 40px",display:"grid",alignContent:"start",gap:18,maxWidth:"var(--layout-max-partner)"}}>{children}</main>
    </div>
  </div>);
}

function App(){
  const [lang,setLang]=React.useState("en"); const t=COPY[lang]; const ar=lang==="ar";
  const [view,setView]=React.useState(0);
  const [listings,setListings]=React.useState(window.PARTNER_LISTINGS);
  const [presets,setPresets]=React.useState(window.PARTNER_PRESETS);
  const [orders,setOrders]=React.useState(window.PARTNER_ORDERS);
  const store={listings,setListings,presets,setPresets,orders,setOrders};
  React.useEffect(()=>{document.documentElement.dir=t.dir;document.body.dir=t.dir;},[lang]);
  const V = [window.PartnerTonight, window.PartnerListBundle, window.PartnerBundles,
             window.PartnerPayouts, window.PartnerLedger, window.PartnerReviews, window.PartnerImpact, window.PartnerBranches][view];
  const liveQty = listings.filter(l=>l.live).reduce((n,l)=>n+(l.qty-l.sold),0);
  return (<Shell t={t} ar={ar} view={view} setView={setView} lang={lang} setLang={setLang} liveQty={liveQty}>
    <V key={view+lang} t={t} ar={ar} lang={lang} setLang={setLang} store={store} onList={()=>setView(1)} onDone={()=>setView(0)}/>
  </Shell>);
}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
})();
