import React from "react";
import { Icon } from "./Icon.jsx";
/** One row of a settings / account list: leading icon, label, trailing value or control, optional chevron. */
export function ListRow({ icon, label, value, chevron, onClick, style }) {
  const Tag = onClick ? "button" : "div";
  return (
    <Tag onClick={onClick} style={{ display: "flex", alignItems: "center", gap: "var(--space-150)",
      width: "100%", minHeight: 52, padding: "var(--space-150) var(--space-200)", textAlign: "start",
      background: "transparent", border: "none", borderBottom: "1px solid var(--color-border-subtle)",
      color: "var(--color-text-primary)", font: "inherit", cursor: onClick ? "pointer" : "default", ...style }}>
      {icon && <Icon name={icon} size={18} style={{ color: "var(--color-text-secondary)", flex: "none" }} />}
      <span style={{ flex: 1, minWidth: 0, fontSize: "var(--text-label-size)", fontWeight: "var(--weight-medium)" }}>{label}</span>
      {typeof value === "string"
        ? <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>{value}</span>
        : value}
      {chevron && <Icon name="chevron-right" size={16} mirror style={{ color: "var(--color-text-tertiary)", flex: "none" }} />}
    </Tag>
  );
}
