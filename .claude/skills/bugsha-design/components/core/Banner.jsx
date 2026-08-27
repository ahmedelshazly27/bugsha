import React from "react";
import { Icon } from "./Icon.jsx";
const MAP = { info: ["info", "var(--color-info-tint)", "var(--color-info)"], fresh: ["circle-check", "var(--color-fresh-tint)", "var(--color-fresh)"],
  time: ["clock", "var(--color-time-tint)", "var(--color-time)"], offline: ["wifi-off", "var(--color-surface-sunken)", "var(--color-text-secondary)"],
  error: ["triangle-alert", "var(--color-error-tint)", "var(--color-error)"] };
/** Persistent inline message: offline, location off, pickup window changed. */
export function Banner({ tone = "info", title, children, action, style }) {
  const [icon, bg, fg] = MAP[tone] || MAP.info;
  return (
    <div style={{ display: "flex", gap: "var(--space-150)", padding: "var(--space-150)", background: bg,
      borderRadius: "var(--radius-card)", border: "var(--border-card) solid var(--color-border-subtle)", ...style }}>
      <Icon name={icon} size={20} style={{ color: fg, marginTop: 2 }} />
      <div style={{ flex: 1, display: "grid", gap: 2 }}>
        {title && <strong style={{ fontSize: "var(--text-label-size)" }}>{title}</strong>}
        <span style={{ fontSize: "var(--text-caption-size)", lineHeight: "var(--text-body-line)", color: "var(--color-text-secondary)" }}>{children}</span>
      </div>
      {action && <span style={{ fontSize: "var(--text-label-size)", fontWeight: "var(--weight-semibold)", color: fg, alignSelf: "center" }}>{action}</span>}
    </div>
  );
}
