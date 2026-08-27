import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Badge } from "../core/Badge.jsx";
import { PriceTag } from "./PriceTag.jsx";
import { CoverPlate } from "./CoverPlate.jsx";
import { CountdownPill } from "./CountdownPill.jsx";
/** The core object of the marketplace. layout: "card" (browse grid), "row" (compact list), "hero" (featured). */
export function BagCard({ partner, title = "Surprise Bag", category = "other", cover, priceNow, priceWas, currency = "KD",
  day, from, to, distanceKm, bagsLeft, leftFormat, rating, ratingCount, tags = [], minutesLeft, countdownFormat, saved, layout = "card", onClick, style }) {
  const row = layout === "row", hero = layout === "hero";
  const meta = (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-150)", flexWrap: "wrap",
      fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="clock" size={13} /><span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate" }}>{from}–{to}</span></span>
      {distanceKm != null && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="map-pin" size={13} /><span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate" }}>{distanceKm} km</span></span>}
      {rating != null && <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}><Icon name="star" size={13} style={{ fill: "currentColor" }} /><span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate" }}>{rating.toFixed(1)}{ratingCount ? " (" + ratingCount + ")" : ""}</span></span>}
    </div>
  );
  return (
    <article onClick={onClick} style={{ display: row ? "flex" : "block", gap: "var(--space-150)", cursor: onClick ? "pointer" : undefined,
      background: "var(--color-surface-raised)", borderRadius: "var(--radius-card)", overflow: "hidden",
      border: "var(--border-card) solid var(--color-border-subtle)", boxShadow: "var(--elevation-card)", ...style }}>
      <CoverPlate src={cover} category={category} label={!cover ? category : undefined}
        height={row ? 96 : hero ? 200 : 132} radius="0"
        style={{ width: row ? 96 : "100%", flex: "none" }}>
        <div style={{ position: "absolute", insetInlineStart: 8, top: 8, display: "flex", gap: 6 }}>
          {bagsLeft != null && bagsLeft <= 3 && <Badge tone="urgent">{leftFormat ? leftFormat(bagsLeft) : bagsLeft + " left"}</Badge>}
          {day && !row && <Badge tone="neutral">{day}</Badge>}
        </div>
        {saved != null && !row && <span style={{ position: "absolute", insetInlineEnd: 8, top: 8, width: 32, height: 32, borderRadius: 999,
          background: "var(--color-surface-raised)", display: "grid", placeItems: "center",
          color: saved ? "var(--color-deal)" : "var(--color-text-secondary)" }}>
          <Icon name="heart" size={16} style={{ fill: saved ? "currentColor" : "none" }} /></span>}
      </CoverPlate>
      <div style={{ flex: 1, minWidth: 0, padding: row ? "var(--space-150) var(--space-150) var(--space-150) 0" : "var(--space-150)", display: "grid", gap: "var(--space-75)" }}>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", gap: "var(--space-100)", minWidth: 0 }}>
          <strong style={{ fontFamily: "var(--font-display)", fontSize: hero ? "var(--text-title-size)" : "var(--text-headline-size)",
            lineHeight: 1.25, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap", minWidth: 0 }}>{partner}</strong>
          {minutesLeft != null && <CountdownPill minutesLeft={minutesLeft} format={countdownFormat} style={{ flex: "none" }} />}
        </div>
        <span style={{ fontSize: "var(--text-label-size)", color: "var(--color-text-secondary)" }}>{title}</span>
        {meta}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "var(--space-100)", marginTop: 2 }}>
          <PriceTag now={priceNow} was={priceWas} currency={currency} size={hero ? "lg" : "md"} />
          <div style={{ display: "flex", gap: 4, flexWrap: "wrap" }}>{tags.slice(0, 2).map(t => <Badge key={t} tone="neutral">{t}</Badge>)}</div>
        </div>
      </div>
    </article>
  );
}
