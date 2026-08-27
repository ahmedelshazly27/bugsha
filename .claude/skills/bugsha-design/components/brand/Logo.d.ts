import * as React from "react";
/**
 * @startingPoint section="Brand" subtitle="Bugsha mark and wordmark lockups" viewport="700x220"
 */
export interface LogoProps {
  /** horizontal (default), stacked, or mark-only. */
  lockup?: "horizontal" | "stacked" | "mark";
  /** "en" sets the wordmark in Archivo, "ar" in Alexandria. */
  lang?: "en" | "ar";
  /** Mark height in px; the wordmark scales from it. */
  size?: number;
  color?: string;
  /** Colour of the turned-down corner plane. Default #FFFFFF at 42% — lightens the mark on any ground. */
  fold?: string;
  foldOpacity?: number;
  /** Show the ™ on the wordmark. */
  tm?: boolean;
  style?: React.CSSProperties;
}
export declare function Logo(props: LogoProps): JSX.Element;
