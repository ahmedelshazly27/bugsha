import * as React from "react";
export interface CoverPlateProps {
  /** Real partner or storefront photo. Omit to fall back to the honest category plate. */
  src?: string;
  category?: "bakery" | "cafe" | "meals" | "grocery" | "other";
  height?: number;
  label?: string;
  radius?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}
export declare function CoverPlate(props: CoverPlateProps): JSX.Element;
