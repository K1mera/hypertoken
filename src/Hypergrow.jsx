import React from "react";

import { HomePage } from "./pages";
import { MainRouter } from "./routes";

export const Hypergrow = () => {
  return (
    <main className="bg-dark h-full w-full text-light flex flex-col items-center px-20 lg:px-40 scroll-p-0 scroll-m-0 pt-16">
      <MainRouter>
        <HomePage />
      </MainRouter>
    </main>
  );
};
