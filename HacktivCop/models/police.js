'use strict';
const hashPassword = require('../helper/hashPassword')

module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class Police extends Model{}
  Police.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    salt: DataTypes.STRING
  }, {
    sequelize,
    hooks : {
      beforeCreate: (instance , option) => {
        const salt = String(Math.random()*1000)
        const password = hashPassword(`hacktiv8${this.name}`, salt)
        instance.setDataValue('password' , password)
        instance.setDataValue('salt', salt)
      }
    }
  });
  Police.associate = function(models) {
    // associations can be defined here
    Police.belongsToMany(models.CategoryPolice , {through: models.CategoryPolice})
  };
  return Police;
};