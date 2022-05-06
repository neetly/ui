import classNames from "classnames";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

import styles from "./Dialog.module.scss";

type DialogOwnProps = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

type DialogProps = DialogOwnProps &
  Omit<ComponentPropsWithoutRef<"dialog">, keyof DialogOwnProps>;

const Dialog = ({ className, children, ...props }: DialogProps) => {
  return (
    <dialog className={classNames(styles.dialog, className)} {...props}>
      {children}
    </dialog>
  );
};

export { Dialog };
export type { DialogProps };
