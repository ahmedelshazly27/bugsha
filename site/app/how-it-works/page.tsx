import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, DownloadSection, MotionProvider, Phone, SiteFooter, SiteHeader } from "../components/SiteUI";

export const metadata: Metadata = {
  title: "How Bugsha works — Discover, reserve, collect",
  description: "See how to find tonight’s surplus food nearby, reserve a surprise bundle and collect it from a local kitchen.",
};

const steps = [
  { n: "01", title: "Discover tonight’s Bugshas", body: "Open the app and browse live bundles nearby. Every listing shows the food category, pickup window, distance, original value and current price.", screen: "browse-en.png" },
  { n: "02", title: "Reserve before it goes", body: "Choose a Bugsha, check dietary information and pay securely with KNET, Apple Pay or card. The exact contents remain a surprise.", screen: "detail-en.png" },
  { n: "03", title: "Collect inside the window", body: "Head to the kitchen during its pickup time and show the four-digit collection code. The team hands over your Bugsha and confirms collection.", screen: "code-en.png" },
] as const;

export default function HowItWorksPage() {
  return <>
    <SiteHeader /><MotionProvider />
    <main className="interior-page">
      <section className="interior-hero process-hero">
        <div data-reveal><span className="eyebrow">FOR CUSTOMERS</span><h1>Good food, found before it goes.</h1><p>Choose the place, category, price and pickup time. The exact mix stays a surprise until collection.</p><a className="button button-primary" href="#download">Get the app <Arrow /></a></div>
        <figure className="process-hero-image" data-reveal="scale" data-scroll-media="34"><img src="/assets/bugsha-pickup-scene.webp" alt="A Bugsha customer collecting an order at a neighborhood café" loading="eager" decoding="async" /><figcaption><span>FROM OPEN TO RESERVED</span><strong>Usually under three minutes.</strong><small>Then collect inside the kitchen’s pickup window.</small></figcaption></figure>
      </section>

      <section className="process-detail">
        <div className="section-intro" data-reveal><span className="eyebrow">HOW IT WORKS</span><h2>Three clear steps. Nothing hidden but the surprise.</h2></div>
        <div className="process-detail-grid">{steps.map((step) => <article key={step.n} data-reveal><div className="process-phone"><Phone src={step.screen} alt={`${step.title} in the Bugsha app`} /></div><div><span>{step.n} / 03</span><h3>{step.title}</h3><p>{step.body}</p></div></article>)}</div>
      </section>

      <section className="what-you-know">
        <div className="section-intro" data-reveal><span className="eyebrow light">BEFORE YOU PAY</span><h2>A surprise should still feel informed.</h2></div>
        <div className="knowledge-grid">
          <article data-reveal><span>01</span><h3>Pickup time</h3><p>A fixed window so you know exactly when to arrive.</p></article>
          <article data-reveal><span>02</span><h3>Food category</h3><p>Bakery, café, meals, sweets or co-op before you choose.</p></article>
          <article data-reveal><span>03</span><h3>Dietary notes</h3><p>Relevant tags and allergen guidance supplied by the kitchen.</p></article>
          <article data-reveal><span>04</span><h3>Real value</h3><p>The price you pay and the typical original value, side by side.</p></article>
        </div>
      </section>

      <section className="page-next" data-reveal><span>Are you a bakery, café or co-op?</span><h2>Turn tonight’s surplus into tomorrow’s regulars.</h2><Link className="button button-dark" href="/partners">See Bugsha for businesses <Arrow /></Link></section>
      <DownloadSection />
    </main>
    <SiteFooter />
  </>;
}
