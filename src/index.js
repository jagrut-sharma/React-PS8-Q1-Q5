import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { ProductProvider } from "./context/ProductContext";
import { CartProvider } from "./context/CartContext";
import { useCartContext } from "./context/CartContext";
import { useProductContext } from "./context/ProductContext";
import { useWishListContext } from "./context/WishListContext";
import { WishListProvider } from "./context/WishListContext";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { useProductContext };
export { useCartContext };
export { useWishListContext };

root.render(
  <StrictMode>
    <Router>
      <ProductProvider>
        <CartProvider>
          <WishListProvider>
            <App />
          </WishListProvider>
        </CartProvider>
      </ProductProvider>
    </Router>
  </StrictMode>
);
