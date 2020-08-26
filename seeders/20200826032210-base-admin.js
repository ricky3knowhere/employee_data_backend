'use strict';

const bcrypt = require('bcrypt')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('user', [
      {
        name : 'Claudia',
        password : bcrypt.hashSync('whitedev', 10),
        email : 'claudia33@gmail.com',
        date_of_birth : '2001-2-12'
      },
      {
        name : 'Noah',
        password : bcrypt.hashSync('darklight', 10),
        email : 'noah12@gmail.com',
        date_of_birth : '2009-8-14'
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
   
    await queryInterface.bulkDelete('user', null, {});
  }
};
