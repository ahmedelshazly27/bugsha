import React from "react";

const TONES = {
  neutral: ["var(--color-surface-sunken)", "var(--color-text-secondary)"],
  fresh: ["var(--color-fresh-tint)", "var(--color-fresh)"],
  time: ["var(--color-time-tint)", "var(--color-time)"],
  urgent: ["var(--color-time-urgent-tint)", "var(--color-time-urgent)"],
  deal: ["var(--color-deal)", "var(--color-deal-on)"],
  info: ["var(--color-info-tint)", "var(--color-info)"],
  error: ["var(--color-error-tint)", "var(--color-error)"],
};
/** Small status label. Tone carries meaning: fresh = quality, time = window, urgent = last 15 min. */
export function Badge({ tone = "neutral", children, uppercase, style, ...rest }) {
  const [bg, fg] = TONES[tone] || TONES.neutral;
  return <span style={{ display: "inline-flex", alignItems: "center", gap: "var(--space-50)", background: bg, color: fg,
    padding: "3px var(--space-100)", borderRadius: "var(--radius-chip)", fontSize: "var(--text-micro-size)",
    lineHeight: "var(--text-micro-line)", fontWeight: "var(--weight-semibold)",
    letterSpacing: uppercase ? "var(--tracking-caps)" : "var(--tracking-normal)",
    textTransform: uppercase ? "uppercase" : "none", ...style }} {...rest}>{children}</span>;
}
