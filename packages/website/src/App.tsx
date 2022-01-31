import { Route, Routes } from "@neetly/router";

import { PalettePage } from "./pages/PalettePage";

const App = () => {
  return (
    <Routes>
      <Route path="/palette" element={<PalettePage />} />
    </Routes>
  );
};

export { App };
