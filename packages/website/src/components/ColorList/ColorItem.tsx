import { VisuallyHidden } from "@neetly/ui";
import * as Ariakit from "ariakit";
import type { ReactNode } from "react";

import styles from "./ColorItem.module.scss";

type ColorItemProps = {
  name: ReactNode;
  color: string;
};

const ColorItem = ({ name, color }: ColorItemProps) => {
  const tooltipState = Ariakit.useTooltipState({
    animated: true,
    gutter: 0,
    timeout: 300,
  });

  return (
    <section className={styles.item} style={{ "--color": color }}>
      <Ariakit.TooltipAnchor
        state={tooltipState}
        as="button"
        className={styles.button}
        onClick={() => void navigator.clipboard.writeText(color)}
      >
        <div className={styles.preview}>
          <VisuallyHidden>{color.toUpperCase()}</VisuallyHidden>
        </div>
      </Ariakit.TooltipAnchor>
      {tooltipState.mounted && (
        <Ariakit.Tooltip state={tooltipState} className={styles.tooltip}>
          {color.toUpperCase()}
          <Ariakit.TooltipArrow />
        </Ariakit.Tooltip>
      )}
      <h4 className={styles.name}>{name}</h4>
    </section>
  );
};

export { ColorItem };
export type { ColorItemProps };
