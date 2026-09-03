import type { Metadata } from "next";
import Link from "next/link";
import { Arrow, DownloadSection, MotionProvider, SiteFooter, SiteHeader } from "../components/SiteUI";

export const metadata: Metadata = {
  title: "Bugsha’s impact — Better value, less food waste",
  description: "See how each Bugsha pickup supports local kitchens, saves customers money and keeps good food in use.",
};

export default function ImpactPage() {
  return <>
    <SiteHeader /><MotionProvider />
    <main className="interior-page">
      <section className="impact-hero-page">
        <div data-reveal><span className="eyebrow light">WHAT WE ARE BUILDING</span><h1>Good food, twice over.</h1><p>A better-value dinner for someone nearby and a little less waste in Kuwait and Egypt—without asking either side to compromise. This is our first launch, so nothing on this page is a claim about the past.</p></div>
        <div className="impact-hero-number" data-reveal="scale"><strong>~2</strong><span>meals rescued in every Bugsha</span><img src="/assets/bag-item-croissant.webp" alt="" /><img src="/assets/bag-item-flatbread.webp" alt="" /></div>
      </section>

      <section className="impact-ledger"><div className="section-intro" data-reveal><span className="eyebrow">MEASURED, NOT VAGUE</span><h2>One pickup at a time.</h2><p>Every figure below is per-Bugsha arithmetic, not a total. From launch night we publish the running totals here, drawn from real collections rather than estimates.</p></div><div className="impact-ledger-grid"><article data-reveal><strong>~0.5 kg</strong><span>good food kept in the chain, per Bugsha</span></article><article data-reveal><strong>~1.3 kg</strong><span>estimated CO₂e avoided, per Bugsha</span></article><article data-reveal><strong>~65%</strong><span>below the counter price</span></article><article data-reveal><strong>2 markets</strong><span>Kuwait and Egypt at launch</span></article></div></section>

      <section className="impact-stories">
        <figure className="story-bakery" data-reveal="scale" data-scroll-media="44"><img src="/assets/bugsha-impact-kitchen.webp" alt="A bakery team packing fresh food for collection at closing time" loading="lazy" decoding="async" /><figcaption><span>01</span>It begins with a kitchen that made more than today needed.</figcaption></figure>
        <figure className="story-community" data-reveal="scale" data-scroll-media="36"><img src="/assets/bugsha-community-story.webp" alt="A customer using her phone outside a café" /><figcaption><span>02</span>It finds someone close enough to enjoy it tonight.</figcaption></figure>
      </section>

      <section className="impact-principles"><div className="section-intro" data-reveal><span className="eyebrow">OUR APPROACH</span><h2>Make the better choice the easier one.</h2></div><div><article data-reveal><span>01</span><h3>Value first</h3><p>People return because the food and price are genuinely good—not because they were made to feel guilty.</p></article><article data-reveal><span>02</span><h3>Local by default</h3><p>Nearby pickup keeps the system simple and introduces customers to kitchens in their own neighbourhood.</p></article><article data-reveal><span>03</span><h3>Clear records</h3><p>Every listing and collection carries a time, branch and staff attestation that partners can export.</p></article></div></section>

      <section className="page-next" data-reveal><span>Bring Bugsha to your kitchen</span><h2>Your surplus can become someone’s best find on our first night.</h2><Link className="button button-dark" href="/partners">Become a founding partner <Arrow /></Link></section>
      <DownloadSection />
    </main>
    <SiteFooter />
  </>;
}
