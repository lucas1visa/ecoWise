
import { useSelector } from "react-redux";
import CardProducts from "../CardProducts/CardProducts";
const Home = () => {
  const products = useSelector((state) =>  {
    state.products});
  return (
    <div>
   {/*    {products?<CardProducts />:{/* <h1>No Se Encontro Elemento a buscar </h1> */ }
      <CardProducts />
    </div>
  );
};
export default Home;
