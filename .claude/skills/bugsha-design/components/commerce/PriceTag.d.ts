import * as React from "react";
export interface PriceTagProps {
  now: number;
  was?: number;
  currency?: string;
  size?: "md" | "lg";
  showPercent?: boolean;
  style?: React.CSSProperties;
}
export declare function PriceTag(props: PriceTagProps): JSX.Element;
