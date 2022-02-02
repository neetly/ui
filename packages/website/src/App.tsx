import { Route, Routes } from "@neetly/router";

import styles from "./App.module.scss";
import { AppFooter } from "./components/AppFooter";
import { AppHeader } from "./components/AppHeader";
import { HomePage } from "./pages/HomePage";
import { PalettePage } from "./pages/PalettePage";

const App = () => {
  return (
    <div>
      <AppHeader />
      <main className={styles.content}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/palette" element={<PalettePage />} />
        </Routes>
      </main>
      <AppFooter />
    </div>
  );
};

export { App };
