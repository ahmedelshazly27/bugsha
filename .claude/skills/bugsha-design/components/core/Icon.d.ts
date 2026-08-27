import * as React from "react";
export interface IconProps {
  /** Lucide glyph name, e.g. "clock", "map-pin". Files live in assets/icons. */
  name: string;
  size?: number;
  strokeWidth?: number;
  /** true for directional glyphs (arrows, chevrons) that must flip in RTL. */
  mirror?: boolean;
  title?: string;
  style?: React.CSSProperties;
}
export declare function Icon(props: IconProps): JSX.Element;
