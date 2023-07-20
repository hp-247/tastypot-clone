import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 p-4 relative md:flex md:justify-between md:items-center">
      <div className="flex justify-between items-center">
        <img src={logo} alt="TastyPot logo" className="h-12" />
        <div className="flex items-center">
          <FaShoppingCart className="md:hidden text-2xl text-white mr-4" />
          <button
            className="md:hidden block text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <FaTimes className="text-2xl" />
            ) : (
              <FaBars className="text-2xl" />
            )}
          </button>
        </div>
      </div>

      <div
        className={`${
          isOpen ? "translate-y-0" : "-translate-y-full"
        } transform md:translate-y-0 fixed md:relative top-0 left-0 h-full md:h-auto w-full md:w-auto bg-black md:bg-transparent transition-transform duration-500 ease-in-out z-10 md:flex md:items-center md:space-x-4 px-2 pt-16 md:pt-0`}
      >
        {isOpen && (
          <button
            className="text-white absolute top-4 right-4"
            onClick={() => setIsOpen(false)}
          >
            <FaTimes className="text-2xl" />
          </button>
        )}

        <Link
          to="/"
          className="block px-4 py-2 md:py-0 text-white text-center"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/about"
          className="block px-4 py-2 md:py-0 text-white text-center"
          onClick={() => setIsOpen(false)}
        >
          About
        </Link>
        <Link
          to="/locations"
          className="block px-4 py-2 md:py-0 text-white text-center"
          onClick={() => setIsOpen(false)}
        >
          Locations
        </Link>
        <Link
          to="/order"
          className="block px-4 py-2 md:py-0 text-white text-center"
          onClick={() => setIsOpen(false)}
        >
          Order Online
        </Link>
        <FaShoppingCart className="md:block hidden text-2xl text-white" />
      </div>
    </nav>
  );
};

export default Header;
