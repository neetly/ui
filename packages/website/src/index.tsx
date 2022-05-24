import "./polyfills";
import "./index.scss";

import { Spinner } from "@neetly/ui";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { DataBrowserRouter, Route } from "react-router-dom";

import { App } from "./App";
import { ComponentsPage } from "./pages/ComponentsPage";
import { HomePage } from "./pages/HomePage";
import { IconsPage } from "./pages/IconsPage";
import { PalettePage } from "./pages/PalettePage";
import { TypographyPage } from "./pages/TypographyPage";

const container = document.querySelector("#root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <DataBrowserRouter fallbackElement={<Spinner />}>
        <Route element={<App />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/palette" element={<PalettePage />} />
          <Route path="/typography" element={<TypographyPage />} />
          <Route path="/icons" element={<IconsPage />} />
          <Route path="/components" element={<ComponentsPage />} />
        </Route>
      </DataBrowserRouter>
    </StrictMode>,
  );
}
