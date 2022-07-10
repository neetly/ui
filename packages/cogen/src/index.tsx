import "./index.scss";

import { createRoot } from "react-dom/client";

import { App } from "./App";

const container = document.querySelector("#root");
if (container) {
  createRoot(container).render(<App />);
}
