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
        <div data-reveal><span className="eyebrow light">OUR IMPACT</span><h1>Good food, twice over.</h1><p>A better-value dinner for someone nearby and a little less waste for Kuwait—without asking either side to compromise.</p></div>
        <div className="impact-hero-number" data-reveal="scale"><strong>1,284</strong><span>meals rescued so far</span><img src="/assets/bag-item-croissant.webp" alt="" /><img src="/assets/bag-item-flatbread.webp" alt="" /></div>
      </section>

      <section className="impact-ledger"><div className="section-intro" data-reveal><span className="eyebrow">MEASURED, NOT VAGUE</span><h2>One pickup at a time.</h2></div><div className="impact-ledger-grid"><article data-reveal><strong>642 kg</strong><span>food kept from landfill</span></article><article data-reveal><strong>1,640 kg</strong><span>estimated CO₂e avoided</span></article><article data-reveal><strong>68%</strong><span>average customer saving</span></article><article data-reveal><strong>8</strong><span>Kuwait areas live</span></article></div></section>

      <section className="impact-stories">
        <figure className="story-bakery" data-reveal="scale" data-scroll-media="44"><img src="/assets/bugsha-impact-kitchen.webp" alt="A bakery team packing fresh food for collection at closing time" loading="lazy" decoding="async" /><figcaption><span>01</span>It begins with a kitchen that made more than today needed.</figcaption></figure>
        <figure className="story-community" data-reveal="scale" data-scroll-media="36"><img src="/assets/bugsha-community-story.webp" alt="A customer using her phone outside a café" /><figcaption><span>02</span>It finds someone close enough to enjoy it tonight.</figcaption></figure>
      </section>

      <section className="impact-principles"><div className="section-intro" data-reveal><span className="eyebrow">OUR APPROACH</span><h2>Make the better choice the easier one.</h2></div><div><article data-reveal><span>01</span><h3>Value first</h3><p>People return because the food and price are genuinely good—not because they were made to feel guilty.</p></article><article data-reveal><span>02</span><h3>Local by default</h3><p>Nearby pickup keeps the system simple and introduces customers to kitchens in their own neighbourhood.</p></article><article data-reveal><span>03</span><h3>Clear records</h3><p>Every listing and collection carries a time, branch and staff attestation that partners can export.</p></article></div></section>

      <section className="page-next" data-reveal><span>Bring Bugsha to your kitchen</span><h2>Your surplus can become someone’s best find tonight.</h2><Link className="button button-dark" href="/partners">Explore business tools <Arrow /></Link></section>
      <DownloadSection />
    </main>
    <SiteFooter />
  </>;
}
