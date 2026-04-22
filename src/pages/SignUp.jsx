import React from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className=" p-5 flex items-center justify-center bg-gray-100">

      <div className="bg-white flex rounded-lg shadow-lg overflow-hidden w-[800px]">

        {/* LEFT IMAGE */}
        <div className="w-1/2 bg-blue-100 flex items-center justify-center">
          <img
            src="https://source.unsplash.com/400x400/?shopping"
            alt=""
            className="w-[80%]"
          />
        </div>

        {/* RIGHT FORM */}
        <div className="w-1/2 p-8">
          <h2 className="text-xl font-semibold mb-2">Create an account</h2>
          <p className="text-sm text-gray-500 mb-6">
            Enter your details below
          </p>

          <input
            type="text"
            placeholder="Name"
            className="w-full border-b mb-4 outline-none py-2"
          />

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

          <button className="w-full bg-red-500 text-white py-2 rounded mb-3">
            Create Account
          </button>

          <button className="w-full border py-2 rounded mb-3 flex items-center justify-center gap-2">
            <img
              src="https://cdn-icons-png.flaticon.com/512/300/300221.png"
              className="w-4"
            />
            Sign up with Google
          </button>

          <p className="text-sm text-center">
            Already have account?{" "}
            <Link to="/login" >
            <span className="text-red-500 cursor-pointer">Log in</span>
            </Link>
          </p>
        </div>

      </div>
    </div>
  );
}