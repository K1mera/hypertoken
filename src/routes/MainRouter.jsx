import { Route, Routes } from "react-router-dom";
import { NavBar } from "../components";
import { Marketplace, SingleProduct } from "../pages";

export const MainRouter = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Marketplace />}></Route>
        <Route path="/:id" element={<SingleProduct />}></Route>
      </Routes>
      
    </>
  );
};
