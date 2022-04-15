import { VisuallyHidden } from "@neetly/ui";
import type { ReactNode } from "react";

import styles from "./ColorItem.module.scss";

type ColorItemProps = {
  name: ReactNode;
  color: string;
};

const ColorItem = ({ name, color }: ColorItemProps) => {
  return (
    <section className={styles.item} style={{ "--color": color }}>
      <button
        className={styles.button}
        onClick={() => void navigator.clipboard.writeText(color)}
      >
        <div className={styles.preview}>
          <VisuallyHidden>{color}</VisuallyHidden>
        </div>
      </button>
      <h4 className={styles.name}>{name}</h4>
    </section>
  );
};

export { ColorItem };
export type { ColorItemProps };
