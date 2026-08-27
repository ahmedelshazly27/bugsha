import React from "react";

/** Price-bubble map marker. Selected pin inverts; sold-out pins stay visible but muted (honesty over FOMO). */
export function MapPin({ price, currency = "KD", selected, soldOut, style }) {
  return (
    <span className="ds-numeric" style={{ display: "inline-block", padding: "6px var(--space-150)", borderRadius: "var(--radius-pill)",
      fontSize: "var(--text-label-size)", fontWeight: "var(--weight-bold)",
      background: soldOut ? "var(--color-surface-sunken)" : selected ? "var(--color-surface-inverse)" : "var(--color-surface-raised)",
      color: soldOut ? "var(--color-text-tertiary)" : selected ? "var(--color-text-inverse)" : "var(--color-text-primary)",
      border: "var(--border-regular) solid " + (selected ? "var(--color-border-strong)" : "var(--color-border-default)"),
      boxShadow: "var(--elevation-2)", textDecoration: soldOut ? "line-through" : "none", ...style }}>
      {currency + " " + Number(price).toFixed(3)}
    </span>
  );
}
