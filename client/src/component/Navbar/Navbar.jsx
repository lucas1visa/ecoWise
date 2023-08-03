//import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { Navbar, Container, Nav } from 'react-bootstrap';
import '../Navbar/Navbar.css'
import { Link } from 'react-router-dom';
import { orderProductsAlpha, orderProductsAlphant,orderProductsPricent,orderProductsPrice,getProducts } from '../../redux/actions';
const NavbarComponent = () => {

  const productListRedux = useSelector((state) => state.products);
  const dispatch = useDispatch();

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
          ecoWise
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

            <Link to="/product/register" className="nav-link">
              Crear Producto
            </Link>
            <Link to='/Cart' className='nav-link'>Carrito</Link>
          </Nav>
        </Navbar.Collapse>

        <div>
        <select onChange={handleOrderChange}>
        <option value="clean">Todos Los Productos</option>
          <option value="upward">Order A-Z</option>
          <option value="falling">Order Z-A</option>
          <option value="price">Mas Caros</option>
          <option value="pricent">Mas Baratos</option>
          
          
        </select>

        
      </div>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
