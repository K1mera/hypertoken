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
    <main className="w-full h-[calc(100vh-64px)] flex flex-col  pt-20 gap-20 scroll-p-0 scroll-m-0">
      <section className="flex w-full">
        <section className="flex flex-col items-start gap-3 w-[45%]">
          <h3 className="font-rubik font-bold text-xl text-secondary">
            PRE-LAUNCH SALE ON NOW
          </h3>
          <div className="flex flex-col gap-0 ">
            <h2 className="font-rubik font-bold text-[2.2rem] -mb-7">
              BUY AND SELL STARTUPS WITH
            </h2>
            <h1 className="font-rubik font-bold text-[4.884rem] text-primary">
              $SAAS TOKEN
            </h1>
          </div>
          <button className="border border-secondary rounded-lg px-10 font-rubik font-bold text-lg w-full">
            1 SOL: 1,000,000 SAAS TOKENS
          </button>
        </section>
        <section className="w-[55%] flex justify-center items-center">
          <img src={hypertoken} className="w-64" alt="" />
          {/* social */}
        </section>
      </section>
      <section className="justify-center items-center w-full">
        <div className="flex ">
          <form
            action=""
            onSubmit={onSubmit}
            className="flex items-center mb-2 w-1/2 pr-20 "
          >
            <input
              type="text"
              placeholder="Enter Sol quantity"
              onChange={onInputChange}
              value={value}
              name="value"
              className="bg-white/10 w-full h-10 rounded-l-lg font-robotoMono font-medium pl-5"
            />
            <button
              type="submit"
              className="bg-primary w-16 h-10 rounded-r-lg font-rubik font-bold"
            >
              buy
            </button>
          </form>
          <div className="w-1/2 border-l-2 border-thertiary pl-5">
            <p>
              Hypergrow is a cutting-edge decentralized platform revolutionizing
              early-stage startup investing through blockchain technology. Join
              us in our mission to democratize access to investment
              opportunities while securing your spot in our token presale for
              exclusive benefits
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-rubik font-bold text-primary">
            $SAAS: <span className="font-robotoMono text-light">{ calcSol(value) }</span>
          </h2>
        </div>
      </section>
    </main>
  );
};
