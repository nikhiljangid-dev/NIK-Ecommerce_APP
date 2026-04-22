import React from "react";

export default function SkeltonCategory() {
  return (
    <div className="p-8">
      
      {/* Title Skeleton */}
      <div className="h-8 w-64 bg-gray-300 mx-auto rounded animate-pulse mb-6"></div>

      {/* Category Buttons Skeleton */}
      <div className="flex flex-wrap items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="w-[15%] h-12 bg-gray-300 m-2 rounded animate-pulse"
          ></div>
        ))}
      </div>

    </div>
  );
}