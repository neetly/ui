import { RadioCheckedIcon } from "@neetly/icons";
import classNames from "classnames";
import type { ComponentPropsWithoutRef, ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

import styles from "./Radio.module.scss";

type RadioOwnProps = {
  className?: string;
  label?: ReactNode;
  disabled?: boolean;
};

type RadioProps = RadioOwnProps &
  Omit<ComponentPropsWithoutRef<"input">, keyof RadioOwnProps>;

const Radio = forwardRef(
  (
    { className, label, disabled, ...props }: RadioProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <label
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : null}
      >
        <input
          ref={forwardedRef}
          className={styles.radio}
          type="radio"
          disabled={disabled}
          {...props}
        />
        <span className={styles.content}>
          <span className={styles.checked}>
            <RadioCheckedIcon className={styles.checkedIcon} />
          </span>
        </span>
        <span className={styles.label}>{label}</span>
      </label>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Radio.displayName = "Radio";
}

export { Radio };
export type { RadioProps };
