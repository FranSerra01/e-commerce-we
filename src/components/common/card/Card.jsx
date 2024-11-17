import { useState } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../../../context/CartContext"; // Importa el contexto del carrito
import "./card.css";

export const Card = ({ id, image, title, price, model, color, description }) => {
  const [showDescription, setShowDescription] = useState(false);
  const { addToCart } = useCart(); // Usa la función addToCart del contexto

  const toggleDescription = () => {
    setShowDescription(!showDescription);
  };

  const handleAddToCart = () => {
    const product = { id, image, title, price, model, color, description };
    addToCart(product); // Agrega el producto al carrito
  };

  return (
    <div className="card">
      <Link to={`/item/${id}`}>
        <img src={image} alt={title} className="cardImage" />
      </Link>
      <div className="cardInfo">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardModel">Modelo: {model}</p>
        <p className="cardColor">Color: {color}</p>
        <p className="cardPrice">${price}</p>
        <button className="cardButton" onClick={toggleDescription}>
          {showDescription ? "Ocultar Descripción" : "Descripción"}
        </button>
        {showDescription && <p className="cardDescription">{description}</p>}
        <button className="addToCartButton" onClick={handleAddToCart}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};



