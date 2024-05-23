import { Route, Routes } from "react-router-dom";
import { HomePage, Marketplace, SingleProduct } from "../pages";
import App from "../components/NavBar";

export const MainRouter = () => {
  return (
    <>
      <App />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/marketplace/:id" element={<SingleProduct />}></Route>
      </Routes>
      
    </>
  );
};
