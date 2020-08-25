'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('user', [
      {
        name : 'Jonas',
        password : bcrypt.hashSync('kahnwald', 10)
      },
      {
        name : 'Bartosz',
        password : bcrypt.hashSync('tiedemand', 10)
      }
    ], {});
  },
  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('user', null, {});
  }
};
