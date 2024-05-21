import React from "react";
import { NavBar } from "./components";
import { Marketplace } from "./pages";
import { MainRouter } from "./routes";

export const Hypergrow = () => {
  return (
    <main className="bg-dark h-full w-screen text-light flex flex-col items-center px-20">
      <MainRouter>
        <Marketplace />
      </MainRouter>
    </main>
  );
};
