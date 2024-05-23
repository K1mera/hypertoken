import React from 'react'
import { CompanyCard } from './';
import {Calendar, CashIcon, CategoryIcon, HandCash} from '../../svg';

export const Opening = () => {
  return (
    <section className="flex md:flex-row flex-col w-full gap-10 py-10 border-b-2 border-dashed">
      <div className="md:w-[68%]  flex flex-col gap-5">
        <header className="font-semibold flex gap-2">
          {" "}
          <CategoryIcon className={"w-5 "} /> Category
        </header>
        <p className="font-robotoMono text-light font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <section className="flex justify-start gap-5">
          <div className="flex flex-col">
            <span className="font-robotoMono text-light text-sm">
              Asking price
            </span>
            <h2 className="font-rubik font-bold text-thertiary">$125k</h2>
          </div>
          <div className='flex flex-col'>
            <span className="font-robotoMono text-light text-sm">
              Multiples
            </span>
            <h2 className="font-rubik font-bold text-thertiary">
              5.1x profit 5.1x profit
            </h2>
          </div>
        </section>
        <footer className="flex md:flex-row flex-wrap w-full justify-between">
          <div className="flex flex-col border-r border-dashed pr-10 p-1 md:w-auto w-1/2 my-1 h-16 justify-center md:justify-start ">
            <span className="font-robotoMono text-light text-sm">
              TTM REVENUE
            </span>
            <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
              {" "}
              <CashIcon className={"w-5"} /> $25k
            </h2>
          </div>
          <div className="flex flex-col md:border-r border-dashed pr-10 md:w-auto w-1/2 p-1 my-1 h-16 justify-center md:justify-start pl-5">
            <span className="font-robotoMono text-light text-sm">
              TTM PROFIT
            </span>
            <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
              {" "}
              <HandCash className={"w-5"} /> $25k
            </h2>
          </div>
          <div className="flex flex-col border-r border-dashed pr-10 md:w-auto w-1/2 p-1 my-1 h-16 justify-center md:justify-start">
            <span className="font-robotoMono text-light text-sm">
              LAST MONTHS REVENUE
            </span>
            <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
              <Calendar className={"w-5"} /> $25k
            </h2>
          </div>
          <div className="flex flex-col md:w-auto w-1/2 p-1 my-1 h-16 justify-center md:justify-start">
            <span className="font-robotoMono text-light text-sm">
              LAST MONTHS PROFIT
            </span>
            <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
              {" "}
              <Calendar className={"w-5"} /> $25k
            </h2>
          </div>
        </footer>
      </div>
      <div className="lg:w-[32%]">
        <CompanyCard />
      </div>
    </section>
  );
}
