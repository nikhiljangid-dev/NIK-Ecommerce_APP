import React, { useEffect, useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import SkeltonUi from "./SkeltonUi";
import { Link, useParams } from "react-router-dom";
import SkeltonCategory from "./SkeltonCategory";

export default function AllCategoryProducts() {

  const { slug } = useParams();

  const [category, setCategory] = useState([]);
  const [product, setProduct] = useState([]);
  const [isLoader, setIsLoader] = useState(false);

  // const [catLoading, setCatLoading] = useState(false);
  // const [prodLoading, setProdLoading] = useState(false);


  async function fetchCategory() {
    try {
      setIsLoader(true);

      const response = await fetch("https://dummyjson.com/products/categories");
      const data = await response.json();

      setCategory(data ?? []);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(false);
    }
  }

  useEffect(() => {
    fetchCategory();
  }, []);

  // ✅ FETCH PRODUCTS
  async function getProductByCategoryName() {
    try {
      setIsLoader(true);

      let ProductApi = "https://dummyjson.com/products";

      if (slug) {
        ProductApi = `https://dummyjson.com/products/category/${slug}`;
      }

      const response = await fetch(ProductApi);
      const data = await response.json();

      setProduct(data.products || []);

    } catch (error) {
      console.log(error);
    } finally {
      setIsLoader(false);
    }
  }

  useEffect(() => {
    getProductByCategoryName();
  }, [slug]);

  return (
    <>
      {/* CATEGORY SECTION */}
      {isLoader ? (
        <SkeltonCategory />
      ) : (
        <div className="py-10 px-4">
          <h1 className="text-center font-bold text-2xl mb-8">
            Our Product Categories
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 max-w-[1200px] mx-auto">

            {/* ALL */}
            <Link to="/">
              <p className="shadow p-3 rounded text-center hover:bg-black hover:text-white">
                All
              </p>
            </Link>

            {/* CATEGORIES */}
            {category.map((item, index) => (
              <Link
                key={index}
                to={`/category/${item.slug}`} 
                className="shadow p-3 rounded text-center hover:bg-black hover:text-white"
              >
                {item.name}   
              </Link>
            ))}

          </div>
        </div>
      )}

      {/* DEMO DATA  */}

<div className="container">
  <div className="row" >
    <div className="col-4"></div>
    <div className="col-4"></div>
    <div className="col-4"></div>
  </div>
</div>

      {/* DEMO DATA END  */}

      {/* PRODUCTS */}
      {isLoader ? (
        <SkeltonUi />
      ) : (
        <div className="w-[90%] mx-auto">

          <div className="flex justify-between my-4">
            <h1 className="font-bold text-3xl">Our Best Product</h1>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {product.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-xl shadow-md hover:shadow-lg transition"
              >

                {/* IMAGE */}
                <div className="relative bg-gray-100 p-4">
                <Link to={`/ProductDetails/${item.id}`} >
                  <img
                    src={item.images?.[0] ?? 'https://st4.depositphotos.com/14953852/22772/v/450/depositphotos_227725020-stock-illustration-image-available-icon-flat-vector.jpg'}   // ✅ SAFE
                    alt={item.title}
                    className="w-full h-52 object-contain"
                  />
                </Link>

                  <div className="absolute top-3 right-3 flex flex-col gap-2">
                    <button className="bg-white p-2 rounded-full shadow">
                      <CiHeart size={18} />
                    </button>
                    <button className="bg-white p-2 rounded-full shadow">
                      <FaEye size={16} />
                    </button>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4">
                  <h2 className="text-gray-800 text-sm">
                    {item.title}
                  </h2>

                  <span className="text-red-500 font-bold">
                    ${item.price}
                  </span>
                </div>

              </div>
            ))}

          </div>
        </div>
      )}
    </>
  );
}