const express = require('express');
const sandbox = require('./sandbox');

const router = express.Router();

router.post('/updateSheet', sandbox.updateSheet);

module.exports = router;
