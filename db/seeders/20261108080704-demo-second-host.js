'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('users', [
      {
        name: 'Ben Castro',
        email: 'ben.castro@aklatarena.test',
        password: 'hashed_password_123',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('users', { email: 'ben.castro@aklatarena.test' }, {});
  },
};