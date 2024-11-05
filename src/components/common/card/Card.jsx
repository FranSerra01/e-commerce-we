import './card.css';

export const Card = ({ image, title, price, model, color }) => {
  return (
    <div className="card">
      <img src={image} alt={title} className="cardImage" />
      <div className="cardInfo">
        <h3 className="cardTitle">{title}</h3>
        <p className="cardModel">Modelo: {model}</p>
        <p className="cardColor">Color: {color}</p>
        <p className="cardPrice">${price}</p>
      </div>
      <button className="cardButton">Agregar al Carrito</button>
    </div>
  )
}

