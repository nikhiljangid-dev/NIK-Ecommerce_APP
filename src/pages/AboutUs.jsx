
  import React from "react";
import { FaStore, FaDollarSign, FaShoppingBag, FaCode } from "react-icons/fa";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function AboutUs() {
  return (
    <div className="w-[95%] max-w-[1400px] mx-auto py-10 space-y-16">
      
      {/* Top Section */}
      <div className="flex flex-col md:flex-row items-center gap-10">
        
        {/* Left Text */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold">My Journey</h1>

          <p className="text-gray-600 text-sm leading-6">
            Hello! My name is <strong>Nikhil Jangid</strong>, and I am currently learning 
            Full Stack Web Development. I am passionate about building modern, responsive, 
            and user-friendly web applications using technologies like React, JavaScript, 
            and modern CSS frameworks.
          </p>

          <p className="text-gray-600 text-sm leading-6">
            I have already built multiple projects including e-commerce apps, food apps, 
            and UI-based applications. I am continuously improving my skills and aiming 
            to become a professional full stack developer.
          </p>
        </div>

        {/* Right Image */}
        <div className="md:w-1/2">
          <img
            src="/src/assets/IMG_20240608_203924.jpg"
            alt="about"
            className="rounded-xl w-full object-cover"
          />
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        
        <div className="border p-6 rounded-lg">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-3">
            <FaCode />
          </div>
          <h2 className="font-bold text-lg">15+</h2>
          <p className="text-sm text-gray-500">Projects Completed</p>
        </div>

        <div className="border p-6 rounded-lg">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-3">
            <FaStore />
          </div>
          <h2 className="font-bold text-lg">5+</h2>
          <p className="text-sm text-gray-500">React Applications</p>
        </div>

        <div className="border p-6 rounded-lg">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-3">
            <FaShoppingBag />
          </div>
          <h2 className="font-bold text-lg">3+</h2>
          <p className="text-sm text-gray-500">Major Projects</p>
        </div>

        <div className="border p-6 rounded-lg">
          <div className="bg-black text-white w-12 h-12 flex items-center justify-center mx-auto rounded-full mb-3">
            <FaDollarSign />
          </div>
          <h2 className="font-bold text-lg">2026</h2>
          <p className="text-sm text-gray-500">Learning & Growing</p>
        </div>

      </div>

      {/* Team Section (Personal Profile) */}
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-10">About Me</h1>

        <div className="flex justify-center">
          <div className="text-center max-w-sm">
            <img
              src="/src/assets/IMG_20240608_203924.jpg"
              alt=""
              className="w-full h-64 object-cover rounded-lg"
            />
            <h2 className="mt-4 font-bold text-xl">Nikhil Jangid</h2>
            <p className="text-sm text-gray-500">Full Stack Developer (Learner)</p>

            {/* <div className="flex justify-center gap-4 mt-3 text-lg">
              <FaTwitter className="cursor-pointer hover:text-blue-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaLinkedinIn className="cursor-pointer hover:text-blue-700" />
            </div> */}
          </div>
        </div>
      </div>

    </div>
  );
}