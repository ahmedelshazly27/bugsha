import * as React from "react";
/**
 * @startingPoint section="Core" subtitle="Full button hierarchy across all five tones" viewport="700x160"
 */
export interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "deal" | "danger";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  /** Icon name rendered before the label. */
  iconStart?: string;
  /** Icon name rendered after the label; auto-mirrors in RTL. */
  iconEnd?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: React.MouseEventHandler;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Button(props: ButtonProps): JSX.Element;
