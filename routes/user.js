const express = require('express')
const router = express.Router()
const {handleSign} = require('../controller/user')
const {handleLogin} = require('../controller/user')

router.post('/signup',handleSign)
router.post('/login',handleLogin)

module.exports = router;