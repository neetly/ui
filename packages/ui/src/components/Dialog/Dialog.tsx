import { CloseIcon } from "@neetly/icons";
import * as Ariakit from "ariakit";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import { Button } from "../Button";
import styles from "./Dialog.module.scss";

type DialogOwnProps = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  closeable?: boolean;
  dismissible?: boolean | "escape-only";
  children?: ReactNode;
};

type DialogProps = DialogOwnProps &
  Omit<ComponentPropsWithoutRef<"div">, keyof DialogOwnProps>;

const Dialog = ({
  className,
  open = true,
  onClose,
  closeable = true,
  dismissible = closeable,
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
      hideOnEscape={dismissible !== false}
      hideOnInteractOutside={dismissible === true}
      {...props}
    >
      {children}

      {closeable && (
        <Ariakit.DialogDismiss
          as={Button}
          className={styles.closeButton}
          variant="text"
          color="secondary"
          icon={CloseIcon}
        >
          Close
        </Ariakit.DialogDismiss>
      )}

      {
        // https://github.com/ariakit/ariakit/issues/1356
        !closeable && !dismissible && <Ariakit.DialogDismiss hidden />
      }
    </Ariakit.Dialog>
  );
};

export { Dialog };
export type { DialogProps };
