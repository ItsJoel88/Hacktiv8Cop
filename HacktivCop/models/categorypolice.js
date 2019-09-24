'use strict';
module.exports = (sequelize, DataTypes) => {
  const CategoryPolice = sequelize.define('CategoryPolice', {
    CategoryId: DataTypes.STRING,
    PoliceId: DataTypes.STRING,
    longitude: DataTypes.FLOAT,
    latitude: DataTypes.FLOAT
  }, {});
  CategoryPolice.associate = function(models) {
    // associations can be defined here
  };
  return CategoryPolice;
};