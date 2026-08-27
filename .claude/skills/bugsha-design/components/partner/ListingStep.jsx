import React from "react";
import { Icon } from "../core/Icon.jsx";
/** One step of the 60-second listing flow. Big targets, one decision per step, defaults pre-filled from last night. */
export function ListingStep({ index, total, title, hint, children, done, style }) {
  return (
    <section style={{ display: "grid", gap: "var(--space-150)", padding: "var(--space-200)", background: "var(--color-partner-surface)",
      borderRadius: "var(--radius-card)", border: "var(--border-card) solid " + (done ? "var(--color-fresh)" : "var(--color-border-subtle)"), ...style }}>
      <div style={{ display: "flex", alignItems: "center", gap: "var(--space-150)" }}>
        <span className="ds-numeric" style={{ width: 28, height: 28, display: "grid", placeItems: "center", borderRadius: "var(--radius-chip)",
          background: done ? "var(--color-fresh)" : "var(--color-surface-sunken)", color: done ? "#fff" : "var(--color-text-secondary)",
          fontSize: "var(--text-caption-size)", fontWeight: "var(--weight-bold)" }}>
          {done ? <Icon name="check" size={15} /> : index}</span>
        <div style={{ display: "grid" }}>
          <strong style={{ fontSize: "var(--text-headline-size)" }}>{title}</strong>
          {hint && <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{hint}</span>}
        </div>
        <span className="ds-numeric" style={{ marginInlineStart: "auto", fontSize: "var(--text-caption-size)", color: "var(--color-text-tertiary)" }}>{index}/{total}</span>
      </div>
      {children}
    </section>
  );
}
