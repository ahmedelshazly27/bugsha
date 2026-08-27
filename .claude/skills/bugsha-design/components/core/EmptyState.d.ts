import * as React from "react";
export interface EmptyStateProps {
  icon?: string;
  title?: React.ReactNode;
  body?: React.ReactNode;
  actionLabel?: string;
  onAction?: () => void;
  style?: React.CSSProperties;
}
export declare function EmptyState(props: EmptyStateProps): JSX.Element;
