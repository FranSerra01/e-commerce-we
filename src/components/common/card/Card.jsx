import { useState } from 'react';
import './card.css';
import { Link } from 'react-router-dom';

export const Card = ({ id, image, title, price, model, color, description }) => {
  const [showDescription, setShowDescription] = useState(false);

  const toggleDescription = () => {
    setShowDescription(!showDescription);
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
      </div>
    </div>
  );
};



