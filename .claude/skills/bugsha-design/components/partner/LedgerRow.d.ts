import * as React from "react";
export interface LedgerRowProps {
  orderId: string;
  listedAt: string;
  windowEnd: string;
  collectedAt?: string;
  attested?: boolean;
  style?: React.CSSProperties;
}
export declare function LedgerRow(props: LedgerRowProps): JSX.Element;
