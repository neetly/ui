import classNames from "classnames";
import type { AriaAttributes, ElementType, ReactNode } from "react";
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
  "aria-invalid"?: AriaAttributes["aria-invalid"];
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
    invalid: _invalid,
    "aria-invalid": ariaInvalid = _invalid,
    errorMessage,
    disabled: isDisabled,
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
    const isInvalid = ariaInvalid && ariaInvalid !== "false";
    const hasErrorMessage = errorMessage !== null && errorMessage !== undefined;

    return (
      <span
        className={classNames(styles.field, className)}
        data-invalid={isInvalid ? "" : undefined}
        data-disabled={isDisabled ? "" : undefined}
      >
        {hasLabel && (
          <label id={labelId} className={styles.label} htmlFor={id}>
            {label}
          </label>
        )}

        <Component
          id={id}
          className={styles.content}
          aria-labelledby={hasLabel ? labelId : undefined}
          aria-describedby={
            hasDescription && !hasErrorMessage ? descriptionId : undefined
          }
          aria-invalid={ariaInvalid}
          aria-errormessage={
            isInvalid && hasErrorMessage ? errorMessageId : undefined
          }
          disabled={isDisabled}
          {...props}
        />

        {hasDescription && !hasErrorMessage && (
          <span id={descriptionId} className={styles.description}>
            {description}
          </span>
        )}

        {isInvalid && hasErrorMessage && (
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
