//import React from 'react';
import CategorySelect from "../Filters/Filter";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Container, Nav } from "react-bootstrap";
import carritoImage from "../image/carrito2.png";
import "../Navbar/Navbar.css";
import { Link, useLocation } from "react-router-dom";
import {
  orderProductsAlpha,
  orderProductsAlphant,
  orderProductsPricent,
  orderProductsPrice,
  getProducts,
} from "../../redux/actions";
import Search from "../SearchBar/SearchBar";

const NavbarComponent = () => {
  const location = useLocation();
  const productListRedux = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const isHomePage = location.pathname === "/";

  const handleOrderChange = (e) => {
    const selectedOrder = e.target.value;

    switch (selectedOrder) {
      case "clean":
        dispatch(getProducts(productListRedux));
        break;
      case "upward":
        dispatch(orderProductsAlpha(productListRedux));
        break;
      case "falling":
        dispatch(orderProductsAlphant(productListRedux));
        break;
      case "price":
        dispatch(orderProductsPrice(productListRedux));
        break;
      case "pricent":
        dispatch(orderProductsPricent(productListRedux));
        break;

      default:
        break;
    }
  };

  return (
    <Navbar bg="violet" variant="dark" expand="lg" id="Navbar">
      <Container>
        <Link to="/home" className="navbar-brand">
          ecoWise
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Link to="/home" className="nav-link">
              Inicio
            </Link>
            <Link to="/" className="nav-link">
              Acerca
            </Link>
            <Link to="/contact" className="nav-link">
              Contacto
            </Link>

            {/* <Link to="/product/register" className="nav-link">
              Crear Producto X
            </Link> */}
            <Link to="/Cart" className="nav-link">
              <img
                className="nav-image-carrito"
                src={carritoImage}
                alt="Carrito de compras"
                style={{
                  width: "30%",
                  height: "auto",
                  maxWidth: "30vw",
                  maxHeight: "15vh",
                }}
              />
            </Link>
          </Nav>
          {isHomePage && <Search />}
        </Navbar.Collapse>

        {isHomePage && (
          <button
            className="prolijo-button"
            onClick={handleOrderChange}
            value="clean"
          >
            ALL
          </button>
        )}

        <div>{isHomePage && <CategorySelect />}</div>
        {isHomePage && (
          <div>
            <select onChange={handleOrderChange}>
              <option value="clea">Order By</option>
              <option value="upward">Order A-Z</option>
              <option value="falling">Order Z-A</option>
              <option value="price">Mas Caros</option>
              <option value="pricent">Mas Baratos</option>
            </select>
          </div>
        )}
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
