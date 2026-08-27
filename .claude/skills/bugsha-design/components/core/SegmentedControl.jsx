import React from "react";

/** Two-to-three way switch: list/map, EN/AR, tonight/tomorrow. */
export function SegmentedControl({ options, value, onChange, fullWidth, style, ...rest }) {
  return (
    <div role="tablist" style={{ display: "inline-flex", width: fullWidth ? "100%" : undefined, padding: 3, gap: 2,
      background: "var(--color-surface-sunken)", borderRadius: "var(--radius-control)",
      border: "var(--border-card) solid var(--color-border-subtle)", ...style }} {...rest}>
      {options.map(o => {
        const active = o.value === value;
        return <button key={o.value} role="tab" aria-selected={active} onClick={() => onChange && onChange(o.value)}
          style={{ flex: fullWidth ? 1 : undefined, minHeight: 38, padding: "0 var(--space-200)", cursor: "pointer",
            borderRadius: "var(--radius-control)", border: "none", fontSize: "var(--text-label-size)",
            fontWeight: "var(--weight-semibold)", background: active ? "var(--color-surface-raised)" : "transparent",
            color: active ? "var(--color-text-primary)" : "var(--color-text-secondary)",
            boxShadow: active ? "var(--elevation-1)" : "none",
            transition: "background var(--motion-duration-fast) var(--motion-ease-brand)" }}>{o.label}</button>;
      })}
    </div>
  );
}
