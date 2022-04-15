import type { ReactNode } from "react";

import styles from "./ColorGroupList.module.scss";

type ColorGroupListProps = {
  children?: ReactNode;
};

const ColorGroupList = ({ children }: ColorGroupListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { ColorGroupList };
export type { ColorGroupListProps };
