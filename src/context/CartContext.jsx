import { createContext, useContext, useState } from "react";

const CartContext = createContext({
  cart: [],
  addToCart: (id) => {},
  removeFromCart: (id) => {}
});

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Will give -1 if not present:
    const isItemPresent = cart.findIndex(({ id }) => id === item.id);

    if (isItemPresent === -1) {
      setCart([...cart, { ...item, quantity: 1 }]);
    } else {
      setCart(
        cart.map((product) => {
          return product.id === item.id
            ? { ...product, quantity: +product.quantity + 1 }
            : product;
        })
      );
    }
  };

  const removeOneFromCart = (item) => {
    // check if items quantity is one.
    const findItem = cart.find(({ id }) => id === item.id);

    if (findItem.quantity === 1) {
      setCart(cart.filter(({ id }) => id !== findItem.id));
      return;
    }

    setCart(
      cart.map((product) => {
        return product.id === item.id
          ? { ...product, quantity: +product.quantity - 1 }
          : product;
      })
    );
  };

  const removeFromCart = (item) => {
    const newCart = cart.filter((product) => product.name !== item.name);
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartContext = {
    cart,
    addToCart,
    removeFromCart,
    removeOneFromCart,
    clearCart
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}

export const useCartContext = () => {
  return useContext(CartContext);
};
