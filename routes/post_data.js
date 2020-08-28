const models = require('../models')
const session = require('express-session')
const User = models.user
const bcrypt = require('bcrypt')


const post_data = async (req,res) => {

  const Joi = require('joi-plus')
  const  { name, password, email, date_of_birth } = require('../validation')
  const schema = Joi.object({ name, password, email, date_of_birth })

  const options = {
    abortEarly : false,
    allowUnknown : false,
    stripUnknown : false
  }

  const result = schema.validate(req.body, options)
  const { error,value } = result

  const data = Object.fromEntries(
    Object
    .entries(value)
    .map(([key, val]) => [key, {value: val}])
  )
  
  
  if(error){
    const dataError = error.details
      .reduce(
        (acc, curr) => {
          acc[curr.context.key] = {
            value: curr.context.value,
            _value: error._original[curr.context.key],
            error: curr.message
          }
          return acc
        },
        {}
      )

      Object.assign(data, dataError)
      req.session.data = data
      req.session.save(
        () => res.redirect('/user/new')
      )
  }else {
    const {password} = req.body
    const data = req.body
    data.password = bcrypt.hashSync(password, 10)

    const user = await User.create(data)
    res.redirect('./'+ user.id)
    // res.send({data, error, value})
  }
}

module.exports = post_data