import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFav, addToCart, getId } from "../../redux/actions/index";
import { useParams } from 'react-router-dom';
import { Link } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams();

  const product = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getId(id));
  }, [dispatch, id]);

  const handleAddToFavorites = () => {
    dispatch(addFav(product.id));
  };

  const handleAddToCart = () => {
    dispatch(addToCart(product.id, quantity));
  };

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
        </div>
      </main>

    </div>
  );
};



export default ProductDetail;
