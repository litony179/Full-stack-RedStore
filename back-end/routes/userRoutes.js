const express = require('express');
const expressAsyncHandler = require('express-async-handler');
const data = require('../data/data.js');
const User = require('../models/userModel.js');

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res, next) => {
    await User.remove({});
    const createdUsers = await User.insertMany(data.users);
    res.send({ createdUsers });
}));

module.exports = userRouter;