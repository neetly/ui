import { Route, Routes } from "@neetly/router";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { ComponentsPage } from "./pages/ComponentsPage";
import { HomePage } from "./pages/HomePage";
import { IconsPage } from "./pages/IconsPage";
import { PalettePage } from "./pages/PalettePage";
import { TypographyPage } from "./pages/TypographyPage";

const App = () => {
  return (
    <div className={styles.app}>
      <div>
        <AppHeader />
      </div>
      <div className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palette" element={<PalettePage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Routes>
      </div>
      <div>
        <AppFooter />
      </div>
    </div>
  );
};

export { App };
