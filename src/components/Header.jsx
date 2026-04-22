import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Store } from "../context/Context";

export default function Header() {
  const { cart } = useContext(Store);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* Top Header */}
      <div className="bg-black text-white text-center py-2 text-sm">
        <p>
          Summer Sale For All Swim Suits And Free Express Delivery Off 50%!
        </p>
      </div>

      {/* Main Header */}
      <div className="shadow">
        <div className="w-[95%] max-w-[1400px] mx-auto flex items-center justify-between py-4">

          {/* Logo */}
          <Link to="/">
            <div className="font-bold text-2xl md:text-3xl">
              NikHouse
            </div>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-8 font-medium">
            <Link to="/"><li className="cursor-pointer hover:text-gray-600">Home</li></Link>
            <Link to="/contact"><li className="cursor-pointer hover:text-gray-600">Contact</li></Link>
            <Link to="/about"><li className="cursor-pointer hover:text-gray-600">About Me</li></Link>
            <Link to="/signUp"><li className="cursor-pointer hover:text-gray-600">Sign Up</li></Link>
          </ul>

          {/* Right Section */}
          <div className="flex items-center gap-3 md:gap-5">

            {/* Search */}
            <div className="hidden md:block relative">
              <input
                type="text"
                className="border bg-gray-100 outline-none px-4 py-2 pr-10 rounded w-56"
                placeholder="What are you looking for?"
              />
              <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
            </div>

            {/* Cart */}
            <Link to="/cart" className="relative">
              <FaShoppingCart className="text-xl cursor-pointer" />
              <span className="absolute -top-2 -right-3 text-xs bg-red-500 text-white px-1 rounded">
                {cart.length || 0}
              </span>
            </Link>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              {menuOpen ? (
                <FaTimes
                  className="text-2xl cursor-pointer"
                  onClick={() => setMenuOpen(false)}
                />
              ) : (
                <FaBars
                  className="text-2xl cursor-pointer"
                  onClick={() => setMenuOpen(true)}
                />
              )}
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-lg">

            {/* Search */}
            <div className="p-4 border-b">
              <div className="relative">
                <input
                  type="text"
                  className="w-full border bg-gray-100 px-4 py-2 pr-10 rounded outline-none"
                  placeholder="Search..."
                />
                <CiSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-xl text-gray-500" />
              </div>
            </div>

            {/* Links */}
            <ul className="flex flex-col p-4 gap-4 font-medium">

              <Link to="/" onClick={() => setMenuOpen(false)}>
                <li className="cursor-pointer hover:text-red-500">Home</li>
              </Link>

              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                <li className="cursor-pointer hover:text-red-500">Contact</li>
              </Link>

              <Link to="/about" onClick={() => setMenuOpen(false)}>
                <li className="cursor-pointer hover:text-red-500">About</li>
              </Link>

              <Link to="/signUp" onClick={() => setMenuOpen(false)}>
                <li className="cursor-pointer hover:text-red-500">Sign Up</li>
              </Link>

              <Link to="/cart" onClick={() => setMenuOpen(false)}>
                <li className="cursor-pointer hover:text-red-500">
                  Cart ({cart.length || 0})
                </li>
              </Link>

            </ul>
          </div>
        )}
      </div>
    </>
  );
}