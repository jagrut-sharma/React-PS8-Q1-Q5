import { useCartContext } from "..";

export default function CartCard({ product }) {
  const {
    cart,
    removeFromCart,
    addToCart,
    removeOneFromCart
  } = useCartContext();
  const { id, name, description, price, quantity, category, brand } = product;
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
    <div className="cart-element">
      <p>Name: {name}</p>
      <p>Description: {description}</p>
      <p>Category: {category}</p>
      <p>Quantity: {quantity}</p>
      <p>Brand: {brand}</p>
      <p>Price: INR {price}</p>
      <button onClick={() => removeFromCart(product)}>Remove from Cart</button>
      <button
        style={{ marginLeft: "0.5rem" }}
        onClick={() => removeOneFromCart(product)}
      >
        -
      </button>{" "}
      {getEle(id)} <button onClick={() => addToCart(product)}>+</button>
    </div>
  );
}
