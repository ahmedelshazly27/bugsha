import * as React from "react";
export interface IconButtonProps {
  icon: string;
  /** Required — becomes aria-label. Localise it. */
  label: string;
  variant?: "ghost" | "outline" | "solid";
  size?: number;
  mirror?: boolean;
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}
export declare function IconButton(props: IconButtonProps): JSX.Element;
