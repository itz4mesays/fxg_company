const router = require('express').Router()
const home = require('../app/controllers/HomeController')


router.get('/', home.index)

module.exports = router