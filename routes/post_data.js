const User = require('../models/user')

const post_data = (req,res) => {
  // res.send(req.body)
  User.create(req.body)
  .then(
    (user) => res.render('single_user', {user}),
    (err) => res.send(err)
  )
}

module.exports = post_data

