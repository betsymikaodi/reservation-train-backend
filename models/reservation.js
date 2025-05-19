'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    utilisateur_id: DataTypes.INTEGER,
    train_id: DataTypes.INTEGER,
    statut: DataTypes.STRING
  }, {});

  Reservation.associate = function(models) {
    Reservation.belongsTo(models.Utilisateur, {
      foreignKey: 'utilisateur_id'
    });

    Reservation.belongsTo(models.Train, {
      foreignKey: 'train_id'
    });

    Reservation.hasMany(models.Billet, {
      foreignKey: 'reservation_id'
    });
  };

  return Reservation;
};