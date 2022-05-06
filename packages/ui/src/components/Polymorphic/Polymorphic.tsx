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
  displayName: string,
  Component: Component,
) => {
  const PolymorphicComponent = forwardRef(
    (
      props: ComponentPropsWithoutRef<Component>,
      forwardedRef: ForwardedRef<ComponentRef<Component>>,
    ) => {
      return Component({
        ref: forwardedRef,
        ...props,
      });
    },
  ) as unknown as Component;

  if (process.env.NODE_ENV === "development") {
    PolymorphicComponent.displayName = displayName;
  }

  return PolymorphicComponent;
};

export { createPolymorphicComponent };
export type { PolymorphicProps };
