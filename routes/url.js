const express = require('express');
const router = express.Router();

router.post('/',GenerateShortUrl);

module.exports = router;
