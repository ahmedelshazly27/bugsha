import * as React from "react";
export interface ListRowProps {
  /** Lucide glyph name for the leading icon. */
  icon?: string;
  label: React.ReactNode;
  /** Trailing text, or a control (Switch, SegmentedControl). */
  value?: React.ReactNode;
  /** Show the trailing chevron — mirrors automatically in RTL. */
  chevron?: boolean;
  onClick?: () => void;
  style?: React.CSSProperties;
}
export declare function ListRow(props: ListRowProps): JSX.Element;
