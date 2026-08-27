import * as React from "react";
export interface PayoutCardProps {
  amount: number;
  currency?: string;
  period?: string;
  bags?: number;
  nextDate?: string;
  /** Overrides the generated "N bundles sold · transfer <date>" line — pass a localised string. */
  note?: string;
  style?: React.CSSProperties;
}
export declare function PayoutCard(props: PayoutCardProps): JSX.Element;
