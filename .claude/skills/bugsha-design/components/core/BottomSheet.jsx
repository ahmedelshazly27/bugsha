import React from "react";
import { IconButton } from "./IconButton.jsx";
/** Modal sheet for bag detail, payment, filters. Drag handle + explicit close; never dismiss-only-by-drag. */
export function BottomSheet({ open = true, title, onClose, children, footer, style }) {
  if (!open) return null;
  return (
    <div style={{ position: "absolute", inset: 0, display: "grid", alignItems: "end", background: "var(--color-surface-overlay)", zIndex: 40 }}>
      <div style={{ background: "var(--color-surface-raised)", borderStartStartRadius: "var(--radius-sheet)", borderStartEndRadius: "var(--radius-sheet)",
        boxShadow: "var(--elevation-sheet)", maxHeight: "92%", display: "grid", gridTemplateRows: "auto 1fr auto",
        animation: "none", ...style }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "var(--space-200)",
          padding: "var(--space-150) var(--space-200)", borderBottom: "1px solid var(--color-border-subtle)" }}>
          <strong style={{ fontFamily: "var(--font-display)", fontSize: "var(--text-title-size)" }}>{title}</strong>
          <IconButton icon="x" label="Close" onClick={onClose} />
        </div>
        <div style={{ overflow: "auto", padding: "var(--space-200)" }}>{children}</div>
        {footer && <div style={{ padding: "var(--space-200)", borderTop: "1px solid var(--color-border-subtle)",
          paddingBottom: "calc(var(--space-200) + var(--layout-safe-bottom) / 2)" }}>{footer}</div>}
      </div>
    </div>
  );
}
