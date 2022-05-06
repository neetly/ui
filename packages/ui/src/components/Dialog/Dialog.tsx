import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./Dialog.module.scss";

type DialogOwnProps = {
  className?: string;
  open?: boolean;
  onClose?: () => void;
  children?: ReactNode;
};

type DialogProps<Element extends ElementType> = //
  PolymorphicProps<Element, DialogOwnProps>;

const Dialog = createPolymorphicComponent(
  "Dialog",
  <Element extends ElementType = "dialog">({
    as,
    className,
    children,
    ...props
  }: DialogProps<Element>) => {
    const Component = as ?? "dialog";

    return (
      <Component className={classNames(styles.dialog, className)} {...props}>
        {children}
      </Component>
    );
  },
);

export { Dialog };
export type { DialogOwnProps, DialogProps };
