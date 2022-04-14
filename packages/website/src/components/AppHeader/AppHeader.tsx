import { Link } from "@neetly/router";
import { VisuallyHidden } from "@neetly/ui";

import { APP_NAME } from "../../constants";
import styles from "./AppHeader.module.scss";
import LogoIcon from "./assets/LogoIcon.svg";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>
          <LogoIcon className={styles.logoIcon} />
          <VisuallyHidden>{APP_NAME}</VisuallyHidden>
        </h1>
      </Link>
    </header>
  );
};

export { AppHeader };
