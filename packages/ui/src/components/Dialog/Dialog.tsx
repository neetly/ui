import classNames from "classnames";
import type { ComponentPropsWithoutRef } from "react";

import styles from "./Dialog.module.scss";

type DialogProps = ComponentPropsWithoutRef<"dialog"> & {
  open?: boolean;
  onClose?: () => void;
};

const Dialog = ({ className, children, ...props }: DialogProps) => {
  return (
    <dialog className={classNames(styles.dialog, className)} {...props}>
      {children}
    </dialog>
  );
};

export { Dialog };
export type { DialogProps };
