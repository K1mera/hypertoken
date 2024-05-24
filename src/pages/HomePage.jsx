import { useEffect } from "react";
import { useForm } from "../hooks";
import hypertoken from "/assets/hypertoken.png";

export const HomePage = () => {
  const { value, formState, onInputChange, onResetForm } = useForm({
    value: 0,
  });

  const calcSol = (value) => {
    let saas = value * 1000000;
    return saas;
  };

//   useEffect(() => {
//     calcSol(value);
//   }, [value]);

  const onSubmit = (event) => {
    event.preventDefault();
    
  };

  return (
    <main className="w-full  h-full pb-10 md:h-[calc(100vh-64px)] flex flex-col  pt-20 gap-20 scroll-p-0 scroll-m-0">
      <section className="flex w-full md:flex-row flex-col">
        <section className="flex flex-col items-center md:items-start gap-3 2xl:gap-0 w-full lg:w-[48%]">
          <h3 className="font-rubik font-bold text-md lg:text-xl 2xl:text-2xl text-secondary">
            PRE-LAUNCH SALE ON NOW
          </h3>
          <div className="flex flex-col gap-0 ">
            <h2 className="font-rubik font-bold text-[1.1rem] lg:text-[1.93rem] 2xl:text-[2.95rem] 2xl:-mb-11 lg:-mb-7 -mb-4">
              BUY AND SELL STARTUPS WITH
            </h2>
            <h1 className="font-rubik font-bold text-[2.46rem] lg:text-[4.3rem] 2xl:text-[6.57rem] text-primary">
              $SAAS TOKEN
            </h1>
          </div>
          <button className="border border-secondary rounded-lg px-10 font-rubik font-bold text-md md:text-lg w-full lg:w-[98%]">
            1 SOL: 1,000,000 SAAS TOKENS
          </button>
        </section>
        <section className="w-full md:w-[55%] flex justify-center items-center">
          <img src={hypertoken} className="w-64" alt="" />
          {/* social */}
        </section>
      </section>
      <section className="justify-center items-center w-full">
        <div className="flex flex-col md:flex-row ">
          <form
            action=""
            onSubmit={onSubmit}
            className="flex items-center mb-2 md:w-1/2 md:pr-20 w-full "
          >
            <input
              type="number"
              placeholder="Enter Sol quantity"
              onChange={onInputChange}
              value={value}
              name="value"
              className="bg-white/10 w-full h-10 rounded-l-lg font-robotoMono font-medium pl-5"
            />
            <button className="bg-primary w-16 h-10 rounded-r-lg font-rubik font-bold">
              buy
            </button>
          </form>
          <div className="w-1/2 border-l-2 border-thertiary pl-5 md:flex hidden">
            <p>
              Hypergrow is a cutting-edge decentralized platform revolutionizing
              early-stage startup investing through blockchain technology. Join
              us in our mission to democratize access to investment
              opportunities while securing your spot in our token presale for
              exclusive benefits.
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-rubik font-bold text-primary pb-5">
            $SAAS:{" "}
            <span className="font-robotoMono text-light">{calcSol(value)}</span>
          </h2>
        </div>
        <div className="w-full border-t-2 pt-5 mt-5 border-thertiary md:hidden">
          <p>
            Hypergrow is a cutting-edge decentralized platform revolutionizing
            early-stage startup investing through blockchain technology. Join us
            in our mission to democratize access to investment opportunities
            while securing your spot in our token presale for exclusive benefits
          </p>
        </div>
      </section>
    </main>
  );
};
