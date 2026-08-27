// Bugsha marketing site — interior pages, ported from the repo
// (app/how-it-works/page.tsx, app/partners/page.tsx, app/impact/page.tsx).
(function(){
const {SITE_ASSET:ASSET, SiteLink:A, Arrow, Phone, DownloadSection, MotionProvider, SiteFooter, SiteHeader} = window;

const steps = [
  {n:"01", title:"Discover tonight’s Bugshas", body:"Open the app and browse live bundles nearby. Every listing shows the food category, pickup window, distance, original value and current price.", screen:"browse-en.png"},
  {n:"02", title:"Reserve before it goes", body:"Choose a Bugsha, check dietary information and pay securely with KNET, Apple Pay or card. The exact contents remain a surprise.", screen:"detail-en.png"},
  {n:"03", title:"Collect inside the window", body:"Head to the kitchen during its pickup time and show the four-digit collection code. The team hands over your Bugsha and confirms collection.", screen:"code-en.png"}];

function HowItWorks(){
  return (
    <React.Fragment>
      <SiteHeader /><MotionProvider />
      <main className="interior-page">
        <section className="interior-hero process-hero">
          <div data-reveal>
            <span className="eyebrow">FOR CUSTOMERS</span>
            <h1>Good food, found before it goes.</h1>
            <p>Choose the place, category, price and pickup time. The exact mix stays a surprise until collection.</p>
            <A className="button button-primary" href="/#waitlist">Join the waitlist <Arrow /></A></div>
          <figure className="process-hero-image" data-reveal="scale" data-scroll-media="34">
            <img src={ASSET("bugsha-pickup-scene.webp")} alt="A Bugsha customer collecting an order at a neighborhood café" loading="eager" decoding="async" />
            <figcaption><span>FROM OPEN TO RESERVED</span><strong>Usually under three minutes.</strong><small>Then collect inside the kitchen’s pickup window.</small></figcaption></figure>
        </section>

        <section className="process-detail">
          <div className="section-intro" data-reveal><span className="eyebrow">HOW IT WORKS</span><h2>Three clear steps. Nothing hidden but the surprise.</h2></div>
          <div className="process-detail-grid">{steps.map(step=>(
            <article key={step.n} data-reveal>
              <div className="process-phone"><Phone src={step.screen} alt={`${step.title} in the Bugsha app`} /></div>
              <div><span>{step.n} / 03</span><h3>{step.title}</h3><p>{step.body}</p></div></article>))}</div>
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

        <section className="page-next" data-reveal><span>Are you a bakery, café or co-op?</span><h2>Turn tonight’s surplus into tomorrow’s regulars.</h2><A className="button button-dark" href="/partners">See Bugsha for businesses <Arrow /></A></section>
        <DownloadSection />
      </main>
      <SiteFooter />
    </React.Fragment>);
}

const benefits = [
  ["List in under a minute","Reuse a saved bundle, set quantity and pickup time, then publish."],
  ["Paid before arrival","Customers reserve in the app, so the counter only handles collection."],
  ["Keep complete control","You choose price, quantity, contents and when each listing closes."]];

function Partners(){
  return (
    <React.Fragment>
      <SiteHeader /><MotionProvider />
      <main className="interior-page">
        <section className="partner-hero-page">
          <figure data-reveal="scale" data-scroll-media="38">
            <img src={ASSET("bugsha-partner-bakery.webp")} alt="A local baker handing a freshly packed order to a customer" loading="eager" decoding="async" />
            <figcaption>Prepared today · discovered tonight</figcaption></figure>
          <div data-reveal>
            <span className="eyebrow">BUGSHA FOR BUSINESSES</span>
            <h1>Be one of the first kitchens on Bugsha.</h1>
            <p>We are opening in Kuwait and Egypt and signing our first partner kitchens now. List tonight’s surplus without changing your kitchen workflow—Bugsha handles discovery, payment and the collection record.</p>
            <a className="button button-primary" href="mailto:partners@bugsha.com">Become a founding partner <Arrow /></a>
</div>
        </section>

        <section className="partner-benefits">
          <div className="section-intro" data-reveal><span className="eyebrow">SIMPLE BY DESIGN</span><h2>A new sales channel, not a new operation.</h2></div>
          <div className="benefit-row">{benefits.map(([title,body],index)=>(
            <article key={title} data-reveal><span>0{index+1}</span><h3>{title}</h3><p>{body}</p></article>))}</div>
        </section>

        <section className="portal-section">
          <div className="portal-copy" data-reveal>
            <span className="eyebrow light">THE PARTNER PORTAL</span>
            <h2>Everything your team needs. Nothing in the way.</h2>
            <p>Publish a Bugsha, see exactly what customers see, follow collections and keep an exportable inspection record for every order.</p>
            <ul><li>Saved bundle templates</li><li>Live quantity control</li><li>Weekly payout view</li><li>Branch-level inspection logs</li></ul></div>
          <div className="portal-window" data-reveal="scale">
            <div className="browser-bar"><i /><i /><i /><span>partner.bugsha.com</span></div>
            <img src={ASSET("partner-list-en.png")} alt="Bugsha partner portal listing screen" />
            <div className="portal-detail"><img src={ASSET("partner-ledger-en.png")} alt="Bugsha inspection log" /></div></div>
        </section>

        <section className="partner-model">
          <div className="section-intro" data-reveal><span className="eyebrow">THE MODEL</span><h2>You pay only when a Bugsha sells.</h2><p>No listing fee, no monthly subscription and no minimum volume.</p></div>
          <div className="model-grid">
            <article data-reveal><strong>60 sec</strong><span>to publish a saved bundle</span></article>
            <article data-reveal><strong>Weekly</strong><span>clear consolidated payouts</span></article>
            <article data-reveal><strong>0 KD</strong><span>listing or subscription fees</span></article></div>
        </section>

        <section className="business-cta" data-reveal>
          <span className="eyebrow light">READY WHEN YOU ARE</span>
          <h2>Open with us, not after us.</h2>
          <p>Tell us about your kitchen and we will walk through it with you before your city goes live.</p>
          <a className="button button-light" href="mailto:partners@bugsha.com">partners@bugsha.com <Arrow /></a></section>
      </main>
      <SiteFooter />
    </React.Fragment>);
}

function Impact(){
  return (
    <React.Fragment>
      <SiteHeader /><MotionProvider />
      <main className="interior-page">
        <section className="impact-hero-page">
          <div data-reveal>
            <span className="eyebrow light">WHAT WE ARE BUILDING</span>
            <h1>Good food, twice over.</h1>
            <p>A better-value dinner for someone nearby and a little less waste in our cities—without asking either side to compromise. This is our first launch, so nothing on this page is a claim about the past.</p></div>
          <div className="impact-hero-number" data-reveal="scale">
            <strong>~2</strong><span>meals rescued in every Bugsha</span>
            <img src={ASSET("bag-item-croissant.webp")} alt="" />
            <img src={ASSET("bag-item-flatbread.webp")} alt="" /></div>
        </section>

        <section className="impact-ledger">
          <div className="section-intro" data-reveal><span className="eyebrow">MEASURED, NOT VAGUE</span><h2>One pickup at a time.</h2><p>Every figure below is per-Bugsha arithmetic, not a total. From launch night we publish the running totals here, drawn from real collections rather than estimates.</p></div>
          <div className="impact-ledger-grid">
            <article data-reveal><strong>~0.5 kg</strong><span>good food kept in the chain, per Bugsha</span></article>
            <article data-reveal><strong>~1.3 kg</strong><span>estimated CO₂e avoided, per Bugsha</span></article>
            <article data-reveal><strong>~65%</strong><span>below the counter price</span></article>
            <article data-reveal><strong>2 markets</strong><span>Kuwait and Egypt at launch</span></article></div>
        </section>

        <section className="impact-stories">
          <figure className="story-bakery" data-reveal="scale" data-scroll-media="44">
            <img src={ASSET("bugsha-impact-kitchen.webp")} alt="A bakery team packing fresh food for collection at closing time" loading="lazy" decoding="async" />
            <figcaption><span>01</span>It begins with a kitchen that made more than today needed.</figcaption></figure>
          <figure className="story-community" data-reveal="scale" data-scroll-media="36">
            <img src={ASSET("bugsha-community-story.webp")} alt="A customer using her phone outside a café" />
            <figcaption><span>02</span>It finds someone close enough to enjoy it tonight.</figcaption></figure>
        </section>

        <section className="impact-principles">
          <div className="section-intro" data-reveal><span className="eyebrow">OUR APPROACH</span><h2>Make the better choice the easier one.</h2></div>
          <div>
            <article data-reveal><span>01</span><h3>Value first</h3><p>People return because the food and price are genuinely good—not because they were made to feel guilty.</p></article>
            <article data-reveal><span>02</span><h3>Local by default</h3><p>Nearby pickup keeps the system simple and introduces customers to kitchens in their own neighbourhood.</p></article>
            <article data-reveal><span>03</span><h3>Clear records</h3><p>Every listing and collection carries a time, branch and staff attestation that partners can export.</p></article></div>
        </section>

        <section className="page-next" data-reveal><span>Bring Bugsha to your kitchen</span><h2>Your surplus can become someone’s best find on our first night.</h2><A className="button button-dark" href="/partners">Become a founding partner <Arrow /></A></section>
        <DownloadSection />
      </main>
      <SiteFooter />
    </React.Fragment>);
}

Object.assign(window,{ SiteHowItWorks:HowItWorks, SitePartners:Partners, SiteImpact:Impact });
})();
