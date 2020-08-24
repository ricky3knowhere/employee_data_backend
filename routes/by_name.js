const {Op} = require('sequelize')
const models = require('../models')
const User = models.user

const by_name = (req,res) => {
  User.findOne({
    where : {
      name : {
        [Op.eq] : req.params.name
      }
    }
  }).then(
    (data) => {
      res.send(data)
    },
    (error) => res.send(error)
  ) 
}

module.exports = by_name