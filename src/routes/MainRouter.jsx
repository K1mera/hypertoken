import { Route, Routes } from "react-router-dom";
import { HomePage, Marketplace, SingleProduct } from "../pages";
import App from "../components/NavBar/NavBar"; // Asegúrate de que la ruta sea correcta
import { WalletProviderContext as CustomWalletProvider } from '../components/WalletContext'; 
import NavBar from "../components/NavBar/NavBar";

export const MainRouter = () => {
  return (
    <CustomWalletProvider> 
      <NavBar>  
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/marketplace" element={<Marketplace />}></Route>
          <Route path="/marketplace/:id" element={<SingleProduct />}></Route>
        </Routes>
      </NavBar>
    </CustomWalletProvider>
  );
};
