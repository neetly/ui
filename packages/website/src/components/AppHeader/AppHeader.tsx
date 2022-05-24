import { LogoIcon } from "@neetly/icons";
import { Link } from "react-router-dom";
import { VisuallyHidden } from "@neetly/ui";

import styles from "./AppHeader.module.scss";
import LogoTextIcon from "./assets/LogoTextIcon.svg";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>
          <LogoIcon className={styles.logoIcon} />
          <LogoTextIcon className={styles.logoTextIcon} />
          <VisuallyHidden>Neetly Design</VisuallyHidden>
        </h1>
      </Link>
    </header>
  );
};

export { AppHeader };
