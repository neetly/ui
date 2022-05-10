import { CloseIcon } from "@neetly/icons";
import * as Ariakit from "ariakit";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { VisuallyHidden } from "../VisuallyHidden";
import styles from "./Dialog.module.scss";

type DialogOwnProps = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

type DialogProps = DialogOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof DialogOwnProps>;

const Dialog = ({
  className,
  open,
  onClose,
  children,
  ...props
}: DialogProps) => {
  const state = Ariakit.useDialogState({
    visible: open,
    setVisible: () => onClose?.(),
    animated: true,
  });

  if (!state.mounted) {
    return null;
  }

  return (
    <Ariakit.Dialog
      className={classNames(styles.dialog, className)}
      backdropProps={{ className: styles.container }}
      state={state}
      {...props}
    >
      {children}

      <Ariakit.DialogDismiss>
        <CloseIcon />
        <VisuallyHidden>Close</VisuallyHidden>
      </Ariakit.DialogDismiss>
    </Ariakit.Dialog>
  );
};

export { Dialog };
export type { DialogProps };
