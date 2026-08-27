import React from "react";

/** Neutral surface container. Every raised object in the system starts here. */
export function Card({ children, padded = true, interactive, style, ...rest }) {
  return <div style={{ background: "var(--color-surface-raised)", borderRadius: "var(--radius-card)",
    border: "var(--border-card) solid var(--color-border-subtle)", boxShadow: "var(--elevation-card)",
    padding: padded ? "var(--space-200)" : 0, overflow: "hidden",
    cursor: interactive ? "pointer" : undefined,
    transition: "box-shadow var(--motion-duration-base) var(--motion-ease-brand)", ...style }} {...rest}>{children}</div>;
}
