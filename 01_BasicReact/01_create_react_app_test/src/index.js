import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
const container = document.getElementById("root");
// React 18+ uses createRoot instead of ReactDOM.render
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
