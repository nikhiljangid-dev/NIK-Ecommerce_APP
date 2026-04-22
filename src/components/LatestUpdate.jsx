import React from "react";
import { FaTruck, FaHeadphones, FaShieldAlt } from "react-icons/fa";
export default function LatestUpdate() {
  return (
    <>
    <div className="w-[90%] mx-auto py-10">
      
      {/* Header */}
      <div className="mb-6">
        <p className="text-red-500 font-semibold text-sm">Featured</p>
        <h1 className="text-3xl font-bold">New Arrival</h1>
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        
        {/* Left Big Card */}
        <div className="relative bg-black rounded-xl overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc8vZCovYz7fXHjOBF84bHrHCPQZuMzrgk7A&s"
            alt="ps5"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute bottom-5 left-5 text-white">
            <h2 className="text-lg font-bold">PlayStation 5</h2>
            <p className="text-sm">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="mt-2 underline">Shop Now</button>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex flex-col gap-6">
          
          {/* Top Right Card */}
          <div className="relative bg-black rounded-xl overflow-hidden h-[240px]">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhmu5DIjy6ED79rgF4131AEGkTfOEfWyBqdA&s"
              alt="women"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute bottom-5 left-5 text-white">
              <h2 className="text-lg font-bold">Women's Collections</h2>
              <p className="text-sm">
                Featured women collections that give you another vibe.
              </p>
              <button className="mt-2 underline">Shop Now</button>
            </div>
          </div>

          {/* Bottom Two Cards */}
          <div className="grid grid-cols-2 gap-6">
            
            {/* Speakers */}
            <div className="relative bg-black rounded-xl overflow-hidden h-[180px]">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReTBDDknNgpS-cvTY3fgfLRfSg-grMTpz8ow&s"
                alt="speakers"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-3 left-3 text-white">
                <h2 className="text-sm font-bold">Speakers</h2>
                <button className="text-xs underline">Shop Now</button>
              </div>
            </div>

            {/* Perfume */}
            <div className="relative bg-black rounded-xl overflow-hidden h-[180px]">
              <img
                src="https://img.freepik.com/free-photo/black-friday-sales-elements-composition-with-copy-space_23-2148665620.jpg?semt=ais_hybrid&w=740&q=80"
                alt="perfume"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute bottom-3 left-3 text-white">
                <h2 className="text-sm font-bold">Perfume</h2>
                <button className="text-xs underline">Shop Now</button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

    <div className="w-[80%] mx-auto py-10">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
        
        {/* Delivery */}
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-black text-white w-14 h-14 flex items-center justify-center mx-auto rounded-full mb-4">
            <FaTruck size={20} />
          </div>
          <h1 className="font-bold text-lg">Free & Fast Delivery</h1>
          <p className="text-gray-500 text-sm">
            Free delivery for all orders above $140
          </p>
        </div>

        {/* Support */}
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-black text-white w-14 h-14 flex items-center justify-center mx-auto rounded-full mb-4">
            <FaHeadphones size={20} />
          </div>
          <h1 className="font-bold text-lg">24/7 Customer Support</h1>
          <p className="text-gray-500 text-sm">
            Friendly 24/7 customer support
          </p>
        </div>

        {/* Secure */}
        <div className="p-6 rounded-xl shadow hover:shadow-lg transition">
          <div className="bg-black text-white w-14 h-14 flex items-center justify-center mx-auto rounded-full mb-4">
            <FaShieldAlt size={20} />
          </div>
          <h1 className="font-bold text-lg">Money Back Guarantee</h1>
          <p className="text-gray-500 text-sm">
            We return money within 30 days
          </p>
        </div>

      </div>

    </div>
    </>

  );
}