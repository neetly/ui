import { Link } from "@neetly/router";

import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>Neetly Design</h1>
      </Link>
    </header>
  );
};

export { AppHeader };
