import React from "react";
import ReactDOM from "react-dom/client";
import { Hypergrow } from "./Hypergrow";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/NavBar/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Hypergrow />
    </BrowserRouter>
  </React.StrictMode>
);
