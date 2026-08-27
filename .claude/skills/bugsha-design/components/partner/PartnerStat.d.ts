import * as React from "react";
export interface PartnerStatProps {
  label: string;
  value: React.ReactNode;
  sub?: string;
  icon?: string;
  tone?: "neutral" | "fresh" | "urgent";
  style?: React.CSSProperties;
}
export declare function PartnerStat(props: PartnerStatProps): JSX.Element;
