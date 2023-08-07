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
import { useState } from "react";
// importamos todos los componentes de para el formulario de login
import { FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
// importamos la funcion de validacion para los inputs
import validate from "./validate";

const NavbarComponent = () => {
  const location = useLocation();
  const productListRedux = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const favoriteCount = useSelector((state) => state.favoriteCount);
  const CartCount = useSelector((state) => state.cartCount);
   
  // ====================================== VENTANA EMERGENTE PARA LOOGIN ============================================
  // estado para controlar la apertura o cierre de la ventana emergente
  const [showLogin, setShowLogin] = useState({
    open: false
  });
  // estado local para controlar la informacion en los inputs 
  const [valuesInputs, setValuesInputs] = useState({
    email: "",
    password: ""
  });
  // estado para almacenar los errores de los inputs
  const [err, setErr] = useState({});
  // funcion para captura la informacion y almacenarla en el estado local
  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setValuesInputs({ ...valuesInputs, [name]: value })
  };
  // funcion para cerrar el login
  const handleLogin = () => {
    setShowLogin({
      open: !showLogin.open
    })
  }
  // funcion para despachar la informacion de los inputs y almacenarlo en la DB
  const handleSubmitLogin = (e) => {
    e.preventDefault();
    // controlamos y validamos los inputs
    let errorinput = validate(valuesInputs);
    // en caso de que exista algun error los almacenamos en el estado local
    setErr(errorinput);
    //si no existe ningun error despachamos la info
    if (Object.keys(errorinput).length === 0) {
      //dejamos de mostrar el componente login
      setShowLogin({
        open: false
      });
      // limpiamos los inputs
      setValuesInputs({
        email: "",
        password: ""
      })
      // despachamos la informacion
      console.log('se envio che');
    } else {
      console.log('hay errores man');
    }

  }
  // =========================================================================================================================

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
              {CartCount > 0 && <span className="favorite-count">{CartCount}</span>}
            </button>
          </Link>
        </div>
        <div>
          <Link to="/favorites" className="nav-linkk">
            <button className="button-icon-cora">🤍</button>
            {favoriteCount > 0 && <span className="favorite-count">{favoriteCount}</span>}
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

      {/*=============================================== REGISTRO DE LOGIN ================================================= */}
      <button onClick={handleLogin}>Login</button>
      <Modal isOpen={showLogin.open}>
        <ModalHeader>
          Iniciar Sesion
        </ModalHeader>
        <ModalBody>
          <form onSubmit={handleSubmitLogin}>
            <FormGroup>
              <Label>email</Label>
              <Input type="text" name="email" value={valuesInputs.email} onChange={handleChangeInput} />
              <p>{err.email}</p>
            </FormGroup>
            <FormGroup>
              <Label>password</Label>
              <Input type="password" name="password" value={valuesInputs.password} onChange={handleChangeInput} />
              <p>{err.password}</p>
            </FormGroup>
            <Button color="primary" type="submit">Iniciar Sesion</Button>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={handleLogin}>Cerrar</Button>
          <Link to="/account/register/">Sing Up</Link>
          <Link>Recuperar Password</Link>
        </ModalFooter>
      </Modal>
      {/* ============================================= TERMINACION DE LOGIN ====================================================== */}
    </Navbar.Collapse>
  </Container>
</Navbar>

  );
};

export default NavbarComponent;
