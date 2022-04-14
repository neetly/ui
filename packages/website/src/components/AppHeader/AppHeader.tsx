import { Link } from "@neetly/router";
import { VisuallyHidden } from "@neetly/ui";

import { APP_NAME } from "../../constants";
import styles from "./AppHeader.module.scss";
import LogoTextIcon from "./assets/LogoTextIcon.svg";

const AppHeader = () => {
  return (
    <header className={styles.header}>
      <Link className={styles.logoLink} to="/">
        <h1 className={styles.logo}>
          <LogoTextIcon className={styles.logoTextIcon} />
          <VisuallyHidden>{APP_NAME}</VisuallyHidden>
        </h1>
      </Link>
    </header>
  );
};

export { AppHeader };
