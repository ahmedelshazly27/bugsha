import React from "react";
import { Icon } from "./Icon.jsx";
const ICONS = { success: "circle-check", info: "info", warning: "triangle-alert", error: "triangle-alert" };
const FG = { success: "var(--color-fresh)", info: "var(--color-info)", warning: "var(--color-time)", error: "var(--color-error)" };
/** Transient confirmation. Lives 4s, bottom-anchored above the tab bar, never blocks the primary action. */
export function Toast({ tone = "success", children, action, style }) {
  return (
    <div role="status" style={{ display: "flex", alignItems: "center", gap: "var(--space-150)", padding: "var(--space-150) var(--space-200)",
      background: "var(--color-surface-inverse)", color: "var(--color-text-inverse)", borderRadius: "var(--radius-card)",
      boxShadow: "var(--elevation-raised)", fontSize: "var(--text-body-size)", ...style }}>
      <Icon name={ICONS[tone]} size={20} style={{ color: FG[tone] }} />
      <span style={{ flex: 1 }}>{children}</span>
      {action && <span style={{ fontWeight: "var(--weight-semibold)", color: "var(--color-brand-primary)" }}>{action}</span>}
    </div>
  );
}
