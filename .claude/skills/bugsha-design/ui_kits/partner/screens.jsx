// Partner portal — screens. Composes design-system components only.
(function(){
const { Button, IconButton, Icon, Input, SegmentedControl, Stepper, Badge, Card, Banner, Chip, Switch, ListRow,
  OrderRow, PayoutCard, LedgerRow, PartnerStat, ListingStep, PickupWindow, Toast, RatingStars, EmptyState, ImpactStat } = window.SurplusKWDesignSystem_97ec90;

const mono = "var(--font-plex-mono), monospace";
const WINDOWS = ["21:30–22:30","22:00–23:00","22:30–23:30"];
const DAYS = [["sat","Sat","السبت"],["sun","Sun","الأحد"],["mon","Mon","الاثنين"],["tue","Tue","الثلاثاء"],["wed","Wed","الأربعاء"],["thu","Thu","الخميس"],["fri","Fri","الجمعة"]];
const uid = () => "b" + Math.random().toString(36).slice(2,7);

const H1 = ({children,sub}) => (
  <div style={{display:"grid",gap:6}}>
    <h1 style={{fontSize:"var(--text-title-lg-size)",lineHeight:1.25,fontWeight:600,letterSpacing:0,margin:0}}>{children}</h1>
    {sub && <p style={{margin:0,fontSize:"var(--text-body-size)",lineHeight:1.7,color:"var(--color-text-secondary)",maxWidth:"70ch"}}>{sub}</p>}
  </div>);
const Panel = ({title,action,children,pad}) => (
  <Card padded={false}>
    {(title||action) && <div style={{padding:"12px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
      <strong style={{fontSize:"var(--text-headline-size)",fontWeight:600}}>{title}</strong>{action}</div>}
    <div style={pad?{padding:16,display:"grid",gap:12}:undefined}>{children}</div>
  </Card>);
const Th = ({children,align}) => <span style={{fontSize:"var(--text-micro-size)",letterSpacing:"var(--tracking-caps)",textTransform:"uppercase",color:"var(--color-text-tertiary)",textAlign:align||"start"}}>{children}</span>;
const Field = ({label,children}) => (
  <label style={{display:"grid",gap:6,minWidth:0}}>
    <span style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{label}</span>{children}</label>);

/* ---------------- Bundle editor (create + edit, shared by List a bundle and My bundles) ---------------- */
function BundleEditor({t,ar,draft,onChange,onSave,onDelete,onCancel,withDays,saveLabel}){
  const set = (k,v) => onChange({...draft,[k]:v});
  const days = draft.days || [];
  return (
    <div style={{position:"fixed",inset:0,zIndex:60,display:"grid",placeItems:"center",padding:24,background:"var(--color-surface-overlay)"}} dir={t.dir}>
      <div style={{width:"100%",maxWidth:520,maxHeight:"90vh",overflowY:"auto",background:"var(--color-surface-raised)",borderRadius:"var(--radius-card)",
        border:"1px solid var(--color-border-subtle)",boxShadow:"var(--elevation-raised)",padding:20,display:"grid",gap:14}}>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",gap:12}}>
          <strong style={{fontSize:"var(--text-title-size)",fontWeight:600}}>{draft.isNew?t.newBundle:t.editBundle}</strong>
          <IconButton icon="x" label={t.cancelEdit} onClick={onCancel}/></div>

        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>
          <Field label={t.nameEn}><Input value={draft.en} onChange={e=>set("en",e.target.value)} placeholder="Bakery mix"/></Field>
          <Field label={t.nameAr}><Input value={draft.ar} onChange={e=>set("ar",e.target.value)} placeholder="خليط المخبز" dir="rtl"/></Field>
          <Field label={t.price}><Input value={draft.price} onChange={e=>set("price",e.target.value)} suffix="KD"/></Field>
          <Field label={t.worth}><Input value={draft.worth} onChange={e=>set("worth",e.target.value)} suffix="KD"/></Field>
        </div>

        <Field label={t.qtyLabel}><div><Stepper value={draft.qty} min={1} max={40} onChange={v=>set("qty",v)}/></div></Field>

        <Field label={t.photo}>
          <div style={{display:"grid",gap:8}}>
            <div style={{display:"flex",gap:10,alignItems:"center"}}>
              <div style={{width:88,height:64,borderRadius:"var(--radius-image)",overflow:"hidden",background:"var(--color-surface-sunken)",
                border:"1px solid var(--color-border-subtle)",display:"grid",placeItems:"center",flex:"none"}}>
                {draft.photo
                  ? <img src={draft.photo} alt="" style={{width:"100%",height:"100%",objectFit:"cover"}}/>
                  : <span style={{fontSize:"var(--text-micro-size)",color:"var(--color-text-tertiary)"}}>{t.noPhoto}</span>}</div>
              <div style={{display:"grid",gap:6}}>
                <label style={{display:"inline-flex"}}>
                  <input type="file" accept="image/*" style={{position:"absolute",width:1,height:1,opacity:0}}
                    onChange={e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>set("photo",r.result);r.readAsDataURL(f)}}/>
                  <span style={{display:"inline-flex",alignItems:"center",gap:8,minHeight:"var(--size-control-md)",padding:"0 var(--space-200)",
                    borderRadius:"var(--radius-control)",border:"1px solid var(--color-border-strong)",cursor:"pointer",fontSize:"var(--text-label-size)",fontWeight:600}}>
                    <Icon name="camera" size={16}/>{t.uploadPhoto}</span></label>
                {draft.photo && <Button size="sm" variant="ghost" onClick={()=>set("photo",null)}>{t.del}</Button>}</div>
            </div>
            <span style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{t.yourPhotos}</span>
            <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
              {window.PARTNER_PHOTOS.map(p=>(
                <button key={p} onClick={()=>set("photo",p)} style={{width:56,height:44,padding:0,borderRadius:"var(--radius-image)",overflow:"hidden",cursor:"pointer",
                  border:draft.photo===p?"2px solid var(--color-surface-brand)":"1px solid var(--color-border-subtle)",background:"none"}}>
                  <img src={p} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></button>))}
            </div>
            <span style={{fontSize:"var(--text-caption-size)",lineHeight:1.6,color:"var(--color-text-tertiary)"}}>{t.photoNote}</span>
          </div></Field>

        <Field label={t.windowLabel}>
          <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
            {WINDOWS.map(w=>(<Chip key={w} selected={draft.window===w} onClick={()=>set("window",w)}><span className="ds-numeric" style={{fontFamily:mono}}>{w}</span></Chip>))}
          </div></Field>

        {withDays && <Field label={t.days}>
          <div style={{display:"flex",gap:6,flexWrap:"wrap"}}>
            {DAYS.map(([k,en,arn])=>(
              <Chip key={k} selected={days.includes(k)}
                onClick={()=>set("days", days.includes(k)?days.filter(x=>x!==k):[...days,k])}>{ar?arn:en}</Chip>))}
          </div></Field>}

        <div style={{display:"flex",gap:10,alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",paddingTop:4}}>
          <span style={{fontSize:"var(--text-caption-size)",lineHeight:1.6,color:"var(--color-text-tertiary)",maxWidth:"34ch"}}>{t.editorNote}</span>
          <div style={{display:"flex",gap:8}}>
            {onDelete && <Button variant="ghost" onClick={onDelete}>{t.del}</Button>}
            <Button variant="secondary" onClick={onCancel}>{t.cancelEdit}</Button>
            <Button onClick={onSave} disabled={!draft.en && !draft.ar}>{saveLabel||t.save}</Button></div>
        </div>
      </div>
    </div>);
}
const blankDraft = () => ({id:uid(),isNew:true,en:"",ar:"",price:"2.000",worth:"6.500",window:WINDOWS[0],qty:6,photo:null,days:["sat","sun","mon","tue","wed","thu"]});
const Thumb = ({src,w=44,h=44}) => (
  <div style={{width:w,height:h,flex:"none",borderRadius:"var(--radius-image)",overflow:"hidden",background:"var(--color-surface-sunken)",border:"1px solid var(--color-border-subtle)"}}>
    {src && <img src={src} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/>}</div>);

/* ---------------- Tonight ---------------- */
function Tonight({t,ar,store,onList}){
  const {listings,setListings,orders,setOrders} = store;
  const [toast,setToast] = React.useState(null);
  const [editing,setEditing] = React.useState(null);
  const collect = code => { setOrders(o=>o.map(r=>r.code===code?{...r,status:"collected"}:r)); setToast(code+" · "+t.done); };
  const waiting = orders.filter(o=>o.status!=="collected").length;
  const done = orders.filter(o=>o.status==="collected").length;
  const liveQty = listings.filter(l=>l.live).reduce((n,l)=>n+(l.qty-l.sold),0);
  const patch = (id,p) => setListings(ls=>ls.map(l=>l.id===id?{...l,...p}:l));
  return (<React.Fragment>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:16,flexWrap:"wrap"}}>
      <H1 sub={`${t.branch} · ${t.area}`}>{t.tonight}</H1>
      <div style={{display:"flex",gap:10,alignItems:"center"}}>
        <PickupWindow day={t.tonight} from="21:30" to="22:30"/>
        <Button iconStart="plus" onClick={onList}>{t.listCta}</Button></div></div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:12}}>
      <PartnerStat label={t.live} value={String(liveQty)} sub={t.listedAt} icon="package"/>
      <PartnerStat label={t.reserved} value={String(waiting)} sub={t.ofBundles} icon="shopping-bag" tone="fresh"/>
      <PartnerStat label={t.closesIn} value="46 min" sub="22:30" icon="clock" tone="urgent"/>
      <PartnerStat label={t.net} value="KD 24.000" sub={t.afterFee} icon="banknote"/></div>

    <Panel title={t.liveListings} action={<Button variant="secondary" size="sm" iconStart="plus" onClick={onList}>{t.addBundle}</Button>}>
      {listings.length===0
        ? <div style={{padding:16}}><EmptyState icon="package" title={t.noListings} body={t.noListingsBody}
            action={<Button onClick={onList}>{t.listCta}</Button>}/></div>
        : listings.map(l=>(
        <div key={l.id} style={{padding:"14px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",
          gridTemplateColumns:"auto minmax(0,1.4fr) auto auto auto",gap:14,alignItems:"center"}}>
          <Thumb src={l.photo}/>
          <div style={{display:"grid",gap:4,minWidth:0}}>
            <div style={{display:"flex",gap:8,alignItems:"center",minWidth:0}}>
              <strong style={{fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ar?(l.ar||l.en):(l.en||l.ar)}</strong>
              {!l.live && <Badge tone="neutral">{t.pausedToast.split("—")[0].trim()}</Badge>}</div>
            <span className="ds-numeric" style={{fontFamily:mono,fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>
              KD {l.price} · {l.window}</span></div>
          <span className="ds-numeric" style={{fontFamily:mono,fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)",whiteSpace:"nowrap"}}>
            {l.sold}/{l.qty} {t.sold} · {l.qty-l.sold} {t.remaining}</span>
          <Button size="sm" variant="secondary" onClick={()=>setEditing({...l,isNew:false})}>{t.editOne}</Button>
          <div style={{display:"flex",gap:6}}>
            <Button size="sm" variant="ghost" onClick={()=>{patch(l.id,{live:!l.live});setToast(l.live?t.pausedToast:t.resumedToast)}}>{l.live?t.pauseOne:t.resumeOne}</Button>
            <Button size="sm" variant="ghost" onClick={()=>{setListings(ls=>ls.filter(x=>x.id!==l.id));setToast(t.removedToast)}}>{t.removeOne}</Button></div>
        </div>))}
    </Panel>

    <Banner tone="fresh" title={t.attested}>{t.attestedBody}</Banner>

    <Panel title={t.board} action={<div style={{display:"flex",gap:8,alignItems:"center"}}>
        <span className="ds-numeric" style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{done}/{orders.length} {t.done.toLowerCase()}</span></div>}>
      {orders.map(o=>(
        <OrderRow key={o.code} code={o.code} customer={ar?o.customerAr:o.customer} quantity={o.qty>1?o.qty:undefined}
          pickupBy={o.by} status={o.status} bagLabel={ar?"بقشة":(o.qty>1?"bundles":"bundle")}
          statusLabel={o.status==="collected"?t.done:o.status==="late"?t.late:t.waitingS}
          actionLabel={t.handOver} onCheckIn={()=>collect(o.code)}/>))}
    </Panel>

    {editing && <BundleEditor t={t} ar={ar} draft={editing} onChange={setEditing}
      onSave={()=>{patch(editing.id,editing);setEditing(null);setToast(t.savedToast)}}
      onDelete={()=>{setListings(ls=>ls.filter(x=>x.id!==editing.id));setEditing(null);setToast(t.removedToast)}}
      onCancel={()=>setEditing(null)}/>}
    {toast && <Toast tone="success" onClose={()=>setToast(null)}>{toast}</Toast>}
  </React.Fragment>);
}

/* ---------------- List a bundle (functional publish) ---------------- */
function ListBundle({t,ar,store,onDone}){
  const {presets,setPresets,listings,setListings} = store;
  const [draft,setDraft] = React.useState(()=>({...blankDraft(),en:"Bakery mix",ar:"خليط المخبز",photo:window.PARTNER_PHOTOS[0]}));
  const [step,setStep] = React.useState(1);
  const [toast,setToast] = React.useState(null);
  const [savedPreset,setSavedPreset] = React.useState(false);
  const set = (k,v)=>setDraft(d=>({...d,[k]:v}));
  const usePreset = p => { setDraft({...blankDraft(),en:p.en,ar:p.ar,price:p.price,worth:p.worth,window:p.window,qty:p.qty,photo:p.photo}); setStep(3); };
  const publish = () => {
    setListings(ls=>[...ls,{id:uid(),en:draft.en,ar:draft.ar,price:draft.price,worth:draft.worth,window:draft.window,qty:draft.qty,photo:draft.photo,sold:0,live:true}]);
    setToast(t.publishedFrom(draft.qty));
  };
  return (<React.Fragment>
    <H1 sub={t.startFrom}>{t.nav[1]} <span className="ds-numeric" style={{color:"var(--color-text-tertiary)",fontSize:"var(--text-body-size)",fontFamily:mono}}>· 60s</span></H1>
    <div style={{display:"flex",gap:8,flexWrap:"wrap"}}>
      {presets.map(p=>(<Chip key={p.id} onClick={()=>usePreset(p)}><span style={{whiteSpace:"nowrap"}}>{ar?p.ar:p.en} · <span className="ds-numeric" style={{fontFamily:mono}} dir="ltr">{p.qty}× KD {p.price}</span></span></Chip>))}
    </div>
    <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) 320px",gap:16,alignItems:"start"}}>
      <div style={{display:"grid",gap:12}}>
        <ListingStep index={1} total={3} title={t.howMany} hint={t.lastNight} done={step>1}>
          <div style={{display:"flex",gap:12,alignItems:"center",flexWrap:"wrap"}}>
            <Stepper value={draft.qty} min={1} max={40} onChange={v=>set("qty",v)}/>
            <Button variant="secondary" onClick={()=>{set("qty",6);setStep(2)}}>{t.sameAsLast}</Button>
            <Button variant="ghost" onClick={()=>setStep(2)}>{t.next}</Button></div>
        </ListingStep>
        <ListingStep index={2} total={3} title={t.window} hint={t.windowHint} done={step>2}>
          <div style={{display:"flex",gap:10,flexWrap:"wrap"}}>
            {WINDOWS.map(w=>
              <Button key={w} variant={w===draft.window?"primary":"secondary"} onClick={()=>{set("window",w);setStep(3)}}><span className="ds-numeric">{w}</span></Button>)}</div>
        </ListingStep>
        <ListingStep index={3} total={3} title={t.priceStep} hint={t.priceHint}>
          <div style={{display:"grid",gap:12}}>
            <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(150px,1fr))",gap:12}}>
              <Field label={t.nameEn}><Input value={draft.en} onChange={e=>set("en",e.target.value)}/></Field>
              <Field label={t.nameAr}><Input value={draft.ar} onChange={e=>set("ar",e.target.value)} dir="rtl"/></Field>
              <Field label={t.price}><Input value={draft.price} onChange={e=>set("price",e.target.value)} suffix="KD"/></Field>
              <Field label={t.worth}><Input value={draft.worth} onChange={e=>set("worth",e.target.value)} suffix="KD"/></Field></div>
            <Field label={t.photo}>
              <div style={{display:"flex",gap:8,alignItems:"center",flexWrap:"wrap"}}>
                {window.PARTNER_PHOTOS.map(p=>(
                  <button key={p} onClick={()=>set("photo",p)} style={{width:56,height:44,padding:0,borderRadius:"var(--radius-image)",overflow:"hidden",cursor:"pointer",
                    border:draft.photo===p?"2px solid var(--color-surface-brand)":"1px solid var(--color-border-subtle)",background:"none"}}>
                    <img src={p} alt="" style={{width:"100%",height:"100%",objectFit:"cover",display:"block"}}/></button>))}
                <label style={{display:"inline-flex"}}>
                  <input type="file" accept="image/*" style={{position:"absolute",width:1,height:1,opacity:0}}
                    onChange={e=>{const f=e.target.files&&e.target.files[0];if(!f)return;const r=new FileReader();r.onload=()=>set("photo",r.result);r.readAsDataURL(f)}}/>
                  <span style={{display:"inline-flex",alignItems:"center",gap:6,height:44,padding:"0 12px",borderRadius:"var(--radius-control)",
                    border:"1px solid var(--color-border-strong)",cursor:"pointer",fontSize:"var(--text-caption-size)",fontWeight:600}}>
                    <Icon name="camera" size={15}/>{t.uploadPhoto}</span></label>
              </div></Field>
            <label style={{display:"flex",gap:10,alignItems:"flex-start",fontSize:"var(--text-label-size)",lineHeight:1.7,color:"var(--color-text-secondary)"}}>
              <input type="checkbox" defaultChecked style={{width:20,height:20,marginTop:2,accentColor:"var(--color-surface-brand)"}}/>
              {t.attestLabel}</label>
            <div style={{display:"flex",gap:10,flexWrap:"wrap",alignItems:"center"}}>
              <Button size="lg" onClick={publish}>{t.publish(draft.qty)}</Button>
              <Button variant="secondary" disabled={savedPreset}
                onClick={()=>{setPresets(ps=>[...ps,{id:uid(),en:draft.en,ar:draft.ar,price:draft.price,worth:draft.worth,window:draft.window,qty:draft.qty,photo:draft.photo,days:{en:"Sat–Thu",ar:"السبت–الخميس"}}]);setSavedPreset(true);setToast(t.presetSaved)}}>
                {savedPreset?t.presetSaved:t.savePreset}</Button></div></div>
        </ListingStep>
      </div>
      <Card padded style={{display:"grid",gap:10}}>
        <strong style={{fontSize:"var(--text-label-size)",fontWeight:600}}>{t.preview}</strong>
        <div style={{display:"grid",gap:6,padding:12,borderRadius:"var(--radius-card)",background:"var(--color-surface-canvas)"}}>
          {draft.photo && <img src={draft.photo} alt="" style={{width:"100%",height:96,objectFit:"cover",borderRadius:"var(--radius-image)",display:"block"}}/>}
          <strong>{t.branch}</strong>
          <span style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{ar?(draft.ar||draft.en):(draft.en||draft.ar)}</span>
          <span className="ds-numeric" style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)",fontFamily:mono}}>{draft.window} · 1.4 km</span>
          <div style={{display:"flex",gap:8,alignItems:"baseline"}}>
            <span className="ds-numeric" style={{fontSize:"var(--text-title-size)",fontWeight:700,fontFamily:mono}}>KD {draft.price}</span>
            <span className="ds-numeric" style={{fontFamily:mono,fontSize:"var(--text-caption-size)",color:"var(--color-text-tertiary)",textDecoration:"line-through"}}>KD {draft.worth}</span></div>
          <div><Badge tone="fresh">{t.bakedToday}</Badge></div>
          <span className="ds-numeric" style={{fontFamily:mono,fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{draft.qty} × {t.remaining}</span></div>
        <span style={{fontSize:"var(--text-caption-size)",lineHeight:1.7,color:"var(--color-text-secondary)"}}>{t.previewNote}</span>
      </Card></div>
    {toast && <Toast tone="success" action={t.view} onAction={onDone} onClose={()=>setToast(null)}>{toast}</Toast>}
  </React.Fragment>);
}

/* ---------------- My bundles (create / edit / delete / publish) ---------------- */
function Bundles({t,ar,store,onDone}){
  const {presets,setPresets,setListings} = store;
  const [editing,setEditing] = React.useState(null);
  const [toast,setToast] = React.useState(null);
  const save = () => {
    setPresets(ps=>{
      const row = {id:editing.id,en:editing.en,ar:editing.ar,price:editing.price,worth:editing.worth,window:editing.window,qty:editing.qty,photo:editing.photo,
        days:{en:(editing.days||[]).map(d=>DAYS.find(x=>x[0]===d)[1]).join(", ")||"—", ar:(editing.days||[]).map(d=>DAYS.find(x=>x[0]===d)[2]).join("، ")||"—"}, dayKeys:editing.days};
      return editing.isNew ? [...ps,row] : ps.map(p=>p.id===editing.id?row:p);
    });
    setEditing(null); setToast(t.savedToast);
  };
  return (<React.Fragment>
    <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-end",gap:16,flexWrap:"wrap"}}>
      <H1 sub={t.bundlesNote}>{t.bundles}</H1>
      <Button iconStart="plus" onClick={()=>setEditing(blankDraft())}>{t.addBundle}</Button></div>
    <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fill,minmax(280px,1fr))",gap:12}}>
      {presets.map(p=>(
        <Card key={p.id} padded style={{display:"grid",gap:10,alignContent:"start"}}>
          <div style={{display:"flex",gap:10,alignItems:"center",minWidth:0}}>
            <Thumb src={p.photo} w={52} h={52}/>
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"baseline",gap:10,minWidth:0,flex:1}}>
              <strong style={{fontSize:"var(--text-headline-size)",fontWeight:600,minWidth:0,overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"}}>{ar?(p.ar||p.en):(p.en||p.ar)}</strong>
              <Badge tone="neutral">{p.qty}×</Badge></div></div>
          <div style={{display:"grid",gap:4,fontFamily:mono,fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>
            <span className="ds-numeric">KD {p.price} · KD {p.worth}</span>
            <span className="ds-numeric">{p.window}</span></div>
          <div style={{display:"flex",gap:6,alignItems:"center",minWidth:0,fontSize:"var(--text-caption-size)",color:"var(--color-text-tertiary)"}}>
            <Icon name="calendar" size={14}/><span style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{t.schedule} · {ar?p.days.ar:p.days.en}</span></div>
          <div style={{display:"flex",gap:8,marginTop:2,flexWrap:"wrap"}}>
            <Button size="sm" onClick={()=>{setListings(ls=>[...ls,{id:uid(),en:p.en,ar:p.ar,price:p.price,worth:p.worth,window:p.window,qty:p.qty,photo:p.photo,sold:0,live:true}]);setToast(t.publishedFrom(p.qty))}}>{t.useNow}</Button>
            <Button size="sm" variant="secondary" onClick={()=>setEditing({...p,isNew:false,days:p.dayKeys||["sat","sun","mon","tue","wed","thu"]})}>{t.edit}</Button></div>
        </Card>))}
    </div>
    {editing && <BundleEditor t={t} ar={ar} draft={editing} onChange={setEditing} withDays saveLabel={editing.isNew?t.saveAdd:t.save}
      onSave={save}
      onDelete={editing.isNew?undefined:()=>{setPresets(ps=>ps.filter(x=>x.id!==editing.id));setEditing(null);setToast(t.deletedToast)}}
      onCancel={()=>setEditing(null)}/>}
    {toast && <Toast tone="success" action={t.view} onAction={onDone} onClose={()=>setToast(null)}>{toast}</Toast>}
  </React.Fragment>);
}

/* ---------------- Payouts ---------------- */
function Payouts({t,ar}){
  const cols = "minmax(132px,1.5fr) minmax(80px,.9fr) minmax(80px,.9fr) minmax(80px,.9fr) auto";
  return (<React.Fragment>
    <H1>{t.payouts}</H1>
    <div style={{display:"grid",gridTemplateColumns:"320px minmax(0,1fr)",gap:16,alignItems:"start"}}>
      <div style={{display:"grid",gap:12}}>
        <PayoutCard amount={184.5} period={t.thisWeek} bags={92} nextDate={ar?"الأحد 9 أغسطس":"Sun 9 Aug"}
          note={ar?"92 بقشة مبيعة · التحويل الأحد 9 أغسطس":undefined}/>
        <Card padded style={{display:"grid",gap:8}}>
          <span style={{fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>{t.arriving}</span>
          <div style={{display:"flex",gap:8,alignItems:"center"}}><Icon name="credit-card" size={16}/><span className="ds-numeric" style={{fontFamily:mono}}>{t.bank}</span></div>
        </Card></div>
      <Panel title={t.history}>
        <div style={{overflowX:"auto"}}>
        <div style={{padding:"10px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",gridTemplateColumns:cols,gap:16}}>
          <Th>{t.period}</Th><Th>{t.gross}</Th><Th>{t.fee}</Th><Th>{t.netCol}</Th><Th>{t.status}</Th></div>
        {window.PARTNER_PAYOUTS.map(p=>(
          <div key={p.period.en} style={{padding:"14px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",gridTemplateColumns:cols,gap:16,alignItems:"center",fontSize:"var(--text-body-size)"}}>
            <span style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{ar?p.period.ar:p.period.en}</span>
            <span className="ds-numeric" style={{fontFamily:mono}}>{p.gross}</span>
            <span className="ds-numeric" style={{fontFamily:mono,color:"var(--color-text-secondary)"}}>−{p.fee}</span>
            <span className="ds-numeric" style={{fontFamily:mono,fontWeight:700}}>{p.net}</span>
            <Badge tone={p.paid?"fresh":"neutral"}>{p.paid?t.paid:t.pending}</Badge></div>))}
        </div>
      </Panel></div>
  </React.Fragment>);
}

/* ---------------- Inspection log ---------------- */
function Ledger({t,ar}){
  const cols = "minmax(96px,1.1fr) minmax(72px,1fr) minmax(72px,1fr) minmax(72px,1fr) auto";
  return (<React.Fragment>
    <H1 sub={t.ledgerNote}>{t.ledger}</H1>
    <div style={{display:"flex",gap:8,flexWrap:"wrap",alignItems:"center"}}>
      <Chip selected>{t.last7}</Chip><Chip>{t.allBranches}</Chip><Chip>{t.branch}</Chip>
      <div style={{marginInlineStart:"auto"}}><Button variant="secondary" iconStart="download">{t.export}</Button></div></div>
    <Panel>
      <div style={{overflowX:"auto"}}>
      <div style={{padding:"10px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",gridTemplateColumns:cols,gap:16}}>
        <Th>{t.colOrder}</Th><Th>{t.colListed}</Th><Th>{t.colCloses}</Th><Th>{t.colCollected}</Th><Th>{t.colAttest}</Th></div>
      {window.PARTNER_LEDGER.map(r=>(<LedgerRow key={r.orderId} {...r}/>))}
      </div>
    </Panel>
  </React.Fragment>);
}

/* ---------------- Reviews ---------------- */
function Reviews({t,ar}){
  return (<React.Fragment>
    <H1 sub={t.reviewsNote}>{t.reviews}</H1>
    <div style={{display:"grid",gridTemplateColumns:"repeat(3,minmax(0,1fr))",gap:12}}>
      <PartnerStat label={t.avgTonight} value="4.7" sub="3 reviews" icon="star" tone="fresh"/>
      <PartnerStat label={t.allTime} value="4.6" sub="418 reviews" icon="star"/>
      <PartnerStat label={t.collected} value="92" sub={t.thisWeek} icon="shopping-bag"/></div>
    <Panel title={t.reviews}>
      {window.PARTNER_REVIEWS.map(r=>(
        <div key={r.name} style={{padding:"14px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",gap:6}}>
          <div style={{display:"flex",gap:10,alignItems:"center",justifyContent:"space-between"}}>
            <strong style={{fontWeight:600}}>{ar?r.nameAr:r.name}</strong><RatingStars value={r.stars} size={14}/></div>
          <span style={{fontSize:"var(--text-body-size)",lineHeight:1.75,color:"var(--color-text-secondary)"}}>{ar?r.ar:r.en}</span></div>))}
    </Panel>
  </React.Fragment>);
}


/* ---------------- Analytics (operations numbers; the marketing story lives in the pitch decks) ---------------- */
function Impact({t,ar}){
  const rows = window.PARTNER_IMPACT_BRANCHES;
  const cols = "minmax(140px,1.6fr) repeat(4,minmax(64px,.8fr))";
  return (<React.Fragment>
    <H1 sub={t.impactNote}>{t.impact}</H1>

    <div style={{display:"flex",gap:8,alignItems:"center",fontSize:"var(--text-caption-size)",color:"var(--color-text-secondary)"}}>
      <Icon name="circle-check" size={15} style={{color:"var(--color-fresh)"}}/><span>{t.verified}</span></div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:12}}>
      <PartnerStat label={t.sellThrough} value="94%" sub={t.sellThroughSub} icon="package" tone="fresh"/>
      <PartnerStat label={t.bundlesRescued} value="592" sub={t.internal} icon="shopping-bag"/>
      <PartnerStat label={t.avgPrice} value="KD 2.180" sub={t.avgPriceSub} icon="banknote"/>
      <PartnerStat label={t.bestNight} value="Thu" sub={t.bestNightSub} icon="moon"/></div>

    <div style={{display:"grid",gridTemplateColumns:"repeat(4,minmax(0,1fr))",gap:12}}>
      <PartnerStat label={t.mealsDiverted} value="1,184" sub={t.internal} icon="utensils"/>
      <PartnerStat label={t.kgFood} value="296 kg" sub={t.internal} icon="leaf"/>
      <PartnerStat label={t.disposalSaved} value="KD 118" sub={t.internal} icon="banknote"/>
      <PartnerStat label={t.ytd} value="1,284" sub={t.mealsDiverted} icon="calendar"/></div>

    <Panel title={t.perBranch}>
      <div style={{overflowX:"auto"}}>
      <div style={{padding:"10px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",gridTemplateColumns:cols,gap:14}}>
        <Th>{t.branches}</Th><Th>{t.bundlesRescued}</Th><Th>{t.mealsDiverted}</Th><Th>{t.kgFood}</Th><Th>{t.co2}</Th></div>
      {rows.map(b=>(
        <div key={b.en} style={{padding:"13px 16px",borderBottom:"1px solid var(--color-border-subtle)",display:"grid",gridTemplateColumns:cols,gap:14,alignItems:"center",fontSize:"var(--text-body-size)"}}>
          <span style={{whiteSpace:"nowrap",overflow:"hidden",textOverflow:"ellipsis"}}>{ar?b.ar:b.en}</span>
          <span className="ds-numeric" style={{fontFamily:mono}}>{b.bundles}</span>
          <span className="ds-numeric" style={{fontFamily:mono}}>{b.meals}</span>
          <span className="ds-numeric" style={{fontFamily:mono}}>{b.kg}</span>
          <span className="ds-numeric" style={{fontFamily:mono}}>{b.co2}</span></div>))}
      </div>
    </Panel>
  </React.Fragment>);
}

/* ---------------- Branches ---------------- */
function Branches({t,ar,lang,setLang}){
  const [notifNew,setNotifNew]=React.useState(true); const [notifClose,setNotifClose]=React.useState(true);
  return (<React.Fragment>
    <H1>{t.branches}</H1>
    <div style={{display:"grid",gridTemplateColumns:"minmax(0,1fr) 340px",gap:16,alignItems:"start"}}>
      <Panel title={t.branches} action={<Button variant="secondary" size="sm" iconStart="plus">{t.addBranch}</Button>}>
        {window.PARTNER_BRANCHES.map(b=>(
          <ListRow key={b.en} icon="store" label={ar?b.ar:b.en}
            value={<Badge tone={b.live?"fresh":"neutral"}>{b.live?t.active:t.closedTonight}</Badge>}/>))}
      </Panel>
      <div style={{display:"grid",gap:12}}>
        <Panel title={t.staff}>
          {window.PARTNER_STAFF.map(s=>(<ListRow key={s.en} icon="user" label={ar?s.ar:s.en} value={ar?s.role.ar:s.role.en}/>))}
        </Panel>
        <Panel title={t.notif}>
          <ListRow icon="bell" label={t.notifNew} sub={t.notifNewSub} value={<Switch checked={notifNew} onChange={setNotifNew}/>}/>
          <ListRow icon="clock" label={t.notifClose} sub={t.notifCloseSub} value={<Switch checked={notifClose} onChange={setNotifClose}/>}/>
        </Panel>
        <Panel title={t.language} pad>
          <SegmentedControl value={lang} onChange={setLang} options={[{value:"en",label:"English"},{value:"ar",label:"العربية"}]}/>
        </Panel>
      </div></div>
  </React.Fragment>);
}

Object.assign(window, { PartnerTonight:Tonight, PartnerListBundle:ListBundle, PartnerBundles:Bundles,
  PartnerPayouts:Payouts, PartnerLedger:Ledger, PartnerReviews:Reviews, PartnerImpact:Impact, PartnerBranches:Branches });
})();
