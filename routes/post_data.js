const models = require('../models')
const User = models.user

function isAlphabetOnly(name) {
  const regex = /[a-z\s]/g
  const validate = name.match(regex)
  return (name.length === validate.length)
}

// function required(name){
//   if(name === undefined) return false
//   return name.length < 1
// }

const post_data = async (req,res) => {

  if (isAlphabetOnly(req.body.name)) {
    const user = await User.create(req.body)
    res.redirect('/user/'+ user.id)
  }else {
    req.session.errorMessage = {
      name : 'Name should contain alphabet and space only'
    }
    req.session.oldValue = {
      name : req.body.name
    }

    res.redirect('/user/new')

  }
}

module.exports = post_data

