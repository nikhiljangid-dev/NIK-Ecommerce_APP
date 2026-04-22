import React, { useState, useEffect } from "react";
import SkeltonCategory from "./SkeltonCategory";
import { Link, useParams } from "react-router-dom";


export default function CategorySection() {
  // const {slug}  = useParams()
  // const [category, setCategory] = useState([]);
  // const [loading, setLoading] = useState(false);

  
  // async function fetchCategory() {
  //   const ProductCategoryApi = "https://dummyjson.com/products/categories";
  //   try {
  //     setLoading(true);
  //     const response = await fetch(ProductCategoryApi);
  //     const data = await response.json();
  //     setCategory(data);
  //     console.log(data,"nkikhil")
  //     // console.log(data[2].slug,"nkikhil")
  //   } catch (error) {
  //     console.log(error);
  //   } finally {
  //     setLoading(false);
  //   }
  // }

  // useEffect(() => {
  //   fetchCategory();
  // }, []);

  return (
    <>
      {/* {loading ? (
        <SkeltonCategory />
      ) : (
        <div className="py-10 px-4 sm:px-6 md:px-8"> */}
          
          {/* Title */}
          {/* <h1 className="text-center font-bold text-2xl sm:text-3xl mb-8">
            Our Product Categories
          </h1> */}

          {/* Grid Layout (Responsive) */}
          {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[1200px] mx-auto">
            
            {category.map((item, index) => (
              <Link
                key={index} to={`${item.slug}`}
                className="w-full shadow p-3 sm:p-4 rounded text-center text-sm sm:text-base 
                           hover:bg-black hover:text-white transition"
              >
                {item.name || item}
              </Link>
            ))}

          </div>
        </div>
      )} */}
    </>
  );
}