'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Gare extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Gare.init({
    nom: DataTypes.STRING,
    localisation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Gare',
  });
  return Gare;
};