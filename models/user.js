const {Sequelize, DataTypes} = require('sequelize')

sequelize = new Sequelize({
  dialect  : 'mysql',
  host     : 'localhost',
  port     : '3306',
  username : 'employee_data',
  password : 'employee_data',
  database : 'employee_data'
})

const User = sequelize.define('User',
  {
    id : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey : true
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
  },{
    tableName : 'user',
    timestamps : false
  }
)

module.exports = User