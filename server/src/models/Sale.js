const { DataTypes } = require('sequelize');
// const sequelize = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Sale', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
})};



