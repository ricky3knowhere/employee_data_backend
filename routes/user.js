const by_id = require('./by_id')
const by_name = require('./by_name')
const all = require('./all')
const delete_id = require('./delete_id')
const form_create = require('./form_create')
const form_update = require('./form_update')
const post_data = require('./post_data')
const update_by_id = require('./update_by_id')


module.exports = {
  by_id,
  by_name,
  form_create,
  post_data,
  all,
  delete_id,
  form_update,
  update_by_id
}