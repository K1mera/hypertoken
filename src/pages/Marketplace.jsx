import React from "react";
import { FilterBar, MarketCard } from "../components";

export const Marketplace = () => {
  return (
    <main className="flex flex-col py-10 h-full ">
        <FilterBar />
      <section className="flex flex-wrap gap-8 justify-between ">
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </section>
    </main>
  );
};
