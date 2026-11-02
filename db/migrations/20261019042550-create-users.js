'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('your_table_name', {
      id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      // ... your columns based on the translation table above ...
      createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('now') },
      updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.fn('now') }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('your_table_name');
  }
};