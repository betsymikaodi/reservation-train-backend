'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  const Utilisateur = sequelize.define('Utilisateur', {
    nom: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false
    },
    mot_de_passe: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'client'
    }
  });

  Utilisateur.associate = function(models) {
    Utilisateur.hasMany(models.Reservation, {
      foreignKey: 'utilisateur_id'
    });
  };

  return Utilisateur;
};
