import type { ComponentType, SVGProps } from "react";

type Icon = {
  id: string;
  component: ComponentType<SVGProps<SVGSVGElement>>;
};

export type { Icon };
