import { VisuallyHidden as AriaVisuallyHidden } from "ariakit";
import type { ReactNode } from "react";

type VisuallyHiddenProps = {
  children?: ReactNode;
};

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <AriaVisuallyHidden>{children}</AriaVisuallyHidden>;
};

export { VisuallyHidden };
export type { VisuallyHiddenProps };
