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
  description?: ReactNode;
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
    description,
    disabled,
    ...props
  }: BaseFieldProps<Element>) => {
    const Component = as ?? "input";

    const defaultId = useId();
    id ??= defaultId;

    const labelId = useId();
    const descriptionId = useId();

    const hasLabel = label !== null && label !== undefined;
    const hasDescription = description !== null && description !== undefined;

    return (
      <span
        className={classNames(styles.container, className)}
        data-disabled={disabled ? "" : undefined}
      >
        {hasLabel && (
          <label id={labelId} className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}
        <Component
          id={id}
          className={styles.content}
          disabled={disabled}
          aria-labelledby={hasLabel ? labelId : undefined}
          aria-describedby={hasDescription ? descriptionId : undefined}
          {...props}
        />
        {hasDescription && (
          <span id={descriptionId} className={styles.description}>
            {description}
          </span>
        )}
      </span>
    );
  },
);

export { BaseField };
export type { BaseFieldOwnProps, BaseFieldProps };
