const City = require('../models/city.js')
const db = require("../models/index.js")
async function  connect(){
 await db.create({
    name:"New Delhi"

})
}


module.exports = connect;



