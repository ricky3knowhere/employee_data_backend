'use strict'

module.exports.up = async (queryInterface, Sequelize) => {
  const options = {   
    type : Sequelize.STRING, 
    allowNull: true
  }
   await queryInterface.addColumn('user','email',options)
}

module.exports.down = async (queryInterface, Sequelize) => {
  await queryInterface.removeColumn('user','email',{})
}
