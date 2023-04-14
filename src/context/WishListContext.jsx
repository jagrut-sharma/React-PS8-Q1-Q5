import { createContext, useState, useContext } from "react";

const WishListContext = createContext({
  wishList: [],
  addToWishList: (id) => {},
  removeFromWishList: (id) => {}
});

export function WishListProvider({ children }) {
  const [wishList, setWishList] = useState([]);

  const addToWishList = (item) => {
    const isPresent = wishList.findIndex(({ id }) => id === item.id);
    if (isPresent === -1) {
      setWishList([...wishList, item]);
    }
  };

  const removeFromWishList = (item) => {
    // Check if it is present in wishlist

    const newWishList = wishList.filter(
      (product) => product.name !== item.name
    );
    setWishList(newWishList);
  };

  const wishListContext = {
    wishList,
    addToWishList,
    removeFromWishList
  };

  return (
    <WishListContext.Provider value={wishListContext}>
      {children}
    </WishListContext.Provider>
  );
}

export const useWishListContext = () => {
  return useContext(WishListContext);
};
