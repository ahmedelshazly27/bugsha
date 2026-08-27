import * as React from "react";
export interface ChipProps {
  selected?: boolean;
  icon?: string;
  count?: number;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Chip(props: ChipProps): JSX.Element;
