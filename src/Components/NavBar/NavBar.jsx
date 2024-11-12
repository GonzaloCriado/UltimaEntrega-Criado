import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "./Navbar.css";
import { Link } from 'react-router-dom'; 
import CartWidget from "../CartWidget/CartWidget";

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light custom-navbar">
      <div className="container-fluid">
        <h1>AL ANGULO </h1>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/category/cat1">Catálogo</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/location">Ubicación</Link> 
            </li>
          </ul>
        </div>

        <Link className="nav-link cart-icon" to="/cart">
          <i className="bi bi-cart"></i> Carrito
        </Link>
      </div>
    </nav>
  );
}

export default NavBar;
