import './carrito.css';
import { IoMdCart } from "react-icons/io";
import { Link } from "react-router-dom";

export const Carrito = () => {
  return (
    <Link to="/cart">
      <div className="cart">
        <IoMdCart className="cartIcon" />
        <span className="itemCount">0</span>
      </div>
    </Link>
  );
};

