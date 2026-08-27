import React from "react";

/** Deal price with struck original. KD always shows three decimals — the fils are the proof. */
export function PriceTag({ now, was, currency = "KD", size = "md", showPercent = true, style }) {
  const fmt = n => currency + " " + Number(n).toFixed(3);
  const pct = was ? Math.round((1 - now / was) * 100) : null;
  const big = size === "lg";
  return (
    <span dir="ltr" style={{ display: "inline-flex", alignItems: "baseline", flexWrap: "wrap", gap: "var(--space-100)", ...style }}>
      <span className="ds-numeric" style={{ fontSize: big ? "var(--text-numeric-xl-size)" : "var(--text-title-size)",
        lineHeight: 1, fontWeight: "var(--weight-bold)", whiteSpace: "nowrap", color: "var(--color-text-primary)" }}>{fmt(now)}</span>
      {was != null && <span className="ds-numeric" style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-tertiary)", textDecoration: "line-through" }}>{fmt(was)}</span>}
      {showPercent && pct != null && <span className="ds-numeric" style={{ fontSize: "var(--text-caption-size)", fontWeight: "var(--weight-semibold)",
        color: "var(--color-deal)" }}>−{pct}%</span>}
    </span>
  );
}
