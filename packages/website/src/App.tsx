import { Outlet, ScrollRestoration } from "react-router-dom";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";

const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <AppHeader />
      </div>
      <div className={styles.content}>
        <Outlet />
      </div>
      <div>
        <AppFooter />
      </div>
      <ScrollRestoration />
    </div>
  );
};

export { App };
