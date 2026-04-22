import React from "react";
// import { useNavigate } from "react-router-dom";

export default function NotFoundPage() {
//   const navigate = useNavigate();
  return (
    <div className="w-[95%] max-w-[1200px] mx-auto py-16 text-center">
      
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-10 text-left">
        Home / 404 Error
      </p>

      {/* 404 Text */}
      <h1 className="text-5xl md:text-7xl font-bold mb-6">
        404 Not Found
      </h1>

      {/* Description */}
      <p className="text-gray-500 mb-8">
        Your visited page not found. You may go home page.
      </p>

      {/* Button */}
      {/* <button
        onClick={() => navigate("/")}
        className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded"
      >
        Back to home page
      </button> */}

    </div>
  );
}