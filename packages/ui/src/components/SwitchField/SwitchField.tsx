import type { ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

import type { BaseFieldProps } from "../BaseField";
import { BaseField } from "../BaseField";
import type { SwitchProps } from "../Switch";
import { Switch } from "../Switch";

type SwitchFieldProps = BaseFieldProps<typeof Switch>;

const SwitchField = forwardRef(
  (
    { label, ...props }: SwitchFieldProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <BaseField<typeof SwitchFieldImpl>
        as={SwitchFieldImpl}
        ref={forwardedRef}
        _label={label}
        {...props}
      />
    );
  },
);

if (process.env.NODE_ENV === "development") {
  SwitchField.displayName = "SwitchField";
}

const SwitchFieldImpl = forwardRef(
  (
    { _label, ...props }: SwitchProps & { _label: ReactNode },
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return <Switch ref={forwardedRef} label={_label} {...props} />;
  },
);

if (process.env.NODE_ENV === "development") {
  SwitchFieldImpl.displayName = "SwitchFieldImpl";
}

export { SwitchField };
export type { SwitchFieldProps };
