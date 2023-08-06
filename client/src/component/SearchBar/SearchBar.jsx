import { useDispatch } from "react-redux";
import styles from"./SearchBar.module.css"
import { searchPrducts,getProducts } from "../../redux/actions";
import { useState } from "react";
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
        <button onClick={handleChange} className={styles.buttonsearch}><ion-icon name="search-outline"></ion-icon></button>
      </div>
    );
  };
  export default Search