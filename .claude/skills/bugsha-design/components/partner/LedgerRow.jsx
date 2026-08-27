import React from "react";
import { Icon } from "../core/Icon.jsx";
/** One line of the PAFN-facing compliance ledger: listed → window → collected, with the attestation flag. */
export function LedgerRow({ orderId, listedAt, windowEnd, collectedAt, attested, style }) {
  return (
    <div className="ds-numeric" style={{ display: "grid", gridTemplateColumns: "1.1fr 1fr 1fr 1fr auto", gap: "var(--space-200)",
      alignItems: "center", padding: "var(--space-100) var(--space-200)", fontSize: "var(--text-caption-size)",
      borderBottom: "1px solid var(--color-border-subtle)", background: "var(--color-partner-surface)", ...style }}>
      <span style={{ fontWeight: "var(--weight-semibold)" }}>{orderId}</span>
      <span style={{ color: "var(--color-text-secondary)" }}>{listedAt}</span>
      <span style={{ color: "var(--color-text-secondary)" }}>{windowEnd}</span>
      <span style={{ color: collectedAt ? "var(--color-text-primary)" : "var(--color-text-tertiary)" }}>{collectedAt || "—"}</span>
      <Icon name={attested ? "circle-check" : "triangle-alert"} size={16}
        style={{ color: attested ? "var(--color-fresh)" : "var(--color-time)" }} title={attested ? "Attested" : "Attestation missing"} />
    </div>
  );
}
