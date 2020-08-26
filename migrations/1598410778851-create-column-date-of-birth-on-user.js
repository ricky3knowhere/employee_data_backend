'use strict'

module.exports.up = async (queryInterface, Sequelize) => {
  const options = {   
    type : Sequelize.DATEONLY, 
    allowNull: true
  }
   await queryInterface.addColumn('user','date_of_birth',options)
}

module.exports.down = async (queryInterface, Sequelize) => {

  await queryInterface.removeColumn('user','date_of_birth',{})
}
