const User = require('../models/user')

const update_by_id = (req,res) => {
  User.update(
    req.body,
    { 
      where : {
        id : req.params.id
      }
    }
  )
  .then(
    (user) => res.redirect(`/user/${req.params.id}`),
    (err) => res.send(err)
  )
}  

module.exports = update_by_id