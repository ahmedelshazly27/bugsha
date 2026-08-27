"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { Arrow, BrandMark, CookieReveal, DownloadSection, MotionProvider, ScreenPhone, SiteFooter, SiteHeader } from "./components/SiteUI";

const bagBouquet = [
  { name: "baguette", start: .08, end: .36, x: -72, lift: 260, finalY: 2, rotateFrom: 1, rotateTo: -5, scaleFrom: .92, scaleTo: .98 },
  { name: "flatbread", start: .15, end: .44, x: 4, lift: 250, finalY: 10, rotateFrom: -2, rotateTo: 1, scaleFrom: .91, scaleTo: .97 },
  { name: "croissant", start: .24, end: .53, x: -54, lift: 220, finalY: 14, rotateFrom: 1, rotateTo: -3, scaleFrom: .93, scaleTo: 1 },
  { name: "coffee", start: .33, end: .61, x: 55, lift: 205, finalY: 17, rotateFrom: -2, rotateTo: 3, scaleFrom: .92, scaleTo: .98 },
  { name: "salad", start: .41, end: .69, x: 68, lift: 225, finalY: 14, rotateFrom: -1, rotateTo: 2, scaleFrom: .92, scaleTo: 1 },
  { name: "orange", start: .50, end: .76, x: 4, lift: 160, finalY: 18, rotateFrom: -1, rotateTo: 1, scaleFrom: .92, scaleTo: 1.02 },
] as const;

const appSteps = [
  { n: "01", kicker: "Discover", title: "See what is available tonight.", body: "Browse live bundles nearby with the pickup time, distance and original value clearly shown.", src: "browse-en.png" },
  { n: "02", kicker: "Reserve", title: "Choose before it goes.", body: "Reserve and pay securely in the app. Your Bugsha stays held until the pickup window closes.", src: "detail-en.png" },
  { n: "03", kicker: "Collect", title: "Show the code. Take it home.", body: "A simple collection code keeps pickup quick—no cash and no waiting around.", src: "code-en.png" },
];

const faqs = [
  ["What is actually inside a Bugsha?", "Whatever that kitchen made today and has left at closing. You see the category, dietary tags and value before paying; the exact mix remains a nightly surprise."],
  ["Is the food safe?", "It is the same food prepared for sale earlier that day, packed by the kitchen team and collected within a clearly defined pickup window."],
  ["Can I choose the contents?", "You can filter by food type and dietary information, but the kitchen chooses the exact contents. That flexibility is what makes the value possible."],
  ["How do I pay?", "Reserve securely in the app with KNET, Apple Pay or card. Nothing is paid at the counter."],
] as const;

function useBagScrollScene() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-bag-section]");
    const scene = section?.querySelector<HTMLElement>(".bag-scene");
    if (!section || !scene) return;

    const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
    const easeOutCubic = (value: number) => 1 - Math.pow(1 - value, 3);
    const easeInOutCubic = (value: number) => value < .5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
    const items = Array.from(section.querySelectorAll<HTMLElement>("[data-bag-item]")).map((node) => ({
      node,
      start: Number(node.dataset.start || 0),
      end: Number(node.dataset.end || 1),
      x: Number(node.dataset.x || 0),
      lift: Number(node.dataset.lift || 0),
      finalY: Number(node.dataset.finalY || 0),
      rotateFrom: Number(node.dataset.rotateFrom || 0),
      rotateTo: Number(node.dataset.rotateTo || 0),
      scaleFrom: Number(node.dataset.scaleFrom || 1),
      scaleTo: Number(node.dataset.scaleTo || 1),
    }));

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let motionScale = 1;
    let layoutDirty = true;
    let scrollDirty = true;
    let targetProgress = 0;
    let renderedProgress = 0;
    let previousTime = performance.now();

    const measure = () => {
      motionScale = scene.offsetWidth / 650;
      layoutDirty = false;
    };

    const getProgress = () => {
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      return clamp01(-rect.top / travel);
    };

    const render = (progress: number) => {
      const reactionLocal = clamp01((progress - .06) / .24);
      const reaction = reactionLocal > 0 && reactionLocal < 1 ? Math.sin(reactionLocal * Math.PI) : 0;

      scene.style.transform = `translate3d(0,${(reaction * 4).toFixed(2)}px,0) scale3d(1,${(1 - reaction * .015).toFixed(5)},1)`;
      section.style.setProperty("--bag-shadow-scale", (1 - reaction * .035).toFixed(4));
      section.style.setProperty("--bag-progress", progress.toFixed(4));
      const settleLocal = clamp01((progress - .76) / .12);
      const settleLift = settleLocal > 0 && settleLocal < 1 ? -Math.sin(settleLocal * Math.PI) * 2.2 * motionScale : 0;
      items.forEach((item, index) => {
        const local = clamp01((progress - item.start) / Math.max(.001, item.end - item.start));
        const riseProgress = easeInOutCubic(local);
        const detailProgress = easeOutCubic(local);
        const xProgress = easeInOutCubic(clamp01((local - .14) / .86));
        const x = item.x * xProgress * motionScale;
        const y = ((1 - riseProgress) * item.lift + item.finalY) * motionScale + settleLift * (1 - index * .04);
        const rotation = item.rotateFrom + (item.rotateTo - item.rotateFrom) * detailProgress;
        const scale = item.scaleFrom + (item.scaleTo - item.scaleFrom) * detailProgress;
        item.node.style.transform = `translate3d(-50%,${y.toFixed(2)}px,0) translate3d(${x.toFixed(2)}px,0,0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(4)})`;
        item.node.style.opacity = "1";
      });
    };

    const tick = (time: number) => {
      if (layoutDirty) measure();
      if (scrollDirty) {
        targetProgress = reduced ? 1 : getProgress();
        scrollDirty = false;
      }
      const elapsed = Math.min(48, Math.max(8, time - previousTime));
      previousTime = time;
      const blend = reduced ? 1 : 1 - Math.exp(-elapsed / 38);
      renderedProgress += (targetProgress - renderedProgress) * blend;
      if (Math.abs(targetProgress - renderedProgress) < .00008) renderedProgress = targetProgress;
      render(reduced ? 1 : renderedProgress);
      if (renderedProgress !== targetProgress || scrollDirty) frameId = requestAnimationFrame(tick);
      else frameId = 0;
    };

    const schedule = () => {
      scrollDirty = true;
      if (!frameId) {
        previousTime = performance.now();
        frameId = requestAnimationFrame(tick);
      }
    };

    const handleResize = () => {
      layoutDirty = true;
      schedule();
    };

    measure();
    targetProgress = reduced ? 1 : getProgress();
    renderedProgress = targetProgress;
    render(renderedProgress);
    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(scene);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", handleResize, { passive: true });
    window.visualViewport?.addEventListener("resize", handleResize, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", handleResize);
      window.visualViewport?.removeEventListener("resize", handleResize);
    };
  }, []);
}

function useSharedTableScene() {
  useEffect(() => {
    const section = document.querySelector<HTMLElement>("[data-shared-story]");
    const media = section?.querySelector<HTMLElement>("[data-shared-media]");
    const shade = section?.querySelector<HTMLElement>("[data-shared-shade]");
    const intro = section?.querySelector<HTMLElement>("[data-shared-intro]");
    const copy = section?.querySelector<HTMLElement>("[data-shared-copy]");
    if (!section || !media || !shade || !intro || !copy) return;

    const clamp01 = (value: number) => Math.max(0, Math.min(1, value));
    const easeInOut = (value: number) => value < .5 ? 4 * value * value * value : 1 - Math.pow(-2 * value + 2, 3) / 2;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;
    let startScale = .72;
    let startY = 54;

    const measure = () => {
      const styles = getComputedStyle(section);
      startScale = Number(styles.getPropertyValue("--shared-start-scale")) || .72;
      startY = Number(styles.getPropertyValue("--shared-start-y")) || 54;
    };

    const render = () => {
      frameId = 0;
      const rect = section.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = reduced ? 1 : clamp01(-rect.top / travel);
      const mediaProgress = easeInOut(clamp01(progress / .72));
      const introProgress = easeInOut(clamp01(progress / .30));
      const copyProgress = easeInOut(clamp01((progress - .36) / .36));
      const scale = startScale + (1.035 - startScale) * mediaProgress;

      media.style.transform = `translate3d(0,${((1 - mediaProgress) * startY).toFixed(2)}px,0) scale(${scale.toFixed(5)})`;
      intro.style.opacity = (1 - introProgress).toFixed(4);
      intro.style.transform = `translate3d(-50%,${(-50 - introProgress * 18).toFixed(2)}%,0)`;
      copy.style.opacity = copyProgress.toFixed(4);
      copy.style.transform = `translate3d(0,${((1 - copyProgress) * 30).toFixed(2)}px,0)`;
      shade.style.opacity = (.12 + copyProgress * .46).toFixed(3);
    };

    const schedule = () => {
      if (!frameId) frameId = requestAnimationFrame(render);
    };

    const resize = () => {
      measure();
      schedule();
    };

    measure();
    render();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", resize, { passive: true });
    window.visualViewport?.addEventListener("resize", resize, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", resize);
      window.visualViewport?.removeEventListener("resize", resize);
    };
  }, []);
}

function useAppStoryStep() {
  const [activeAppStep, setActiveAppStep] = useState(0);
  const activeStepRef = useRef(0);

  useEffect(() => {
    const appStory = document.querySelector<HTMLElement>("[data-app-story]");
    const device = appStory?.querySelector<HTMLElement>(".app-story-device");
    if (!appStory) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frameId = 0;

    const update = () => {
      frameId = 0;
      const rect = appStory.getBoundingClientRect();
      const travel = Math.max(1, rect.height - window.innerHeight);
      const progress = Math.max(0, Math.min(1, -rect.top / travel));
      const nextStep = Math.min(2, Math.floor(progress * 3));
      const arc = Math.sin(progress * Math.PI);
      if (!reduced) {
        appStory.style.setProperty("--app-orbit-y", `${((progress - .5) * -72).toFixed(2)}px`);
        appStory.style.setProperty("--app-orbit-rotate", `${(progress * 82).toFixed(2)}deg`);
        if (device) device.style.transform = `translate3d(0,${(-arc * 14).toFixed(2)}px,0) rotate(${((progress - .5) * -2).toFixed(2)}deg)`;
      }
      if (nextStep !== activeStepRef.current) {
        activeStepRef.current = nextStep;
        setActiveAppStep(nextStep);
      }
    };

    const schedule = () => {
      if (!frameId) frameId = requestAnimationFrame(update);
    };

    schedule();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  return activeAppStep;
}

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);
  useBagScrollScene();
  useSharedTableScene();
  const activeAppStep = useAppStoryStep();

  return (
    <>
      <SiteHeader />
      <MotionProvider />
      <main>
        <section className="home-hero" id="top">
          <div className="home-hero-copy" data-reveal>
            <span className="eyebrow"><i className="live-dot" />LAUNCHING IN KUWAIT &amp; EGYPT</span>
            <h1>Tonight’s best food is already made.</h1>
            <p>Bugsha is opening in Kuwait and Egypt: surprise bundles from local bakeries, cafés and co-ops, freshly packed at closing and worth around three times what you pay. Join the waitlist and collect from the first night.</p>
            <div className="hero-actions"><a className="button button-primary" href="#waitlist">Join the waitlist <Arrow /></a><Link className="text-link" href="/partners">List your kitchen <Arrow /></Link></div>
            <div className="hero-proof"><span><strong>~⅓ price</strong><small>of the counter</small></span><span><strong>3×</strong><small>the value inside</small></span><span><strong>Pickup only</strong><small>inside the window</small></span></div>
          </div>
          <div className="hero-scene" data-reveal="scale">
            <figure data-scroll-media="24"><img src="/assets/bugsha-community-story.webp" alt="A woman using her phone outside a neighborhood café" /></figure>
            <div className="hero-phone"><ScreenPhone active={0} screens={[{ src: "browse-en.png", alt: "Bugsha browse screen" }]} /></div>
            <div className="hero-note"><BrandMark /><span><b>Opening in</b> Kuwait &amp; Egypt</span></div>
          </div>
        </section>


        <CookieReveal />

        <section className="bag-story" id="unpack" data-bag-section>
          <div className="bag-pin">
            <div className="bag-layout">
              <div className="bag-copy">
                <span className="eyebrow">A DIFFERENT SURPRISE EVERY NIGHT</span>
                <h2><span>See what</span>{" "}<span>might be</span>{" "}<em>inside.</em></h2>
                <p>Tonight’s bakery, café and grocery favourites—packed at closing and ready for you.</p>
                <div className="bag-value-line"><span>Made today</span><i /><span>Pick up tonight</span><i /><span>Around 3× the value</span></div>
                <div className="scroll-cue"><i /><span>Scroll to peek inside</span></div>
              </div>
              <div className="bag-visual" role="img" aria-label="A purple Bugsha bag unpacking a bouquet of fresh food as the page scrolls">
                <div className="bag-sun" aria-hidden="true" />
                <div className="bag-scene" aria-hidden="true">
                  <div className="bag-back">
                    <img src="/assets/bugsha-animation-bag.webp" alt="" />
                    <span className="bag-interior-shade" />
                  </div>
                  <div className="bag-food-clip">
                    <div className="bag-food-stage">
                      {bagBouquet.map((item) => <img key={item.name} className={`bag-item item-${item.name}`} src={`/assets/bag-item-${item.name}.webp`} alt="" data-bag-item data-start={item.start} data-end={item.end} data-x={item.x} data-lift={item.lift} data-final-y={item.finalY} data-rotate-from={item.rotateFrom} data-rotate-to={item.rotateTo} data-scale-from={item.scaleFrom} data-scale-to={item.scaleTo} decoding="async" />)}
                    </div>
                  </div>
                  <div className="bag-front">
                    <img src="/assets/bugsha-animation-bag.webp" alt="" />
                    <span className="bag-opening-contact" />
                  </div>
                </div>
              </div>
            </div>
            <div className="bag-category-band" aria-hidden="true"><span>BAKERIES</span><i /> <span>CAFÉS</span><i /> <span>CO-OPS</span><i /> <span>LOCAL KITCHENS</span><i /> <span>FRESH SURPRISES</span></div>
          </div>
        </section>

        <section className="app-story" data-app-story>
          <div className="app-story-pin">
            <div className="app-story-heading"><span className="eyebrow">THREE MOMENTS. ONE EASY PICKUP.</span><h2>The app moves at your pace.</h2></div>
            <div className="app-story-layout">
              <div className="app-story-device">
                <ScreenPhone active={activeAppStep} screens={appSteps.map((step) => ({ src: step.src, alt: `${step.kicker} in the Bugsha app` }))} />
              </div>
              <div className="app-story-copy">
                {appSteps.map((step, index) => <article className={activeAppStep === index ? "active" : ""} key={step.n}><span>{step.n} / 03</span><small>{step.kicker}</small><h3>{step.title}</h3><p>{step.body}</p></article>)}
              </div>
            </div>
            <div className="app-story-progress">{appSteps.map((step, index) => <i className={activeAppStep === index ? "active" : ""} key={step.n} />)}</div>
          </div>
        </section>

        <section className="shared-story" data-shared-story>
          <div className="shared-story-pin">
            <figure className="shared-story-media" data-shared-media>
              <img src="/assets/bugsha-shared-meal.webp" alt="Friends sharing rescued food together around a table" loading="lazy" decoding="async" />
              <span className="shared-story-shade" data-shared-shade aria-hidden="true" />
            </figure>
            <div className="shared-story-intro" data-shared-intro><span>ONE PICKUP.<br />A BETTER NIGHT.</span></div>
            <div className="shared-story-copy" data-shared-copy>
              <span className="eyebrow light">GOOD FOOD, ENJOYED TOGETHER</span>
              <h2>The best surprise is sharing it.</h2>
              <p>Tonight’s extra can become the thing everyone reaches for first.</p>
              <Link className="button button-light" href="/how-it-works">See how Bugsha works <Arrow /></Link>
            </div>
          </div>
        </section>

        <section className="local-story">
          <figure data-reveal="scale" data-scroll-media="42"><img src="/assets/bugsha-bakery-story.webp" alt="A local baker arranging fresh bread and pastries" loading="lazy" decoding="async" /><figcaption>Made today · listed tonight</figcaption></figure>
          <div className="local-story-copy" data-reveal>
            <span className="eyebrow">FROM LOCAL KITCHENS</span>
            <h2>Real kitchens. Real food. One more chance to enjoy it.</h2>
            <p>A Bugsha starts when a local kitchen has prepared more good food than the day needed. It ends when someone nearby collects it that same night.</p>
            <Link className="text-link" href="/impact">Read about our impact <Arrow /></Link>
          </div>
        </section>

        <section className="home-impact">
          <div className="impact-intro" data-reveal><span className="eyebrow light">WHAT ONE BUGSHA DOES</span><h2>Better value. Less waste.</h2><p>We have not opened yet, so there is nothing to boast about. Here is the arithmetic of a single pickup—and what we intend to repeat every night.</p></div>
          <div className="impact-numbers">
            <article data-reveal><strong>~2 meals</strong><span>saved from the bin, per Bugsha</span></article>
            <article data-reveal><strong>~0.5 kg</strong><span>good food kept in the chain</span></article>
            <article data-reveal><strong>~65%</strong><span>less than the counter price</span></article>
          </div>
        </section>

        <section className="faq-section" id="faq">
          <div className="faq-heading" data-reveal><span className="eyebrow">GOOD TO KNOW</span><h2>Questions, answered.</h2><p>If yours is not here, email us. We answer in Arabic and English.</p></div>
          <div className="faq-list">
            {faqs.map(([question, answer], index) => <div className={`faq-item ${openFaq === index ? "open" : ""}`} key={question}><button onClick={() => setOpenFaq(openFaq === index ? -1 : index)} aria-expanded={openFaq === index} aria-controls={`faq-answer-${index}`}><span>{question}</span><i /></button><div id={`faq-answer-${index}`}><p>{answer}</p></div></div>)}
          </div>
        </section>

        <DownloadSection />
      </main>
      <SiteFooter />
    </>
  );
}
