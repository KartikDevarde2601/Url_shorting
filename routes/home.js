const express = require('express');
const router = express.Router();
const{homepage} =require('../controller/home')

router.use('/home', homepage)

module.exports=router