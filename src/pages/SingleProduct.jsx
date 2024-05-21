import React from "react";
import { CompanyCard, OptionsBar } from "../components";
import { Calendar, CashIcon, CategoryIcon, HandCash } from "../svg";

import image1 from "/assets/image1.png";
import {Link} from "react-router-dom";

export const SingleProduct = () => {
  return (
    <main className="h-full">
      <OptionsBar />
      <section className="flex w-full gap-10 py-10 border-b-2 border-dashed">
        <div className="w-[68%] flex flex-col gap-5">
          <header className="font-semibold flex gap-2">
            {" "}
            <CategoryIcon className={"w-5 "} /> Category
          </header>
          <p className="font-robotoMono text-light font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <section className="flex gap-5">
            <div className="flex flex-col">
              <span className="font-robotoMono text-light text-sm">
                Asking price
              </span>
              <h2 className="font-rubik font-bold text-thertiary">$125k</h2>
            </div>
            <div>
              <span className="font-robotoMono text-light text-sm">
                Multiples
              </span>
              <h2 className="font-rubik font-bold text-thertiary">
                5.1x profit 5.1x profit
              </h2>
            </div>
          </section>
          <footer className="flex w-full justify-between">
            <div className="flex flex-col border-r border-dashed pr-10">
              <span className="font-robotoMono text-light text-sm">
                TTM REVENUE
              </span>
              <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
                {" "}
                <CashIcon className={"w-5"} /> $25k
              </h2>
            </div>
            <div className="flex flex-col border-r border-dashed pr-10">
              <span className="font-robotoMono text-light text-sm">
                TTM PROFIT
              </span>
              <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
                {" "}
                <HandCash className={"w-5"} /> $25k
              </h2>
            </div>
            <div className="flex flex-col border-r border-dashed pr-10">
              <span className="font-robotoMono text-light text-sm">
                LAST MONTHS REVENUE
              </span>
              <h2 className="font-rubik font-bold text-thertiary flex gap-2 items-center">
                <Calendar className={"w-5"} /> $25k
              </h2>
            </div>
            <div className="flex flex-col">
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
        <div className="w-[32%]">
          <CompanyCard />
        </div>
      </section>

      {/* next sectionk */}

      <section className="flex py-10 gap-5 border-b-2 border-dashed">
        <div className="w-1/2 ">
          <h2 className="font-rubik font-bold text-lg text-light pb-5">
            Site Links
          </h2>
          <div className="flex flex-col bg-light rounded-lg overflow-hidden pb-2">
            <img src={image1} alt="" />
            <div className="flex flex-col gap-3 p-2">
              <h3 className="text-dark font-robotoMono text-md font-semibold">
                Website name
              </h3>
              <p className="text-dark font-robotoMono text-sm line-clamp-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <Link className="flex gap-2 py-1 px-4 border-2 border-primary rounded-lg items-center text-primary font-rubik font-bold">
                Go to the website
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2">
          <h2 className="font-rubik font-bold text-lg text-light pb-5">
            Social Media
          </h2>
          <div></div>
        </div>
      </section>

      {/* another sec */}

      <section className="flex flex-col w-full py-10 gap-5">
        <header className="flex w-full justify-between">
          <h3 className="font-rubik font-bold text-lg text-light">
            Company overview
          </h3>
          <h2 className="font-rubik font-bold text-lg text-light">
            Founded:{" "}
            <span className="font-robotoMono font-medium">Feb 2021</span>
          </h2>
        </header>
        <section className="flex flex-col ">
          <h3 className="font-rubik text-secondary font-bold text-lg">
            Description
          </h3>
          <p className="font-robotoMono font-light">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </section>
        <section className="flex w-full">
          <div className="w-1/2">
            <h2 className="font-rubik text-secondary font-bold text-lg">
              Key Functions Include
            </h2>
            <ul className="font-robotoMono font-light text-light ">
              <li className="list-inside list-disc">
                Comprehensive management of the supply chain
              </li>
              <li className="list-inside list-disc">
                Full enterprise compliance
              </li>
              <li className="list-inside list-disc">
                In-depth dashboard analytics
              </li>
              <li className="list-inside list-disc">
                Streamlined purchasing processes
              </li>
              <li className="list-inside list-disc">Efficient invoicing</li>
              <li className="list-inside list-disc">
                Electronic Data Interchange (EDI) compatibility
              </li>
              <li className="list-inside list-disc">
                Secure payment and settlement
              </li>
              <li className="list-inside list-disc">
                Intra-operative data capture
              </li>
              <li className="list-inside list-disc">
                Detailed clinical charting for patient records
              </li>
            </ul>
          </div>

          <div className="w-1/2 flex flex-col gap-5">
            <ul className="flex justify-between">
              <li className="">
                <h2 className="font-rubik text-secondary font-bold text-lg">
                  Team size
                </h2>
                <p className="font-robotoMono font-light text-light">2-20</p>
              </li>
              <li className="border-l-2 border-light border-dashed pl-5">
                <h2 className="font-rubik text-secondary font-bold text-lg">
                  Business Model
                </h2>
                <p className="font-robotoMono font-light text-light">
                  B2B licensing
                </p>
              </li>
              <li className="border-l-2 border-light border-dashed pl-5">
                <h2 className="font-rubik text-secondary font-bold text-lg">
                  Tech Stack
                </h2>
                <p className="font-robotoMono font-light text-light">
                  React Typescript
                </p>
              </li>
            </ul>

            <section className="flex ">
              <div className="w-[40%]">
                <h2 className="font-rubik text-secondary font-bold text-lg">
                  COMPETITORS
                </h2>
                <ul className="font-robotoMono font-light text-light ">
                  <li className="list-inside list-disc">PeopleSoft</li>
                  <li className="list-inside list-disc">HYBRENT</li>
                  <li className="list-inside list-disc">Workday</li>
                  <li className="list-inside list-disc">GHX</li>
                  <li className="list-inside list-disc">Envi</li>
                </ul>
              </div>
              <div className="w-[60%] border-l-2 border-light border-dashed pl-5">
                <h2 className="font-rubik text-secondary font-bold text-lg">
                  GROWTH OPPORTUNITIES
                </h2>
                <ul className="font-robotoMono font-light text-light ">
                  <li className="list-inside list-disc">Increase pricing</li>
                  <li className="list-inside list-disc">
                    Improve conversion rates
                  </li>
                  <li className="list-inside list-disc">
                    Hire a B2B sales team
                  </li>
                  <li className="list-inside list-disc">
                    Expand to new markets
                  </li>
                  <li className="list-inside list-disc">
                    Add new product features
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </section>
        <footer></footer>
      </section>
      <section></section>
      <section></section>
      <footer></footer>
    </main>
  );
};
