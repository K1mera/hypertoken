import React from "react";
import { NavBar } from "./components";
import { Marketplace } from "./pages";

export const Hypergrow = () => {
  return (
    <main className="bg-dark h-screen w-screen text-light flex flex-col items-center px-40">
      <NavBar />
      <Marketplace />
    </main>
  );
};
