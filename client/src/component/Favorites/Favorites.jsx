
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../../redux/actions";


const Favorites = () => {
  const dispatch = useDispatch()

  const fav = useSelector((state) => state.favorites);
  console.log(fav)

  const handleRemoveFav = (productId)=> {
    dispatch(removeFav(productId))
}

  return (
    <div>
      <h2>Tus Favoritos</h2>
      {fav.length === 0 ? (
        <p>No Tienes Favoritos 🥹</p>
      ) : (
        <ul>
          {fav.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button onClick={() => handleRemoveFav(product.id)}>
                Borrar Favoritos
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
