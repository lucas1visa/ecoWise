import { useSelector } from "react-redux";


const Favorites = () => {
  const fav = useSelector((state) => state.favorites);
console.log(fav)

  return (
    <div>
      <h2>Favorites</h2>
      {fav.length === 0 ? (
        <p>No favorite products yet.</p>
      ) : (
        <ul>
          {fav.map((product) => (
            <li key={product.id}>
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p>Price: ${product.price}</p>
              <button >
                Remove from Favorites
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Favorites;
