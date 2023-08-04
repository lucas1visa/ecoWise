import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {  addToCart, getId } from "../../redux/actions/index";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";
import MPButton from "../MPButton/MPButton";


const ProductDetail = () => {
  const { id } = useParams();
  
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const product = products.find((element)=>element.id==id);
  
  const handleAddToCart = () => {
    dispatch(addToCart(product.id, quantity));
  };

  const handleAddToFavorites = () => {
    if (!favoriteProducts.find(favProduct => favProduct.id === product.id)) {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };
 
console.log(favoriteProducts)
  return (
    <div>
      <main>
        <img src={product.image} alt={product.name} />
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>Price: ${product.price}</p>
        <p>Quantity available: {product.quantityAvailable}</p>
        <p>Category: {product.category}</p>
        <button onClick={handleAddToFavorites}>❤️</button>
        <div>
          <label htmlFor="quantity-select">Quantity:</label>
          <select
            id="quantity-select"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          >
            {Array.from(
              { length: product.quantityAvailable },
              (_, index) => index + 1
            ).map(
              (
                count // array con la cantidad de elementos igual a product.quantityAvailable. map  genera las opciones dentro del selector.
              ) => (
                <option
                  key={count}
                  value={count}
                  disabled={count > product.quantityAvailable}
                >
                  {count}
                </option> //value= valor de la opción, disabled=deshabilita las opciones donde count (la cantidad seleccionada) sea mayor que product.quantityAvailable
              )
            )}
          </select>
          <Link to="/cart">
        <button onClick={handleAddToCart}>Add to Cart</button>
          </Link>
          <MPButton titulo={product.name} cantidad={1} precio={product.price}/>
        </div>
      </main>
    </div>
  );
};



export default ProductDetail;
