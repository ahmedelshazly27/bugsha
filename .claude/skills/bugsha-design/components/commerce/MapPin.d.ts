import * as React from "react";
export interface MapPinProps {
  price: number;
  currency?: string;
  /** Minor-unit digits. Defaults to 3 for KD and 2 otherwise. */
  decimals?: number;
  selected?: boolean;
  soldOut?: boolean;
  style?: React.CSSProperties;
}
export declare function MapPin(props: MapPinProps): JSX.Element;
