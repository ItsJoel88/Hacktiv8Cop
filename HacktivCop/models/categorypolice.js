'use strict';
module.exports = (sequelize, DataTypes) => {
  const Model = sequelize.Sequelize.Model
  class CategoryPolice extends Model{}
  
  CategoryPolice.init({
    CategoryId: DataTypes.STRING,
    PoliceId: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT
  }, {sequelize});
  CategoryPolice.associate = function(models) {
    // associations can be defined here
  };
  return CategoryPolice;
};