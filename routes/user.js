const {Op} = require('sequelize')
const User = require('../models/user')

const by_name = (req,res) => {
  User.findOne({
    where : {
      name : {
        [Op.eq] : req.params.name
      }
    }
  }).then(
    (data) => {
      res.send(data)
    },
    (error) => res.send(error)
  ) 
}

const by_id = (req,res) => {
  User.findByPk(req.params.id).then(
    (user) => {
      res.render('single_user', { user })
    },
    (error) => res.send(error)
  ) 
}

const form_create = (req,res) => {
  res.render('form_create')
}

const all = (req,res) => {
  User.findAll().then(
    (users) => res.render('user_all',{users}),
    (err) => res.send(err)
  )
}

const post_data = (req,res) => {
  // res.send(req.body)
  User.create(req.body)
  .then(
    (user) => res.render('single_user', {user}),
    (err) => res.send(err)
  )
}

const delete_id = (req,res) => {
  User.destroy({ where : {
    id : {
      [Op.eq] : req.params.id
    }
  }
  })
  .then(
    () => res.redirect('/user'),
    (err) => res.send(err)
  )
}  

const form_update = (req,res) => {
  User.findByPk(req.params.id)
  .then(
    (user) => {
      res.render('form_update',{ user })
  },
  (err) => res.send(err)
  )
}

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

module.exports = {
  by_name,
  by_id,
  form_create,
  post_data,
  all,
  delete_id,
  form_update,
  update_by_id
}