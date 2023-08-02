import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToFavorites, addToCart } from '../actions'; 
import Navbar from "../Navbar"
import Footer from "../Footer"


const ProductDetail = ({ props }) => { 
  const { productId } = props.params; //// Extrae el valor del parámetro "productId" de las props del componente
  const product = useSelector(state => state.products.find(product => product.id === productId));// Obtiene el producto correspondiente al "productId" 
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  const handleAddToFavorites = () => {
    dispatch(addToFavorites(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product.id, quantity));
  };

  return (
     <div >
<Navbar/>
   <main>
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>Price: ${product.price}</p>
      <p>Quantity available: {product.quantityAvailable}</p>
      <p>Category: {product.category}</p>
      <button onClick={handleAddToFavorites}>
      ❤️ 
      </button>
      <div>
      <label htmlFor="quantity-select">Quantity:</label>
  <select
    id="quantity-select"
    value={quantity}
    onChange={(e) => setQuantity(Number(e.target.value))}
  >
    {Array.from({ length: product.quantityAvailable }, (_, index) => index + 1).map((count) => ( // array con la cantidad de elementos igual a product.quantityAvailable. map  genera las opciones dentro del selector.
      <option key={count} value={count} disabled={count > product.quantityAvailable}>{count}</option>//value= valor de la opción, disabled=deshabilita las opciones donde count (la cantidad seleccionada) sea mayor que product.quantityAvailable
    ))}
  </select>
        <button onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
