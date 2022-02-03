import { Link } from "@neetly/router";

import { PageLayout } from "../../components/PageLayout";
import styles from "./HomePage.module.scss";

const HomePage = () => {
  return (
    <PageLayout>
      <nav className={styles.nav}>
        <Link className={styles.navLink} to="/palette">
          Color Palette
        </Link>
        <Link className={styles.navLink} to="/typography">
          Typography
        </Link>
        <Link className={styles.navLink} to="/components">
          Components
        </Link>
      </nav>
    </PageLayout>
  );
};

export { HomePage };
