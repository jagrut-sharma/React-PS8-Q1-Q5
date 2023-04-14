import { Link } from "react-router-dom";
import { useWishListContext } from "..";
import { useCartContext } from "..";

export function ProductCard(product) {
  const { id, name, description, price, category, brand, noDetail } = product;
  const { cart, addToCart, removeOneFromCart } = useCartContext();
  const { wishList, addToWishList, removeFromWishList } = useWishListContext();

  const getWishlistStatus = (itemID) => {
    if (!wishList.length) return false;
    //check if the item is present in cart
    const isPresent = wishList.find(({ id }) => id === itemID);
    if (!isPresent) return false;
    return true;
  };

  const getStyle = (idStyle) => {
    // If cart length zero, enable all button.
    if (!cart.length) return false;
    //check if the item is present in cart
    const isPresent = cart.find(({ id }) => id === idStyle);
    if (!isPresent) return false;
    return true;
  };

  const getEle = (itemID) => {
    const getItem = cart.find(({ id }) => id === itemID);
    return getItem.quantity;
  };

  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <p>Price: INR {price}</p>
      {noDetail ? (
        <Link to={`/product/${id}`}>Visit Item</Link>
      ) : (
        <div>
          <p>Category: {category}</p>
          <p>Brand: {brand}</p>
        </div>
      )}
      <div>
        <button
          className="btn"
          disabled={getStyle(id)}
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
        {getWishlistStatus(id) ? (
          <button className="btn" onClick={() => removeFromWishList(product)}>
            Remove from Wishlist
          </button>
        ) : (
          <button className="btn" onClick={() => addToWishList(product)}>
            Add to Wishlist
          </button>
        )}

        <span>
          {getStyle(id) && (
            <span>
              <button
                style={{ marginLeft: "0.5rem" }}
                onClick={() => removeOneFromCart(product)}
              >
                -
              </button>{" "}
              {getEle(id)} <button onClick={() => addToCart(product)}>+</button>
            </span>
          )}
        </span>
      </div>
    </div>
  );
}
