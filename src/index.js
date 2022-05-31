import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Calculator from "./Components/Calculator";
import Style from "./Components/Style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Calculator />
  </React.StrictMode>
);
