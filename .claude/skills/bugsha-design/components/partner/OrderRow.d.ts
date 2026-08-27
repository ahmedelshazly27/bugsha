import * as React from "react";
export interface OrderRowProps {
  code: string;
  customer: string;
  quantity?: number;
  pickupBy: string;
  status?: "waiting" | "late" | "collected";
  /** Localised noun for one bag. */
  bagLabel?: string;
  /** Localised status text; falls back to the raw status key. */
  statusLabel?: string;
  /** Localised label on the check-in button. Defaults to "Hand over". */
  actionLabel?: string;
  onCheckIn?: () => void;
  style?: React.CSSProperties;
}
export declare function OrderRow(props: OrderRowProps): JSX.Element;
