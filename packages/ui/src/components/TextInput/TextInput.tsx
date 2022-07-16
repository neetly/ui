import type { IconProps } from "@neetly/icons";
import classNames from "classnames";
import type { ComponentType, ElementType } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./TextInput.module.scss";

type TextInputOwnProps = {
  className?: string;
  iconBefore?: ComponentType<IconProps>;
  iconAfter?: ComponentType<IconProps>;
  disabled?: boolean;
};

type TextInputProps<Element extends ElementType> = //
  PolymorphicProps<Element, TextInputOwnProps>;

const TextInput = createPolymorphicComponent(
  "TextInput",
  <Element extends ElementType = "input">({
    as,
    className,
    iconBefore: IconBefore,
    iconAfter: IconAfter,
    disabled,
    ...props
  }: TextInputProps<Element>) => {
    const Component = as ?? "input";

    return (
      <span
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : undefined}
      >
        <Component
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

export { TextInput };
export type { TextInputOwnProps, TextInputProps };
