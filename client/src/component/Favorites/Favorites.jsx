
import { useDispatch, useSelector } from "react-redux";
import { removeFav } from "../../redux/actions";
import "./Favorites.css"


const Favorites = () => {
  const dispatch = useDispatch()

  const fav = useSelector((state) => state.favorites);
  console.log(fav)

  const handleRemoveFav = (productId)=> {
    dispatch(removeFav(productId))
}

  return (
    <div>
      <h2 className="h2-favo">Tus Favoritos</h2>
      {fav.length === 0 ? (
        <p>No Tienes Favoritos 🥹</p>
      ) : (
        <ul className="favoritos-lista">
          {fav.map((product) => (
            <li key={product.id} className="favorito-item">
              <div >
              <img className="image-favo" src={product.image} alt={product.name} />
              </div>
              <h3 className="h2-favo">{product.name}</h3>
              <p className="h2-favo">Precio: ${product.price}</p>
              <button  onClick={() => handleRemoveFav(product.id)}>
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
