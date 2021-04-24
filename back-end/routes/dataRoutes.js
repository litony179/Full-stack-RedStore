const express = require('express');
const data = require('../data/data');
const recentData = require('../data/recentData')

const router = express.Router();

router.get('/api/products', (req, res, next) => {
    res.send(data.products);
    next();
});

router.get('/api/recentProducts', (req, res, next) => {
    res.send(recentData.RecentProducts);
});


module.exports = router;