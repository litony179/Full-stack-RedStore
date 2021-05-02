const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const recentData = require('./data/data.js');

const dataRoute = require('./routes/dataRoutes');
const productRoute = require('./routes/productRoutes.js');
const userRoute = require('./routes/userRoutes');

dotenv.config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
mongoose.connect(process.env.MONGODB_URL || 'mongodb://localhost/redstore', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})

// app.get('/api/products', (req, res, next) => {
//     res.send(data.products)
// });



app.get('/', (req, res, next) => {
    res.send('sever is ready');
});


// This is to fetch the data in the HomePage
app.use(dataRoute);
// This is to fetch the users in the HomePage
app.use('/api/users', userRoute);
app.use('/api/products', productRoute);


app.use((err, req, res, next) => {
    res.status(500).send({ message: err.message });
    next();
})


// This is to extract the port that your hosting service provides for you
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('serve at http://localhost:${port}');
});