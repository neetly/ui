import classNames from "classnames";
import type { ElementType, ReactNode } from "react";
import { useId } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";
import styles from "./BaseField.module.scss";

type BaseFieldOwnProps = {
  id?: string;
  className?: string;
  label?: ReactNode;
  disabled?: boolean;
};

type BaseFieldProps<Element extends ElementType> = //
  PolymorphicProps<Element, BaseFieldOwnProps>;

const BaseField = createPolymorphicComponent(
  "BaseField",
  <Element extends ElementType = "input">({
    as,
    id,
    className,
    label,
    disabled,
    ...props
  }: BaseFieldProps<Element>) => {
    const Component = as ?? "input";

    const defaultId = useId();
    id ??= defaultId;

    const hasLabel = label !== null && label !== undefined;

    return (
      <span
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : undefined}
      >
        {hasLabel && (
          <label className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <Component
          id={id}
          className={styles.content}
          disabled={disabled}
          {...props}
        />
      </span>
    );
  },
);

export { BaseField };
export type { BaseFieldOwnProps, BaseFieldProps };
