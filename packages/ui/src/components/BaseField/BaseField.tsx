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
  invalid?: boolean;
  errorMessage?: ReactNode;
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
    invalid,
    errorMessage,
    disabled,
    ...props
  }: BaseFieldProps<Element>) => {
    const Component = as ?? "input";

    const defaultId = useId();
    id ??= defaultId;

    const labelId = useId();
    const descriptionId = useId();
    const errorMessageId = useId();

    const hasLabel = label !== null && label !== undefined;
    const hasDescription = description !== null && description !== undefined;
    const hasErrorMessage = errorMessage !== null && errorMessage !== undefined;

    return (
      <span
        className={classNames(styles.container, className)}
        data-invalid={invalid ? "" : undefined}
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
          aria-describedby={
            hasDescription && !hasErrorMessage ? descriptionId : undefined
          }
          aria-invalid={invalid ? true : undefined}
          aria-errormessage={
            invalid && hasErrorMessage ? errorMessageId : undefined
          }
          {...props}
        />
        {hasDescription && !hasErrorMessage && (
          <span id={descriptionId} className={styles.description}>
            {description}
          </span>
        )}
        {invalid && hasErrorMessage && (
          <span id={errorMessageId} className={styles.errorMessage}>
            {errorMessage}
          </span>
        )}
      </span>
    );
  },
);

export { BaseField };
export type { BaseFieldOwnProps, BaseFieldProps };
