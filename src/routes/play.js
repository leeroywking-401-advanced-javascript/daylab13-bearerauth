'use strict';

const express = require('express');
const auth = require('../auth/middleware.js');

const router = express.Router()

router.get('/dangerous', auth('delete'), (req,res) => {
    res.status(200).send('Welcome to the danger zone!')
})

module.exports = router