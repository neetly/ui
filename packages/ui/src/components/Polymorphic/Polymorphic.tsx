import type {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ComponentRef,
  ElementType,
  ForwardedRef,
  FunctionComponent,
} from "react";
import { forwardRef } from "react";

// eslint-disable-next-line @typescript-eslint/ban-types
type PolymorphicProps<Element extends ElementType, OwnProps = {}> = OwnProps &
  Omit<ComponentPropsWithRef<Element>, "as" | keyof OwnProps> & {
    as?: Element;
  };

const createPolymorphicComponent = <Component extends FunctionComponent>(
  component: Component,
) => {
  return forwardRef(
    (
      props: ComponentPropsWithoutRef<Component>,
      forwardedRef: ForwardedRef<ComponentRef<Component>>,
    ) => {
      return component({
        ref: forwardedRef,
        ...props,
      });
    },
  ) as unknown as Component;
};

export { createPolymorphicComponent };
export type { PolymorphicProps };
