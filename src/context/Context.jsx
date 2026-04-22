import React, { createContext, useState } from 'react';

const Store = createContext();

export default function Context({ children }) {
  const [cart, setCart] = useState([]);

  function addToCart(item) {
    const product = cart.find((prod) => prod.id === item.id);

    if (product) {
      const updatedCart = cart.map((prod) =>
        prod.id === item.id
          ? { ...prod, qty: prod.qty + 1 }
          : prod
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }

  

  // ✅ QUANTITY HANDLER
  function quantityHandler(id, flag) {
    const updatedCart = cart.map((prod) => {
      if (prod.id === id) {
        if (flag === 1) {
          return { ...prod, qty: prod.qty + 1 };
        } else {
          return {
            ...prod,
            qty: prod.qty > 1 ? prod.qty - 1 : 1,
          };
        }
      }
      return prod;
    });

    setCart(updatedCart); // ✅ correct syntax
  }

  // ✅ TOTAL CALCULATION
  const total = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <Store.Provider value={{ cart, addToCart, quantityHandler, total }}>
      {children}
    </Store.Provider>
  );
}

export { Store };