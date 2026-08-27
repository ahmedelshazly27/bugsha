import React from "react";
import { Icon } from "./Icon.jsx";
/** Filter / cuisine / dietary chip. Selected state is filled, never merely tinted (glare legibility). */
export function Chip({ children, selected, icon, count, onClick, style, ...rest }) {
  return (
    <button onClick={onClick} aria-pressed={selected} style={{
      display: "inline-flex", alignItems: "center", gap: "var(--space-75)", height: 36, padding: "0 var(--space-150)",
      borderRadius: "var(--radius-chip)", fontSize: "var(--text-label-size)", fontWeight: "var(--weight-medium)", cursor: "pointer",
      background: selected ? "var(--color-surface-inverse)" : "var(--color-surface-raised)",
      color: selected ? "var(--color-text-inverse)" : "var(--color-text-primary)",
      border: "1px solid " + (selected ? "var(--color-border-strong)" : "var(--color-border-default)"),
      transition: "background var(--motion-duration-fast) linear", ...style }} {...rest}>
      {icon && <Icon name={icon} size={14} />}{children}
      {count != null && <span className="ds-numeric" style={{ opacity: .7 }}>{count}</span>}
    </button>
  );
}
