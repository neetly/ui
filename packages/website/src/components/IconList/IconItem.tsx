import type { ComponentType, ReactNode, SVGAttributes } from "react";

import styles from "./IconItem.module.scss";

type IconItemProps = {
  name: ReactNode;
  icon: ComponentType<SVGAttributes<SVGSVGElement>>;
};

const IconItem = ({ name, icon: Icon }: IconItemProps) => {
  return (
    <section className={styles.item}>
      <div className={styles.preview}>
        <Icon className={styles.icon} />
      </div>
      <h3 className={styles.name}>{name}</h3>
    </section>
  );
};

export { IconItem };
export type { IconItemProps };
