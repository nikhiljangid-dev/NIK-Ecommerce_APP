import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-black text-white py-14">
      <div className="w-[95%] max-w-[1400px] mx-auto">

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12">

          {/* Logo / Subscribe */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">NikHouse</h1>
            <h2 className="font-medium">Subscribe</h2>
            <p className="text-sm text-gray-400">
              Get 10% off your first order
            </p>

            <div className="flex border border-gray-600 rounded overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-black px-4 py-2 outline-none text-sm w-full placeholder-gray-500"
              />
              <button className="px-4 hover:bg-white hover:text-black transition">
                ➤
              </button>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-3">
            <h1 className="font-bold text-xl">Support</h1>
            <p className="text-sm text-gray-400 leading-6">
              Jaipur, Rajasthan
            </p>
            <p className="text-sm text-gray-400">
              nikhiljangid.dev@gmail.com
            </p>
            <p className="text-sm text-gray-400">+91 6377733954</p>
          </div>

          {/* Account */}
          <div className="space-y-3">
            <h1 className="font-bold text-xl">Account</h1>
            <ul className="space-y-2 text-sm text-gray-400">

           

              <li>
                <Link to="/login" className="hover:text-white transition">
                  Login / Register
                </Link>
              </li>

              <li>
                <Link to="/cart" className="hover:text-white transition">
                  Cart
                </Link>
              </li>

             
              <li>
                <Link to="/" className="hover:text-white transition">
                  Shop
                </Link>
              </li>

            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h1 className="font-bold text-xl">Quick Link</h1>
            <ul className="space-y-2 text-sm text-gray-400">

              <li>
                <Link to="/privacy" className="hover:text-white transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link to="/terms" className="hover:text-white transition">
                  Terms Of Use
                </Link>
              </li>

            

              <li>
                <Link to="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Download + Social */}
          <div className="space-y-4">
            <h1 className="font-bold text-xl">Thanks for visiting</h1>
            <p className="text-sm text-gray-400">
              Save $3 with App New User Only
            </p>

            {/* <div className="flex gap-4 items-center">
              <div className="bg-white w-20 h-20 rounded"></div>

              <div className="flex flex-col gap-3">
                <div className="bg-gray-800 px-4 py-2 text-xs rounded hover:bg-gray-700 cursor-pointer">
                  Google Play
                </div>
                <div className="bg-gray-800 px-4 py-2 text-xs rounded hover:bg-gray-700 cursor-pointer">
                  App Store
                </div>
              </div>
            </div>

            <div className="flex gap-5 mt-4 text-lg">
              <a href="#" className="hover:text-gray-400 transition">
                <FaFacebookF />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaTwitter />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaInstagram />
              </a>
              <a href="#" className="hover:text-gray-400 transition">
                <FaLinkedinIn />
              </a>
            </div> */}
          </div>

        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm text-gray-500">
          © 2026 Nikhil Jangid. All rights reserved.
        </div>

      </div>
    </div>
  );
}