import { VisuallyHidden } from "@neetly/ui";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";
import { useRef } from "react";

import styles from "./ColorItem.module.scss";

type ColorItemProps = {
  name: ReactNode;
  color: string;
};

const ColorItem = ({ name, color }: ColorItemProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  return (
    <section className={styles.item} style={{ "--color": color }}>
      <TooltipPrimitive.Root>
        <TooltipPrimitive.Trigger asChild>
          <button
            ref={buttonRef}
            className={styles.button}
            onClick={() => void navigator.clipboard.writeText(color)}
          >
            <div className={styles.preview}>
              <VisuallyHidden>{color.toUpperCase()}</VisuallyHidden>
            </div>
          </button>
        </TooltipPrimitive.Trigger>
        <TooltipPrimitive.Content
          className={styles.tooltip}
          side="top"
          sideOffset={2}
          onPointerDownOutside={(event) => {
            if (buttonRef.current?.contains(event.target as Node)) {
              event.preventDefault();
            }
          }}
        >
          {color.toUpperCase()}
          <TooltipPrimitive.Arrow
            className={styles.tooltipArrow}
            width={12}
            height={6}
          />
        </TooltipPrimitive.Content>
      </TooltipPrimitive.Root>
      <h4 className={styles.name}>{name}</h4>
    </section>
  );
};

export { ColorItem };
export type { ColorItemProps };
