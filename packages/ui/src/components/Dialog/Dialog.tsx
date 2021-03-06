import { CloseIcon } from "@neetly/icons";
import * as Ariakit from "ariakit";
import classNames from "classnames";
import type { HTMLAttributes, ReactNode } from "react";

import { Button } from "../Button";
import styles from "./Dialog.module.scss";

type DialogOwnProps = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  closeable?: boolean;
  dismissible?: boolean;
  children?: ReactNode;
};

type DialogProps = DialogOwnProps &
  Omit<HTMLAttributes<HTMLDivElement>, keyof DialogOwnProps>;

const Dialog = ({
  className,
  open = true,
  onClose,
  closeable: isCloseable = true,
  dismissible: isDismissible = isCloseable,
  children,
  ...props
}: DialogProps) => {
  const state = Ariakit.useDialogState({
    open,
    setOpen: () => onClose?.(),
    animated: 150,
  });

  if (!state.mounted) {
    return null;
  }

  return (
    <Ariakit.Dialog
      className={classNames(styles.dialog, className)}
      backdropProps={{ className: styles.container }}
      state={state}
      hideOnEscape={isDismissible}
      hideOnInteractOutside={isDismissible}
      {...props}
    >
      {children}

      {isCloseable ? (
        <Ariakit.DialogDismiss
          as={Button}
          className={styles.closeButton}
          variant="plain"
          color="secondary"
          icon={CloseIcon}
        >
          Close
        </Ariakit.DialogDismiss>
      ) : (
        // https://github.com/ariakit/ariakit/issues/1356
        <Ariakit.DialogDismiss hidden />
      )}
    </Ariakit.Dialog>
  );
};

export { Dialog };
export type { DialogOwnProps, DialogProps };
