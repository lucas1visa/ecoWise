import { useState } from 'react';

const Favorites = ( favoriteProducts ) => {
  const [favorites, setFavorites] = useState(favoriteProducts);

  const handleRemoveFavorite = (productId) => {
    const updatedFavorites = favorites.filter(product => product.id !== productId);
    setFavorites(updatedFavorites);
  };

  return (
    <div>
      <h2>Favoritos</h2>
      <ul>
        {favorites.map(product => (
          <li key={product.id}>
            <img src={product.image} alt={product.name} />
            <p>{product.name}</p>
            <p>Price: ${product.price}</p>
            <button onClick={() => handleRemoveFavorite(product.id)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
