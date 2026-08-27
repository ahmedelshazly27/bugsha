(function(){
const mfmt = ar => m => ar
  ? (m >= 60 ? "باقي " + Math.floor(m/60) + " س " + (m%60) + " د" : "باقي " + m + " دقيقة")
  : (m >= 60 ? Math.floor(m/60) + "h " + (m%60) + "m left" : m + " min left");
const RC = ar => ar ? { bagLabel:"كيس", slideLabel:"اسحب لما الموظف يكون جاهز", doneLabel:"تم الاستلام" } : {};
const { Button, Chip, CountdownPill, PriceTag, Icon, IconButton, Input, SegmentedControl, TabBar,
  RatingStars, RedemptionCode, PaymentMethodRow, Stepper, Banner, ImpactStat, Badge } = window.SurplusKWDesignSystem_97ec90;

const COPY={en:{dir:"ltr",head:"TONIGHT / 04 AUG",sub:"12 CHITS OPEN · SALMIYA",search:"FIND A PARTNER",
  tabs:["Chits","Map","Mine","Me"],inside:"CONTENTS",insideBody:"Same-day bread and pastry. Mix decided by the kitchen at close. Allergen sheet per item at the counter.",
  reserve:"TAKE CHIT",code:"CHIT",collect:"COLLECT BETWEEN",paid:"PAID",worth:"WORTH",left:"LEFT"},
 ar:{dir:"rtl",head:"الليلة / ٤ أغسطس",sub:"١٢ قسيمة مفتوحة · السالمية",search:"دوّر على شريك",
  tabs:["القسائم","خريطة","طلباتي","حسابي"],inside:"المحتويات",insideBody:"خبز ومعجنات من اليوم. الخلطة يقررها المطبخ عند الإغلاق. ورقة المكوّنات متوفرة عند الكاونتر.",
  reserve:"خذ القسيمة",code:"قسيمة",collect:"الاستلام بين",paid:"مدفوع",worth:"القيمة",left:"متبقي"}};
const CHITS=[{n:"01",p:"KUWAIT BAKEHOUSE",pa:"مخبز الكويت",now:2,was:6.5,from:"21:30",to:"22:30",km:1.4,left:2,m:42},
 {n:"02",p:"BEIT BEIRUT",pa:"بيت بيروت",now:3,was:9,from:"22:00",to:"23:00",km:2.1,left:5,m:88},
 {n:"03",p:"SLIDER STATION",pa:"سلايدر ستيشن",now:2.5,was:7,from:"22:30",to:"23:30",km:3.4,left:1,m:11},
 {n:"04",p:"CO-OP JABRIYA",pa:"جمعية الجابرية",now:1.5,was:5,from:"20:00",to:"21:00",km:0.8,left:9,m:150}];

function Row({c,ar,t}){return(
<div style={{padding:"14px 16px",borderBottom:"1.5px dashed var(--color-border-default)",display:"grid",gap:8}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10}}>
    <span style={{display:"inline-flex",gap:8,alignItems:"baseline",minWidth:0}}>
      <span className="ds-numeric cap" style={{fontSize:12,color:"var(--color-text-primary)"}}>{c.n}</span>
      <strong style={{fontSize:"var(--text-headline-size)",fontWeight:700,letterSpacing:"-0.01em",overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ar?c.pa:c.p}</strong></span>
    <span className="ds-numeric" style={{fontSize:26,fontWeight:700,lineHeight:1}}>{c.now.toFixed(3)}</span></div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}}>
    <span className="cap ds-numeric">{c.from}–{c.to} · {c.km} KM · {c.left} {t.left}</span>
    <span className="ds-numeric cap" style={{textDecoration:"line-through"}}>{t.worth} {c.was.toFixed(3)}</span></div>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:10}}>
    <CountdownPill format={mfmt(ar)} minutesLeft={c.m}/>
    <Button size="sm" variant="primary">{t.reserve}</Button></div>
</div>);}

function Browse({t,ar}){const[f,setF]=React.useState("all");return(
<div>
  <div style={{padding:"18px 16px 14px",borderBottom:"1.5px solid var(--color-border-default)",background:"var(--color-surface-inverse)",color:"var(--color-text-inverse)"}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span className="cap" style={{color:"inherit",opacity:.75}}>SURPLUS KW</span>
      <span className="cap ds-numeric" style={{color:"inherit",opacity:.75}}>21:06</span></div>
    <h1 style={{fontSize:34,lineHeight:"36px",marginTop:12,fontWeight:800,letterSpacing:"-0.02em",color:"inherit"}}>{t.head}</h1>
    <p className="cap" style={{color:"inherit",opacity:.75,marginTop:8}}>{t.sub}</p>
  </div>
  <div style={{padding:"12px 16px"}}><Input icon="search" placeholder={t.search}/></div>
  <div style={{display:"flex",gap:8,overflow:"auto",padding:"0 16px 12px"}}>
    {[["all",ar?"الكل":"ALL"],["bakery",ar?"مخبز":"BAKERY"],["meals",ar?"وجبات":"MEALS"],["grocery",ar?"جمعية":"GROCERY"]].map(([k,l])=>
      <Chip key={k} selected={f===k} onClick={()=>setF(k)} style={{flex:"none"}}>{l}</Chip>)}</div>
  <div className="dash"/>
  {CHITS.map(c=><Row key={c.n} c={c} ar={ar} t={t}/>)}
  <p className="cap" style={{padding:"16px",textAlign:"center"}}>NO PHOTOS. WHAT YOU SEE IS WHAT IS PRINTED.</p>
</div>);}

function Detail({t,ar}){const c=CHITS[0];return(
<div>
  <div style={{padding:"16px",borderBottom:"1.5px solid var(--color-border-default)",display:"flex",justifyContent:"space-between",alignItems:"center"}}>
    <IconButton icon="chevron-left" label="Back" mirror/><span className="cap ds-numeric">{t.code} {c.n}</span><IconButton icon="share-2" label="Share"/></div>
  <div style={{padding:"20px 16px",display:"grid",gap:6,borderBottom:"1.5px dashed var(--color-border-default)"}}>
    <h2 style={{fontSize:30,lineHeight:"32px",fontWeight:800,letterSpacing:"-0.02em"}}>{ar?c.pa:c.p}</h2>
    <span className="cap ds-numeric">BLOCK 10, SALMIYA · {c.km} KM</span>
    <div style={{marginTop:6}}><RatingStars value={4.7} count={218}/></div></div>
  <div style={{padding:"18px 16px",display:"grid",gap:14}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end"}}>
      <div style={{display:"grid",gap:4}}><span className="cap">{t.paid}</span>
        <span className="ds-numeric" style={{fontSize:52,lineHeight:1,fontWeight:700}}>{c.now.toFixed(3)}</span></div>
      <div style={{display:"grid",gap:4,textAlign:"end"}}><span className="cap">{t.worth}</span>
        <span className="ds-numeric" style={{fontSize:22,textDecoration:"line-through",color:"var(--color-text-secondary)"}}>{c.was.toFixed(3)}</span>
        <Badge tone="deal">−69%</Badge></div></div>
    <div className="dash"/>
    <div style={{display:"grid",gap:6}}><span className="cap">{t.collect}</span>
      <span className="ds-numeric" style={{fontSize:28,fontWeight:700}}>{c.from} – {c.to}</span>
      <CountdownPill format={mfmt(ar)} minutesLeft={c.m}/></div>
    <div className="dash"/>
    <div style={{display:"grid",gap:6}}><span className="cap">{t.inside}</span>
      <p style={{margin:0,fontSize:"var(--text-body-size)"}}>{t.insideBody}</p></div>
    <div className="dash"/>
    <div style={{display:"grid",gap:8}}>
      <div style={{display:"flex",justifyContent:"space-between"}}><span className="cap">LISTED</span><span className="ds-numeric cap">21:04</span></div>
      <div style={{display:"flex",justifyContent:"space-between"}}><span className="cap">ATTESTED BY</span><span className="ds-numeric cap">SHIFT MGR · A.K.</span></div>
      <div style={{display:"flex",justifyContent:"space-between"}}><span className="cap">LICENCE</span><span className="ds-numeric cap">PAFN 2019/4471</span></div></div>
    <div className="dash"/>
    <div style={{display:"grid",gap:8}}><PaymentMethodRow method="knet" selected/><PaymentMethodRow method="applepay"/></div>
    <div style={{display:"flex",gap:10,alignItems:"center"}}><Stepper value={1} max={c.left} onChange={()=>{}}/>
      <Button size="lg" fullWidth>{t.reserve} · <span className="ds-numeric">{c.now.toFixed(3)}</span></Button></div>
  </div>
</div>);}

function Redeem({t,ar}){const c=CHITS[0];const[done,setDone]=React.useState(false);return(
<div style={{display:"grid",alignContent:"start"}}>
  <div style={{padding:"16px",display:"flex",justifyContent:"space-between",alignItems:"center",borderBottom:"1.5px solid var(--color-border-default)"}}>
    <IconButton icon="chevron-left" label="Back" mirror/><span className="cap">{ar?"قسيمتي":"MY CHIT"}</span><IconButton icon="info" label="Help"/></div>
  <div style={{background:"var(--color-surface-inverse)",color:"var(--color-text-inverse)",padding:"28px 16px",display:"grid",gap:10,justifyItems:"center",textAlign:"center"}}>
    <span className="cap" style={{color:"inherit",opacity:.7}}>{ar?c.pa:c.p}</span>
    <span className="ds-numeric" style={{fontSize:64,lineHeight:"64px",fontWeight:700,letterSpacing:"0.02em"}}>4821</span>
    <span className="cap ds-numeric" style={{color:"inherit",opacity:.7}}>{c.from}–{c.to} · 1 BAG · KD {c.now.toFixed(3)}</span></div>
  <div style={{padding:"18px 16px",display:"grid",gap:14}}>
    <RedemptionCode {...RC(ar)} code="KW-4821" partner={ar?c.pa:c.p} window={c.from+"–"+c.to} quantity={1} state={done?"redeemed":"ready"} onRedeem={()=>setDone(true)}/>
    <Banner tone="time" title={ar?"باقي ٢٦ دقيقة":"26 MIN LEFT"}>{ar?"متأخر؟ خبّر الشريك.":"Running late? Tell the partner."}</Banner>
    <div className="dash"/>
    <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
      <ImpactStat icon="receipt" value={12} unit={ar?"قسيمة":"chits"} label={ar?"منذ مارس":"since March"}/>
      <ImpactStat icon="wallet" value="41" unit="KD" tone="brand" label={ar?"وفّرتها":"kept"}/></div>
  </div>
</div>);}

function App(){const[lang,setLang]=React.useState("en");const t=COPY[lang];const ar=lang==="ar";const[dark,setDark]=React.useState(false);const[tab,setTab]=React.useState("browse");
 React.useEffect(()=>{document.body.dataset.theme=dark?"dark":"light";document.body.dir=t.dir;},[dark,lang]);
 const frame=(el,cap,tb)=>(<div><div className="phone" dir={t.dir}><div className="scroll">{el}</div>
  <TabBar value={tb} onChange={setTab} items={t.tabs.map((l,i)=>({value:["browse","map","orders","me"][i],label:l,icon:["receipt","map","shopping-bag","user"][i],badge:i===2?1:undefined}))}/></div><div className="caption">{cap}</div></div>);
 return(<div><div style={{display:"flex",gap:10,justifyContent:"center",padding:"16px 0 0"}}>
  <SegmentedControl value={lang} onChange={setLang} options={[{value:"en",label:"EN"},{value:"ar",label:"ع"}]}/>
  <SegmentedControl value={dark?"dark":"light"} onChange={v=>setDark(v==="dark")} options={[{value:"light",label:"Paper"},{value:"dark",label:"Carbon"}]}/></div>
  <div className="stagewrap">{frame(<Browse t={t} ar={ar}/>,"Browse",tab)}{frame(<Detail t={t} ar={ar}/>,"Bag detail",tab)}{frame(<Redeem t={t} ar={ar}/>,"Redemption","orders")}</div></div>);}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

})();
