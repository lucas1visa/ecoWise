import { useDispatch } from "react-redux";
import styles from"./SearchBar.module.css"
import { searchPrducts,getProducts } from "../../redux/actions";
const Search = () =>{
    const dispatch = useDispatch()
    const handleChange = (event)=>{
        const name = event.target.value
        console.log(name)
        if(name === "") dispatch(getProducts())
        dispatch(searchPrducts(name));
    }
    return (
        <div className={styles.containerSearch}>
            <input onChange={handleChange} type="text" placeholder="Productos" />
        </div>
    )
}
export default Search