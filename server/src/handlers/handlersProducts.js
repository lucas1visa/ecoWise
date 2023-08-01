const {products, crearProducts} = require ("../controllers/controllerProduct")


const getProducts = async (req, res) => {
    try{
        todosLosProductos = await products()
        res.status(200).send(todosLosProductos)
    } catch (error){
        res.status(400).send(error)
    }
}

const postProducts = async (req, res) => {
    const { name, description, price, quantityAvailable, category } = req.body
    try {
        const crearProducto = crearProducts(name, description, price, quantityAvailable, category)
        res.status(200).send("Se Registro Correctamente")
    } catch (error) {

    }
}

module.exports = {getProducts, postProducts}