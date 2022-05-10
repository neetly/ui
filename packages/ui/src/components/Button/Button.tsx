import type { IconProps } from "@neetly/icons";
import classNames from "classnames";
import type { ComponentType, ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import { VisuallyHidden } from "../VisuallyHidden";
import styles from "./Button.module.scss";

type ButtonOwnProps = {
  className?: string;
  variant?: "default" | "primary" | "outline" | "text";
  color?: "primary" | "secondary" | "tertiary";
  icon?: ComponentType<IconProps>;
  iconBefore?: ComponentType<IconProps>;
  iconAfter?: ComponentType<IconProps>;
  children?: ReactNode;
};

type ButtonProps<Element extends ElementType> = //
  PolymorphicProps<Element, ButtonOwnProps>;

const Button = createPolymorphicComponent(
  "Button",
  <Element extends ElementType = "button">({
    as,
    className,
    variant = "default",
    color = "primary",
    icon: Icon,
    iconBefore: IconBefore,
    iconAfter: IconAfter,
    children,
    ...props
  }: ButtonProps<Element>) => {
    const Component = as ?? "button";

    return (
      <Component
        className={classNames(styles.button, className)}
        data-variant={variant}
        data-color={color}
        {...(Component === "button" && { type: "button" })}
        {...props}
      >
        {Icon ? (
          <span className={styles.content}>
            <Icon className={styles.icon} />
            <VisuallyHidden>{children}</VisuallyHidden>
          </span>
        ) : (
          <span className={styles.content}>
            {IconBefore && <IconBefore className={styles.iconBefore} />}
            <span>{children}</span>
            {IconAfter && <IconAfter className={styles.iconAfter} />}
          </span>
        )}
      </Component>
    );
  },
);

export { Button };
export type { ButtonOwnProps, ButtonProps };
