import React from "react";
import { Icon } from "../core/Icon.jsx";
/** Weekly payout summary — the number a franchise finance lead checks first. */
export function PayoutCard({ amount, currency = "KD", period, bags, nextDate, note, style }) {
  return (
    <div style={{ display: "grid", gap: "var(--space-150)", padding: "var(--space-300)", background: "var(--color-partner-surface)",
      borderRadius: "var(--radius-card)", border: "var(--border-card) solid var(--color-border-subtle)", boxShadow: "var(--elevation-card)", ...style }}>
      <span style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>
        <Icon name="banknote" size={18} />{period}</span>
      <span className="ds-numeric" style={{ fontSize: "var(--text-display-size)", lineHeight: 1, fontWeight: "var(--weight-bold)" }}>
        {currency} {Number(amount).toFixed(3)}</span>
      <span className="ds-numeric" style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
        {note ?? `${bags} bundles sold · transfer ${nextDate}`}</span>
    </div>
  );
}
