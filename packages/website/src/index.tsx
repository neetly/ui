import "./polyfills";
import "./index.scss";

import { BrowserRouter } from "@neetly/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom";

import { App } from "./App";

const container = document.querySelector("#root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  );
}
