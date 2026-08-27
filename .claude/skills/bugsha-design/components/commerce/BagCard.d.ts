import * as React from "react";
/**
 * @startingPoint section="Marketplace" subtitle="Bag card in all three layouts" viewport="700x420"
 */
export interface BagCardProps {
  partner: string;
  title?: string;
  category?: "bakery" | "cafe" | "meals" | "grocery" | "other";
  cover?: string;
  priceNow: number;
  priceWas?: number;
  currency?: string;
  day?: string;
  from: string;
  to: string;
  distanceKm?: number;
  bagsLeft?: number;
  /** Localised formatter for the scarcity badge, e.g. n => `باقي ${n}`. */
  leftFormat?: (n: number) => string;
  rating?: number;
  ratingCount?: number;
  tags?: string[];
  minutesLeft?: number;
  /** Localised countdown formatter passed through to CountdownPill. */
  countdownFormat?: (minutes: number) => string;
  saved?: boolean;
  layout?: "card" | "row" | "hero";
  onClick?: React.MouseEventHandler;
  style?: React.CSSProperties;
}
export declare function BagCard(props: BagCardProps): JSX.Element;
