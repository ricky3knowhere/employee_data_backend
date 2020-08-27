const models = require('../models')
const session = require('express-session')
// const User = models.user
// const bcrypt = require('bcrypt')


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
  const keys = Object.keys(value)
  const data = keys.map((k) => ({ name : k, value : value[k] }))
 
  if(error){
    error.details.forEach(val => {
      const key = val.context.key
      const errorMessage = val.message
      const processedValue = val.context.value
      const _value = error._original[key]
      data.forEach((d, i) => {
        if(d.name === key){
          data[i] = {
            name : d.name,
            value : processedValue,
            error : errorMessage,
            _value: _value
          }
        }
      })
    })
  }

  const reduced = data.reduce((acc, cv) => {
    acc[cv.name] = cv
    return acc
  }, {})

  if(error){
    req.session.data = reduced
    req.session.save(
      () => res.redirect('/user/new')
    )
  }else {
    
  }
}

module.exports = post_data