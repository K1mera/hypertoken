import React from "react";
import {NavLink} from "react-router-dom";


export const NavBar = () => {
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

      <button className="bg-primary rounded-lg px-5 py-1">
        Connect Wallet
      </button>
    </nav>
  );
};
