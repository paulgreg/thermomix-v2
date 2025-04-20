import { createRoot } from "react-dom/client";
import App from "./App";
import React from "react";
import "./i18n/i18n";
import "./index.css";

const container = document.getElementById("root") as HTMLDivElement;
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
