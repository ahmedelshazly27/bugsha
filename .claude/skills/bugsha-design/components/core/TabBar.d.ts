import * as React from "react";
export interface TabBarProps {
  items: Array<{ value: string; label: string; icon: string; badge?: number | string }>;
  value: string;
  onChange?: (value: string) => void;
  style?: React.CSSProperties;
}
export declare function TabBar(props: TabBarProps): JSX.Element;
