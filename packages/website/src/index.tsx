import { BrowserRouter } from "@neetly/router";
import { StrictMode } from "react";
import { createRoot } from "react-dom";

const container = document.querySelector("#root");
if (container) {
  createRoot(container).render(
    <StrictMode>
      <BrowserRouter>
        <div />
      </BrowserRouter>
    </StrictMode>,
  );
}
