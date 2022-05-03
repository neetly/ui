import classNames from "classnames";
import type { ElementType, ReactNode } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./TextField.module.scss";

type TextFieldOwnProps = {
  className?: string;
  label?: ReactNode;
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
        <span className={styles.textFieldWrapper}>
          <Component
            className={styles.textField}
            disabled={disabled}
            {...props}
          />
        </span>
      </label>
    );
  },
);

export { TextField };
export type { TextFieldOwnProps, TextFieldProps };
