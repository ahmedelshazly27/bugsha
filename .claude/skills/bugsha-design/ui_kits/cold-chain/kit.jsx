(function(){
const mfmt = ar => m => ar
  ? (m >= 60 ? "باقي " + Math.floor(m/60) + " س " + (m%60) + " د" : "باقي " + m + " دقيقة")
  : (m >= 60 ? Math.floor(m/60) + "h " + (m%60) + "m left" : m + " min left");
const RC = ar => ar ? { bagLabel:"كيس", slideLabel:"اسحب لما الموظف يكون جاهز", doneLabel:"تم الاستلام" } : {};
const { Badge, Button, Chip, CountdownPill, PriceTag, PickupWindow, Icon, IconButton, Input, BagCard,
  SegmentedControl, TabBar, RatingStars, RedemptionCode, PaymentMethodRow, Stepper, Banner, ImpactStat, Card } = window.SurplusKWDesignSystem_97ec90;

const COPY={en:{dir:"ltr",loc:"Salmiya · 5 km",head:"12 bags live near Salmiya",sub:"Updated 21:06 · refreshed every 60s",search:"Search partners",
  inside:"Contents & handling",tabs:["Bags","Map","Orders","Me"],chain:"Chain of custody",reserve:"Reserve",code:"Order code",
  listed:"Listed",closes:"Closes",temp:"Held chilled ≤ 5°C",cert:"PAFN licence 2019/4471"},
 ar:{dir:"rtl",loc:"السالمية · ٥ كم",head:"١٢ كيس متاح قرب السالمية",sub:"آخر تحديث ٢١:٠٦ · يتحدث كل ٦٠ ثانية",search:"ابحث عن شريك",
  inside:"المحتويات والتداول",tabs:["الأكياس","خريطة","طلباتي","حسابي"],chain:"سلسلة العهدة",reserve:"احجز",code:"رمز الطلب",
  listed:"وقت الإدراج",closes:"يغلق",temp:"محفوظ مبرّد ≤ ٥°م",cert:"ترخيص الهيئة ٢٠١٩/٤٤٧١"}};
const ROWS=[{p:"Kuwait Bakehouse",pa:"مخبز الكويت",c:"bakery",now:2,was:6.5,from:"21:30",to:"22:30",km:1.4,left:2,r:4.7,rc:218,m:42,listed:"21:04"},
 {p:"Beit Beirut",pa:"بيت بيروت",c:"meals",now:3,was:9,from:"22:00",to:"23:00",km:2.1,left:5,r:4.5,rc:96,m:88,listed:"20:58"},
 {p:"Co-op Jabriya",pa:"جمعية الجابرية",c:"grocery",now:1.5,was:5,from:"20:00",to:"21:00",km:0.8,left:9,r:4.2,rc:77,m:150,listed:"19:41"},
 {p:"Slider Station",pa:"سلايدر ستيشن",c:"meals",now:2.5,was:7,from:"22:30",to:"23:30",km:3.4,left:1,r:4.8,rc:412,m:11,listed:"21:02"}];

function Field({k,v,mono=true}){return(<div style={{display:"grid",gap:2}}>
  <span style={{fontSize:"var(--text-micro-size)",letterSpacing:"var(--tracking-caps)",textTransform:"uppercase",color:"var(--color-text-tertiary)"}}>{k}</span>
  <span className={mono?"ds-numeric":""} style={{fontSize:"var(--text-label-size)",fontWeight:600}}>{v}</span></div>);}

function Browse({t,ar}){const[v,setV]=React.useState("list");return(
<div>
  <div style={{position:"sticky",top:0,zIndex:2,background:"var(--color-surface-raised)",borderBottom:"1px solid var(--color-border-default)",padding:"18px 16px 12px",display:"grid",gap:12}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
      <span style={{display:"inline-flex",alignItems:"center",gap:6,fontWeight:600,fontSize:"var(--text-label-size)"}}><Icon name="map-pin" size={16}/>{t.loc}</span>
      <span className="ds-numeric" dir="ltr" style={{unicodeBidi:"isolate",fontSize:"var(--text-micro-size)",color:"var(--color-fresh)",display:"inline-flex",alignItems:"center",gap:4}}><Icon name="refresh-cw" size={12}/>21:06</span></div>
    <h1 style={{fontSize:"var(--text-title-lg-size)",lineHeight:"var(--text-title-lg-line)",fontWeight:600,letterSpacing:0}}>{t.head}</h1>
    <span className="ds-numeric" style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{t.sub}</span>
    <Input icon="search" placeholder={t.search}/>
    <div style={{display:"flex",gap:8}}><SegmentedControl fullWidth value={v} onChange={setV} options={[{value:"list",label:ar?"قائمة":"List"},{value:"map",label:ar?"خريطة":"Map"}]}/>
      <IconButton icon="funnel" label="Filter" variant="outline"/></div>
  </div>
  <div style={{display:"grid",gap:8,padding:"12px 16px 24px"}}>
    {ROWS.map(b=>(<div key={b.p} style={{border:"1px solid var(--color-border-default)",borderRadius:"var(--radius-card)",background:"var(--color-surface-raised)",overflow:"hidden"}}>
      <div style={{display:"grid",gap:8,padding:"12px 14px"}}>
        <div style={{display:"grid",gap:3,minWidth:0}}>
          <strong style={{fontSize:"var(--text-headline-size)",fontWeight:600,minWidth:0,whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{ar?b.pa:b.p}</strong>
          <span className="ds-numeric" dir="ltr" style={{display:"flex",alignItems:"center",gap:4,minWidth:0,unicodeBidi:"isolate",fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)",whiteSpace:"nowrap",overflow:"hidden"}}>
            {b.from}–{b.to} · {b.km} km ·<Icon name="star" size={12} style={{fill:"currentColor"}}/>{b.r}</span></div>
        <div style={{display:"flex",alignItems:"center",justifyContent:"space-between",gap:10,flexWrap:"wrap"}}>
          <PriceTag now={b.now} was={b.was}/>
          <CountdownPill format={mfmt(ar)} minutesLeft={b.m}/></div></div>
      <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:8,padding:"10px 14px",borderTop:"1px solid var(--color-border-subtle)",background:"var(--color-surface-canvas)"}}>
        <Field k={t.listed} v={b.listed}/><Field k={t.closes} v={b.to}/><Field k={ar?"متبقي":"Left"} v={b.left+""}/></div>
    </div>))}
  </div>
</div>);}

function Detail({t,ar}){const b=ROWS[0];return(
<div>
  <div style={{padding:"18px 16px",borderBottom:"1px solid var(--color-border-default)",background:"var(--color-surface-raised)",display:"grid",gap:10}}>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><IconButton icon="chevron-left" label="Back" mirror/><CountdownPill format={mfmt(ar)} minutesLeft={b.m}/></div>
    <h2 style={{fontSize:"var(--text-title-lg-size)",fontWeight:600,letterSpacing:0}}>{ar?b.pa:b.p}</h2>
    <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}><RatingStars value={b.r} count={b.rc}/><Badge tone="fresh">{t.temp}</Badge></div>
  </div>
  <div style={{padding:16,display:"grid",gap:14}}>
    <Card padded style={{display:"grid",gap:12}}>
      <PickupWindow day={ar?"الليلة":"Tonight"} from={b.from} to={b.to} size="lg" note={ar?"ممر السيارات مفتوح":"Drive-up lane open"}/>
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:10}}>
        <Field k={t.listed} v="21:04"/><Field k={ar?"المسافة":"Distance"} v={b.km+" km"}/><Field k={ar?"متبقي":"Bags left"} v={b.left+""}/></div>
    </Card>
    <div><h3 style={{fontSize:"var(--text-headline-size)",fontWeight:600,marginBottom:6}}>{t.inside}</h3>
      <p style={{margin:0,color:"var(--color-text-secondary)"}}>{ar?"معجنات وخبز من إنتاج اليوم. تُحفظ في درجة حرارة الغرفة وتُسلَّم خلال ٩٠ دقيقة من الإغلاق.":"Same-day pastry and bread. Held at ambient, handed over within 90 minutes of window close."}</p></div>
    <Card padded style={{display:"grid",gap:10}}>
      <strong style={{fontSize:"var(--text-label-size)",fontWeight:600}}>{t.chain}</strong>
      {[["21:04",ar?"أدرج الشريك ٦ أكياس":"Partner listed 6 bags"],["21:06",ar?"تأكيد التداول من المدير":"Shift manager attested handling"],["22:30",ar?"إغلاق النافذة":"Window closes"]].map(([time,label])=>(
        <div key={time} style={{display:"flex",gap:10,alignItems:"center"}}>
          <span className="ds-numeric" style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)",width:44}}>{time}</span>
          <span style={{width:8,height:8,borderRadius:2,background:"var(--color-fresh)"}}/>
          <span style={{fontSize:"var(--text-label-size)"}}>{label}</span></div>))}
      <span className="ds-numeric" style={{fontSize:"var(--text-micro-size)",color:"var(--color-text-tertiary)"}}>{t.cert}</span>
    </Card>
    <div style={{display:"grid",gap:8}}><PaymentMethodRow method="knet" selected/><PaymentMethodRow method="card"/></div>
    <div style={{display:"flex",gap:10,alignItems:"center"}}><Stepper value={1} max={b.left} onChange={()=>{}}/>
      <Button size="lg" fullWidth>{t.reserve} · <span className="ds-numeric">KD {b.now.toFixed(3)}</span></Button></div>
  </div>
</div>);}

function Redeem({t,ar}){const b=ROWS[0];const[done,setDone]=React.useState(false);return(
<div style={{padding:"18px 16px",display:"grid",gap:14,alignContent:"start"}}>
  <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}><IconButton icon="chevron-left" label="Back" mirror/>
    <strong style={{fontSize:"var(--text-headline-size)",fontWeight:600}}>{t.code}</strong><IconButton icon="info" label="Help"/></div>
  <RedemptionCode {...RC(ar)} code="KW-4821" partner={ar?b.pa:b.p} window={b.from+"–"+b.to} quantity={1} state={done?"redeemed":"ready"} onRedeem={()=>setDone(true)}/>
  <Card padded style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
    <Field k={ar?"رقم الطلب":"Order"} v="KW-4821"/><Field k={ar?"وقت الحجز":"Reserved"} v="21:07"/>
    <Field k={t.closes} v="22:30"/><Field k={ar?"المدفوع":"Paid"} v="KD 2.000"/></Card>
  <Banner tone="time" title={ar?"باقي ٢٦ دقيقة":"26 minutes left"}>{ar?"لو تأخرت، خبّر الشريك من هني.":"Running late? Tell the partner from here."}</Banner>
  <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:10}}>
    <ImpactStat icon="shopping-bag" value={12} unit={ar?"وجبة":"meals"} label={ar?"منذ مارس":"since March"}/>
    <ImpactStat icon="wallet" value="KD 41" tone="brand" label={ar?"وفّرتها":"saved"}/></div>
</div>);}

function App(){const[lang,setLang]=React.useState("en");const t=COPY[lang];const ar=lang==="ar";const[dark,setDark]=React.useState(false);const[tab,setTab]=React.useState("browse");
 React.useEffect(()=>{document.body.dataset.theme=dark?"dark":"light";document.body.dir=t.dir;},[dark,lang]);
 const frame=(el,cap,tb)=>(<div><div className="phone" dir={t.dir}><div className="scroll">{el}</div>
  <TabBar value={tb} onChange={setTab} items={t.tabs.map((l,i)=>({value:["browse","map","orders","me"][i],label:l,icon:["list","map","shopping-bag","user"][i],badge:i===2?1:undefined}))}/></div><div className="caption">{cap}</div></div>);
 return(<div><div style={{display:"flex",gap:10,justifyContent:"center",padding:"16px 0 0"}}>
  <SegmentedControl value={lang} onChange={setLang} options={[{value:"en",label:"EN"},{value:"ar",label:"ع"}]}/>
  <SegmentedControl value={dark?"dark":"light"} onChange={v=>setDark(v==="dark")} options={[{value:"light",label:"Light"},{value:"dark",label:"Dark"}]}/></div>
  <div className="stagewrap">{frame(<Browse t={t} ar={ar}/>,"Browse",tab)}{frame(<Detail t={t} ar={ar}/>,"Bag detail",tab)}{frame(<Redeem t={t} ar={ar}/>,"Redemption","orders")}</div></div>);}
ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

})();
