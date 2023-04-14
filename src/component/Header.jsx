import { NavLink } from "react-router-dom";
import { useCartContext } from "..";

export default function Header() {
  const getStyle = function ({ isActive }) {
    return isActive ? "active-link" : "link";
  };

  const { cart } = useCartContext();
  const quantity = cart.reduce((acc, { quantity }) => acc + quantity, 0);

  return (
    <div>
      <h1>meKart</h1>
      <nav>
        <NavLink className={getStyle} to="/">
          Home
        </NavLink>{" "}
        ||{" "}
        <NavLink className={getStyle} to="/cart">
          My Cart {quantity ? `- ${quantity}` : ""}
        </NavLink>{" "}
        ||{" "}
        <NavLink className={getStyle} to="/wishlist">
          My Wishlist
        </NavLink>
      </nav>
    </div>
  );
}
