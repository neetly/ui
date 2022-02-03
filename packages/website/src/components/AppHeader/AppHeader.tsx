import { Link } from "@neetly/router";

import { APP_NAME } from "../../constants";
import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>{APP_NAME}</h1>
      </Link>
    </header>
  );
};

export { AppHeader };
