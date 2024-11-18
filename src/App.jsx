/* src\App.jsx */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/navbar/Navbar";
import { ItemListContainer } from "./components/pages/itemListContainer/itemListContainer";
import { Footer } from "./components/layout/footer/Footer";
import { ItemDetailContainer } from "./components/pages/itemDetailContainer/ItemDetailContainer"; // Importa el contenedor de detalles
import { Cart } from "./components/pages/cart/Cart"; // Importa el contenedor del carrito

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:itemId" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} /> {/* Nueva ruta del carrito */}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;


