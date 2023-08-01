const { products, crearProducts, updateProducts } = require("../controllers/controllerProduct")


const getProducts = async (req, res) => {
    try {
        todosLosProductos = await products()
        res.status(200).send(todosLosProductos)
    } catch (error) {
        res.status(400).send(error)
    }
}

const postProducts = async (req, res) => {
    const { name, description, price, quantityAvailable, category } = req.body
    try {
        const crearProducto = crearProducts(name, description, price, quantityAvailable, category)
        res.status(200).send("Se Registro Correctamente")
    } catch (error) {
        res.status(400).send("Error: " + error.message)
    }
}


const putProducts = async (req, res) => {
    const { description, price, quantityAvailable, id } = req.body;
    const updateProductos = await updateProducts(id, description, price, quantityAvailable)

    try {
        res.status(200).send("Producto actualizado correctamente")

    } catch (error) {
        res.status(500).send("Hubo un error al actualizar el producto")
    }


}


module.exports = { getProducts, postProducts, putProducts }