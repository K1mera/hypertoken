import React, { createContext, useContext, useState, ReactNode } from 'react';

interface WalletContextProps {
    publicKey: string | null;
    setPublicKey: (key: string | null) => void;
}

const WalletContext = createContext<WalletContextProps | undefined>(undefined);

export const WalletProviderContext: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [publicKey, setPublicKey] = useState<string | null>(null);

    return (
        <WalletContext.Provider value={{ publicKey, setPublicKey }}>
            {children}
        </WalletContext.Provider>
    );
};

export const useWalletContext = () => {
    const context = useContext(WalletContext);
    if (!context) {
        throw new Error('useWalletContext must be used within a WalletProvider');
    }
    return context;
};