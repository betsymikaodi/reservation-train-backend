"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Billets", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      reservation_id: {
        type: Sequelize.INTEGER,
        references: {
          model: "Reservations",
          key: "id",
        },
      },
      numero_place: {
        type: Sequelize.INTEGER,
      },
      classe: {
        type: Sequelize.STRING,
        defaultValue: "economique",
      },
      prix: {
        type: Sequelize.DECIMAL(10, 2),
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
    await queryInterface.dropTable("Billets");
  },
};
