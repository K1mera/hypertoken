import React, { useState, useCallback } from "react";
import { useWallet, useConnection } from "@solana/wallet-adapter-react";
import { WalletNotConnectedError } from "@solana/wallet-adapter-base";
import { Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";
import hypertoken from "/assets/hypertoken.png";
import { useForm } from "../hooks";

function BuyToken() {
    const { value, formState, onInputChange, onResetForm } = useForm({ value: 0 });
    const [wallet, setWallet] = useState("8dGbgNTz67yqQMwuxGMxMhMRBcGrkFJHs2GnxZwN79xD");
    const { connection } = useConnection();
    const { publicKey, sendTransaction } = useWallet();

    const calcSol = (value) => {
        let saas = value * 1000000;
        return saas;
    };

    const onSubmit = useCallback(async (event) => {
        event.preventDefault();
        if (!publicKey) throw new WalletNotConnectedError();

        let lamports = LAMPORTS_PER_SOL * value;
        console.log("valor:", publicKey.toBase58());
        console.log(`lamports sending: ${lamports}`);

        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(wallet),
                lamports: lamports,
            })
        );

        const signature = await sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection, value, wallet]);
    return(
        <section className="">
        <div className="">
            <form onSubmit={onSubmit} className="flex items-center mb-2 md:w-1/2 md:pr-20 w-full">
                <input
                    type="text"
                    placeholder="Enter Wallet Address"
                    name="wallet"
                    className="bg-white/10 w-full h-10 rounded-l-lg font-robotoMono font-medium pl-5"
                    value={wallet}
                    onChange={(e) => setWallet(e.target.value)}
                />
                <input
                    type="number"
                    placeholder="Enter Sol quantity"
                    name="value"
                    className="bg-white/10 w-full h-10 rounded-l-lg font-robotoMono font-medium pl-5"
                    value={value}
                    onChange={onInputChange}
                />
                <button type="submit" className="bg-primary w-16 h-10 rounded-r-lg font-rubik font-bold">
                    Buy
                </button>
            </form>
            <div className="w-1/2 border-l-2 border-thertiary pl-5 md:flex hidden">
                <p>
                    Hypergrow is a cutting-edge decentralized platform revolutionizing early-stage startup investing through blockchain technology. Join us in our mission to democratize access to investment opportunities while securing your spot in our token presale for exclusive benefits.
                </p>
            </div>
        </div>

        <div>
            <h2 className="font-rubik font-bold text-primary pb-5">
                $SAAS: <span className="font-robotoMono text-light">{calcSol(value)}</span>
            </h2>
        </div>
        <div className="w-full border-t-2 pt-5 mt-5 border-thertiary md:hidden">
            <p>
                Hypergrow is a cutting-edge decentralized platform revolutionizing early-stage startup investing through blockchain technology. Join us in our mission to democratize access to investment opportunities while securing your spot in our token presale for exclusive benefits.
            </p>
        </div>
    </section>
    )
}
export default BuyToken