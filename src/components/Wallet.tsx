import React, { useContext, useState } from 'react';

const WalletContext = createContext();

export const WalletProviderContext = ({ children }) => {
  const [publicKey, setPublicKey] = useState(null);
  const [connection, setConnection] = useState(null);

  return (
    <WalletContext.Provider value={{ publicKey, setPublicKey, connection, setConnection }}>
      {children}
    </WalletContext.Provider>
  );
};

export const useWalletContext = () => useContext(WalletContext);
