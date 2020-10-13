import React from "react";
import ReactDOM from "react-dom";
import Wizard from "./components/wizard";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <Wizard />
  </React.StrictMode>,
  rootElement
);
