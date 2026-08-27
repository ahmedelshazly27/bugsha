import React from "react";
import { Icon } from "../core/Icon.jsx";
/** Dashboard KPI tile. Density over expressiveness — partner side never decorates a number. */
export function PartnerStat({ label, value, sub, icon, tone = "neutral", style }) {
  return (
    <div style={{ display: "grid", gap: 6, padding: "var(--space-200)", background: "var(--color-partner-surface)",
      borderRadius: "var(--radius-card)", border: "var(--border-card) solid var(--color-border-subtle)", ...style }}>
      <span style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
        {icon && <Icon name={icon} size={14} />}{label}</span>
      <span className="ds-numeric" style={{ fontSize: "var(--text-title-lg-size)", lineHeight: 1.05, fontWeight: "var(--weight-bold)", whiteSpace: "nowrap",
        color: tone === "fresh" ? "var(--color-fresh)" : tone === "urgent" ? "var(--color-time-urgent)" : "var(--color-text-primary)" }}>{value}</span>
      {sub && <span className="ds-numeric" style={{ fontSize: "var(--text-micro-size)", color: "var(--color-text-tertiary)" }}>{sub}</span>}
    </div>
  );
}
