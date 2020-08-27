const Joi = require('joi-plus');
const expressJoi = require('express-joi-validation')

const name = Joi.string().alpha().min(3).max(20).trim().required()
const password = Joi.string().password({ min: 6, max: 8 })
const email = Joi.string().email()
const date_of_birth = Joi.date()

module.exports = { name, password, email, date_of_birth }