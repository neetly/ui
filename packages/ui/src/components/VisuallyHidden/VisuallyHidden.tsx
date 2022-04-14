import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import type { ReactNode } from "react";

type VisuallyHiddenProps = {
  children?: ReactNode;
};

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return (
    <VisuallyHiddenPrimitive.Root>{children}</VisuallyHiddenPrimitive.Root>
  );
};

export { VisuallyHidden };
export type { VisuallyHiddenProps };
