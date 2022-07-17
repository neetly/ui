import type { ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

import type { BaseFieldProps } from "../BaseField";
import { BaseField } from "../BaseField";
import type { CheckboxProps } from "../Checkbox";
import { Checkbox } from "../Checkbox";

type CheckboxFieldProps = BaseFieldProps<typeof Checkbox>;

const CheckboxField = forwardRef(
  (
    { label, ...props }: CheckboxFieldProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <BaseField<typeof CheckboxFieldImpl>
        as={CheckboxFieldImpl}
        ref={forwardedRef}
        _label={label}
        {...props}
      />
    );
  },
);

if (process.env.NODE_ENV === "development") {
  CheckboxField.displayName = "CheckboxField";
}

const CheckboxFieldImpl = forwardRef(
  (
    { _label, ...props }: CheckboxProps & { _label: ReactNode },
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return <Checkbox ref={forwardedRef} label={_label} {...props} />;
  },
);

if (process.env.NODE_ENV === "development") {
  CheckboxFieldImpl.displayName = "CheckboxFieldImpl";
}

export { CheckboxField };
export type { CheckboxFieldProps };
