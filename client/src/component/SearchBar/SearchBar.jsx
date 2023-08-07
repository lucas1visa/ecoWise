import { useDispatch } from "react-redux";
import styles from"./SearchBar.module.css"
import { searchPrducts,getProducts } from "../../redux/actions";
import { useState } from "react";
import { Button } from "react-bootstrap";
const Search = () => {
    const dispatch = useDispatch();
    const [productName, setProductName] = useState(''); // Estado para almacenar el valor del input
  
    const handleChange = () => {
      console.log(productName);
      if (productName === '') {
        dispatch(getProducts());
      } else {
        dispatch(searchPrducts(productName));
      }
    };
  
    return (
      <div className={styles.containerSearch} >
        <input
          type="text"
          placeholder="Productos"
          value={productName} // Establece el valor del input desde el estado
          onChange={(event) => setProductName(event.target.value)} // Actualiza el estado cuando cambia el input
          className={styles.inputSearch}
        />
        <Button onClick={handleChange} className="ml-auto m-2"><ion-icon name="search-outline"></ion-icon></Button>
      </div>
    );
  };
  export default Search