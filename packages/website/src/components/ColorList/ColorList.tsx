import type { ReactNode } from "react";

import styles from "./ColorList.module.scss";

type ColorListProps = {
  children?: ReactNode;
};

const ColorList = ({ children }: ColorListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { ColorList };
export type { ColorListProps };
