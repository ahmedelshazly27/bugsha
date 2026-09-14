"use client";

import { useState } from "react";
import { Arrow, BrandMark } from "./SiteUI";

/**
 * "Request a partner code" — the only door into a partner account.
 *
 * Partner sign-up in the Bugsha Partner app requires a code issued by the
 * Bugsha team. This form is where a kitchen asks for one. It posts to the
 * `partner-request` Supabase edge function, which stores the request and
 * emails both sides; a person then issues the code from the ops console.
 *
 * Field set mirrors app.submit_application on the platform so nothing has to
 * be typed twice.
 */

type RequestResult = { ok: boolean; requestId?: string | null; repeat?: boolean; error?: string };

const WAITLIST_ENDPOINT =
  process.env.NEXT_PUBLIC_WAITLIST_ENDPOINT ?? "https://fxjvxmuporiwpqalbddv.supabase.co/functions/v1/waitlist-signup";
// Defaults to the sibling function of the waitlist endpoint, so no extra build config is needed.
const REQUEST_ENDPOINT =
  process.env.NEXT_PUBLIC_PARTNER_REQUEST_ENDPOINT ?? WAITLIST_ENDPOINT.replace(/waitlist-signup$/, "partner-request");

const CITIES: Record<string, string[]> = {
  KW: ["Al Asimah", "Hawalli", "Farwaniya", "Ahmadi", "Jahra", "Mubarak Al-Kabeer"],
  EG: ["Cairo", "Giza", "Alexandria", "Qalyubia", "Dakahlia", "Port Said"],
};
const CATEGORIES: Array<[string, string]> = [["bakery", "Bakery"], ["cafe", "Café"], ["meals", "Meals"], ["grocery", "Co-op / grocery"], ["sweets", "Sweets"], ["other", "Other"]];

export function PartnerRequestSection() {
  const [market, setMarket] = useState<"KW" | "EG">("KW");
  const [form, setForm] = useState({ tradingName: "", legalName: "", city: "", contactName: "", contactPhone: "", contactEmail: "", branchCount: "1", estDailySurplus: "", referralSource: "" });
  const [categories, setCategories] = useState<string[]>([]);
  const [website, setWebsite] = useState(""); // honeypot — humans leave it empty
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">("idle");
  const [error, setError] = useState("");
  const [result, setResult] = useState<RequestResult | null>(null);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => setForm({ ...form, [k]: e.target.value });
  const toggle = (k: string) => setCategories((c) => (c.includes(k) ? c.filter((x) => x !== k) : [...c, k]));

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    if (!categories.length) { setStatus("error"); setError("Tell us what you make — pick at least one."); return; }
    setStatus("sending");
    setError("");
    try {
      const res = await fetch(REQUEST_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          market,
          tradingName: form.tradingName,
          legalName: form.legalName,
          categories,
          contactName: form.contactName,
          contactPhone: form.contactPhone,
          contactEmail: form.contactEmail,
          city: form.city || undefined,
          branchCount: Number(form.branchCount) || 1,
          estDailySurplus: form.estDailySurplus || undefined,
          referralSource: form.referralSource || undefined,
          website: website || undefined,
          source: "site-partners",
          locale: document.documentElement.lang || undefined,
        }),
      });
      const payload: RequestResult = await res.json().catch(() => ({ ok: res.ok }));
      if (payload?.ok) { setResult(payload); setStatus("done"); }
      else { setStatus("error"); setError(payload?.error || "Something went wrong. Please try again."); }
    } catch {
      setStatus("error");
      setError("Network hiccup — please try again.");
    }
  }

  return (
    <section className="request-section" id="request">
      <div className="request-panel">
        <div className="request-copy" data-reveal>
          <span className="eyebrow light">REQUEST A PARTNER CODE</span>
          <h2>Partner accounts open with a code from us.</h2>
          <p>Tell us about your kitchen. Someone from Bugsha reads every request and replies within two working days — with a partner code that opens sign-up in the Bugsha Partner app, or with questions. No listing fee, no subscription, no minimum volume.</p>
          <ul>
            <li>One code per kitchen, single use, yours alone</li>
            <li>Sign up, upload your licence, accept the contract, set branch hours</li>
            <li>List your first bundle — your account activates on its own</li>
          </ul>
        </div>

        {status === "done" ? (
          <div className="request-done" role="status">
            <BrandMark />
            <div>
              <strong>{result?.repeat ? "We already have a request from this email — and now this one too." : "Request received."}</strong>
              <span>We&rsquo;ve emailed {form.contactEmail} a confirmation. Expect a partner code, or questions, within two working days.</span>
            </div>
          </div>
        ) : (
          <form className="request-form" onSubmit={submit} noValidate data-reveal>
            <fieldset className="request-market">
              <legend>Country</legend>
              {(["KW", "EG"] as const).map((m) => (
                <label key={m} className={market === m ? "is-on" : ""}>
                  <input type="radio" name="market" value={m} checked={market === m} onChange={() => { setMarket(m); setForm((f) => ({ ...f, city: "" })); }} />
                  {m === "KW" ? "Kuwait" : "Egypt"}
                </label>
              ))}
            </fieldset>
            <label><span>Kitchen name (what customers see)</span><input required value={form.tradingName} onChange={set("tradingName")} placeholder="Kuwait Bakehouse" /></label>
            <label><span>Legal name (on the licence)</span><input required value={form.legalName} onChange={set("legalName")} placeholder="Kuwait Bakehouse Co. W.L.L." /></label>
            <fieldset className="request-cats">
              <legend>What you make</legend>
              {CATEGORIES.map(([k, l]) => (
                <label key={k} className={categories.includes(k) ? "is-on" : ""}>
                  <input type="checkbox" checked={categories.includes(k)} onChange={() => toggle(k)} />{l}
                </label>
              ))}
            </fieldset>
            <label><span>Your name</span><input required value={form.contactName} onChange={set("contactName")} autoComplete="name" /></label>
            <label><span>Phone</span><input required type="tel" value={form.contactPhone} onChange={set("contactPhone")} placeholder={market === "KW" ? "+965 5xxx xxxx" : "+20 1xx xxx xxxx"} autoComplete="tel" /></label>
            <label><span>Email</span><input required type="email" value={form.contactEmail} onChange={set("contactEmail")} placeholder="you@kitchen.com" autoComplete="email" /></label>
            <label>
              <span>City</span>
              <select value={form.city} onChange={set("city")}>
                <option value="">Choose a city</option>
                {CITIES[market].map((c) => <option key={c}>{c}</option>)}
              </select>
            </label>
            <label><span>Branches</span><input type="number" min={1} max={500} value={form.branchCount} onChange={set("branchCount")} /></label>
            <label><span>Surplus on a typical night (optional)</span><input value={form.estDailySurplus} onChange={set("estDailySurplus")} placeholder={market === "KW" ? "KD 25" : "EGP 600"} /></label>
            <label className="request-wide"><span>How did you hear about us? (optional)</span><input value={form.referralSource} onChange={set("referralSource")} /></label>
            <input type="text" name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" value={website} onChange={(e) => setWebsite(e.target.value)} className="waitlist-hp" />
            <p className="request-note">Alcohol is never listed on Bugsha. Legal details are checked against your commercial licence before a code is issued.</p>
            <button className="button button-light" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending…" : <>Request a partner code <Arrow /></>}
            </button>
            {error && <p role="alert" className="waitlist-error">{error}</p>}
          </form>
        )}
      </div>
    </section>
  );
}
