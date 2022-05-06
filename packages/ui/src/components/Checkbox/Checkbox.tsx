import { CheckIcon } from "@neetly/icons";
import classNames from "classnames";
import type { ElementType } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./Checkbox.module.scss";

type CheckboxOwnProps = {
  className?: string;
  label?: string;
  disabled?: boolean;
};

type CheckboxProps<Element extends ElementType> = //
  PolymorphicProps<Element, CheckboxOwnProps>;

const Checkbox = createPolymorphicComponent(
  "Checkbox",
  <Element extends ElementType = "input">({
    as,
    className,
    label,
    disabled,
    ...props
  }: CheckboxProps<Element>) => {
    const Component = as ?? "input";

    return (
      <label
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : null}
      >
        <Component
          className={styles.checkbox}
          type="checkbox"
          disabled={disabled}
          {...props}
        />
        <span className={styles.content}>
          <span className={styles.indicator}>
            <CheckIcon className={styles.indicatorIcon} />
          </span>
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

export { Checkbox };
export type { CheckboxOwnProps, CheckboxProps };
