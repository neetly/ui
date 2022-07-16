import type { ReactNode } from "react";

import styles from "./NavigationList.module.scss";

type NavigationListProps = {
  children?: ReactNode;
};

const NavigationList = ({ children }: NavigationListProps) => {
  return <div className={styles.list}>{children}</div>;
};

export { NavigationList };
export type { NavigationListProps };
