const express = require('express');
const sandbox = require('./sandbox'); // this is where you'd put the actual functions

const router = express.Router();

router.get('/sandbox', sandbox.getSandboxSheet);
router.post('/updateSheet', sandbox.updateSheet);

module.exports = router;
