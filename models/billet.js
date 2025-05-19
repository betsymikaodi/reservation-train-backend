'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Billet = sequelize.define('Billet', {
    reservation_id: DataTypes.INTEGER,
    numero_place: DataTypes.INTEGER,
    classe: DataTypes.STRING,
    prix: DataTypes.DECIMAL
  }, {});

  Billet.associate = function(models) {
    Billet.belongsTo(models.Reservation, {
      foreignKey: 'reservation_id'
    });
  };

  return Billet;
};
