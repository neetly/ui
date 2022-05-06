import classNames from "classnames";
import type { ComponentPropsWithoutRef, ForwardedRef } from "react";
import { forwardRef } from "react";

import styles from "./Radio.module.scss";

type RadioProps = ComponentPropsWithoutRef<"input"> & {
  label?: string;
};

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
          <span className={styles.indicator}>
            <span className={styles.indicatorIcon} />
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
