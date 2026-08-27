import * as React from "react";
export interface InputProps {
  label?: string;
  icon?: string;
  hint?: string;
  error?: string;
  suffix?: string;
  placeholder?: string;
  value?: string;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  style?: React.CSSProperties;
}
export declare function Input(props: InputProps): JSX.Element;
