'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Train = sequelize.define('Train', {
    numero: DataTypes.STRING,
    capacite: DataTypes.INTEGER,
    date_depart: DataTypes.DATE,
    date_arrivee: DataTypes.DATE,
    gare_depart_id: DataTypes.INTEGER,
    gare_arrivee_id: DataTypes.INTEGER
  }, {});

  Train.associate = function(models) {
    Train.belongsTo(models.Gare, {
      as: 'gareDepart',
      foreignKey: 'gare_depart_id'
    });

    Train.belongsTo(models.Gare, {
      as: 'gareArrivee',
      foreignKey: 'gare_arrivee_id'
    });

    Train.hasMany(models.Reservation, {
      foreignKey: 'train_id'
    });
  };
console.log('🔧 Modèle Train chargé');
return Train;

};
