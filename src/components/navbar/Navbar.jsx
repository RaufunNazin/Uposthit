import React from "react";
import {BsPersonCircle} from "react-icons/bs";

const Navbar = () => {
  let user = localStorage.getItem("what");
  return (
    <div className="navbar relative h-12 w-full flex items-center">
      <form className="flex items-center">
        <div className="relative w-full ml-7">
        </div>
      </form>
      <div className="items absolute right-8">
        <div className="item flex items-center">
          <span className="text-gray-600 mr-2">{user}</span>
          <BsPersonCircle className="text-black" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
