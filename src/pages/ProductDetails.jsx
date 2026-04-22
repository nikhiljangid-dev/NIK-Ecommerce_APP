import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Store } from "../context/Context";

export default function ProductDetails() {
  const { id } = useParams();

    const {addToCart} = useContext(Store)
  

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const [quantity, setQuantity] = useState(1);

  async function getProduct() {
    try {
      setLoading(true);

      const res = await fetch(`https://dummyjson.com/products/${id}`);
      const data = await res.json();

      setProduct(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProduct();
  }, [id]);

  if (loading) return <h1 className="text-center mt-10">Loading...</h1>;
  if (!product) return null;

  return (
    <div className="max-w-6xl mx-auto p-6">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* LEFT - IMAGE */}
        <div className="flex gap-4">
          
          {/* Thumbnails */}
          <div className="flex flex-col gap-3">
            {product.images?.map((img, i) => (
              <img key={i} src={img} className="w-20 h-20 border rounded object-cover" />
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1">
            <img
              src={product.thumbnail}
              className="w-full h-[400px] object-contain bg-gray-100 rounded"
            />
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-2">
            <span className="text-yellow-500">
              {"★".repeat(Math.round(product.rating))}
            </span>
            <span className="text-gray-500 text-sm">
              ({product.reviews?.length || 0} Reviews)
            </span>
            <span className="text-green-600 text-sm ml-2">
              {product.availabilityStatus}
            </span>
          </div>

          {/* Price */}
          <h2 className="text-2xl font-semibold mb-3">
            ${product.price}
          </h2>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4">
            {product.description}
          </p>

          <hr className="mb-4" />

          {/* Category */}
          <p className="mb-2 text-sm text-gray-500">
            Category: {product.category}
          </p>

          {/* Quantity */}
          <div className="flex items-center gap-3 mb-4">
            
            <div className="flex border rounded">
              <button
                className="px-3"
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
              >
                -
              </button>
              <span className="px-4">{quantity}</span>
              <button
                className="px-3 bg-red-500 text-white"
                onClick={() => setQuantity(quantity + 1)}
              >
                +
              </button>
            </div>

            <button onClick={()=> addToCart({
              id:product.id,
              title:  product.title,
              thumbnail :product.thumbnail,
              price: product.price,
              qty:1
            })} className="bg-red-500 text-white px-6 py-2 rounded">
              Add Cart
            </button>
          </div>

          {/* Extra Info */}
          <div className="border rounded p-4 space-y-2 text-sm">
            <p><b>Stock:</b> {product.stock}</p>
            <p><b>Warranty:</b> {product.warrantyInformation}</p>
            <p><b>Shipping:</b> {product.shippingInformation}</p>
            <p><b>Return:</b> {product.returnPolicy}</p>
          </div>

        </div>
      </div>
    </div>
  );
}