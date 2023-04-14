import { useCartContext } from "..";
import CartCard from "../component/CartCard";

export default function Cart() {
  const { cart, clearCart } = useCartContext();

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  return (
    <div>
      <h2>Items: {cart.length}</h2>
      <h3>Total: {total}</h3>
      {cart.map((product) => (
        <CartCard key={product.name} product={product} />
      ))}
      {cart.length !== 0 && (
        <button className="clear" onClick={clearCart}>
          Clear Cart
        </button>
      )}
    </div>
  );
}
