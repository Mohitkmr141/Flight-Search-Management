const {Router} = require('express')
const { create ,destroy} = require('../controllers/city.controller.js')
const router = Router()


router.route("/create").post(create)


router.route("/delete").delete(destroy)
module.exports = {
    router
}