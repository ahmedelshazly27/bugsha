import * as React from "react";
export interface SegmentedControlProps {
  options: Array<{ value: string; label: React.ReactNode }>;
  value: string;
  onChange?: (value: string) => void;
  fullWidth?: boolean;
  style?: React.CSSProperties;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;
