import React from "react";
import { Icon } from "../core/Icon.jsx";
const LABEL = { knet: ["KNET", "credit-card", "Opens your bank's page"], applepay: ["Apple Pay", "wallet", "Face ID"], card: ["Visa / Mastercard", "credit-card", "Saved card"] };
/** Payment selector. KNET is listed first and always states that it redirects — the redirect is not a failure state. */
export function PaymentMethodRow({ method = "knet", selected, onSelect, detail, label: labelOverride, hint: hintOverride, style }) {
  const [defLabel, icon, defHint] = LABEL[method] || LABEL.card;
  const label = labelOverride || defLabel, hint = hintOverride || defHint;
  return (
    <button onClick={onSelect} aria-pressed={selected} style={{ width: "100%", display: "flex", alignItems: "center", gap: "var(--space-150)",
      minHeight: "var(--size-control-lg)", padding: "var(--space-150)", cursor: "pointer", textAlign: "start",
      background: "var(--color-surface-raised)", borderRadius: "var(--radius-control)",
      border: "1.5px solid " + (selected ? "var(--color-border-focus)" : "var(--color-border-default)"), ...style }}>
      <Icon name={icon} size={20} />
      <span style={{ flex: 1, display: "grid" }}>
        <strong style={{ fontSize: "var(--text-body-size)" }}>{label}</strong>
        <span style={{ fontSize: "var(--text-caption-size)", color: "var(--color-text-secondary)" }}>{detail || hint}</span>
      </span>
      {selected && <Icon name="check" size={18} style={{ color: "var(--color-brand-primary)" }} />}
    </button>
  );
}
