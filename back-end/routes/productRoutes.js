const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const Product = require('../models/productModel.js');
const data = require('../data/data.js');

const productRouter = express.Router();

productRouter.get('/', expressAsyncHandler(async(req, res, next) => {
    const products = await Product.find({});
    res.send(products);
}))

productRouter.get('/seed', expressAsyncHandler(async(req, res, next) => {
    await Product.remove({});
    const createdProducts = await Product.insertMany(data.products);
    res.send({ createdProducts });
}));

productRouter.get('/:id', expressAsyncHandler(async(req, res, next) => {
    const product = await Product.findById(req.params.id);
    if (product) {
        res.send(product)
    } else {
        res.status(404).send({ message: 'product not found' });
    }
}));

module.exports = productRouter;