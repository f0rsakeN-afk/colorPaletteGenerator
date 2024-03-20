import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaPaintBrush } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="bg-white shadow-md relative">
      <div className="container mx-auto flex items-center justify-between py-4 px-8">
        <h2 className="text-gray-800 md:text-2xl font-bold flex items-center gap-4">
          React Color Palette Generator
          <span className="text-red-600 cursor-pointer transition duration-300 ease-in-out hover:animate-bounce">
            <FaPaintBrush />
          </span>
        </h2>
        <div className="hidden md:flex items-center gap-6">
          <NavLink
            to="/home"
            className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            activeClassName="text-red-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/generator"
            className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            activeClassName="text-red-600"
          >
            Generator
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out"
            activeClassName="text-red-600"
          >
            About
          </NavLink>
        </div>
        <button className="md:hidden" onClick={handleShow}>
          {show ? <RxCross1 size={24} /> : <RxHamburgerMenu size={24} />}
        </button>
      </div>
      {show && (
        <div className="md:hidden bg-gray-100 py-2 px-4 animate-slideIn absolute w-full">
          <NavLink
            to="/home"
            className="block text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out py-2"
            activeClassName="text-red-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/generator"
            className="block text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out py-2"
            activeClassName="text-red-600"
          >
            Generator
          </NavLink>
          <NavLink
            to="/about"
            className="block text-gray-800 hover:text-gray-600 transition duration-300 ease-in-out py-2"
            activeClassName="text-red-600"
          >
            About
          </NavLink>
        </div>
      )}
    </div>
  );
};

export default Navbar;
