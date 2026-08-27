import React from "react";
import { Icon } from "./Icon.jsx";
/** Rating display (compact) and post-pickup input (size lg + onRate). */
export function RatingStars({ value = 0, count, size = 14, onRate, style }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 2, ...style }}>
      {[1, 2, 3, 4, 5].map(i => (
        <span key={i} onClick={onRate ? () => onRate(i) : undefined} style={{ cursor: onRate ? "pointer" : "default",
          color: i <= Math.round(value) ? "var(--color-rating,var(--color-time))" : "var(--color-text-tertiary)",
          display: "grid", placeItems: "center", padding: onRate ? 6 : 0 }}>
          <Icon name="star" size={size} style={{ fill: i <= Math.round(value) ? "currentColor" : "none" }} />
        </span>
      ))}
      {count != null && <span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate", marginInlineStart: 6, fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{value.toFixed(1)} ({count})</span>}
    </span>
  );
}
