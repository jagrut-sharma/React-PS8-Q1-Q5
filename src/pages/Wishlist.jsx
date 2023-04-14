import { useWishListContext } from "..";

export default function WishList() {
  const { wishList, removeFromWishList } = useWishListContext();
  return (
    <div>
      <h2>Items: {wishList.length}</h2>
      {wishList.map((product) => {
        const { name, description, category, brand } = product;
        return (
          <div className="wishlist-element" key={name}>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Category: {category}</p>
            <p>Brand: {brand}</p>
            <button onClick={() => removeFromWishList(product)}>
              Remove From Wishlist
            </button>
          </div>
        );
      })}
    </div>
  );
}
