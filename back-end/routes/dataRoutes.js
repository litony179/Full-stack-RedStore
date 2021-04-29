/* eslint-disable no-undef */
const express = require('express');
const data = require('../data/data');
const recentData = require('../data/recentData')

const router = express.Router();

router.get('/api/recentProducts', (req, res, next) => {
    res.send(recentData.RecentProducts);
});


module.exports = router;