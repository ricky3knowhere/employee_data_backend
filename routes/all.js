const User = require('../models/user')

const all = (req,res) => {
  User.findAll().then(
    (users) => {
      // if(req.xhr) {
      if (req.headers.accept === 'application/json') res.send(users)
      else res.render('user_all',{users})
    },
    (err) => res.send(err)
  )
}

module.exports = all