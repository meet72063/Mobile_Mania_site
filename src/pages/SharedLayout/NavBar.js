import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-blue-600 cursor-pointer text-black flex justify-between pr-6 pl-6 justify-items-center">
      <img src="./logo.svg" alt="path wrong" className=""></img>
      <div className="flex pr-10 pt-2 ">
        <Link to="/" className="pr-5 hover:text-stone-50">
          <strong>Products</strong>
        </Link>
        <Link to="/cart" className="pl-3 hover:text-stone-50">
          <strong>Cart</strong>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
