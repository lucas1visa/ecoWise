import { useState } from "react";
import {ProductDetail} from '../ProductDetail/ProductDetail.jsx';


const ShoppingCar = () => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProductos, setCountProducts] = useState(0)

  return (
    <div>
        ShoppingCar
    </div>
  )
}

export default ShoppingCar