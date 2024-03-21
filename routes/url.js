const express = require('express');
const router = express.Router();
const Url = require('../model/url');
const {GenerateShortUrl} = require('../controller/url');

router.post('/',GenerateShortUrl);

module.exports = router;
