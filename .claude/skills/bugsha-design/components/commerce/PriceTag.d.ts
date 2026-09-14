import * as React from "react";
export interface PriceTagProps {
  now: number;
  was?: number;
  currency?: string;
  /** Minor-unit digits. Defaults to 3 for KD and 2 for every other currency (EGP). */
  decimals?: number;
  size?: "md" | "lg";
  showPercent?: boolean;
  style?: React.CSSProperties;
}
export declare function PriceTag(props: PriceTagProps): JSX.Element;
