import React from "react";

/** Loading placeholder. Shimmer is a 1.4s opacity pulse — disabled under prefers-reduced-motion. */
export function Skeleton({ width = "100%", height = 16, radius = "var(--radius-xs)", style }) {
  return <span style={{ display: "block", width, height, borderRadius: radius, background: "var(--color-skeleton)",
    animation: "ds-pulse 1400ms var(--motion-ease-out) infinite", ...style }} />;
}
