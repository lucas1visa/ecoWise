
    const getCart = async (req, res) => {
        try {
            const Carito = await getcarrito()
            res.status(200).send(Carito)
        } catch (error) {
            res.status(500).send(error)
        }
    }



    const postCart = async (req, res) => {
        const { image, price, quantityAvailable, name } = req.body
        try {
            const crearCarrito = await crearCart(image, price, quantityAvailable, name)
            res.status(200).send("Carrito creado Correctamente")
        } catch (error) {
            res.status(500).send("Error: " + error.message)
        }
    }
    
    
    const putCart = async (req, res) => {
        const { quantityAvailable, id } = req.body;
        const updateCart = await updateCarrito(id, quantityAvailable)
        try {
            res.status(200).send("Carrito actualizado correctamente");
        } catch (error) {
            res.status(500).send("Hubo un error");
        }
    };
    module.exports = { putCart,postCart,getCart}