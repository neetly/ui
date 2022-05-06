import classNames from "classnames";
import type {
  ComponentPropsWithoutRef,
  ReactNode,
  SyntheticEvent,
} from "react";
import { useLayoutEffect, useRef } from "react";

import styles from "./Dialog.module.scss";

declare module "react" {
  interface DOMAttributes<T> {
    onClose?: React.ReactEventHandler<T> | undefined;
    onCancel?: React.ReactEventHandler<T> | undefined;
  }
}

type DialogOwnProps = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

type DialogProps = DialogOwnProps &
  Omit<ComponentPropsWithoutRef<"dialog">, keyof DialogOwnProps>;

const Dialog = ({
  className,
  open = true,
  onClose,
  children,
  ...props
}: DialogProps) => {
  const ref = useRef<HTMLDialogElement>(null);

  useLayoutEffect(() => {
    if (ref.current) {
      if (open && !ref.current.open) {
        ref.current.showModal();
      }
      if (!open && ref.current.open) {
        ref.current.close();
      }
    }
  }, [open]);

  const onCancel = (event: SyntheticEvent) => {
    event.preventDefault();
    onClose?.();
  };

  return (
    <dialog
      ref={ref}
      className={classNames(styles.dialog, className)}
      onCancel={onCancel}
      {...props}
    >
      {children}
    </dialog>
  );
};

export { Dialog };
export type { DialogProps };
