import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./VisuallyHidden.module.scss";

type VisuallyHiddenOwnProps = {
  className?: string;
  children?: ReactNode;
};

type VisuallyHiddenProps<Element extends ElementType> = //
  PolymorphicProps<Element, VisuallyHiddenOwnProps>;

const VisuallyHidden = createPolymorphicComponent(
  "VisuallyHidden",
  <Element extends ElementType = "span">({
    as,
    className,
    children,
    ...props
  }: VisuallyHiddenProps<Element>) => {
    const Component = as ?? "span";

    return (
      <Component
        className={classNames(styles.visuallyHidden, className)}
        {...props}
      >
        {children}
      </Component>
    );
  },
);

export { VisuallyHidden };
export type { VisuallyHiddenOwnProps, VisuallyHiddenProps };
