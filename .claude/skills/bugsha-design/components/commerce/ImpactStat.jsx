import React from "react";
import { Icon } from "../core/Icon.jsx";
/** Post-pickup satisfaction, not a lecture. Facts only — no guilt copy, no CO2 abstractions the user can't feel. */
export function ImpactStat({ icon = "leaf", value, unit, label, tone = "fresh", style }) {
  return (
    <div style={{ display: "grid", gap: 4, padding: "var(--space-200)", borderRadius: "var(--radius-card)",
      background: tone === "fresh" ? "var(--color-fresh-tint)" : "var(--color-brand-tint)",
      border: "var(--border-card) solid var(--color-border-subtle)", ...style }}>
      <Icon name={icon} size={20} style={{ color: tone === "fresh" ? "var(--color-fresh)" : "var(--color-brand-primary)" }} />
      <span className="ds-numeric" style={{ fontSize: "var(--text-numeric-xl-size)", lineHeight: 1, fontWeight: "var(--weight-bold)" }}>
        {value}<span style={{ fontSize: "var(--text-body-size)", marginInlineStart: 4 }}>{unit}</span>
      </span>
      <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{label}</span>
    </div>
  );
}
