const { DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('Cart',{
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey:true,
      },
        name:{
          type: DataTypes.STRING,
          allowNull: false
        },
        quantityAvailable: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0,
          },
          image:{
            type: DataTypes.TEXT,
            allowNull: false,
          },
          price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
          }
})};