import React, { useContext } from "react";
import { Store } from "../context/Context";

export default function Cart() {
  const { cart, quantityHandler, total } = useContext(Store);

  return (
    <div className="w-[95%] max-w-[1200px] mx-auto py-10">

      {/* Breadcrumb */}
      <p className="text-gray-500 mb-6">Home / Cart</p>

      {/* TABLE */}
      <div className="border rounded-lg overflow-hidden">

        {/* Header */}
        <div className="grid grid-cols-4 bg-gray-100 p-4 font-semibold text-sm">
          <p>Product</p>
          <p>Price</p>
          <p>Quantity</p>
          <p className="text-right">Subtotal</p>
        </div>

        {/* CART ITEMS */}
        {cart.length === 0 ? (
          <p className="p-5 text-center">Cart is empty</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="grid grid-cols-4 items-center p-4 border-t"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.thumbnail}
                  alt=""
                  className="w-12 h-12 object-cover"
                />
                <p>{item.title}</p>
              </div>

              <p>${item.price}</p>

              {/* Quantity */}
              <div className="flex items-center border w-max rounded">
               
                <button
                  className="px-3 py-1 bg-red-500 text-white"
                  onClick={() => quantityHandler(item.id, 1)} // ➕
                >
                  + 
                </button>

                <span className="px-4">{item.qty}</span>

                 <button
                  className="px-3 py-1"
                  onClick={() => quantityHandler(item.id, 2)} // ➖
                >
                  -
                </button>

              </div>

              {/* Subtotal */}
              <p className="text-right">
                ${item.price * item.qty}
              </p>
            </div>
          ))
        )}

        {/* Buttons */}
        {/* <div className="flex justify-between p-4 border-t">
          <button className="border px-4 py-2 rounded">
            Return To Shop
          </button>

          <button className="border px-4 py-2 rounded">
            Update Cart
          </button>
        </div> */}
      </div>

      {/* COUPON + TOTAL */}
      <div className="grid md:grid-cols-2 gap-6 mt-8">

        {/* Coupon */}
        <div className="flex gap-3">
          <input
            type="text"
            placeholder="Coupon Code"
            className="border p-2 w-full rounded"
          />
          <button className="bg-red-500 text-white px-4 rounded">
            Apply Coupon
          </button>
        </div>

        {/* Cart Total */}
        <div className="border p-6 rounded">
          <h2 className="font-semibold text-lg mb-4">Cart Total</h2>

          <div className="flex justify-between mb-2">
            <p>Subtotal:</p>
            <p>${total}</p>
          </div>

          <div className="flex justify-between mb-2">
            <p>Shipping:</p>
            <p>Free</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-semibold mb-4">
            <p>Total:</p>
            <p>${total}</p>
          </div>

          <button className="w-full bg-red-500 text-white py-2 rounded">
            Proceed to checkout
          </button>
        </div>

      </div>

    </div>
  );
}