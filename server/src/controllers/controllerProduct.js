const { Product } = require("../db")

const products = async () => {
    try {
        const todosLosProductos = await Product.findAll();
        return todosLosProductos;
    } catch (error) {
        console.error("Error al obtener los Productos:", error);
        return null;
    }
};

const crearProducts = async (name, description, price, quantityAvailable, category) => {
    try {
        const nuevoProductos = await Product.create({
            name,
            description,
            price,
            quantityAvailable,
            category

        });

        return nuevoProductos;
    } catch (error) {
        console.error("Error al Registrarse:", error);
        return null;
    }
};

const updateProducts = async (id, description, price, quantityAvailable) => {
    try {
        const fullUpdate = await Product.update(
            {
                description: description,
                price: price,
                quantityAvailable: quantityAvailable,

            },
            {
                where: {
                    id: id
                }
            }
        )
    } catch (error) {
        throw error;
    }
}


module.exports = { products, crearProducts, updateProducts }