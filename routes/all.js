const User = require('../models/user')

const all = (req,res) => {
  User.findAll().then(
    (users) => res.render('user_all',{users}),
    (err) => res.send(err)
  )
}

module.exports = all