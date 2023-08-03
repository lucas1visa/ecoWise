const { users, crearUsers, update, delet } = require("../controllers/controllerUsers")


const getUsers = async(req,res)=>{
    try {
        const todosLosUsuarios = await users()
        res.status(200).send(todosLosUsuarios)
    } catch (error) {
        res.status(500).send(error)
    }
}

const postUsers = async (req, res) => {
    const { name, surname, email, phone,  password } = req.body
    try {
        const crearUsuario = await crearUsers(name, email, password)
        res.status(200).send("Usuario creado Correctamente")
    } catch (error) {
        res.status(500).send("Error: " + error.message)
    }
}


const putUsers = async (req, res) => {
    const { password, id } = req.body;
    const updateUser = await update(id, password)
    try {
        res.status(200).send("Usuario actualizado correctamente");
    } catch (error) {
        res.status(500).send("Hubo un error al actualizar el usuario");
    }
};

const deleteUsers = async (req, res) => {
    const {id} = req.params;
    const deleteUsers = await delet(id);
    try {
        res.status(200).send(`Se elimino el usuario con id: ${id} con exito`)
    } catch (error) {
        res.status(500).send('Ocurrio un error al querer eliminar un usuario')
    }
}

module.exports = { getUsers, postUsers, putUsers, deleteUsers }
