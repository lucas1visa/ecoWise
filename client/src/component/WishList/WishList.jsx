
import { useSelector } from 'react-redux';

const WishList = () => {
  const favoriteProducts = useSelector((state) => state.favorites);

  return (
    <div>
      <h2>WishList</h2>
      <ul>
        {favoriteProducts.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default WishList;
