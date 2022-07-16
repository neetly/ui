import type { ForwardedRef } from "react";
import { forwardRef } from "react";

import type { BaseFieldProps } from "../BaseField";
import { BaseField } from "../BaseField";
import { TextInput } from "../TextInput";

type TextFieldProps = BaseFieldProps<typeof TextInput>;

const TextField = forwardRef(
  (props: TextFieldProps, forwardedRef: ForwardedRef<HTMLInputElement>) => {
    return <BaseField as={TextInput} ref={forwardedRef} {...props} />;
  },
);

if (process.env.NODE_ENV === "development") {
  TextField.displayName = "TextField";
}

export { TextField };
export type { TextFieldProps };
