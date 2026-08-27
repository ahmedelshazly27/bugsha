import * as React from "react";
export interface CountdownPillProps {
  /** Minutes until the pickup window closes. */
  minutesLeft?: number;
  label?: string;
  /** Localised formatter, e.g. m => `باقي ${m} دقيقة`. */
  format?: (minutes: number) => string;
  state?: "browse" | "reserved";
  style?: React.CSSProperties;
}
export declare function CountdownPill(props: CountdownPillProps): JSX.Element;
