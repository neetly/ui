import type { ForwardedRef, ReactNode } from "react";
import { forwardRef } from "react";

import type { BaseFieldProps } from "../BaseField";
import { BaseField } from "../BaseField";
import type { RadioProps } from "../Radio";
import { Radio } from "../Radio";

type RadioFieldProps = BaseFieldProps<typeof Radio>;

const RadioField = forwardRef(
  (
    { label, ...props }: RadioFieldProps,
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <BaseField<typeof RadioFieldImpl>
        as={RadioFieldImpl}
        ref={forwardedRef}
        _label={label}
        {...props}
      />
    );
  },
);

if (process.env.NODE_ENV === "development") {
  RadioField.displayName = "RadioField";
}

const RadioFieldImpl = forwardRef(
  (
    { _label, ...props }: RadioProps & { _label: ReactNode },
    forwardedRef: ForwardedRef<HTMLInputElement>,
  ) => {
    return <Radio ref={forwardedRef} label={_label} {...props} />;
  },
);

if (process.env.NODE_ENV === "development") {
  RadioFieldImpl.displayName = "RadioFieldImpl";
}

export { RadioField };
export type { RadioFieldProps };
