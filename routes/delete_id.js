const models = require('../models')
const User = models.user

const {Op} = require('sequelize')

const delete_id = (req,res) => {
  User.destroy({ where : {
    id : {
      [Op.eq] : req.params.id
    }
  }
  })
  .then(
    () => res.redirect('/user'),
    (err) => res.send(err)
  )
}  

module.exports = delete_id