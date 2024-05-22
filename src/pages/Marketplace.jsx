import React from "react";
import { FilterBar, MarketCard } from "../components";

export const Marketplace = () => {
  return (
    <main className="flex flex-col py-10 h-full ">
        <FilterBar />
      <section className="flex md:flex-wrap flex-col pb-10 gap-8 justify-between px-10">
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </section>
    </main>
  );
};
