const express = require('express');
const router = express.Router();
const {getRedirect} = require('../controller/redirect');

router.get('/:shortUrl',getRedirect);

module.exports = router;