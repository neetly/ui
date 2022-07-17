import { CheckboxCheckedIcon } from "@neetly/icons";
import classNames from "classnames";
import type {
  AriaAttributes,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import styles from "./Checkbox.module.scss";

type CheckboxOwnProps = {
  className?: string;
  label?: ReactNode;
  invalid?: boolean;
  "aria-invalid"?: AriaAttributes["aria-invalid"];
  disabled?: boolean;
};

type CheckboxProps = CheckboxOwnProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof CheckboxOwnProps>;

const Checkbox = forwardRef(
  (
    {
      className,
      label,
      invalid: _invalid,
      "aria-invalid": ariaInvalid = _invalid,
      disabled: isDisabled,
      ...props
    }: CheckboxProps,
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
          className={styles.checkbox}
          type="checkbox"
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
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
