'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Alice Host',
        email: 'alice.host@aklatarena.test',
        password: 'hashed_password_123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Bob Player',
        email: 'bob.player@aklatarena.test',
        password: 'hashed_password_123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', null, {});
  },
};