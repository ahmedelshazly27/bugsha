import * as React from "react";
/**
 * @startingPoint section="Marketplace" subtitle="Order code + slide-to-redeem" viewport="420x360"
 */
export interface RedemptionCodeProps {
  code: string;
  partner?: string;
  /** Pickup window string, e.g. "21:30–22:30". */
  window?: string;
  quantity?: number;
  state?: "ready" | "redeemed";
  /** Localised noun for one bag. */
  bagLabel?: string;
  slideLabel?: string;
  doneLabel?: string;
  onRedeem?: () => void;
  style?: React.CSSProperties;
}
export declare function RedemptionCode(props: RedemptionCodeProps): JSX.Element;
