import type { ComponentType, SVGAttributes } from "react";

import styles from "./IconItem.module.scss";

type IconItemProps = {
  name: string;
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
};

const IconItem = ({ name, icon: Icon }: IconItemProps) => {
  return (
    <section className={styles.item}>
      <Icon className={styles.icon} />
      <h3 className={styles.name}>{name}</h3>
    </section>
  );
};

export { IconItem };
export type { IconItemProps };
