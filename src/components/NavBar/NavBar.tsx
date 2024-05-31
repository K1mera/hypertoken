import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';

import {
    LedgerWalletAdapter,
    PhantomWalletAdapter,
    SolflareWalletAdapter,
    TorusWalletAdapter,
} from '@solana/wallet-adapter-wallets';

import { clusterApiUrl } from '@solana/web3.js';
import React, { FC, ReactNode, useMemo } from 'react';
import { NavLink } from 'react-router-dom';

import '@solana/wallet-adapter-react-ui/styles.css';

const NavBar: FC<{ children: ReactNode }> = ({ children }) => {
    const network = WalletAdapterNetwork.Devnet;
    const endpoint = useMemo(() => clusterApiUrl(network), [network]);

    const wallets = useMemo(
        () => [
            new LedgerWalletAdapter(),
            new PhantomWalletAdapter(),
            new TorusWalletAdapter(),
            new SolflareWalletAdapter({ network }),  
        ],
        [network]
    );

    return (
        <ConnectionProvider endpoint={endpoint}>
            <WalletProvider wallets={wallets} autoConnect>
                <WalletModalProvider>
                    <nav className="h-16 flex justify-between bg-dark/30 items-center w-full gap-5 font-rubik font-bold fixed px-10 lg:px-20 2xl:px-40 top-0 backdrop-blur-md z-50">
                        <div className="flex items-center gap-5">
                            {/* <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    `hover:text-secondary ${
                                        !isActive ? "text-white" : "text-primary"
                                    }`
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/marketplace"
                                className={({ isActive }) =>
                                    `hover:text-secondary ${
                                        !isActive ? "text-white" : "text-primary"
                                    }`
                                }
                            >
                                Marketplace
                            </NavLink> */}
                            <img src="/HeaderLogo.png" alt="" />
                        </div>
                        <button className="bg-inherit rounded-lg px-5 py-1">
                            <WalletMultiButton />
                        </button>
                    </nav>
                    {children}
                </WalletModalProvider>
            </WalletProvider>
        </ConnectionProvider>
    );
};

export default NavBar;
