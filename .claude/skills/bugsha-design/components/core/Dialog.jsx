import React from "react";
import { Button } from "./Button.jsx";
/** Centered confirm dialog — cancellations, refunds, "you're running late". */
export function Dialog({ open = true, title, body, confirmLabel = "Confirm", cancelLabel = "Cancel", tone = "primary", onConfirm, onCancel }) {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", placeItems: "center", padding: "var(--space-300)",
      background: "var(--color-surface-overlay)", zIndex: 50 }}>
      <div style={{ width: "100%", maxWidth: 340, background: "var(--color-surface-raised)", borderRadius: "var(--radius-card)",
        border: "var(--border-card) solid var(--color-border-subtle)", boxShadow: "var(--elevation-raised)", padding: "var(--space-300)", display: "grid", gap: "var(--space-200)" }}>
        <strong style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-title-size)", lineHeight: "var(--text-title-line)" }}>{title}</strong>
        <p style={{ margin: 0, color: "var(--color-text-secondary)" }}>{body}</p>
        <div style={{ display: "flex", gap: "var(--space-100)" }}>
          <Button variant="secondary" fullWidth onClick={onCancel}>{cancelLabel}</Button>
          <Button variant={tone} fullWidth onClick={onConfirm}>{confirmLabel}</Button>
        </div>
      </div>
    </div>
  );
}
