// Bugsha marketing site — shared chrome, ported from the website repo (app/components/SiteUI.tsx).
// Class names and markup are verbatim; Next's <Link> is replaced by a hash router.
(function(){
const {useState,useEffect,useRef} = React;
// window.__resources is populated by the standalone/partner bundler (inlined data URLs);
// fall back to the project path so the page also works served from disk.
const ASSET = f => (window.__resources && window.__resources[f]) || "../../assets/site/" + f;

/* ---------------- hash router ---------------- */
const routeOf = () => { const h = location.hash.replace(/^#/,""); return h.startsWith("/") ? h : "/"; };
function scrollToId(id){
  const el = document.getElementById(id);
  if (el) window.scrollTo({top: el.getBoundingClientRect().top + window.scrollY - 96, behavior:"smooth"});
}
function go(path){
  const [p,id] = String(path).split("#");
  const route = !p || p === "/" ? "/" : p;
  if (route !== routeOf()) { location.hash = "#" + route; window.scrollTo(0,0); }
  if (id) setTimeout(()=>scrollToId(id), 80);
}
function useRoute(){
  const [r,setR] = useState(routeOf());
  useEffect(()=>{
    const on = () => setR(routeOf());
    window.addEventListener("hashchange", on);
    return ()=>window.removeEventListener("hashchange", on);
  },[]);
  return r;
}
function A({href,children,className,onClick,...rest}){
  const handle = e => {
    if (onClick) onClick(e);
    if (String(href).startsWith("mailto:")) return;
    e.preventDefault(); go(href);
  };
  return <a className={className} href={href} onClick={handle} {...rest}>{children}</a>;
}

/* ---------------- primitives ---------------- */
// The Kerchief: a square of cloth with one corner turned back. Same geometry as assets/mark.svg —
// the fold is a lighter plane, never a cut-out, so the mark never shows a hole at small sizes.
function BrandMark({inverse=false}){
  return (
    <span className={`brand-mark ${inverse?"inverse":""}`} aria-hidden="true">
      <svg viewBox="0 0 48 48">
        <path fill="currentColor" d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z"></path>
        <path fill="var(--mark-fold,#fff)" fillOpacity="var(--mark-fold-o,.42)" d="M12.5 14h23L24 25.5 12.5 14Z"></path>
      </svg></span>);
}
function Arrow(){ return <span className="arrow" aria-hidden="true">↗</span>; }

const StatusBar = () => (
  <div className="status-bar" aria-hidden="true">
    <span>9:41</span><span className="island"><i /></span>
    <span className="status-icons"><b /><b /><b /></span></div>);

function Phone({src,className="",alt="Bugsha app screen",priority=false}){
  return (
    <div className={`iphone ${className}`}>
      <i className="iphone-button action" /><i className="iphone-button volume-up" /><i className="iphone-button volume-down" /><i className="iphone-button power" />
      <div className="iphone-rail"><div className="iphone-bezel"><div className="iphone-screen">
        <StatusBar />
        <img src={ASSET(src)} alt={alt} loading={priority?"eager":"lazy"} decoding="async" />
      </div><span className="screen-glass" aria-hidden="true" /></div></div>
    </div>);
}

function ScreenPhone({screens,active=0,className=""}){
  return (
    <div className={`iphone ${className}`}>
      <i className="iphone-button action" /><i className="iphone-button volume-up" /><i className="iphone-button volume-down" /><i className="iphone-button power" />
      <div className="iphone-rail"><div className="iphone-bezel"><div className="iphone-screen">
        <StatusBar />
        <div className="screen-stack">{screens.map((s,i)=>(
          <img key={s.src} className={active===i?"active":""} src={ASSET(s.src)} alt={s.alt} loading={i?"lazy":"eager"} decoding="async" />))}</div>
      </div><span className="screen-glass" aria-hidden="true" /></div></div>
    </div>);
}

/* ---------------- cookie reveal ---------------- */
function CookieReveal(){
  const sectionRef = useRef(null);
  useEffect(()=>{
    const section = sectionRef.current; if(!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    const render = () => {
      frameId = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = reduced ? 1 : Math.max(0, Math.min(1, -rect.top / travel));
      const mobile = window.innerWidth <= 560;
      section.style.setProperty("--cookie-roll-x", `${(mobile ? 7 + progress*86 : 6 + progress*88).toFixed(3)}%`);
      section.style.setProperty("--cookie-roll-rotation", `${(progress*1080).toFixed(2)}deg`);
      section.style.setProperty("--cookie-mask-right", `${((1-progress)*100).toFixed(3)}%`);
      section.style.setProperty("--cookie-line-progress", progress.toFixed(4));
    };
    const schedule = () => { if(!frameId) frameId = requestAnimationFrame(render); };
    render();
    window.addEventListener("scroll", schedule, {passive:true});
    window.addEventListener("resize", schedule, {passive:true});
    return ()=>{ cancelAnimationFrame(frameId); window.removeEventListener("scroll", schedule); window.removeEventListener("resize", schedule); };
  },[]);
  return (
    <section className="cookie-reveal" ref={sectionRef} aria-label="Good food deserves another chance">
      <div className="cookie-reveal-pin">
        <span className="cookie-reveal-kicker">ONE SMALL CHOICE · ONE BETTER ENDING</span>
        <h2 className="cookie-message" aria-label="Good food deserves another chance.">
          <span className="cookie-message-ghost" aria-hidden="true">Good food deserves another chance.</span>
          <span className="cookie-message-fill" aria-hidden="true">Good food deserves another chance.</span></h2>
        <div className="cookie-roll" aria-hidden="true"><span /><img src={ASSET("bugsha-real-cookie.webp")} alt="" loading="lazy" decoding="async" /></div>
        <div className="cookie-reveal-foot"><i /><span>Made today · picked up tonight</span></div>
      </div>
    </section>);
}

/* ---------------- header / footer ---------------- */
const navigation = [["/how-it-works","How it works"],["/partners","For businesses"],["/impact","Our impact"]];

function SiteHeader(){
  const [open,setOpen] = useState(false);
  const [scrolled,setScrolled] = useState(false);
  useEffect(()=>{
    let frameId = 0;
    const update = () => { frameId = 0; const next = window.scrollY > 24; setScrolled(c=>c===next?c:next); };
    const schedule = () => { if(!frameId) frameId = requestAnimationFrame(update); };
    update(); window.addEventListener("scroll", schedule, {passive:true});
    return ()=>{ cancelAnimationFrame(frameId); window.removeEventListener("scroll", schedule); };
  },[]);
  useEffect(()=>{
    if(!open) return;
    const esc = e => { if(e.key==="Escape") setOpen(false); };
    window.addEventListener("keydown", esc);
    return ()=>window.removeEventListener("keydown", esc);
  },[open]);
  return (
    <header className={`site-header ${scrolled?"scrolled":""}`}>
      <A className="brand" href="/" aria-label="Bugsha home" onClick={()=>setOpen(false)}><BrandMark /><strong>Bugsha</strong></A>
      <nav id="main-navigation" className={open?"open":""} aria-label="Main navigation">
        {navigation.map(([href,label])=>(<A href={href} key={href} onClick={()=>setOpen(false)}>{label}</A>))}
        <A href="/#faq" onClick={()=>setOpen(false)}>FAQ</A>
      </nav>
      <div className="nav-actions">
        <A className="button button-dark nav-cta" href="/#waitlist">Join the waitlist <Arrow /></A>
        <button className="menu-button" aria-label={open?"Close navigation":"Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={()=>setOpen(!open)}><i /><i /></button>
      </div>
    </header>);
}

function SiteFooter(){
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <A className="brand" href="/"><BrandMark inverse /><strong>Bugsha</strong></A>
        <p>Good food belongs on a table, not in a bin. Built for tonight’s surplus.</p>
        <a className="footer-email" href="mailto:hello@bugsha.com">hello@bugsha.com <Arrow /></a>
      </div>
      <div className="footer-links">
        <div><small>Explore</small><A href="/how-it-works">How it works</A><A href="/impact">Our impact</A><A href="/#faq">FAQ</A></div>
        <div><small>Business</small><A href="/partners">For businesses</A><a href="mailto:partners@bugsha.com">Become a partner</a><a href="mailto:hello@bugsha.com">Support</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Bugsha</span><span>Privacy · Terms · Food safety</span><span>Kuwait · Egypt</span></div>
    </footer>);
}

/* ---------------- reveal + media parallax ---------------- */
function MotionProvider(){
  useEffect(()=>{
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll("[data-reveal]"));
    const media = Array.from(document.querySelectorAll("[data-scroll-media]"))
      .map(frame=>({frame, image: frame.querySelector("img"), range: Number(frame.dataset.scrollMedia || 30)}))
      .filter(i=>Boolean(i.image));
    root.classList.add("motion-ready");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches){
      nodes.forEach(n=>n.classList.add("is-visible"));
      return ()=>{ nodes.forEach(n=>n.classList.remove("is-visible","reveal-pending")); root.classList.remove("motion-ready"); };
    }
    const observer = new IntersectionObserver(entries=>entries.forEach(entry=>{
      if(!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    }), {threshold:.12, rootMargin:"0px 0px -7% 0px"});
    nodes.forEach(node=>{
      if (node.getBoundingClientRect().top > window.innerHeight*.88) node.classList.add("reveal-pending");
      else node.classList.add("is-visible");
      observer.observe(node);
    });
    let frameId = 0;
    const renderMedia = () => {
      frameId = 0;
      const vh = window.innerHeight;
      const mobileScale = window.innerWidth <= 820 ? .55 : 1;
      media.forEach(item=>{
        const rect = item.frame.getBoundingClientRect();
        if (rect.bottom < -vh*.25 || rect.top > vh*1.25) return;
        const progress = Math.max(0, Math.min(1, (vh - rect.top)/(vh + rect.height)));
        const y = (.5 - progress) * item.range * mobileScale;
        item.image.style.transform = `translate3d(0,${y.toFixed(2)}px,0) scale(1.065)`;
      });
    };
    const scheduleMedia = () => { if(!frameId) frameId = requestAnimationFrame(renderMedia); };
    renderMedia();
    window.addEventListener("scroll", scheduleMedia, {passive:true});
    window.addEventListener("resize", scheduleMedia, {passive:true});
    return ()=>{
      cancelAnimationFrame(frameId); observer.disconnect();
      window.removeEventListener("scroll", scheduleMedia);
      window.removeEventListener("resize", scheduleMedia);
      nodes.forEach(n=>n.classList.remove("is-visible","reveal-pending"));
      root.classList.remove("motion-ready");
    };
  },[]);
  return null;
}

/* ---------------- waitlist panel (pre-launch consumer conversion) ---------------- */
function DownloadSection(){
  const [email,setEmail] = useState("");
  const [area,setArea] = useState("");
  const [done,setDone] = useState(false);
  const submit = event => { event.preventDefault(); if(email.trim()) setDone(true); };
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
              <div><strong>You are on the list.</strong>
                <span>We will email you before your city goes live.</span></div>
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={submit}>
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
              <button className="button button-light" type="submit">Join the waitlist <Arrow /></button>
            </form>)}
          <div className="store-row">
            <span className="store-badge is-soon"><small>SOON ON THE</small><strong>App Store</strong></span>
            <span className="store-badge is-soon"><small>SOON ON</small><strong>Google Play</strong></span></div>
        </div>
        <div className="download-visual" data-reveal="scale"><Phone src="browse-en.png" /></div>
      </div>
    </section>);
}

Object.assign(window,{ SITE_ASSET:ASSET, siteGo:go, useSiteRoute:useRoute, SiteLink:A,
  BrandMark, Arrow, Phone, ScreenPhone, CookieReveal, SiteHeader, SiteFooter, MotionProvider, DownloadSection });
})();
