import React from "react";

export default function SkeltonUi() {
  return (
    <div className="w-[90%] mx-auto">
      
      {/* Header Skeleton */}
      <div className="flex items-center justify-between my-4">
        <div className="h-8 w-48 bg-gray-300 rounded animate-pulse"></div>
        <div className="h-10 w-24 bg-gray-300 rounded animate-pulse"></div>
      </div>

      {/* Cards Skeleton */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {[...Array(4)].map((_, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            
            {/* Image Skeleton */}
            <div className="bg-gray-200 h-52 animate-pulse relative">
              
              {/* Icons Skeleton */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full animate-pulse"></div>
              </div>
            </div>

            {/* Content Skeleton */}
            <div className="p-4 space-y-3">
              
              {/* Title */}
              <div className="h-4 bg-gray-300 rounded w-3/4 animate-pulse"></div>

              {/* Price */}
              <div className="flex gap-2">
                <div className="h-4 w-12 bg-gray-300 rounded animate-pulse"></div>
                <div className="h-4 w-10 bg-gray-200 rounded animate-pulse"></div>
              </div>

              {/* Rating */}
              <div className="flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={i}
                    className="w-3 h-3 bg-gray-300 rounded animate-pulse"
                  ></div>
                ))}
                <div className="h-3 w-8 bg-gray-200 rounded ml-2 animate-pulse"></div>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}