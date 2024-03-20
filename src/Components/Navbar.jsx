import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { FaPaintBrush } from "react-icons/fa";

const Navbar = () => {
  const [show, setShow] = useState(false);

  function handleShow() {
    setShow(!show);
  }

  return (
    <div className="relative bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between px-8 py-4">
        <Link
          to="/"
          className="flex items-center gap-4 font-bold text-gray-800 md:text-2xl"
        >
          React Color Palette Generator
          <span className="cursor-pointer text-red-600 transition duration-300 ease-in-out hover:animate-bounce">
            <FaPaintBrush />
          </span>
        </Link>
        <div className="hidden items-center gap-6 md:flex">
          <NavLink
            to="/home"
            className="text-gray-800 transition duration-300 ease-in-out hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/generator"
            className="text-gray-800 transition duration-300 ease-in-out hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Generator
          </NavLink>
          <NavLink
            to="/about"
            className="text-gray-800 transition duration-300 ease-in-out hover:text-gray-600"
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
        <div className="animate-slideIn absolute w-full bg-gray-100 px-4 py-2 md:hidden">
          <NavLink
            to="/home"
            className="block py-2 text-gray-800 transition duration-300 ease-in-out hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Home
          </NavLink>
          <NavLink
            to="/generator"
            className="block py-2 text-gray-800 transition duration-300 ease-in-out hover:text-gray-600"
            activeClassName="text-red-600"
          >
            Generator
          </NavLink>
          <NavLink
            to="/about"
            className="block py-2 text-gray-800 transition duration-300 ease-in-out hover:text-gray-600"
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
