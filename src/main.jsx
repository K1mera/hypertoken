import React from "react";
import ReactDOM from "react-dom/client";
import { Hypergrow } from "./Hypergrow";

import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./components/NavBar";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
      <Hypergrow />
    </BrowserRouter>
  </React.StrictMode>
);
