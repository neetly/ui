import { LogoIcon } from "@neetly/icons";
import { Link } from "@neetly/router";

import styles from "./AppHeader.module.scss";
import LogoTextIcon from "./assets/LogoTextIcon.svg";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>
          <LogoIcon className={styles.logoIcon} />
          <LogoTextIcon className={styles.logoTextIcon} />
        </h1>
      </Link>
    </header>
  );
};

export { AppHeader };
