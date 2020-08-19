const express = require('express')
const app = express()
const port = 4000

app.get('/',(req,res) => {
    res.send('server')
})

app.listen(port,() => {
    console.log(`Example app listening at https://localhost:${port}`)
})