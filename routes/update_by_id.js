const models = require('../models')
const bcrypt = require('bcrypt')
const User = models.user


const update_by_id = (req,res) => {
  const data = req.body
  const {password} = req.body

  data.password = bcrypt.hashSync(password, 10)

  User.update(
    data,
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