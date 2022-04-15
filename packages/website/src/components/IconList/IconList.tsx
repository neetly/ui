import type { ReactNode } from "react";

import styles from "./IconList.module.scss";

type IconListProps = {
  children?: ReactNode;
};

const IconList = ({ children }: IconListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { IconList };
export type { IconListProps };
