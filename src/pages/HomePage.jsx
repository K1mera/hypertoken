import { useState } from "react";
import style from "./HomePage.module.css";
import MouseToDown from "../components/MouseToDown/MouseToDown";
import {
  Connection,
  PublicKey,
  Transaction,
  SystemProgram,
  LAMPORTS_PER_SOL,
} from "@solana/web3.js";

export const HomePage = () => {
  //State to change value in input
  const [inputValue, setInputValue] = useState(0);

  const calcSol = (value) => {
    let saas = value * 4000;
    return saas;
  };

  const getProvider = () => {
    if ("phantom" in window) {
      const provider = window.phantom?.solana;
      if (provider?.isPhantom) {
        return provider;
      }
    }
    window.open("https://phantom.app/", "_blank");
  };

  const handlerInput = (e) => {
    if (e.target.value < 0) return;
    setInputValue(e.target.value);
  };

  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      //Hypertoken contract address
      const HYPERTOKEN_MINT_ADDRESS = new PublicKey(
        "HypertokenMintAddressHere"
      );

      //Exchange program contract address
      const EXCHANGE_PROGRAM_ID = new PublicKey("ExchangeProgramIdHere");
      const provider = getProvider();
      const network = "https://api.mainnet-beta.solana.com";
      const connection = new Connection(network);

      //Connecting the wallet
      await provider.connect();
      const walletPublicKey = provider.publicKey;

      const transaction = new Transaction().add(
        //Transfer 1 SOL to the exchange program account

        SystemProgram.transfer({
          fromPubkey: walletPublicKey,
          toPubkey: EXCHANGE_PROGRAM_ID,
          lamports: LAMPORTS_PER_SOL, // 1 SOL in lamports
        }),
        //Calling the exchange contract to obtain Hypertokens
        {
          keys: [
            { pubkey: walletPublicKey, isSigner: true, isWritable: true },
            { pubkey: EXCHANGE_PROGRAM_ID, isSigner: false, isWritable: true },
          ],
          programId: EXCHANGE_PROGRAM_ID,
          data: Buffer.from([]), // Here you could add specific contract data if needed.
        }
      );
      const { signature } = await provider.signAndSendTransaction(transaction);
      await connection.confirmTransaction(signature);

      console.log("Transaction successful:", signature);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <main className="w-full pb-10 md:h-[calc(100vh-64px)] flex flex-col  pt-20 gap-20 scroll-p-0 scroll-m-0 bg-black ">
      <section className="flex w-full md:flex-row flex-col">
        <section className="flex flex-col items-center md:items-start gap-3 2xl:gap-0 w-full lg:w-[48%]">
          <h3 className="font-rubik font-bold text-md lg:text-xl 2xl:text-2xl text-secondary">
            PRE-LAUNCH SALE ON NOW
          </h3>
          <div className="flex flex-col gap-0 ">
            <h2 className="font-rubik font-bold text-[1.1rem] lg:text-[1.93rem] 2xl:text-[2.95rem] 2xl:-mb-11 lg:-mb-7 -mb-4">
              BUILDVISION AI
            </h2>
            <h1 className="font-rubik font-black text-[2.46rem] lg:text-[4.3rem] 2xl:text-[6.57rem] text-primary">
              BUILD TOKEN
            </h1>
          </div>
          <button className="border border-secondary rounded-lg px-10 font-rubik font-bold text-md md:text-lg w-full lg:w-[98%]">
            Buy and sell goods, & services on the world's
          </button>
        </section>
        <section className="w-full md:w-[55%] flex justify-between items-center flex-row">
          <span></span>
          <img src="/HyperToken.png" className={style.imageToken} alt="" />
          <ul>
            <li className="my-2">
              <img src="/telegram.png" alt="" />
            </li>
            <li className="my-2">
              <img src="/discord.png" alt="" />
            </li>
            <li className="my-2">
              <img src="/instagram.png" alt="" />
            </li>
          </ul>
          {/* social */}
        </section>
      </section>
      <section className="justify-center items-center w-full bg-black ">
        <div className="flex flex-col md:flex-row ">
          <form
            action=""
            onSubmit={onSubmit}
            className="flex items-center mb-2 md:w-1/2 md:pr-20 w-full "
          >
            <input
              type="number"
              placeholder="Enter Sol quantity"
              onChange={(e) => handlerInput(e)}
              value={inputValue}
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
              exclusive benefits
            </p>
          </div>
        </div>

        <div>
          <h2 className="font-rubik font-bold text-primary pb-5">
            $SAAS:{" "}
            <span className="font-robotoMono text-light">
              {calcSol(inputValue)}
            </span>
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
        {/* <MouseToDown/> */}
      </section>
    </main>
  );
};
