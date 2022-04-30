import classNames from "classnames";
import type { ButtonHTMLAttributes } from "react";

import styles from "./Button.module.scss";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "primary" | "outline" | "text";
  color?: "primary" | "secondary" | "tertiary";
};

const Button = ({
  className,
  type = "button",
  variant = "default",
  color = "primary",
  children,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={classNames(styles.button, className)}
      type={type}
      data-variant={variant}
      data-color={color}
      {...props}
    >
      <div className={styles.content}>{children}</div>
    </button>
  );
};

export { Button };
export type { ButtonProps };
