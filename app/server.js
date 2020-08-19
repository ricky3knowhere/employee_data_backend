const express = require('express')
const app = express()
const port = 4000

app.set('view engine', 'twig')

const user = require('../routes/user')

app.get('/',(req,res) => {
    res.send('server')
})

app.get('/user/:name',user.by_name)

app.listen(port,() => {
    console.log(`Example app listening at https://localhost:${port}`)
})