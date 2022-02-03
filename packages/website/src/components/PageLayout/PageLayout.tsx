import type { ReactNode } from "react";
import { useEffect } from "react";

import { APP_NAME } from "../../constants";
import styles from "./PageLayout.module.scss";

type PageLayoutProps = {
  title?: string;
  children?: ReactNode;
};

const PageLayout = ({ title, children }: PageLayoutProps) => {
  useEffect(() => {
    if (title) {
      document.title = `${title} - ${APP_NAME}`;
    } else {
      document.title = APP_NAME;
    }
  }, [title]);

  return (
    <main className={styles.layout}>
      {title && <h1 className={styles.title}>{title}</h1>}
      {children}
    </main>
  );
};

export { PageLayout };
export type { PageLayoutProps };
