import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { products } from "../../../products"; 

export const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const foundProduct = products.find((p) => p.id === parseInt(itemId));
      setProduct(foundProduct);
    };

    fetchProduct();
  }, [itemId]);

  if (!product) return <p>Cargando producto...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} style={{ width: "100%", maxWidth: "300px" }} />
      <p>Precio: ${product.price}</p>
      <p>Modelo: {product.model}</p>
      <p>Color: {product.color}</p>
      <p>Sistema Operativo: {product.operatingSystem}</p>
      <p>Almacenamiento: {product.storage}</p>
      <p>{product.description}</p>
    </div>
  );
};
