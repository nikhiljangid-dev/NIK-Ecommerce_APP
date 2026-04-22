import React from "react";

export default function Login() {
  return (
    <div className="p-5 flex items-center justify-center bg-gray-100">

      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-[800px]">

        {/* LEFT IMAGE */}
        <div className="w-1/2 bg-blue-100 flex items-center justify-center">
          <img
            src="https://source.unsplash.com/400x400/?shopping-cart"
            alt=""
            className="w-[80%]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-1/2  p-8">
          <h2 className="text-xl font-semibold mb-2">
            Log in to Exclusive
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your details below
          </p>

          <input
            type="text"
            placeholder="Email or Phone Number"
            className="w-full border-b mb-4 outline-none py-2"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full border-b mb-6 outline-none py-2"
          />

          <div className="flex items-center justify-between">
            <button className="bg-red-500 text-white px-6 py-2 rounded">
              Log In
            </button>

            <span className="text-red-500 text-sm cursor-pointer">
              Forgot Password?
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}