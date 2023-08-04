
import CardProducts from "../CardProducts/CardProducts";
const Home = () => {
  const products = useSelector((state) =>  {
    state.products});
  return (
    <div>
      <CardProducts />
    </div>
  );
};
export default Home;
