import type { IconProps } from "@neetly/icons";
import classNames from "classnames";
import type {
  ComponentPropsWithoutRef,
  ComponentType,
  ForwardedRef,
} from "react";
import { forwardRef } from "react";

import styles from "./TextInput.module.scss";

type TextInputOwnProps = {
  className?: string;
  iconBefore?: ComponentType<IconProps>;
  iconAfter?: ComponentType<IconProps>;
  disabled?: boolean;
};

type TextInputProps = TextInputOwnProps &
  Omit<ComponentPropsWithoutRef<"input">, keyof TextInputOwnProps>;

const TextInput = forwardRef(
  (
    {
      className,
      iconBefore: IconBefore,
      iconAfter: IconAfter,
      disabled,
      ...props
    }: TextInputProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <span
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : undefined}
      >
        <input
          ref={forwardedRef}
          className={styles.textField}
          data-icon-before={IconBefore ? "" : undefined}
          data-icon-after={IconAfter ? "" : undefined}
          disabled={disabled}
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
