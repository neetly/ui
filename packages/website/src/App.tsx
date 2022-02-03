import { Route, Routes } from "@neetly/router";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { HomePage } from "./pages/HomePage";
import { NotFoundPage } from "./pages/NotFoundPage";
import { PalettePage } from "./pages/PalettePage";

const App = () => {
  return (
    <>
      <AppHeader />
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palette" element={<PalettePage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </div>
      <AppFooter />
    </>
  );
};

export { App };
