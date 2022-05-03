import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./Button.module.scss";

type ButtonOwnProps = {
  className?: string;
  variant?: "default" | "primary" | "outline" | "text";
  color?: "primary" | "secondary" | "tertiary";
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
        <div className={styles.content}>{children}</div>
      </Component>
    );
  },
);

export { Button };
export type { ButtonOwnProps, ButtonProps };
