const models = require('../models')
const User = models.user

const all = (req,res) => {
  User.findAll({
    raw: true,
    nest: true
  }).then(
    (users) => {
      // if(req.xhr) {
      if (req.headers.accept === 'application/json') res.send(users)
      else res.render('user_all',{users})
    },
    (err) => res.send(err)
  )
}

module.exports = all