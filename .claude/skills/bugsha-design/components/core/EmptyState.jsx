import React from "react";
import { Icon } from "./Icon.jsx";
import { Button } from "./Button.jsx";
/** No results, sold out, no reservations. Always offers one concrete next move. */
export function EmptyState({ icon = "shopping-bag", title, body, actionLabel, onAction, style }) {
  return (
    <div style={{ display: "grid", justifyItems: "center", gap: "var(--space-150)", padding: "var(--space-600) var(--space-300)", textAlign: "center", ...style }}>
      <span style={{ width: 56, height: 56, display: "grid", placeItems: "center", borderRadius: "var(--radius-card)",
        background: "var(--color-surface-sunken)", color: "var(--color-text-tertiary)" }}><Icon name={icon} size={26} /></span>
      <strong style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-title-size)" }}>{title}</strong>
      <p style={{ margin: 0, maxWidth: 280, color: "var(--color-text-secondary)", fontSize: "var(--text-body-size)" }}>{body}</p>
      {actionLabel && <Button variant="secondary" onClick={onAction} style={{ marginTop: "var(--space-100)" }}>{actionLabel}</Button>}
    </div>
  );
}
