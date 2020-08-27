const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const session = require('express-session')
const sessionStore = require('express-session-sequelize')
const SessionStore = sessionStore(session.Store);

const hbs = require('express-hbs')

const db = require('../models')
const sequelizeSessionStore = new SessionStore({
    db: db.sequelize,
});

const app = express()
const port = 4000

app.engine('hbs', hbs.express4({
    partialsDir : __dirname + '/../views/partials',
    defaultLayout : __dirname + '/../views/layout/default.hbs'

  }));

app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended : true }))
app.use(fileUpload({ createParentPath : true }))
app.use(cors())

app.use('/uploads', express.static('uploads'))

const user   = require('../routes/user')
const upload = require('../routes/upload')
const postUpload = require('../routes/post_upload')
const login = require('../routes/login')

app.use(session({ 
    secret : 'keyboard cat', 
    resave : false, 
    saveUninitialized : true,
    cookie : { secure : 'auto' },
    store : sequelizeSessionStore
}))

app.get('/',(req,res) => {
    res.render('home')
})

app.get('/form',(req,res) => {
    res.render('form')
})

// const { validationNewUser } = require('./validationNewUser')

app.get('/user/new', user.form_create)
app.post('/user/new', /* validationNewUser, */ user.post_data)
app.get('/user/:id/delete', user.delete_id)
app.get('/user/:id/update', user.form_update)
app.post('/user/:id', user.update_by_id)
app.get('/user/:id', user.by_id)
app.get('/user', user.all)
app.get('/upload', upload)
app.post('/upload', postUpload)

app.get('/login', login.get_login)
app.post('/login', login.post_login)


// const validationErrorHandler = require('/validationErrorHandler')
// app.use(validationErrorHandler)


app.listen(port,() => {
    console.log(`Example app listening at https://localhost:${port}`)
})