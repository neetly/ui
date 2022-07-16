import type { ReactNode } from "react";

import styles from "./ColorGroupItem.module.scss";

type ColorGroupItemProps = {
  name: ReactNode;
  children?: ReactNode;
};

const ColorGroupItem = ({ name, children }: ColorGroupItemProps) => {
  return (
    <section className={styles.item}>
      <h3 className={styles.name}>{name}</h3>
      <div>{children}</div>
    </section>
  );
};

export { ColorGroupItem };
export type { ColorGroupItemProps };
