import { createContext, useState, useEffect, useContext } from "react";

import { fakeFetch } from "../API/fakeFetch";

const ProductContext = createContext({
  productList: [],
  setProductList: (id) => {}
});

export function ProductProvider({ children }) {
  const [productList, setProductList] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fakeFetch("https://example.com/api/products");
      const {
        data: { products }
      } = res;
      setProductList(products);
    } catch (err) {
      console.error(`${err.status}: ${err.message}`);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productContext = {
    productList,
    setProductList
  };

  return (
    <ProductContext.Provider value={productContext}>
      {children}
    </ProductContext.Provider>
  );
}

export const useProductContext = () => {
  return useContext(ProductContext);
};
