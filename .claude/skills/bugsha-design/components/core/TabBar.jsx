import React from "react";
import { Icon } from "./Icon.jsx";
/** Consumer app bottom navigation. 4 tabs max; badge only for state the user must act on. */
export function TabBar({ items, value, onChange, style }) {
  return (
    <nav style={{ display: "flex", background: "var(--color-surface-raised)", borderTop: "1px solid var(--color-border-subtle)",
      padding: "var(--space-100) var(--space-100) var(--space-200)", gap: 2, ...style }}>
      {items.map(it => {
        const active = it.value === value;
        return <button key={it.value} onClick={() => onChange && onChange(it.value)} aria-current={active ? "page" : undefined}
          style={{ flex: 1, display: "grid", justifyItems: "center", gap: 4, minHeight: "var(--size-touch-min)",
            background: "transparent", border: "none", cursor: "pointer", position: "relative",
            color: active ? "var(--color-text-primary)" : "var(--color-text-tertiary)" }}>
          <span style={{ position: "relative" }}>
            <Icon name={it.icon} size={22} />
            {it.badge ? <span className="ds-numeric" style={{ position: "absolute", top: -6, insetInlineEnd: -10, minWidth: 16, height: 16,
              padding: "0 4px", borderRadius: 999, background: "var(--color-deal)", color: "var(--color-deal-on)",
              fontSize: 10, lineHeight: "16px", textAlign: "center" }}>{it.badge}</span> : null}
          </span>
          <span style={{ fontSize: "var(--text-micro-size)", fontWeight: active ? "var(--weight-semibold)" : "var(--weight-regular)" }}>{it.label}</span>
        </button>;
      })}
    </nav>
  );
}
