import React from "react";
import { useSelector } from "react-redux";
import CardProducts from "../CardProducts/CardProducts";
import "./Home.css"; // Asegúrate de importar tu archivo de estilos CSS aquí

const Home = () => {
  const products = useSelector((state) => state.products);
  
  return (
    <div className="container">
      <div className="text-center m-4 title-container">
      <img
            src="https://cdn-icons-png.flaticon.com/512/743/743007.png"
            alt=""
            className="title-icon"
          />
        <h2 className="font-weight-bold"></h2>
      </div>
      <CardProducts />
    </div>
  );
};

export default Home;
