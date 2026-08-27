import * as React from "react";
export interface SwitchProps {
  checked?: boolean;
  onChange?: (next: boolean) => void;
  /** Required for a11y — becomes aria-label, so pass the localised string. */
  label: string;
  disabled?: boolean;
  style?: React.CSSProperties;
}
export declare function Switch(props: SwitchProps): JSX.Element;
