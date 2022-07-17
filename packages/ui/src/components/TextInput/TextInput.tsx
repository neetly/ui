import type { IconProps } from "@neetly/icons";
import classNames from "classnames";
import type {
  AriaAttributes,
  ComponentType,
  ForwardedRef,
  InputHTMLAttributes,
} from "react";
import { forwardRef } from "react";

import styles from "./TextInput.module.scss";

type TextInputOwnProps = {
  className?: string;
  iconBefore?: ComponentType<IconProps>;
  iconAfter?: ComponentType<IconProps>;
  invalid?: boolean;
  "aria-invalid"?: AriaAttributes["aria-invalid"];
  disabled?: boolean;
};

type TextInputProps = TextInputOwnProps &
  Omit<InputHTMLAttributes<HTMLInputElement>, keyof TextInputOwnProps>;

const TextInput = forwardRef(
  (
    {
      className,
      iconBefore: IconBefore,
      iconAfter: IconAfter,
      invalid: _invalid,
      "aria-invalid": ariaInvalid = _invalid,
      disabled: isDisabled,
      ...props
    }: TextInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    const isInvalid = ariaInvalid && ariaInvalid !== "false";

    return (
      <span
        className={classNames(styles.container, className)}
        data-invalid={isInvalid ? "" : undefined}
        data-disabled={isDisabled ? "" : undefined}
      >
        <input
          ref={forwardedRef}
          className={styles.textField}
          data-icon-before={IconBefore ? "" : undefined}
          data-icon-after={IconAfter ? "" : undefined}
          aria-invalid={ariaInvalid}
          disabled={isDisabled}
          {...props}
        />
        {IconBefore && <IconBefore className={styles.iconBefore} />}
        {IconAfter && <IconAfter className={styles.iconAfter} />}
      </span>
    );
  },
);

if (process.env.NODE_ENV === "development") {
  TextInput.displayName = "TextInput";
}

export { TextInput };
export type { TextInputOwnProps, TextInputProps };
