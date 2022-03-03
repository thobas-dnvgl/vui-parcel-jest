import { VuiProvider } from "@veracity/vui";
import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App";

const app = document.getElementById("app");
ReactDOM.render(
  <React.StrictMode>
    <VuiProvider>
      <App />
    </VuiProvider>
  </React.StrictMode>,
  app
);
