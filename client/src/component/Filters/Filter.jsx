import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { getCategory } from "../../redux/actions"; // Asegúrate de tener la ruta correcta

// Crea tu componente funcional de React
function CategorySelect() {
    const dispatch = useDispatch();
    const [selectedCategory, setSelectedCategory] = useState('');

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
        dispatch(getCategory(event.target.value));
    };

    // Aquí debes tener una lista de opciones para el select (puedes obtenerla de alguna fuente de datos o hardcodearla)
    const categories = ['Hogar', 'Cocina', 'Cuidado Personal'];

    return (
        <div>
            <label htmlFor="categorySelect"></label>
            <select id="categorySelect" value={selectedCategory} onChange={handleCategoryChange}>
                <option value="">Seleccione una categoría</option>
                {categories.map((category) => (
                    <option key={category} value={category}>
                        {category}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default CategorySelect;