const express = require('express');
const router = express.Router();
const {getAnalytics} = require('../controller/analytics')

router.get('/:shortUrl',getAnalytics);

module.exports=router