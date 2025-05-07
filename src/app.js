const express = require('express')
const app = express()


app.use(express.urlencoded({
    extended:true,limit:"100kb"
}))
app.use(express.json())


module.exports = app;