const { DataTypes } = require('sequelize');
// const sequelize = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('Purchase', {
  quantity: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 1,
  },
})};


