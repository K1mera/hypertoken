import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components";
import { HomePage, Marketplace, SingleProduct } from "../pages";

export const MainRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/marketplace" element={<Marketplace />}></Route>
        <Route path="/marketplace/:id" element={<SingleProduct />}></Route>
      </Routes>
      
    </>
  );
};
