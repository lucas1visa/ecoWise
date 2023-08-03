import { useSelector } from 'react-redux';

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.product.id}>
            {item.product.name} - Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
