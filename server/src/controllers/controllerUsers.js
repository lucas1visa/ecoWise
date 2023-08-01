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

const crearUsers = async (name, email, password) => {
  try {
    const nuevoUsuario = await User.create({
      name,
      email,
      password,
    });

    return nuevoUsuario;
  } catch (error) {
    console.error("Error al Registrarse:", error);
    return null;
  }
};
<<<<<<< HEAD
// const update = async (password, id) => {
//     try {
//         const passwordUpdate = await User.update(
//             { password: password },
//             {
//               where: {
//                 id: id,
//               },
//             }
//           )
//     } catch (error) {
//       throw error; 
//     }
//   };
module.exports = { users, crearUsers};
=======
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
module.exports = { users, crearUsers, update };
>>>>>>> Desarrollo
