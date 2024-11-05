import {Carrito} from '../../common/carrito/Carrito';
import './navbar.css';

export const Navbar = () => {
    return (
        <nav className="navbarContainer">

            <div className="logo">
                <img src="https://res.cloudinary.com/drj90xkqr/image/upload/v1730686131/Recurso_2_n0zdvl.png" alt="Logo" />
            </div>

            <ul className="navMenu">
                <li>IPhone</li>
                <li>IPad</li>
                <li>MacBook Air</li>
                <li>Mac</li>
                <li>Samsung</li>
                <li>Accesorios</li>
                <li>Vision Pro</li>
                <li>AirPods</li>
                <li>Mas</li>
            </ul>
        
            <Carrito/>
        </nav>
    )
}