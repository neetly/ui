import * as Ariakit from "ariakit";
import type { ComponentPropsWithRef, ElementType } from "react";

import type { PolymorphicProps } from "../Polymorphic";
import { createPolymorphicComponent } from "../Polymorphic";

type VisuallyHiddenProps<Element extends ElementType> =
  PolymorphicProps<Element>;

const VisuallyHidden = createPolymorphicComponent(
  <Element extends ElementType = "span">({
    as,
    ...props
  }: VisuallyHiddenProps<Element>) => {
    const Component = as ?? "span";

    return (
      <Ariakit.VisuallyHidden
        as={Component}
        {...(props as ComponentPropsWithRef<Element>)}
      />
    );
  },
);

export { VisuallyHidden };
export type { VisuallyHiddenProps };
