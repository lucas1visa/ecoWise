const { products, crearProducts, updateProducts } = require("../controllers/controllerProduct")


const getProducts = async (req, res) => {
    try {
        const todosLosProductos = await products()
        res.status(200).send(todosLosProductos)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postProducts = async (req, res) => {
    const { name, description, price, quantityAvailable, category, image } = req.body
    try {
        const crearProducto = crearProducts(name, description, price, quantityAvailable, category, image)
        res.status(200).send("Se Registro Correctamente")
    } catch (error) {
        res.status(500).send("Error: " + error.message)
    }
}


const putProducts = async (req, res) => {
    const { description, price, quantityAvailable, id, image } = req.body;
    const updateProductos = await updateProducts(id, description, price, quantityAvailable, image)

    try {
        res.status(200).send("Producto actualizado correctamente")

    } catch (error) {
        res.status(500).send("Hubo un error al actualizar el producto")
    }

}

const deleteProduct = async (req, res) => {
    const {id} = req.params
    const deleteProducto = await deleteP(id)
    try {
        res.status(200).send('Producto borrado con exito')
    } catch (error) {
        res.status(500).send('Error: ' + error.message)
    }
}


module.exports = { getProducts, postProducts, putProducts, deleteProduct }