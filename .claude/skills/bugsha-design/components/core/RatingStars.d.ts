import * as React from "react";
export interface RatingStarsProps {
  value?: number;
  count?: number;
  size?: number;
  /** Pass to turn the display into a rating input (post-pickup review). */
  onRate?: (value: number) => void;
  style?: React.CSSProperties;
}
export declare function RatingStars(props: RatingStarsProps): JSX.Element;
