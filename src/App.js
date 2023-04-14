import { Routes, Route } from "react-router-dom";

import Header from "./component/Header";
import ProductList from "./pages/ProductList";
import ErrorPage from "./pages/ErrorPage";
import "./styles.css";
import Cart from "./pages/Cart";
import WishList from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/product/:productID" element={<ProductDetails />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}
