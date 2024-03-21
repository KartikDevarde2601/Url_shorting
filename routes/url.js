const express = require('express');
const router = express.Router();
const {GenerateShortUrl} = require('../controller/url');

router.post('/',GenerateShortUrl);

module.exports = router;
