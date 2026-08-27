import React from "react";
import { Icon } from "./Icon.jsx";
/** Square 44pt-minimum icon-only control. Always pass a label — it becomes aria-label in both languages. */
export function IconButton({ icon, label, variant = "ghost", size = 44, mirror, style, ...rest }) {
  const tone = variant === "solid"
    ? { background: "var(--color-surface-inverse)", color: "var(--color-text-inverse)", border: "none" }
    : variant === "outline"
    ? { background: "var(--color-surface-raised)", color: "var(--color-text-primary)", border: "1px solid var(--color-border-default)" }
    : { background: "transparent", color: "var(--color-text-primary)", border: "none" };
  return (
    <button aria-label={label} title={label} style={{ width: size, height: size, display: "grid", placeItems: "center",
      borderRadius: "var(--radius-control)", cursor: "pointer", ...tone, ...style }} {...rest}>
      <Icon name={icon} size={Math.round(size * 0.45)} mirror={mirror} />
    </button>
  );
}
