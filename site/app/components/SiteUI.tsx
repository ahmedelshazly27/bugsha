"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export function BrandMark({ inverse = false }: { inverse?: boolean }) {
  return <span className={`brand-mark ${inverse ? "inverse" : ""}`} aria-hidden="true"><i /><i /></span>;
}

export function Arrow() {
  return <span className="arrow" aria-hidden="true">↗</span>;
}

/**
 * The Bugsha mark: a square of cloth with its top corner turned down.
 *
 * This is the design system's Kerchief, which supersedes the CSS-drawn rotated
 * square in `BrandMark` above. The fold is a lighter plane, never a cut-out, so
 * on a white mark over the violet panel it takes the panel colour.
 */
export function Kerchief({ size = 26, color = "#FFFFFF", fold = "#5B21B6" }:
  { size?: number; color?: string; fold?: string }) {
  return (
    <svg className="kerchief" width={size} height={size} viewBox="0 0 48 48" aria-hidden="true">
      <path fill={color} d="M24 2.5 45.5 24 24 45.5 2.5 24 24 2.5Z" />
      <path fill={fold} d="M12.5 14h23L24 25.5 12.5 14Z" />
    </svg>
  );
}

export function CookieReveal() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const render = () => {
      frameId = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = reduced ? 1 : Math.max(0, Math.min(1, -rect.top / travel));
      const mobile = window.innerWidth <= 560;
      section.style.setProperty("--cookie-roll-x", `${(mobile ? 7 + progress * 86 : 6 + progress * 88).toFixed(3)}%`);
      section.style.setProperty("--cookie-roll-rotation", `${(progress * 1080).toFixed(2)}deg`);
      section.style.setProperty("--cookie-mask-right", `${((1 - progress) * 100).toFixed(3)}%`);
      section.style.setProperty("--cookie-line-progress", progress.toFixed(4));
    };

    const schedule = () => {
      if (!frameId) frameId = requestAnimationFrame(render);
    };

    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    window.visualViewport?.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      window.visualViewport?.removeEventListener("resize", schedule);
    };
  }, []);

  return (
    <section className="cookie-reveal" ref={sectionRef} aria-label="Good food deserves another chance">
      <div className="cookie-reveal-pin">
        <span className="cookie-reveal-kicker">ONE SMALL CHOICE · ONE BETTER ENDING</span>
        <h2 className="cookie-message" aria-label="Good food deserves another chance.">
          <span className="cookie-message-ghost" aria-hidden="true">Good food deserves another chance.</span>
          <span className="cookie-message-fill" aria-hidden="true">Good food deserves another chance.</span>
        </h2>
        <div className="cookie-roll" aria-hidden="true">
          <span />
          <img src="/assets/bugsha-real-cookie.webp" alt="" loading="lazy" decoding="async" />
        </div>
        <div className="cookie-reveal-foot"><i /><span>Made today · picked up tonight</span></div>
      </div>
    </section>
  );
}

export function Phone({ src, className = "", alt = "Bugsha app screen", priority = false }: { src: string; className?: string; alt?: string; priority?: boolean }) {
  return (
    <div className={`iphone ${className}`}>
      <i className="iphone-button action" /><i className="iphone-button volume-up" /><i className="iphone-button volume-down" /><i className="iphone-button power" />
      <div className="iphone-rail"><div className="iphone-bezel"><div className="iphone-screen">
        <div className="status-bar" aria-hidden="true"><span>9:41</span><span className="island"><i /></span><span className="status-icons"><b /><b /><b /></span></div>
        <img src={`/assets/${src}`} alt={alt} loading={priority ? "eager" : "lazy"} decoding="async" />
      </div><span className="screen-glass" aria-hidden="true" /></div></div>
    </div>
  );
}

export function ScreenPhone({ screens, active = 0, className = "" }: { screens: Array<{ src: string; alt: string }>; active?: number; className?: string }) {
  return (
    <div className={`iphone ${className}`}>
      <i className="iphone-button action" /><i className="iphone-button volume-up" /><i className="iphone-button volume-down" /><i className="iphone-button power" />
      <div className="iphone-rail"><div className="iphone-bezel"><div className="iphone-screen">
        <div className="status-bar" aria-hidden="true"><span>9:41</span><span className="island"><i /></span><span className="status-icons"><b /><b /><b /></span></div>
        <div className="screen-stack">{screens.map((screen, index) => <img key={screen.src} className={active === index ? "active" : ""} src={`/assets/${screen.src}`} alt={screen.alt} loading={index ? "lazy" : "eager"} decoding="async" />)}</div>
      </div><span className="screen-glass" aria-hidden="true" /></div></div>
    </div>
  );
}

const navigation = [
  ["/how-it-works", "How it works"],
  ["/partners", "For businesses"],
  ["/impact", "Our impact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    let frameId = 0;
    const update = () => {
      frameId = 0;
      const next = window.scrollY > 24;
      setScrolled((current) => current === next ? current : next);
    };
    const schedule = () => {
      if (!frameId) frameId = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", schedule);
    };
  }, []);
  useEffect(() => {
    if (!open) return;
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [open]);
  return (
    <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
      <Link className="brand" href="/" aria-label="Bugsha home" onClick={() => setOpen(false)}><BrandMark /><strong>Bugsha</strong></Link>
      <nav id="main-navigation" className={open ? "open" : ""} aria-label="Main navigation">
        {navigation.map(([href, label]) => <Link href={href} key={href} onClick={() => setOpen(false)}>{label}</Link>)}
        <Link href="/#faq" onClick={() => setOpen(false)}>FAQ</Link>
      </nav>
      <div className="nav-actions">
        <Link className="button button-dark nav-cta" href="/#waitlist">Join the waitlist <Arrow /></Link>
        <button className="menu-button" aria-label={open ? "Close navigation" : "Open navigation"} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}><i /><i /></button>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <Link className="brand" href="/"><BrandMark inverse /><strong>Bugsha</strong></Link>
        <p>Good food belongs on a table, not in a bin. Built in Kuwait for tonight’s surplus.</p>
        <a className="footer-email" href="mailto:hello@bugsha.com">hello@bugsha.com <Arrow /></a>
      </div>
      <div className="footer-links">
        <div><small>Explore</small><Link href="/how-it-works">How it works</Link><Link href="/impact">Our impact</Link><Link href="/#faq">FAQ</Link></div>
        <div><small>Business</small><Link href="/partners">For businesses</Link><a href="mailto:partners@bugsha.com">Become a partner</a><a href="mailto:hello@bugsha.com">Support</a></div>
      </div>
      <div className="footer-bottom"><span>© 2026 Bugsha</span><span>Privacy · Terms · Food safety</span><span>Kuwait</span></div>
    </footer>
  );
}

export function MotionProvider() {
  useEffect(() => {
    const root = document.documentElement;
    const nodes = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const media = Array.from(document.querySelectorAll<HTMLElement>("[data-scroll-media]")).map((frame) => ({
      frame,
      image: frame.querySelector<HTMLElement>("img"),
      range: Number(frame.dataset.scrollMedia || 30),
    })).filter((item): item is { frame: HTMLElement; image: HTMLElement; range: number } => Boolean(item.image));
    root.classList.add("motion-ready");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      nodes.forEach((node) => node.classList.add("is-visible"));
      return () => {
        nodes.forEach((node) => node.classList.remove("is-visible", "reveal-pending"));
        root.classList.remove("motion-ready");
      };
    }
    const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      (entry.target as HTMLElement).classList.add("is-visible");
      observer.unobserve(entry.target);
    }), { threshold: .12, rootMargin: "0px 0px -7% 0px" });
    nodes.forEach((node) => {
      if (node.getBoundingClientRect().top > window.innerHeight * .88) node.classList.add("reveal-pending");
      else node.classList.add("is-visible");
      observer.observe(node);
    });
    let frameId = 0;
    const renderMedia = () => {
      frameId = 0;
      const viewportHeight = window.innerHeight;
      const mobileScale = window.innerWidth <= 820 ? .55 : 1;
      media.forEach((item) => {
        const rect = item.frame.getBoundingClientRect();
        if (rect.bottom < -viewportHeight * .25 || rect.top > viewportHeight * 1.25) return;
        const progress = Math.max(0, Math.min(1, (viewportHeight - rect.top) / (viewportHeight + rect.height)));
        const y = (.5 - progress) * item.range * mobileScale;
        item.image.style.transform = `translate3d(0,${y.toFixed(2)}px,0) scale(1.065)`;
      });
    };
    const scheduleMedia = () => {
      if (!frameId) frameId = requestAnimationFrame(renderMedia);
    };
    renderMedia();
    window.addEventListener("scroll", scheduleMedia, { passive: true });
    window.addEventListener("resize", scheduleMedia, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      observer.disconnect();
      window.removeEventListener("scroll", scheduleMedia);
      window.removeEventListener("resize", scheduleMedia);
      nodes.forEach((node) => node.classList.remove("is-visible", "reveal-pending"));
      root.classList.remove("motion-ready");
    };
  }, []);
  return null;
}

type SignupResult = { ok: boolean; alreadyOnList?: boolean; position?: number | null; error?: string };

const WAITLIST_ENDPOINT = process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "";

/**
 * Pre-launch waitlist panel.
 *
 * Bugsha has not opened anywhere yet, so this replaces the app-store download
 * panel that used to sit here: the stores are marked "soon" and the conversion
 * is the waitlist. Posts to the `waitlist-signup` Supabase edge function, which
 * stores the signup and sends the confirmation email.
 */
export function DownloadSection() {
  const [email, setEmail] = useState("");
  const [area, setArea] = useState("");
  const [company, setCompany] = useState("");   // honeypot — humans leave it empty
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<SignupResult | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = email.trim();
    if (!address || status === "sending") return;

    setStatus("sending");
    setError("");

    try {
      if (!WAITLIST_ENDPOINT) throw new Error("NEXT_PUBLIC_WAITLIST_ENDPOINT is not set");
      const res = await fetch(WAITLIST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: address,
          area: area || undefined,
          company: company || undefined,
          source: "site-waitlist",
          locale: document.documentElement.lang || undefined,
        }),
      });
      const payload: SignupResult = await res.json().catch(() => ({ ok: res.ok }));

      if (payload?.ok) {
        setResult(payload);
        setStatus("done");
      } else {
        setStatus("error");
        setError(payload?.error || "Something went wrong. Please try again.");
      }
    } catch {
      setStatus("error");
      setError("Network hiccup — please try again.");
    }
  }

  return (
    <section className="download-section" id="waitlist">
      <div className="download-panel">
        <div className="download-copy" data-reveal>
          <span className="eyebrow light">LAUNCHING IN KUWAIT &amp; EGYPT</span>
          <h2>Be first in line.</h2>
          <p>We are opening in Kuwait and Egypt. Join the waitlist and we will tell you the moment kitchens near you start listing—early access, before the app opens publicly.</p>
          {status === "done" ? (
            <div className="waitlist-done" role="status">
              <Kerchief />
              <div>
                <strong>{result?.alreadyOnList ? "You are already on the list." : "You are on the list."}</strong>
                <span>
                  {result?.position
                    ? `You are #${result.position} in line. We will email you before your city goes live.`
                    : "We will email you before your city goes live."}
                </span>
              </div>
            </div>
          ) : (
            <form className="waitlist-form" onSubmit={submit} noValidate>
              <label>
                <span>Email</span>
                <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com" autoComplete="email" />
              </label>
              <label>
                <span>Where</span>
                <select value={area} onChange={(e) => setArea(e.target.value)}>
                  <option value="">Choose country</option>
                  <option>Kuwait</option>
                  <option>Egypt</option>
                </select>
              </label>
              <input type="text" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true"
                value={company} onChange={(e) => setCompany(e.target.value)} className="waitlist-hp" />
              <button className="button button-light" type="submit" disabled={status === "sending"}>
                {status === "sending" ? "Joining…" : <>Join the waitlist <Arrow /></>}
              </button>
              {error && <p role="alert" className="waitlist-error">{error}</p>}
            </form>
          )}
          <div className="store-row">
            <span className="store-badge is-soon"><small>SOON ON THE</small><strong>App Store</strong></span>
            <span className="store-badge is-soon"><small>SOON ON</small><strong>Google Play</strong></span>
          </div>
        </div>
        <div className="download-visual" data-reveal="scale"><Phone src="browse-en.png" /></div>
      </div>
    </section>
  );
}
