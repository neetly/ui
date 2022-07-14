import type { IconProps } from "@neetly/icons";
import classNames from "classnames";
import type { ComponentType, ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./TextField.module.scss";

type TextFieldOwnProps = {
  className?: string;
  label?: ReactNode;
  iconBefore?: ComponentType<IconProps>;
  iconAfter?: ComponentType<IconProps>;
  disabled?: boolean;
};

type TextFieldProps<Element extends ElementType> = //
  PolymorphicProps<Element, TextFieldOwnProps>;

const TextField = createPolymorphicComponent(
  "TextField",
  <Element extends ElementType = "input">({
    as,
    className,
    label,
    iconBefore: IconBefore,
    iconAfter: IconAfter,
    disabled,
    ...props
  }: TextFieldProps<Element>) => {
    const Component = as ?? "input";

    return (
      <label
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : null}
      >
        <span className={styles.label}>{label}</span>
        <span className={styles.content}>
          <Component
            className={styles.textField}
            data-icon-before={IconBefore ? "" : null}
            data-icon-after={IconAfter ? "" : null}
            disabled={disabled}
            {...props}
          />
          {IconBefore && <IconBefore className={styles.iconBefore} />}
          {IconAfter && <IconAfter className={styles.iconAfter} />}
        </span>
      </label>
    );
  },
);

export { TextField };
export type { TextFieldOwnProps, TextFieldProps };
