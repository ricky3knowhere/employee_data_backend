const models = require('../models')
const User = models.user

const by_id = (req,res) => {
  User.findByPk(req.params.id).then(
    (user) => {
      res.render('single_user', { user })
    },
    (error) => res.send(error)
  ) 
}

module.exports = by_id