import React from "react";
import { FilterBar, MarketCard } from "../components";

export const Marketplace = () => {
  return (
    <main className="flex flex-col py-10">
        <FilterBar />
      <section className="flex gap-8">
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </section>
    </main>
  );
};
