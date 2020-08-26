const models = require('../models')
const User = models.user
const bcrypt = require('bcrypt')

function isAlphabetOnly(name) {
  const regex = /[a-z\s]/g
  const validate = name.match(regex)
  const validateLength = validate === null ? 0 : validate.length 
 
  return (name.length === validateLength)
}

// function required(name){
//   if(name === undefined) return false
//   return name.length < 1
// }

const post_data = async (req,res) => {

  if (isAlphabetOnly(req.body.name)) {

    const data = {
      name : req.body.name,
      password : bcrypt.hashSync(req.body.password, 10),
      email : req.body.email,
      date_of_birth : req.body.date_of_birth
    }
    const user = await User.create(data)
  
    res.redirect('/user/'+ user.id)

  }else {
    req.session.errorMessage = {
      name : 'Name should contain alphabet and space only'
    }
    req.session.oldValue = {
      name : req.body.name,
      password : req.body.password,
      email : req.body.email,
      date : req.body.date_of_birth
    }

    res.redirect('/user/new')

  }
}

module.exports = post_data

