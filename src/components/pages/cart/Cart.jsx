/* src\components\pages\cart\Cart.jsx */

import { useCart } from "../../../context/CartContext";
import "./cart.css";

export const Cart = () => {
  const { cartItems, removeFromCart } = useCart();

  return (
    <div className="cartContainer">
      <h2>Carrito de Compras</h2>
      {cartItems.length > 0 ? (
        cartItems.map((item) => (
          <div key={item.id} className="cartItem">
            <img src={item.image} alt={item.title} className="cartItemImage" />
            <div className="cartItemDetails">
              <h3>{item.title}</h3>
              <p>Precio: ${item.price}</p>
              <button
                className="removeButton"
                onClick={() => removeFromCart(item.id)}
              >
                Quitar del carrito
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>El carrito está vacío.</p>
      )}
    </div>
  );
};

