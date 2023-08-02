
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Home = () => {
  const products = useSelector((state) => state.products); 

  return (
    <div>
      <div >
        {products.map((product) => (
          <div key={product.id}>
            <Link to={`/products/${product.id}`}>
              <img src={product.image} alt={product.name}  />
            </Link>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>Precio: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
