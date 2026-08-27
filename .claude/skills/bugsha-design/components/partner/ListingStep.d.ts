import * as React from "react";
export interface ListingStepProps {
  index: number;
  total: number;
  title: string;
  hint?: string;
  done?: boolean;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function ListingStep(props: ListingStepProps): JSX.Element;
