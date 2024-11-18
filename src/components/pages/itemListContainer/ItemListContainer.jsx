/* src\components\pages\itemListContainer\ItemListContainer.jsx */ 

import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../common/card/Card";
import { products } from "../../../products";
import "./itemListContainer.css";

export const ItemListContainer = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    // Simulación de una promesa para cargar productos
    const fetchProducts = new Promise((resolve) => {
      setTimeout(() => {
        resolve(products);
      }, 500); // Simulación de carga de 500 ms
    });

    fetchProducts.then((data) => {
      // Verifica si categoryId es "home" o undefined; en ese caso, muestra todos los productos
      if (!categoryId || categoryId.toLowerCase() === "home") {
        setFilteredProducts(data); // Muestra todos los productos cuando estás en "/" o "/category/home"
      } else {
        // Filtra por categoría si categoryId es distinto de "home"
        const filtered = data.filter((product) =>
          product.name.toLowerCase().includes(categoryId.toLowerCase())
        );
        setFilteredProducts(filtered);
      }
    });
  }, [categoryId]); // Ejecuta el efecto cuando cambia categoryId

  return (
    <div className="itemListContainer">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
            <Card
            key={product.id}
            id={product.id}
            image={product.image}
            title={product.name}
            price={product.price}
            model={product.model}
            color={product.color}
            description={product.description}
          />
        ))
      ) : (
        <p>No hay productos disponibles en esta categoría.</p>
      )}
    </div>
  );
};


