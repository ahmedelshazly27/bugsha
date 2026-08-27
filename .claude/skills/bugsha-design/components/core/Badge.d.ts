import * as React from "react";
export interface BadgeProps {
  tone?: "neutral" | "fresh" | "time" | "urgent" | "deal" | "info" | "error";
  uppercase?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Badge(props: BadgeProps): JSX.Element;
