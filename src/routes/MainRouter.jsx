import { Route, Routes } from "react-router-dom";
import { HomePage, Marketplace, SingleProduct } from "../pages";
import App from "../components/NavBar";
import { WalletProvider } from "@solana/wallet-adapter-react";
import { WalletProviderContext as CustomWalletProvider, useWalletContext } from '../components/WalletContext'; 

export const MainRouter = () => {
  return (
    <CustomWalletProvider> 
    <>
      <App />  
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/marketplace/:id" element={<SingleProduct />}></Route>
      </Routes>
    </>
  </CustomWalletProvider>
  );
};