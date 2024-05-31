import React from "react";

import { HomePage } from "./pages";
import { MainRouter } from "./routes";
import './index.css'

export const Hypergrow = () => {
  return (
    <main>
      <MainRouter>
        <HomePage />
      </MainRouter>
    </main>
  );
};
