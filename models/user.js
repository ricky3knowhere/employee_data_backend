'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  user.init({
    id : {
      type : DataTypes.INTEGER,
      autoIncrement : true,
      primaryKey : true
    },
    name : {
      type : DataTypes.STRING,
      allowNull : false
    },
    password : {
      type : DataTypes.STRING,
      allowNull : true
    },
    email : {
      type : DataTypes.STRING,
      allowNull : true
    },
    date_of_birth : {
      type : DataTypes.DATEONLY,
      allowNull : true
    }
  }, {
    sequelize,
    modelName: 'user',
    tableName : 'user',
    timestamps : false
  });
  return user;
};