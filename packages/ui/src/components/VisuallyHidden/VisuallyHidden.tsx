import * as Ariakit from "ariakit";
import type { HTMLAttributes } from "react";

type VisuallyHiddenProps = HTMLAttributes<HTMLSpanElement>;

const VisuallyHidden = (props: VisuallyHiddenProps) => {
  return <Ariakit.VisuallyHidden {...props} />;
};

export { VisuallyHidden };
export type { VisuallyHiddenProps };
