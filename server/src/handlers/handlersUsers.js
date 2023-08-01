<<<<<<< HEAD
const {users,crearUsers,update}=require("../controllers/controllerUsers")
const getUsers = async(req,res)=>{
=======
const { users, crearUsers, update } = require("../controllers/controllerUsers")
const getUsers = async (req, res) => {
>>>>>>> Desarrollo
    try {
        todosLosUsuarios = await users()
        res.status(200).send(todosLosUsuarios)
    } catch (error) {
        res.status(400).send(error)
    }
}

<<<<<<< HEAD
const postUsers = async(req,res)=>{
    const {name,email,password} = req.body
    try {
        const crearUsuario = crearUsers(name,email,password)
        res.status(200).send("Se Registro Correctamente")
    } catch (error) {
        
=======
const postUsers = async (req, res) => {
    const { name, email, password } = req.body
    try {
        const crearUsuario = crearUsers(name, email, password)
        res.status(200).send("Se Registro Correctamente")
    } catch (error) {

>>>>>>> Desarrollo
    }
}


const putUsers = async (req, res) => {
<<<<<<< HEAD
    const { password,id} = req.body;
    const updateUser =await update(id,password)
=======
    const { password, id } = req.body;
    const updateUser = await update(id, password)
>>>>>>> Desarrollo
    try {
        res.status(200).send("Usuario actualizado correctamente");
    } catch (error) {
        res.status(500).send("Hubo un error al actualizar el usuario");
    }
};

<<<<<<< HEAD
module.exports= {getUsers,postUsers,putUsers}
=======
module.exports = { getUsers, postUsers, putUsers }
>>>>>>> Desarrollo
