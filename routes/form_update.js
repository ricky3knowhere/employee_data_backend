const models = require('../models')
const User = models.user

const form_update = (req,res) => {
  User.findByPk(req.params.id, {
    raw: true,
    nest: true
  })
  .then(
    (user) => {
      res.render('form_update',{ user })
  },
  (err) => res.send(err)
  )
}

module.exports = form_update