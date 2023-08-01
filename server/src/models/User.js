const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('User', {
    id: {
      type: DataTypes.UUID,
<<<<<<< HEAD
      defaultValue: DataTypes.UUIDV4, 
      primaryKey: true,
=======
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
>>>>>>> Desarrollo
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  });
};
