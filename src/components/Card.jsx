import React, { useContext, useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye, FaStar } from "react-icons/fa";
import SkeltonUi from "./SkeltonUi";

export default function Card() {  


    const [product , setProduct] = useState([])
    const [loading ,setLoading ] = useState(false)

    const ProductApi = "https://dummyjson.com/products"

   async function getProduct(){
        setLoading(true)
        const response =await fetch(ProductApi)
        const data =await response.json()
        console.log(data.products, "data");
        setProduct(data.products)

        setLoading(false)

    }

    useEffect(() => {
        getProduct()

    }, [])

    return (
<>
{loading ? <SkeltonUi/> : 

    <div className="w-[90%] mx-auto">
      
      {/* Header */}
      <div className="flex items-center justify-between my-4">
        <h1 className="font-bold text-3xl">Our Best Product</h1>

        <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          View All
        </button>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {product.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            
            {/* Image */}
            <div className="relative bg-gray-100 p-4">
              <img
                src={item.images[0]}
                alt={item.brand}
                className="w-full h-52 object-contain"
              />

              {/* Icons */}
              <div className="absolute top-3 right-3 flex flex-col gap-2">
                <button className="bg-white p-2 rounded-full shadow">
                  <CiHeart size={18} />
                </button>
                <button className="bg-white p-2 rounded-full shadow">
                  <FaEye size={16} />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="p-4">
              <h2 className="text-gray-800 font-medium text-sm">
                {item.title}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-red-500 font-bold">
                  ${item.price}
                </span>
                
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2 text-yellow-400">
                {/* {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} size={14} />
                ))} */}
                {/* <span className="text-gray-500 text-sm ml-1">
                  ({item.reviews})
                </span> */}
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
}
  </>
  );

}