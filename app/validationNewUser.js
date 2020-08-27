const Joi = require('joi-plus');
const validator = expressJoi.createValidator()

const { name, password, email, date_of_birth} = require('../validation')

const bodySchema = Joi.object({
    name : name,       
    email : email,
    password : password,
    date_of_birth : date
})

const validationNewUser = validator.body(bodySchema)

module.exports = validationNewUser