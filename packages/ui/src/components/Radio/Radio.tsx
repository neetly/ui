import { RadioCheckedIcon } from "@neetly/icons";
import classNames from "classnames";
import type {
  AriaAttributes,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import styles from "./Radio.module.scss";

type RadioOwnProps = {
  className?: string;
  label?: ReactNode;
  invalid?: boolean;
  "aria-invalid"?: AriaAttributes["aria-invalid"];
  disabled?: boolean;
};

type RadioProps = RadioOwnProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof RadioOwnProps>;

const Radio = forwardRef(
  (
    {
      className,
      label,
      invalid: _invalid,
      "aria-invalid": ariaInvalid = _invalid,
      disabled: isDisabled,
      ...props
    }: RadioProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    const hasLabel = label !== null && label !== undefined;
    const isInvalid = ariaInvalid && ariaInvalid !== "false";

    return (
      <label
        className={classNames(styles.container, className)}
        data-invalid={isInvalid ? "" : undefined}
        data-disabled={isDisabled ? "" : undefined}
      >
        <input
          ref={forwardedRef}
          className={styles.radio}
          type="radio"
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
          {...props}
        />

        <span className={styles.content}>
          <span className={styles.checked}>
            <RadioCheckedIcon className={styles.checkedIcon} />
          </span>
        </span>

        {hasLabel && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Radio.displayName = "Radio";
}

export { Radio };
export type { RadioProps };
