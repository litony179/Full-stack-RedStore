/* eslint-disable no-undef */
const express = require('express');
const data = require('../data/data');
const recentData = require('../data/recentData')

const router = express.Router();

router.get('/api/products/:id', (req, res, next) => {
    const product = data.products.find(x => x._id === req.params.id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send({ message: 'Product not found' });
    }
    next();
});

router.get('/api/products', (req, res, next) => {
    res.send(data.products);
    next();
});

router.get('/api/recentProducts', (req, res, next) => {
    res.send(recentData.RecentProducts);
});


module.exports = router;