import classNames from "classnames";
import type { ElementType } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./TextField.module.scss";

type TextFieldOwnProps = {
  className?: string;
};

type TextFieldProps<Element extends ElementType> = //
  PolymorphicProps<Element, TextFieldOwnProps>;

const TextField = createPolymorphicComponent(
  "TextField",
  <Element extends ElementType = "input">({
    as,
    className,
    ...props
  }: TextFieldProps<Element>) => {
    const Component = as ?? "input";

    return (
      <Component
        className={classNames(styles.textField, className)}
        {...props}
      />
    );
  },
);

export { TextField };
export type { TextFieldOwnProps, TextFieldProps };
