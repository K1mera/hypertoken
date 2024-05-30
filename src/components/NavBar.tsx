import { WalletAdapterNetwork, WalletNotConnectedError } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider, useConnection, useWallet } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import { clusterApiUrl, Transaction, SystemProgram, PublicKey, LAMPORTS_PER_SOL } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo, useCallback, useState } from 'react';
import { WalletProviderContext as CustomWalletProvider, useWalletContext } from './WalletContext'; 

import '@solana/wallet-adapter-react-ui/styles.css';
import { NavLink } from 'react-router-dom';

let thelamports = 0;
let theWallet = "8dGbgNTz67yqQMwuxGMxMhMRBcGrkFJHs2GnxZwN79xD"

const App: FC = () => {
    return (
      <CustomWalletProvider>
        <NavBar>
            <Content />
        </NavBar>
      </CustomWalletProvider> 
    );
};

export default App;

const NavBar: FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new LedgerWalletAdapter(),
            new PhantomWalletAdapter(),
            new TorusWalletAdapter(),
            new SolflareWalletAdapter({ network }),  
            new TorusWalletAdapter(),
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect> 
                <WalletModalProvider>{children}</WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

const Content: FC = () => {
    let [lamports, setLamports] = useState(.1);
    const [wallet, setWallet] = useState("8dGbgNTz67yqQMwuxGMxMhMRBcGrkFJHs2GnxZwN79xD");

    const { connection } = useConnection();
    const { setPublicKey } = useWalletContext();
    const { publicKey, sendTransaction } = useWallet();

    const onClick = useCallback(async () => {
        if (!publicKey) throw new WalletNotConnectedError();
        
        let lamportsI = LAMPORTS_PER_SOL * lamports;
        console.log("valor:", publicKey.toBase58());
        console.log(`lamports sending: ${lamportsI}`);
        
        const transaction = new Transaction().add(
            SystemProgram.transfer({
                fromPubkey: publicKey,
                toPubkey: new PublicKey(wallet),
                lamports: lamportsI,
            })
        );

        const signature = await sendTransaction(transaction, connection);
        await connection.confirmTransaction(signature, 'processed');
    }, [publicKey, sendTransaction, connection, lamports, wallet]);

    function setTheLamports(e: any) {
        console.log(Number(e.target.value));
        const value = Number(e.target.value);
        setLamports(value);
        lamports = e.target.value;
        thelamports = lamports;
    };

    function setTheWallet(e: any) {
        setWallet(e.target.value)
        theWallet = e.target.value;
    };

    React.useEffect(() => {
      if(publicKey) {
        setPublicKey(publicKey.toBase58());
      }
    }, [publicKey, setPublicKey])

    const goToPhantomWallet=()=>{
      if ('phantom' in window) {
        const provider = window.phantom?.solana;
        if (provider?.isPhantom) {
          return provider;
        }
      }
      window.open('https://phantom.app/', '_blank');
    }
    return (
      <nav className="h-16 flex justify-between bg-dark/30 items-center w-full gap-5 font-rubik font-bold fixed px-10 lg:px-20 2xl:px-40 top-0 backdrop-blur-md z-50">
      <div className="flex items-center gap-5">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `hover:text-secondary ${
              !isActive
                ? "text-white"
                : "text-primary  "
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/marketplace"
          className={({ isActive }) =>
            `hover:text-secondary ${
              !isActive
                ? "text-white"
                : "text-primary "
            }`
          }
        >
          Marketplace
        </NavLink>
      </div>

      <button onClick={goToPhantomWallet} className="bg-black rounded-lg px-5 py-1">
        <WalletMultiButton />
      </button>
            {/* <input value={wallet} type="text" onChange={setTheWallet}></input>
            <br></br>
            <input value={lamports} type="number" onChange={setTheLamports}></input>
            <br></br>
            <button className='btn' onClick={onClick}>Buy</button> */}
          {/* <form
            action=""
            className="flex items-center mb-2 md:w-1/2 md:pr-20 w-full "
          >
          <input
              type="text"
              placeholder="Enter Wallet Address"
              onChange={setTheWallet}
              value={wallet}
              name="wallet"
              className="bg-white/10 w-full h-10 rounded-l-lg font-robotoMono font-medium pl-5"
          />
          <input
              type="number"
              placeholder="Enter Sol quantity"
              onChange={setTheLamports}
              value={lamports}
              name="value"
              className="bg-white/10 w-full h-10 rounded-l-lg font-robotoMono font-medium pl-5"
           />
            <button type="button" className="bg-primary w-16 h-10 rounded-r-lg font-rubik font-bold" onClick={onClick}>
                Buy
            </button>
          </form> */}
    </nav>
    );
};
