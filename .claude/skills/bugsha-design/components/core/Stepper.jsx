import React from "react";
import { IconButton } from "./IconButton.jsx";
/** Quantity control for "how many bags". Never lets the user exceed bagsLeft. */
export function Stepper({ value, min = 1, max = 9, onChange, style }) {
  const set = v => onChange && onChange(Math.min(max, Math.max(min, v)));
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-100)",
      border: "1px solid var(--color-border-default)", borderRadius: "var(--radius-control)", padding: 2, ...style }}>
      <IconButton icon="minus" label="Decrease quantity" size={40} onClick={() => set(value - 1)} />
      <span className="ds-numeric" style={{ minWidth: 24, textAlign: "center", fontSize: "var(--text-body-lg-size)", fontWeight: "var(--weight-semibold)" }}>{value}</span>
      <IconButton icon="plus" label="Increase quantity" size={40} onClick={() => set(value + 1)} />
    </div>
  );
}
