import * as React from "react";
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  body?: React.ReactNode;
  confirmLabel?: string;
  cancelLabel?: string;
  tone?: "primary" | "danger";
  onConfirm?: () => void;
  onCancel?: () => void;
}
export declare function Dialog(props: DialogProps): JSX.Element;
