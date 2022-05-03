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

const createPolymorphicComponent = <ComponentType extends FunctionComponent>(
  displayName: string,
  component: ComponentType,
) => {
  if (process.env.NODE_ENV === "development") {
    component.displayName = displayName;
  }

  return forwardRef(
    (
      props: ComponentPropsWithoutRef<ComponentType>,
      forwardedRef: ForwardedRef<ComponentRef<ComponentType>>,
    ) => {
      return component({
        ref: forwardedRef,
        ...props,
      });
    },
  ) as unknown as ComponentType;
};

export { createPolymorphicComponent };
export type { PolymorphicProps };
