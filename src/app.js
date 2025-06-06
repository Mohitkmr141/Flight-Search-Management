const express = require('express')
const app = express()
const router = require("../src/routes/city.route.js");

app.use(express.urlencoded({
    extended:true
}))
app.use(express.json())


app.use("/api/v1/city" , router)



module.exports = app;