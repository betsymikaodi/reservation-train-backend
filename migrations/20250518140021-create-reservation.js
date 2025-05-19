"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Reservations", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      utilisateur_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Utilisateurs",
          key: "id",
        },
      },
      train_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Trains",
          key: "id",
        },
      },
      statut: {
        type: Sequelize.STRING,
        defaultValue: "confirmee",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Reservations");
  },
};
