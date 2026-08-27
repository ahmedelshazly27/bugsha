import React from "react";
import { Icon } from "../core/Icon.jsx";
/** The pickup screen. Readable at arm's length by staff; the confirm gesture is deliberate (swipe), never a tap. */
export function RedemptionCode({ code, partner, window: win, quantity = 1, state = "ready", onRedeem,
  bagLabel, slideLabel = "Slide when staff is ready", doneLabel = "Collected", style }) {
  const done = state === "redeemed";
  return (
    <div style={{ display: "grid", gap: "var(--space-200)", justifyItems: "center", padding: "var(--space-300)",
      background: done ? "var(--color-fresh-tint)" : "var(--color-surface-raised)", borderRadius: "var(--radius-card)",
      border: "var(--border-card) solid var(--color-border-subtle)", boxShadow: "var(--elevation-card)", textAlign: "center", ...style }}>
      <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>{partner}</span>
      <span className="ds-numeric" style={{ fontSize: "var(--text-code-size)", lineHeight: "var(--text-code-line)",
        fontWeight: "var(--weight-bold)", letterSpacing: "0.12em" }}>{code}</span>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
        <span dir="auto">{quantity} {bagLabel || (quantity > 1 ? "bags" : "bag")}</span> · <span className="ds-numeric" dir="ltr">{win}</span>
      </span>
      {done ? (
        <span style={{ display: "inline-flex", alignItems: "center", gap: 8, color: "var(--color-fresh)", fontWeight: "var(--weight-semibold)" }}>
          <Icon name="circle-check" size={22} /> {doneLabel}
        </span>
      ) : (
        <button onClick={onRedeem} style={{ width: "100%", minHeight: "var(--size-control-lg)", display: "flex", alignItems: "center",
          justifyContent: "space-between", padding: "0 var(--space-150)", cursor: "pointer",
          background: "var(--color-brand-primary)", color: "var(--color-text-on-brand)",
          border: "var(--border-card) solid var(--color-border-strong)", borderRadius: "var(--radius-control)",
          fontWeight: "var(--weight-semibold)" }}>
          <span style={{ width: 36, height: 36, borderRadius: "var(--radius-control)", background: "var(--color-surface-raised)",
            color: "var(--color-text-primary)", display: "grid", placeItems: "center" }}><Icon name="arrow-right" size={18} mirror /></span>
          <span style={{ flex: 1 }}>{slideLabel}</span>
        </button>
      )}
    </div>
  );
}
