import * as React from "react";
export interface BannerProps {
  tone?: "info" | "fresh" | "time" | "offline" | "error";
  title?: React.ReactNode;
  action?: React.ReactNode;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Banner(props: BannerProps): JSX.Element;
