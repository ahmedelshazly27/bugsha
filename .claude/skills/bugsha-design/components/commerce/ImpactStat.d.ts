import * as React from "react";
export interface ImpactStatProps {
  icon?: string;
  value: React.ReactNode;
  unit?: string;
  label?: string;
  tone?: "fresh" | "brand";
  style?: React.CSSProperties;
}
export declare function ImpactStat(props: ImpactStatProps): JSX.Element;
