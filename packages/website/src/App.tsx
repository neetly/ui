import { Route, Routes } from "@neetly/router";

import styles from "./App.module.scss";
import { AppHeader } from "./components/AppHeader";
import { PalettePage } from "./pages/PalettePage";

const App = () => {
  return (
    <div>
      <AppHeader />
      <main className={styles.content}>
        <Routes>
          <Route path="/palette" element={<PalettePage />} />
        </Routes>
      </main>
    </div>
  );
};

export { App };
