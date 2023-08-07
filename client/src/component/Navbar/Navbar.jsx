//import React from 'react';
import CategorySelect from "../Filters/Filter";
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import eco from "../../Img/eco.png";
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
        <Link to="/" className="navbar-brand">
          <img src={eco} alt="ecoWise" className="ecoWise" />
        </Link>
        <Navbar.Toggle aria-controls="navbar" />
        <Navbar.Collapse id="navbar">
          <Nav className="ml-auto">
            <Link to="/" className="nav-link">
              Inicio
            </Link>
            <Link to="/about" className="nav-link">
              Acerca
            </Link>
            <Link to="/contact" className="nav-link">
              Contacto
            </Link>

            <div className="container-car">
              <Link to="/Cart" className="nav-linkk">
                <button className="button-icon-car">
                  <ion-icon name="cart-outline"></ion-icon>
                </button>
              </Link>
            </div>
            <div>
              <Link to="/favorites" className="nav-linkk">
                <button className="button-icon-cora">🤍</button>
              </Link>
            </div>
          </Nav>

          {isHomePage && <Search />}

          {isHomePage && (
            <Button
              className="prolijo-button"
              onClick={handleOrderChange}
              value="clean"
            >
              <ion-icon name="reload-outline"></ion-icon>
            </Button>
          )}

          <div className="ml-auto m-2">
            {isHomePage && <CategorySelect />}
          </div>

          {isHomePage && (
            <div className="">
              <select className="form-control" onChange={handleOrderChange}>
                <option value="clea">Order By</option>
                <option value="upward">Order A-Z</option>
                <option value="falling">Order Z-A</option>
                <option value="price">Mas Caros</option>
                <option value="pricent">Mas Baratos</option>
              </select>
            </div>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
