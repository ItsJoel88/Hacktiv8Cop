'use strict';
module.exports = (sequelize, DataTypes) => {
  const Police = sequelize.define('Police', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {});
  Police.associate = function(models) {
    // associations can be defined here
  };
  return Police;
};