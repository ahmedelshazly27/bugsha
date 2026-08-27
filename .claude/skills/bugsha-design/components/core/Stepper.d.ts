import * as React from "react";
export interface StepperProps {
  value: number;
  min?: number;
  /** Cap at bags remaining — never allow over-reservation. */
  max?: number;
  onChange?: (value: number) => void;
  style?: React.CSSProperties;
}
export declare function Stepper(props: StepperProps): JSX.Element;
