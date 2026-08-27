import React from "react";
import { Icon } from "./Icon.jsx";
const H = { sm: "var(--size-control-sm)", md: "var(--size-control-md)", lg: "var(--size-control-lg)" };
const PAD = { sm: "0 var(--space-150)", md: "0 var(--space-250)", lg: "0 var(--space-300)" };
const FS = { sm: "var(--text-label-size)", md: "var(--text-body-size)", lg: "var(--text-body-lg-size)" };
const TONE = {
  primary: { background: "var(--color-brand-primary)", color: "var(--color-text-on-brand)", border: "var(--border-card) solid var(--color-border-strong)" },
  secondary: { background: "var(--color-surface-raised)", color: "var(--color-text-primary)", border: "1px solid var(--color-border-default)" },
  ghost: { background: "transparent", color: "var(--color-text-primary)", border: "1px solid transparent" },
  deal: { background: "var(--color-deal)", color: "var(--color-deal-on)", border: "var(--border-card) solid var(--color-border-strong)" },
  danger: { background: "var(--color-error)", color: "#fff", border: "var(--border-card) solid transparent" },
};
/** The full button hierarchy. Primary is the single reserve/pay action per screen. */
export function Button({ variant = "primary", size = "md", fullWidth, iconStart, iconEnd, loading, disabled, children, style, ...rest }) {
  const [press, setPress] = React.useState(false);
  return (
    <button disabled={disabled || loading} onPointerDown={() => setPress(true)} onPointerUp={() => setPress(false)} onPointerLeave={() => setPress(false)}
      style={{
        display: "inline-flex", alignItems: "center", justifyContent: "center", gap: "var(--space-100)",
        minHeight: H[size], height: H[size], padding: PAD[size], width: fullWidth ? "100%" : undefined,
        fontFamily: "var(--font-body)", fontSize: FS[size], fontWeight: "var(--weight-semibold)",
        letterSpacing: "var(--tracking-normal)", borderRadius: "var(--radius-control)", cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1, transition: "transform var(--motion-duration-fast) var(--motion-ease-brand), background var(--motion-duration-fast) linear",
        transform: press ? "scale(var(--motion-press-scale))" : "none", ...TONE[variant], ...style,
      }} {...rest}>
      {iconStart && <Icon name={iconStart} size={size === "sm" ? 16 : 20} />}
      <span style={{ opacity: loading ? 0.6 : 1 }}>{loading ? "…" : children}</span>
      {iconEnd && <Icon name={iconEnd} size={size === "sm" ? 16 : 20} mirror />}
    </button>
  );
}
