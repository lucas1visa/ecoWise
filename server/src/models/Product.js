const { DataTypes } = require('sequelize');
// const sequelize = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Product', {
  id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  quantityAvailable: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
  category:{
    type: DataTypes.STRING,
    allowNull:false
  },
  image:{
    type: DataTypes.STRING,
    allowNull: false
  }

})};


