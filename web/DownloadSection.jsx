/**
 * Drop-in replacement for the `DownloadSection` function in the marketing site
 * (`ui_kits/marketing/site-ui.jsx`, the waitlist panel behind `#waitlist`).
 *
 * The shipped version is a stub — `submit` just flips local state and the email
 * is thrown away:
 *
 *     const submit = event => { event.preventDefault(); if(email.trim()) setDone(true); };
 *
 * This version posts to the waitlist-signup edge function and keeps every bit
 * of the existing markup, class names and copy, so `site.css` needs no change.
 * It relies on the same locals the original does (useState, A, Arrow,
 * BrandMark, Phone), so paste it over the original function in place.
 *
 * Set the endpoint once, anywhere before the bundle runs:
 *   <script>window.BUGSHA_WAITLIST_ENDPOINT = 'https://<ref>.supabase.co/functions/v1/waitlist-signup';</script>
 */
function DownloadSection(){
  const [email,setEmail] = useState("");
  const [area,setArea] = useState("");
  const [company,setCompany] = useState("");     // honeypot — humans leave it empty
  const [done,setDone] = useState(false);
  const [result,setResult] = useState(null);
  const [busy,setBusy] = useState(false);
  const [error,setError] = useState("");

  const submit = async event => {
    event.preventDefault();
    const address = email.trim();
    if(!address || busy) return;

    setBusy(true);
    setError("");
    try{
      const endpoint = window.BUGSHA_WAITLIST_ENDPOINT;
      if(!endpoint) throw new Error("no endpoint configured");
      const res = await fetch(endpoint,{
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body:JSON.stringify({
          email:address,
          area:area || undefined,
          company:company || undefined,
          source:"site-waitlist",
          locale:document.documentElement.lang || undefined
        })
      });
      const payload = await res.json().catch(()=>({ ok:res.ok }));
      if(payload && payload.ok){ setResult(payload); setDone(true); }
      else setError((payload && payload.error) || "Something went wrong. Please try again.");
    }catch{
      setError("Network hiccup — please try again.");
    }finally{
      setBusy(false);
    }
  };

  return (
    <section className="download-section" id="waitlist">
      <div className="download-panel">
        <div className="download-copy" data-reveal>
          <span className="eyebrow light">LAUNCHING IN KUWAIT &amp; EGYPT</span>
          <h2>Be first in line.</h2>
          <p>We are opening in Kuwait and Egypt. Join the waitlist and we will tell you the moment kitchens near you start listing—early access, before the app opens publicly.</p>
          {done ? (
            <div className="waitlist-done" role="status">
              <BrandMark />
              <div><strong>{result && result.alreadyOnList ? "You are already on the list." : "You are on the list."}</strong>
                <span>{result && result.position
                  ? `You are #${result.position} in line. We will email you before your city goes live.`
                  : "We will email you before your city goes live."}</span></div>
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={submit} noValidate>
              <label>
                <span>Email</span>
                <input type="email" required value={email} onChange={e=>setEmail(e.target.value)}
                  placeholder="you@example.com" autoComplete="email" /></label>
              <label>
                <span>Where</span>
                <select value={area} onChange={e=>setArea(e.target.value)}>
                  <option value="">Choose country</option>
                  <option>Kuwait</option><option>Egypt</option>
                </select></label>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={company} onChange={e=>setCompany(e.target.value)}
                style={{position:"absolute",left:"-9999px",width:1,height:1,opacity:0}} />
              <button className="button button-light" type="submit" disabled={busy}>
                {busy ? "Joining…" : <>Join the waitlist <Arrow /></>}</button>
              {error && <p role="alert" className="waitlist-error"
                style={{gridColumn:"1 / -1",margin:"2px 0 0",fontSize:13.5,color:"#DDD6FE"}}>{error}</p>}
            </form>)}
          <div className="store-row">
            <span className="store-badge is-soon"><small>SOON ON THE</small><strong>App Store</strong></span>
            <span className="store-badge is-soon"><small>SOON ON</small><strong>Google Play</strong></span></div>
        </div>
        <div className="download-visual" data-reveal="scale"><Phone src="browse-en.png" /></div>
      </div>
    </section>);
}
