const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const fileUpload = require('express-fileupload')

const session = require('express-session')
const sessionStore = require('express-session-sequelize')
const SessionStore = sessionStore(session.Store);

const db = require('../models')
const sequelizeSessionStore = new SessionStore({
    db: db.sequelize,
});

const app = express()
const port = 4000

app.set('view engine', 'twig')
app.use(bodyParser.urlencoded({ extended : true }))
app.use(fileUpload({ createParentPath : true }))
app.use(cors())

app.use('/uploads', express.static('uploads'))

const user   = require('../routes/user')
const upload = require('../routes/upload')
const postUpload = require('../routes/post_upload')
const login = require('../routes/login')

app.use(session({ 
    secret : 'x', 
    resave : false, 
    saveUninitialized : true,
    cookie : { secure : 'auto' }
}))

app.get('/',(req,res) => {
    res.send('server')
})

// app.get('/user_by_name/:name', user.by_name)
app.get('/user/new', user.form_create)
app.post('/user/new', user.post_data)
app.get('/user/:id/delete', user.delete_id)
app.get('/user/:id/update', user.form_update)
app.post('/user/:id', user.update_by_id)
app.get('/user/:id', user.by_id)
app.get('/user', user.all)
app.get('/upload', upload)
app.post('/upload', postUpload)

app.get('/login', login.get_login)
app.post('/login', login.post_login)


app.listen(port,() => {
    console.log(`Example app listening at https://localhost:${port}`)
})