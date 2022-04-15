import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

import styles from "./ColorList.module.scss";

type ColorListProps = {
  children?: ReactNode;
};

const ColorList = ({ children }: ColorListProps) => {
  return (
    <TooltipPrimitive.Provider delayDuration={300} skipDelayDuration={300}>
      <div className={styles.list}>{children}</div>
    </TooltipPrimitive.Provider>
  );
};

export { ColorList };
export type { ColorListProps };
