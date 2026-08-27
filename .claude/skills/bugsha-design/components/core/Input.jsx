import React from "react";
import { Icon } from "./Icon.jsx";
/** Text / search / numeric field. Label is always visible — placeholder-only fields fail in Arabic. */
export function Input({ label, icon, hint, error, suffix, style, ...rest }) {
  return (
    <label style={{ display: "grid", gap: "var(--space-75)", ...style }}>
      {label && <span style={{ fontSize: "var(--text-label-size)", fontWeight: "var(--weight-medium)", color: "var(--color-text-secondary)" }}>{label}</span>}
      <span style={{ display: "flex", alignItems: "center", gap: "var(--space-100)", minHeight: "var(--size-control-md)",
        padding: "0 var(--space-150)", background: "var(--color-surface-raised)", borderRadius: "var(--radius-control)",
        border: "1px solid " + (error ? "var(--color-error)" : "var(--color-border-default)") }}>
        {icon && <Icon name={icon} size={18} style={{ color: "var(--color-text-tertiary)" }} />}
        <input style={{ flex: 1, minWidth: 0, border: "none", outline: "none", background: "transparent", fontSize: "var(--text-body-size)" }} {...rest} />
        {suffix && <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-tertiary)" }}>{suffix}</span>}
      </span>
      {(hint || error) && <span style={{ fontSize: "var(--text-caption-size)", color: error ? "var(--color-error)" : "var(--color-text-tertiary)" }}>{error || hint}</span>}
    </label>
  );
}
