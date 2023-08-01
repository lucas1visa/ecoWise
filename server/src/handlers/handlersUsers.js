const {users,crearUsers,update}=require("../controllers/controllerUsers")
const getUsers = async(req,res)=>{
    try {
        todosLosUsuarios = await users()
        res.status(200).send(todosLosUsuarios)
    } catch (error) {
        res.status(400).send(error)
    }
}

const postUsers = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const crearUsuario = crearUsers(name, email, password)
        res.status(200).send("Se Registro Correctamente")
    } catch (error) {

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

module.exports = { getUsers, postUsers, putUsers }
