import classNames from "classnames";
import type {
  AriaAttributes,
  ForwardedRef,
  InputHTMLAttributes,
  ReactNode,
} from "react";
import { forwardRef } from "react";

import styles from "./Switch.module.scss";

type SwitchOwnProps = {
  className?: string;
  label?: ReactNode;
  invalid?: boolean;
  "aria-invalid"?: AriaAttributes["aria-invalid"];
  disabled?: boolean;
};

type SwitchProps = SwitchOwnProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof SwitchOwnProps>;

const Switch = forwardRef(
  (
    {
      className,
      label,
      invalid: _invalid,
      "aria-invalid": ariaInvalid = _invalid,
      disabled: isDisabled,
      ...props
    }: SwitchProps,
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
          className={styles.switch}
          type="checkbox"
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
          {...props}
        />

        <span className={styles.content}></span>

        {hasLabel && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  Switch.displayName = "Switch";
}

export { Switch };
export type { SwitchOwnProps, SwitchProps };
