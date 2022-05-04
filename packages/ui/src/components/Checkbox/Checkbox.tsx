import classNames from "classnames";
import type { ElementType } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./Checkbox.module.scss";

type CheckboxOwnProps = {
  className?: string;
  label?: string;
};

type CheckboxProps<Element extends ElementType> = //
  PolymorphicProps<Element, CheckboxOwnProps>;

const Checkbox = createPolymorphicComponent(
  "Checkbox",
  <Element extends ElementType>({
    as,
    className,
    label,
    ...props
  }: CheckboxProps<Element>) => {
    const Component = as ?? "input";

    return (
      <label className={classNames(styles.container, className)}>
        <Component className={styles.checkbox} type="checkbox" {...props} />
        <span className={styles.content}></span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

export { Checkbox };
export type { CheckboxOwnProps, CheckboxProps };
