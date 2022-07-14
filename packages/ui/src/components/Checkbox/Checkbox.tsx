import { CheckboxCheckedIcon } from "@neetly/icons";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./Checkbox.module.scss";

type CheckboxOwnProps = {
  className?: string;
  label?: ReactNode;
  disabled?: boolean;
};

type CheckboxProps = CheckboxOwnProps &
  Omit<ComponentPropsWithoutRef<"input">, keyof CheckboxOwnProps>;

const Checkbox = forwardRef(
  (
    { className, label, disabled, ...props }: CheckboxProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    const hasLabel = label !== null && label !== undefined;

    return (
      <label
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : undefined}
      >
        <input
          ref={forwardedRef}
          className={styles.checkbox}
          type="checkbox"
          disabled={disabled}
          {...props}
        />
        <span className={styles.content}>
          <span className={styles.checked}>
            <CheckboxCheckedIcon className={styles.checkedIcon} />
          </span>
        </span>
        {hasLabel && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Checkbox.displayName = "Checkbox";
}

export { Checkbox };
export type { CheckboxProps };
