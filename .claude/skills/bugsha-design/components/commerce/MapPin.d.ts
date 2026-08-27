import * as React from "react";
export interface MapPinProps {
  price: number;
  currency?: string;
  selected?: boolean;
  soldOut?: boolean;
  style?: React.CSSProperties;
}
export declare function MapPin(props: MapPinProps): JSX.Element;
