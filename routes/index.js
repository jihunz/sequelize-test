const express = require('express');
const User = require('../models/test/user');

const router = express.Router();

router.get('/', async (req, res, next) => {
    console.log('request received');
});

module.exports = router;