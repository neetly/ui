import * as Ariakit from "ariakit";
import type { ReactNode } from "react";

type VisuallyHiddenProps = {
  children?: ReactNode;
};

const VisuallyHidden = ({ children }: VisuallyHiddenProps) => {
  return <Ariakit.VisuallyHidden>{children}</Ariakit.VisuallyHidden>;
};

export { VisuallyHidden };
export type { VisuallyHiddenProps };
