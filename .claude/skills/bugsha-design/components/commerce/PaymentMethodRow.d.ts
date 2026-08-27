import * as React from "react";
export interface PaymentMethodRowProps {
  method?: "knet" | "applepay" | "card";
  selected?: boolean;
  detail?: string;
  onSelect?: () => void;
  /** Override the method name (Arabic UI). */
  label?: React.ReactNode;
  /** Override the redirect/auth hint (Arabic UI). */
  hint?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function PaymentMethodRow(props: PaymentMethodRowProps): JSX.Element;
