import React from "react";
import { Icon } from "../core/Icon.jsx";
import { Badge } from "../core/Badge.jsx";
/** One line on tonight's orders board. Status is readable from a metre away on a counter tablet. */
export function OrderRow({ code, customer, quantity = 1, pickupBy, status = "waiting", bagLabel, statusLabel, actionLabel = "Hand over", onCheckIn, style }) {
  const tone = status === "collected" ? "fresh" : status === "late" ? "urgent" : "neutral";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-200)", padding: "var(--space-150) var(--space-200)",
      background: "var(--color-partner-surface)", borderBottom: "1px solid var(--color-border-subtle)", ...style }}>
      <span className="ds-numeric" style={{ fontSize: "var(--text-title-size)", fontWeight: "var(--weight-bold)", letterSpacing: "0.06em", minWidth: 96 }}>{code}</span>
      <span style={{ flex: 1, minWidth: 0, display: "grid" }}>
        <strong style={{ fontSize: "var(--text-body-size)" }}>{customer}</strong>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}><span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate" }}>{quantity}</span> {bagLabel || (quantity > 1 ? "bags" : "bag")} · <span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate" }}>{pickupBy}</span></span>
      </span>
      <Badge tone={tone} uppercase>{statusLabel || status}</Badge>
      {status !== "collected" && <button onClick={onCheckIn} style={{ minHeight: "var(--size-control-md)", padding: "0 var(--space-200)",
        background: "var(--color-brand-primary)", color: "var(--color-text-on-brand)", border: "none",
        borderRadius: "var(--radius-control)", fontWeight: "var(--weight-semibold)", cursor: "pointer" }}>{actionLabel}</button>}
      {status === "collected" && <Icon name="circle-check" size={22} style={{ color: "var(--color-fresh)" }} />}
    </div>
  );
}
