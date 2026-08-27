import type { Metadata } from "next";
import { Arrow, MotionProvider, SiteFooter, SiteHeader } from "../components/SiteUI";

export const metadata: Metadata = {
  title: "Bugsha for businesses — Sell tonight’s surplus",
  description: "List surplus food in minutes, reach nearby customers and keep full control of price, quantity and pickup.",
};

const benefits = [
  ["List in under a minute", "Reuse a saved bundle, set quantity and pickup time, then publish."],
  ["Paid before arrival", "Customers reserve in the app, so the counter only handles collection."],
  ["Keep complete control", "You choose price, quantity, contents and when each listing closes."],
] as const;

export default function PartnersPage() {
  return <>
    <SiteHeader /><MotionProvider />
    <main className="interior-page">
      <section className="partner-hero-page">
        <figure data-reveal="scale" data-scroll-media="38"><img src="/assets/bugsha-partner-bakery.webp" alt="A local baker handing a freshly packed order to a customer" loading="eager" decoding="async" /><figcaption>Prepared today · discovered tonight</figcaption></figure>
        <div data-reveal><span className="eyebrow">BUGSHA FOR BUSINESSES</span><h1>Sell more of what you already made.</h1><p>List tonight’s surplus without changing your kitchen workflow. Bugsha handles discovery, payment and the collection record.</p><a className="button button-primary" href="mailto:partners@bugsha.com">Become a partner <Arrow /></a></div>
      </section>

      <section className="partner-benefits"><div className="section-intro" data-reveal><span className="eyebrow">SIMPLE BY DESIGN</span><h2>A new sales channel, not a new operation.</h2></div><div className="benefit-row">{benefits.map(([title, body], index) => <article key={title} data-reveal><span>0{index + 1}</span><h3>{title}</h3><p>{body}</p></article>)}</div></section>

      <section className="portal-section">
        <div className="portal-copy" data-reveal><span className="eyebrow light">THE PARTNER PORTAL</span><h2>Everything your team needs. Nothing in the way.</h2><p>Publish a Bugsha, see exactly what customers see, follow collections and keep an exportable inspection record for every order.</p><ul><li>Saved bundle templates</li><li>Live quantity control</li><li>Weekly payout view</li><li>Branch-level inspection logs</li></ul></div>
        <div className="portal-window" data-reveal="scale"><div className="browser-bar"><i /><i /><i /><span>partner.bugsha.com</span></div><img src="/assets/partner-list-en.png" alt="Bugsha partner portal listing screen" /><div className="portal-detail"><img src="/assets/partner-ledger-en.png" alt="Bugsha inspection log" /></div></div>
      </section>

      <section className="partner-model">
        <div className="section-intro" data-reveal><span className="eyebrow">THE MODEL</span><h2>You pay only when a Bugsha sells.</h2><p>No listing fee, no monthly subscription and no minimum volume.</p></div>
        <div className="model-grid"><article data-reveal><strong>60 sec</strong><span>to publish a saved bundle</span></article><article data-reveal><strong>Weekly</strong><span>clear consolidated payouts</span></article><article data-reveal><strong>0 KD</strong><span>listing or subscription fees</span></article></div>
      </section>

      <section className="business-cta" data-reveal><span className="eyebrow light">READY WHEN YOU ARE</span><h2>Give tonight’s food one more customer.</h2><p>Tell us about your kitchen and we will help set up the first listing.</p><a className="button button-light" href="mailto:partners@bugsha.com">partners@bugsha.com <Arrow /></a></section>
    </main>
    <SiteFooter />
  </>;
}
