import React from "react";
import { FilterBar, MarketCard } from "../components";

export const Marketplace = () => {
  return (
    <main className="flex flex-col py-10 h-full ">
      <FilterBar />
      <section className="flex lg:flex-wrap lg:flex-row lg:w-full flex-col pb-10 gap-5 justify-between lg:px-0 ">
        <MarketCard />
        <MarketCard />
        <MarketCard />
        <MarketCard />
      </section>
    </main>
  );
};
