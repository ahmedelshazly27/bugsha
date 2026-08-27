import React from "react";
/** Binary setting toggle. 44pt target, label always passed for screen readers in both languages. */
export function Switch({ checked, onChange, label, disabled, style }) {
  return (
    <button type="button" role="switch" aria-checked={!!checked} aria-label={label} disabled={disabled}
      onClick={() => onChange && onChange(!checked)}
      style={{ width: 46, height: 28, flex: "none", padding: 3, cursor: disabled ? "not-allowed" : "pointer",
        borderRadius: "var(--radius-pill)", border: "none", opacity: disabled ? 0.5 : 1,
        background: checked ? "var(--color-brand-primary)" : "var(--color-border-default)",
        transition: "background var(--motion-duration-fast) var(--motion-ease-standard)",
        display: "flex", justifyContent: checked ? "flex-end" : "flex-start", ...style }}>
      <span style={{ width: 22, height: 22, borderRadius: "var(--radius-pill)", background: "#fff",
        boxShadow: "0 1px 2px rgba(0,0,0,.2)" }} />
    </button>
  );
}
