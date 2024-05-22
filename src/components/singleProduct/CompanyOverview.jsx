

export const CompanyOverview = () => {
  return (
    <main className="flex flex-col w-full py-10 gap-5 border-b-2 border-dashed">
      <header className="flex w-full justify-between">
        <h3 className="font-rubik font-bold text-lg text-light">
          Company overview
        </h3>
        <h2 className="font-rubik font-bold text-lg text-light">
          Founded: <span className="font-robotoMono font-medium">Feb 2021</span>
        </h2>
      </header>
      <section className="flex flex-col ">
        <h3 className="title-singleProduct">Description</h3>
        <p className="font-robotoMono font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </section>
      <section className="flex w-full">
        <div className="w-1/2 flex flex-col">
          <h2 className="title-singleProduct">Key Functions Include</h2>
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
            <li className="border-l-2 border-light border-dashed pl-5">
              <h2 className="title-singleProduct">Team size</h2>
              <p className="font-robotoMono font-light text-light">2-20</p>
            </li>
            <li className="border-l-2 border-light border-dashed pl-5">
              <h2 className="title-singleProduct">Business Model</h2>
              <p className="font-robotoMono font-light text-light">
                B2B licensing
              </p>
            </li>
            <li className="border-l-2 border-light border-dashed pl-5">
              <h2 className="title-singleProduct">Tech Stack</h2>
              <p className="font-robotoMono font-light text-light">
                React Typescript
              </p>
            </li>
          </ul>

          <section className="flex ">
            <div className="w-[40%]">
              <h2 className="title-singleProduct">COMPETITORS</h2>
              <ul className="font-robotoMono font-light text-light ">
                <li className="list-inside list-disc">PeopleSoft</li>
                <li className="list-inside list-disc">HYBRENT</li>
                <li className="list-inside list-disc">Workday</li>
                <li className="list-inside list-disc">GHX</li>
                <li className="list-inside list-disc">Envi</li>
              </ul>
            </div>
            <div className="w-[60%] border-l-2 border-light border-dashed pl-5">
              <h2 className="title-singleProduct">GROWTH OPPORTUNITIES</h2>
              <ul className="font-robotoMono font-light text-light ">
                <li className="list-inside list-disc">Increase pricing</li>
                <li className="list-inside list-disc">
                  Improve conversion rates
                </li>
                <li className="list-inside list-disc">Hire a B2B sales team</li>
                <li className="list-inside list-disc">Expand to new markets</li>
                <li className="list-inside list-disc">
                  Add new product features
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
      <footer className="flex flex-col gap-1">
        <h2 className="title-singleProduct">Acquisition details</h2>
        <p className="font-robotoMono font-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </footer>
    </main>
  );
}
