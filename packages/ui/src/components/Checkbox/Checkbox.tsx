import { CheckIcon } from "@neetly/icons";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { forwardRef } from "react";

import styles from "./Checkbox.module.scss";

type CheckboxProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

const Checkbox = forwardRef(
  (
    { className, label, disabled, ...props }: CheckboxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : null}
      >
        <input
          ref={forwardedRef}
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

if (process.env.NODE_ENV === "development") {
  Checkbox.displayName = "Checkbox";
}

export { Checkbox };
export type { CheckboxProps };
