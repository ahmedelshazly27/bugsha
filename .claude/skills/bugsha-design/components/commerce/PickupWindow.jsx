import React from "react";
import { Icon } from "../core/Icon.jsx";
/** Collect-between display. The window is a promise, so it is always shown in full — never truncated. */
export function PickupWindow({ day = "Tonight", from, to, note, size = "md", style }) {
  const big = size === "lg";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "var(--space-100)", color: "var(--color-text-primary)", ...style }}>
      <Icon name="clock" size={big ? 20 : 16} style={{ color: "var(--color-text-secondary)" }} />
      <div style={{ display: "grid" }}>
        <span style={{ fontSize: big ? "var(--text-body-lg-size)" : "var(--text-label-size)", fontWeight: "var(--weight-semibold)" }}>
          {day} <span className="ds-numeric" dir="ltr" style={{ unicodeBidi: "isolate" }}>{from}–{to}</span>
        </span>
        {note && <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{note}</span>}
      </div>
    </div>
  );
}
