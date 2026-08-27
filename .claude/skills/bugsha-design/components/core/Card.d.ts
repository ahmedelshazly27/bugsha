import * as React from "react";
export interface CardProps {
  padded?: boolean;
  interactive?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;
