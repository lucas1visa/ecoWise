import { useId} from "react";
import {cartIcon, clearCartIcon, removeFromCartIcon } from './Icons.jsx'
/* import {ProductDetail} from '../ProductDetail/ProductDetail.jsx'; */

const Cart = () => {
  const carritoCheckBoxId = useId()

  return (
    <>
      <label className='cart-button' htmlFor={carritoCheckBoxId}>
        <cartIcon />
      </label>
      <input id={carritoCheckBoxId} type='checkbox' hidden />
{/* 
      <aside className='cart'>
        <ul>
          {cart.map(product => (
            <CartItem
              key={product.id}
              addToCart={() => addToCart(product)}
              {...product}
            />
          ))}
        </ul>

        <button onClick={clearCart}>
          <clearCartIcon />
      </aside>
        </button> */}
    </>
  )
}

export default Cart