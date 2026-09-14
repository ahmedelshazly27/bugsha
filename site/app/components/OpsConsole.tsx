"use client";

/**
 * Partner requests & codes — the ops console's S-O-010 / S-O-011 views, live.
 *
 * Talks straight to the platform Supabase project with plain fetch: email
 * one-time-code sign-in through GoTrue, then the `app.ops_*` RPCs through
 * PostgREST. The database decides who is ops (app.ops_require), so this page
 * carries no secrets beyond the publishable key.
 *
 * Issuing a code inserts into partner_invite_code; a database trigger then
 * emails the kitchen through the partner-code-email function. The row's
 * emailed_at / email_error columns show whether that landed.
 */

import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { BrandMark } from "./SiteUI";

const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "https://fxjvxmuporiwpqalbddv.supabase.co";
const SUPABASE_KEY = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ?? "sb_publishable_KmUlVYOLmpIVVNi6yAiK9w_2OKNDzNv";
const STORAGE_KEY = "bugsha-ops-session";

type Market = "KW" | "EG";
type Session = { access_token: string; refresh_token: string; expires_at: number; email: string };
type RequestStatus = "new" | "contacted" | "code_issued" | "declined";
type RequestRow = {
  id: string; market: Market; legal_name: string; trading_name: string; categories: string[];
  contact_name: string; contact_phone: string; contact_email: string; city: string | null;
  branch_count: number; est_daily_surplus: string | null; referral_source: string | null; source: string | null;
  status: RequestStatus; decline_reason: string | null; invite_code: string | null; code_issued_at: string | null;
  notes: string | null; created_at: string;
};
type CodeRow = {
  code: string; market: Market; request_id: string | null; issued_to_name: string; issued_to_email: string;
  trading_name: string | null; issued_at: string; expires_at: string; redeemed_at: string | null;
  revoked_at: string | null; revoke_reason: string | null; emailed_at: string | null; email_error: string | null; email_attempts: number;
};

const MARKET_LABEL: Record<Market, string> = { KW: "Kuwait", EG: "Egypt" };
const STATUS_LABEL: Record<RequestStatus, string> = { new: "New", contacted: "Contacted", code_issued: "Code issued", declined: "Declined" };
const DECLINE_REASONS: Array<[string, string]> = [
  ["category_not_eligible", "Category not eligible"], ["outside_launch_area", "Outside launch area"],
  ["duplicate", "Duplicate request"], ["no_response", "No response"], ["other", "Other"],
];

/* ---------- Supabase over plain fetch ---------- */

class ApiError extends Error {
  status: number;
  constructor(message: string, status: number) { super(message); this.status = status; }
}

async function authPost<T>(path: string, body: unknown): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/auth/v1/${path}`, {
    method: "POST", headers: { apikey: SUPABASE_KEY, "Content-Type": "application/json" }, body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => ({}))) as { msg?: string; error_description?: string; message?: string; error?: string };
  if (!res.ok) throw new ApiError(data.msg ?? data.error_description ?? data.message ?? data.error ?? `HTTP ${res.status}`, res.status);
  return data as T;
}

function jwtEmail(token: string): string {
  try {
    const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
    return typeof payload.email === "string" ? payload.email : "";
  } catch { return ""; }
}

function toSession(raw: { access_token: string; refresh_token: string; expires_in?: number; expires_at?: number }): Session {
  const expires_at = raw.expires_at ?? Math.floor(Date.now() / 1000) + (raw.expires_in ?? 3600);
  return { access_token: raw.access_token, refresh_token: raw.refresh_token, expires_at, email: jwtEmail(raw.access_token) };
}

function loadSession(): Session | null {
  try {
    const hash = typeof window !== "undefined" ? window.location.hash : "";
    if (hash.includes("access_token=")) {
      // A magic link lands here with the tokens in the fragment.
      const p = new URLSearchParams(hash.slice(1));
      const access_token = p.get("access_token"); const refresh_token = p.get("refresh_token");
      if (access_token && refresh_token) {
        const s = toSession({ access_token, refresh_token, expires_at: Number(p.get("expires_at")) || undefined });
        window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s));
        window.history.replaceState(null, "", window.location.pathname);
        return s;
      }
    }
    const stored = window.sessionStorage.getItem(STORAGE_KEY);
    return stored ? (JSON.parse(stored) as Session) : null;
  } catch { return null; }
}

function saveSession(s: Session | null) {
  try { if (s) window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(s)); else window.sessionStorage.removeItem(STORAGE_KEY); } catch { /* private mode */ }
}

// The session as a tiny external store: the server snapshot is "unknown" (so the
// static HTML shows a neutral loading state), the client reads sessionStorage once.
let sessionState: Session | null | undefined;
const sessionListeners = new Set<() => void>();
function setStoredSession(s: Session | null) { sessionState = s; saveSession(s); sessionListeners.forEach((l) => l()); }
function subscribeSession(l: () => void) { sessionListeners.add(l); return () => { sessionListeners.delete(l); }; }
function readSession(): Session | null | undefined { if (sessionState === undefined) sessionState = loadSession(); return sessionState; }
function readServerSession(): undefined { return undefined; }

async function rpcRaw<T>(session: Session, name: string, args: Record<string, unknown> = {}): Promise<T> {
  const res = await fetch(`${SUPABASE_URL}/rest/v1/rpc/${name}`, {
    method: "POST",
    headers: {
      apikey: SUPABASE_KEY, Authorization: `Bearer ${session.access_token}`, "Content-Type": "application/json",
      "Content-Profile": "app", "Accept-Profile": "app",
    },
    body: JSON.stringify(args),
  });
  const text = await res.text();
  let data: unknown = null;
  try { data = text ? JSON.parse(text) : null; } catch { data = text; }
  if (!res.ok) {
    const d = data as { message?: string; hint?: string } | null;
    throw new ApiError(d?.message ?? `HTTP ${res.status}`, res.status);
  }
  return data as T;
}

/* ---------- helpers ---------- */

function fmtDate(iso: string | null | undefined) {
  if (!iso) return "—";
  return new Date(iso).toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
function fmtWhen(iso: string | null | undefined) {
  if (!iso) return "—";
  return new Date(iso).toLocaleString("en-GB", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" });
}
function codeState(c: CodeRow): { label: string; tone: string } {
  if (c.revoked_at) return { label: "Revoked", tone: "muted" };
  if (c.redeemed_at) return { label: `Redeemed ${fmtDate(c.redeemed_at)}`, tone: "strong" };
  if (new Date(c.expires_at) < new Date()) return { label: "Expired", tone: "muted" };
  return { label: "Live", tone: "live" };
}
function emailState(c: CodeRow): { label: string; tone: string } {
  if (c.emailed_at) return { label: `Emailed ${fmtWhen(c.emailed_at)}`, tone: "strong" };
  if (c.email_error) return { label: `Not delivered · ${c.email_error}`, tone: "warn" };
  return { label: "Sending…", tone: "muted" };
}

/* ---------- sign-in ---------- */

function SignIn({ onSession }: { onSession: (s: Session) => void }) {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [stage, setStage] = useState<"email" | "code">("email");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function sendCode(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true); setError("");
    try {
      await authPost("otp", { email: email.trim(), create_user: false });
      setStage("code");
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Could not send the code.";
      setError(/signups? not allowed|user not found/i.test(msg) ? "That email is not on the ops team." : msg);
    } finally { setBusy(false); }
  }

  async function verify(e: React.FormEvent) {
    e.preventDefault();
    if (busy) return;
    setBusy(true); setError("");
    try {
      const raw = await authPost<{ access_token: string; refresh_token: string; expires_in: number; expires_at?: number }>("verify", { type: "email", email: email.trim(), token: code.trim() });
      const s = toSession(raw); saveSession(s); onSession(s);
    } catch (err) {
      setError(err instanceof Error ? err.message : "That code did not work.");
    } finally { setBusy(false); }
  }

  return (
    <div className="ops-signin">
      <div className="ops-signin-card">
        <div className="brand"><BrandMark /><strong>Bugsha</strong><span className="ops-tag">Ops</span></div>
        <h1>Partner requests &amp; codes</h1>
        {stage === "email" ? (
          <form onSubmit={sendCode} noValidate>
            <p>Sign in with your ops email. We send a one-time code.</p>
            <label><span>Email</span><input type="email" required autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@bugsha.app" /></label>
            <button className="button button-primary" type="submit" disabled={busy}>{busy ? "Sending…" : "Send code"}</button>
            {error ? <p role="alert" className="ops-error">{error}</p> : null}
          </form>
        ) : (
          <form onSubmit={verify} noValidate>
            <p>Enter the code we emailed to <strong>{email}</strong>. If the email carries a link instead, open it on this device.</p>
            <label><span>Code</span><input inputMode="numeric" autoComplete="one-time-code" required value={code} onChange={(e) => setCode(e.target.value)} placeholder="123456" /></label>
            <button className="button button-primary" type="submit" disabled={busy}>{busy ? "Checking…" : "Sign in"}</button>
            <button className="ops-link" type="button" onClick={() => { setStage("email"); setCode(""); setError(""); }}>Use a different email</button>
            {error ? <p role="alert" className="ops-error">{error}</p> : null}
          </form>
        )}
      </div>
    </div>
  );
}

/* ---------- console ---------- */

type Modal = { kind: "issue"; request: RequestRow } | { kind: "decline"; request: RequestRow } | { kind: "revoke"; code: CodeRow } | null;

function Console({ session, setSession }: { session: Session; setSession: (s: Session | null) => void }) {
  const [role, setRole] = useState<string | null | undefined>(undefined);
  const [tab, setTab] = useState<"requests" | "codes">("requests");
  const [market, setMarket] = useState<Market | "">("");
  const [status, setStatus] = useState<RequestStatus | "">("new");
  const [requests, setRequests] = useState<RequestRow[]>([]);
  const [codes, setCodes] = useState<CodeRow[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [modal, setModal] = useState<Modal>(null);
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState<{ tone: "ok" | "error"; text: string } | null>(null);
  const [loading, setLoading] = useState(true);

  // RPC with one silent token refresh on 401.
  const rpc = useCallback(async <T,>(name: string, args: Record<string, unknown> = {}): Promise<T> => {
    let s = session;
    if (s.expires_at * 1000 - Date.now() < 60_000) {
      const raw = await authPost<{ access_token: string; refresh_token: string; expires_in: number }>("token?grant_type=refresh_token", { refresh_token: s.refresh_token });
      s = toSession(raw); saveSession(s); setSession(s);
    }
    try {
      return await rpcRaw<T>(s, name, args);
    } catch (err) {
      if (err instanceof ApiError && err.status === 401) { saveSession(null); setSession(null); }
      throw err;
    }
  }, [session, setSession]);

  const refresh = useCallback(async () => {
    const [r, c] = await Promise.all([
      rpc<RequestRow[]>("ops_partner_requests", { p_status: null, p_market: market || null }),
      rpc<CodeRow[]>("ops_partner_codes", { p_market: market || null }),
    ]);
    setRequests(r ?? []); setCodes(c ?? []);
  }, [rpc, market]);

  useEffect(() => {
    let alive = true;
    (async () => {
      try {
        const r = await rpc<string | null>("ops_role");
        if (!alive) return;
        setRole(r ?? null);
        if (r) await refresh();
      } catch (err) {
        if (alive) setNotice({ tone: "error", text: err instanceof Error ? err.message : "Could not load." });
      } finally { if (alive) setLoading(false); }
    })();
    return () => { alive = false; };
  }, [rpc, refresh]);

  const visibleRequests = useMemo(() => requests.filter((r) => !status || r.status === status), [requests, status]);
  const current = useMemo(() => requests.find((r) => r.id === selected) ?? null, [requests, selected]);
  const counts = useMemo(() => ({ new: requests.filter((r) => r.status === "new").length, codes: codes.length }), [requests, codes]);

  async function act(label: string, fn: () => Promise<void>) {
    if (busy) return;
    setBusy(true); setNotice(null);
    try {
      await fn(); await refresh(); setNotice({ tone: "ok", text: label }); setModal(null);
      // The code email is sent by a database trigger a moment after the insert; pick up its delivery state.
      if (/emailed|re-sent/.test(label)) window.setTimeout(() => { refresh().catch(() => {}); }, 4000);
    }
    catch (err) { setNotice({ tone: "error", text: err instanceof Error ? err.message : "Something went wrong." }); }
    finally { setBusy(false); }
  }

  function signOut() { saveSession(null); setSession(null); }

  if (loading) return <div className="ops-shell"><p className="ops-muted">Loading…</p></div>;
  if (!role) {
    return (
      <div className="ops-signin"><div className="ops-signin-card">
        <div className="brand"><BrandMark /><strong>Bugsha</strong><span className="ops-tag">Ops</span></div>
        <h1>Not on the ops team</h1>
        <p><strong>{session.email}</strong> signed in, but this account has no ops role on the platform. Ask an admin to add it to <code>ops_user</code>.</p>
        <button className="button button-dark" type="button" onClick={signOut}>Sign out</button>
      </div></div>
    );
  }
  const canAct = role === "ops_manager" || role === "admin";

  return (
    <div className="ops-shell">
      <header className="ops-header">
        <div className="brand"><BrandMark /><strong>Bugsha</strong><span className="ops-tag">Ops</span></div>
        <nav className="ops-tabs" aria-label="Views">
          <button type="button" className={tab === "requests" ? "is-on" : ""} onClick={() => setTab("requests")}>Requests{counts.new ? <b>{counts.new}</b> : null}</button>
          <button type="button" className={tab === "codes" ? "is-on" : ""} onClick={() => setTab("codes")}>Codes{counts.codes ? <b>{counts.codes}</b> : null}</button>
        </nav>
        <div className="ops-user"><span>{session.email}</span><small>{role.replace("_", " ")}</small><button type="button" className="ops-link" onClick={signOut}>Sign out</button></div>
      </header>

      <div className="ops-toolbar">
        <label><span>Market</span><select value={market} onChange={(e) => { setMarket(e.target.value as Market | ""); setSelected(null); }}><option value="">All</option><option value="KW">Kuwait</option><option value="EG">Egypt</option></select></label>
        {tab === "requests" ? (
          <label><span>Status</span><select value={status} onChange={(e) => setStatus(e.target.value as RequestStatus | "")}><option value="">All</option>{(Object.keys(STATUS_LABEL) as RequestStatus[]).map((s) => <option key={s} value={s}>{STATUS_LABEL[s]}</option>)}</select></label>
        ) : null}
        <button type="button" className="ops-link" onClick={() => act("Refreshed", async () => {})} disabled={busy}>Refresh</button>
        {!canAct ? <span className="ops-muted">Your role can view but not issue, decline or revoke.</span> : null}
      </div>

      {notice ? <p role="status" className={`ops-notice is-${notice.tone}`}>{notice.text}</p> : null}

      {tab === "requests" ? (
        <div className={`ops-split ${current ? "has-detail" : ""}`}>
          <div className="ops-table-wrap">
            <table className="ops-table">
              <thead><tr><th>Kitchen</th><th>Where</th><th>Contact</th><th>Branches</th><th>Received</th><th>Status</th></tr></thead>
              <tbody>
                {visibleRequests.length === 0 ? <tr><td colSpan={6} className="ops-muted">No requests{status ? ` with status “${STATUS_LABEL[status]}”` : ""}.</td></tr> : null}
                {visibleRequests.map((r) => (
                  <tr key={r.id} className={r.id === selected ? "is-on" : ""} onClick={() => setSelected(r.id)}>
                    <td><strong>{r.trading_name}</strong><small>{r.legal_name}</small></td>
                    <td>{MARKET_LABEL[r.market]}{r.city ? ` · ${r.city}` : ""}</td>
                    <td>{r.contact_name}<small>{r.contact_email}</small></td>
                    <td>{r.branch_count}</td>
                    <td>{fmtDate(r.created_at)}<small>{r.source ?? ""}</small></td>
                    <td><span className={`ops-badge is-${r.status}`}>{STATUS_LABEL[r.status]}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          {current ? (
            <aside className="ops-detail">
              <div className="ops-detail-head"><h2>{current.trading_name}</h2><button type="button" className="ops-link" onClick={() => setSelected(null)}>Close</button></div>
              <dl>
                <dt>Legal name</dt><dd>{current.legal_name}</dd>
                <dt>Market · city</dt><dd>{MARKET_LABEL[current.market]}{current.city ? ` · ${current.city}` : ""}</dd>
                <dt>Makes</dt><dd>{current.categories.join(", ") || "—"}</dd>
                <dt>Contact</dt><dd>{current.contact_name}<br />{current.contact_phone}<br />{current.contact_email}</dd>
                <dt>Branches</dt><dd>{current.branch_count}</dd>
                <dt>Surplus / night</dt><dd>{current.est_daily_surplus ?? "—"}</dd>
                <dt>Heard via</dt><dd>{current.referral_source ?? "—"}</dd>
                <dt>Received</dt><dd>{fmtWhen(current.created_at)}{current.source ? ` · ${current.source}` : ""}</dd>
                {current.notes ? <><dt>Notes</dt><dd>{current.notes}</dd></> : null}
              </dl>
              {current.status === "code_issued" && current.invite_code ? (
                <div className="ops-callout">
                  <strong>Code {current.invite_code}</strong>
                  <span>Issued {fmtWhen(current.code_issued_at)}. {(() => { const c = codes.find((x) => x.code === current.invite_code); return c ? emailState(c).label : ""; })()}</span>
                </div>
              ) : null}
              {current.status === "declined" ? <div className="ops-callout is-muted"><strong>Declined</strong><span>{DECLINE_REASONS.find(([k]) => k === current.decline_reason)?.[1] ?? current.decline_reason}</span></div> : null}
              {canAct && (current.status === "new" || current.status === "contacted") ? (
                <div className="ops-actions">
                  <button type="button" className="button button-primary" onClick={() => setModal({ kind: "issue", request: current })}>Issue partner code</button>
                  <button type="button" className="button button-light" onClick={() => setModal({ kind: "decline", request: current })}>Decline</button>
                </div>
              ) : null}
            </aside>
          ) : null}
        </div>
      ) : (
        <div className="ops-table-wrap">
          <table className="ops-table">
            <thead><tr><th>Code</th><th>Issued to</th><th>Email</th><th>Issued</th><th>Expires</th><th>Status</th><th>Delivery</th><th></th></tr></thead>
            <tbody>
              {codes.length === 0 ? <tr><td colSpan={8} className="ops-muted">No codes issued yet.</td></tr> : null}
              {codes.map((c) => {
                const st = codeState(c); const em = emailState(c);
                return (
                  <tr key={c.code}>
                    <td><code>{c.code}</code></td>
                    <td><strong>{c.trading_name ?? c.issued_to_name}</strong><small>{MARKET_LABEL[c.market]}</small></td>
                    <td>{c.issued_to_email}</td>
                    <td>{fmtDate(c.issued_at)}</td>
                    <td>{fmtDate(c.expires_at)}</td>
                    <td><span className={`ops-badge is-${st.tone}`}>{st.label}</span>{c.revoke_reason ? <small>{c.revoke_reason}</small> : null}</td>
                    <td><span className={`ops-badge is-${em.tone}`}>{em.label}</span></td>
                    <td>
                      {canAct && st.tone === "live" ? (
                        <span className="ops-row-actions">
                          <button type="button" className="ops-link" disabled={busy} onClick={() => act(`Code ${c.code} re-sent to ${c.issued_to_email}`, () => rpc("ops_resend_partner_code", { p_code: c.code }))}>Resend</button>
                          <button type="button" className="ops-link is-danger" disabled={busy} onClick={() => setModal({ kind: "revoke", code: c })}>Revoke</button>
                        </span>
                      ) : null}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      {modal ? <ActionModal modal={modal} busy={busy} onClose={() => setModal(null)} onConfirm={(fields) => {
        if (modal.kind === "issue") {
          return act(`Code issued and emailed to ${modal.request.contact_email}`, async () => {
            await rpc("ops_issue_partner_code", { p_request: modal.request.id, p_days: Number(fields.days) || 14, p_reason: fields.text || null });
          });
        }
        if (modal.kind === "decline") {
          return act(`${modal.request.trading_name} declined`, async () => {
            await rpc("ops_decline_partner_request", { p_request: modal.request.id, p_reason_code: fields.reason, p_text: fields.text || null });
          });
        }
        return act(`Code ${modal.code.code} revoked`, async () => {
          await rpc("ops_revoke_partner_code", { p_code: modal.code.code, p_reason: fields.text || "Revoked by ops" });
        });
      }} /> : null}
    </div>
  );
}

function ActionModal({ modal, busy, onClose, onConfirm }: { modal: NonNullable<Modal>; busy: boolean; onClose: () => void; onConfirm: (fields: { days: string; reason: string; text: string }) => void }) {
  const [days, setDays] = useState("14");
  const [reason, setReason] = useState(DECLINE_REASONS[0][0]);
  const [text, setText] = useState("");
  const needsText = modal.kind === "revoke" || (modal.kind === "decline" && reason === "other");
  const title = modal.kind === "issue" ? `Issue a partner code to ${modal.request.trading_name}`
    : modal.kind === "decline" ? `Decline ${modal.request.trading_name}` : `Revoke ${modal.code.code}`;
  const body = modal.kind === "issue" ? `An email goes to ${modal.request.contact_email} with the code and the sign-up link. The code is tied to this request, so sign-up pre-fills the kitchen's details.`
    : modal.kind === "decline" ? "The request is closed with a reason. The kitchen is not emailed automatically."
    : `${modal.code.issued_to_email} can no longer sign up with this code. The request goes back to “Contacted” so a fresh code can be issued.`;
  return (
    <div className="ops-modal-backdrop" role="presentation" onClick={onClose}>
      <div className="ops-modal" role="dialog" aria-modal="true" aria-labelledby="ops-modal-title" onClick={(e) => e.stopPropagation()}>
        <h2 id="ops-modal-title">{title}</h2>
        <p>{body}</p>
        {modal.kind === "issue" ? <label><span>Expires in</span><select value={days} onChange={(e) => setDays(e.target.value)}><option value="7">7 days</option><option value="14">14 days</option><option value="30">30 days</option></select></label> : null}
        {modal.kind === "decline" ? <label><span>Reason</span><select value={reason} onChange={(e) => setReason(e.target.value)}>{DECLINE_REASONS.map(([k, v]) => <option key={k} value={k}>{v}</option>)}</select></label> : null}
        <label><span>{modal.kind === "issue" ? "Note (optional, audit log)" : needsText ? "Why" : "Note (optional)"}</span><input value={text} onChange={(e) => setText(e.target.value)} /></label>
        <div className="ops-actions">
          <button type="button" className={`button ${modal.kind === "issue" ? "button-primary" : "button-dark"}`} disabled={busy || (needsText && !text.trim())} onClick={() => onConfirm({ days, reason, text: text.trim() })}>
            {busy ? "Working…" : modal.kind === "issue" ? "Issue and email" : modal.kind === "decline" ? "Decline" : "Revoke"}
          </button>
          <button type="button" className="ops-link" onClick={onClose}>Cancel</button>
        </div>
      </div>
    </div>
  );
}

export function OpsConsole() {
  const session = useSyncExternalStore(subscribeSession, readSession, readServerSession);
  if (session === undefined) return <div className="ops-shell"><p className="ops-muted">Loading…</p></div>;
  if (!session) return <SignIn onSession={setStoredSession} />;
  return <Console session={session} setSession={setStoredSession} />;
}
