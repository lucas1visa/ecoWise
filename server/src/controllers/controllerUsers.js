const { User } = require("../db");
const users = async () => {
  try {
    const todosLosUsuarios = await User.findAll();
    return todosLosUsuarios;
  } catch (error) {
    console.error("Error al obtener los Usuarios:", error);
    return null;
  }
};

const crearUsers = async (name, surname, email, phone, password) => {
  try {
    const nuevoUsuario = await User.create({
      name,
      surname,
      email,
      phone,
      password,
    });

    return nuevoUsuario;
  } catch (error) {
    console.error("Error al Registrarse:", error);
    return null;
  }
};
const update = async (id, password) => {
  try {
    const passwordUpdate = await User.update(
      { password: password },
      {
        where: {
          id: id,
        },
      }
    )
  } catch (error) {
    throw error;
  }
};

const delet = async (id) => {

  try {
    const getUsers = await User.findByPk(id);

    if (getUsers) {
      getUsers.destroy();
      return "Deleted Users";
    } else {
      throw Error("Users not found")
    }
  } catch (error) {
    throw error;
  }
}

module.exports = { users, crearUsers, update, delet };
