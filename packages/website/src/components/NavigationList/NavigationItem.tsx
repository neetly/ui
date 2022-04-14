import { ChevronRightIcon } from "@neetly/icons";
import { Link } from "@neetly/router";
import type { ReactNode } from "react";

import styles from "./NavigationItem.module.scss";

type NavigationItemProps = {
  name?: ReactNode;
  link?: string;
};

const NavigationItem = ({ name, link = "/" }: NavigationItemProps) => {
  return (
    <Link className={styles.link} to={link}>
      <section className={styles.item}>
        <h3 className={styles.name}>{name}</h3>
        <ChevronRightIcon className={styles.linkIcon} />
      </section>
    </Link>
  );
};

export { NavigationItem };
export type { NavigationItemProps };
