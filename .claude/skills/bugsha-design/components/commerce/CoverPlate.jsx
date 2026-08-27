import React from "react";
import { Icon } from "../core/Icon.jsx";
const GLYPH = { bakery: "croissant", cafe: "coffee", meals: "utensils", grocery: "shopping-bag", other: "package" };
/** Imagery policy in one component: a real partner/storefront photo when one exists, otherwise an
 *  honest category plate. Never a stock photo of food the bag may not contain. */
export function CoverPlate({ src, category = "other", height = 140, label, radius = "var(--radius-image)", children, style }) {
  return (
    <div style={{ position: "relative", height, borderRadius: radius, overflow: "hidden",
      background: src ? "var(--color-surface-sunken)" : "var(--color-brand-tint)", display: "grid", placeItems: "center", ...style }}>
      {src ? <img src={src} alt={label || ""} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
        : <span style={{ display: "grid", justifyItems: "center", gap: 6, color: "var(--color-text-secondary)" }}>
            <Icon name={GLYPH[category] || GLYPH.other} size={28} />
            {label && <span style={{ fontSize: "var(--text-micro-size)", letterSpacing: "var(--tracking-caps)", textTransform: "uppercase" }}>{label}</span>}
          </span>}
      {children}
    </div>
  );
}
