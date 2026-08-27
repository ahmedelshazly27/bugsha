import React from "react";
import { Icon } from "../core/Icon.jsx";
/** Time-remaining pill. Tone escalates by real time only — never by inventory, never faked.
 *  > 60 min neutral · 15–60 min time tone · < 15 min urgent tone with a slow 2s pulse. */
export function CountdownPill({ minutesLeft, label, format, state = "browse", style }) {
  const urgent = minutesLeft != null && minutesLeft <= 15;
  const soon = minutesLeft != null && minutesLeft <= 60;
  const [bg, fg] = urgent ? ["var(--color-time-urgent-tint)", "var(--color-time-urgent)"]
    : soon ? ["var(--color-time-tint)", "var(--color-time)"]
    : state === "reserved" ? ["var(--color-fresh-tint)", "var(--color-fresh)"]
    : ["var(--color-surface-sunken)", "var(--color-text-secondary)"];
  const txt = label || (format ? format(minutesLeft) : (minutesLeft >= 60 ? Math.floor(minutesLeft / 60) + "h " + (minutesLeft % 60) + "m left" : minutesLeft + " min left"));
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-75)", background: bg, color: fg,
      padding: "4px var(--space-100)", borderRadius: "var(--radius-chip)", fontSize: "var(--text-caption-size)",
      fontWeight: "var(--weight-semibold)", border: "var(--border-card) solid transparent",
      animation: urgent ? "ds-pulse var(--motion-countdown-pulse-period) var(--motion-ease-out) infinite" : "none", ...style }}>
      <Icon name={state === "reserved" ? "timer" : "clock"} size={13} />
      <span className="ds-numeric" dir="auto" style={{ whiteSpace: "nowrap" }}>{txt}</span>
    </span>
  );
}
