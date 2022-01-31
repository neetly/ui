import { Link, NavLink } from "@neetly/router";
import classNames from "classnames";

import styles from "./AppHeader.module.scss";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>Neetly Design</h1>
      </Link>
      <nav className={styles.nav}>
        <NavLink
          className={({ isActive }) =>
            classNames(styles.navLink, isActive && styles.active)
          }
          to="/palette"
        >
          Palette
        </NavLink>
      </nav>
    </header>
  );
};

export { AppHeader };
