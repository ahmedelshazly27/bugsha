import * as React from "react";
export interface PickupWindowProps {
  day?: string;
  from: string;
  to: string;
  note?: string;
  size?: "md" | "lg";
  style?: React.CSSProperties;
}
export declare function PickupWindow(props: PickupWindowProps): JSX.Element;
