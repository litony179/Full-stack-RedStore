const express = require('express');
const recentData = require('./data/data.js');

const featuredDataRoute = require('./routes/dataRoutes');

const app = express();

// app.get('/api/products', (req, res, next) => {
//     res.send(data.products)
// });



app.get('/', (req, res, next) => {
    res.send('sever is ready');
});

// This is to fetch the data in the HomePage
app.use(featuredDataRoute);

// This is to extract the port that your hosting service provides for you
const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log('serve at http://localhost:${port}');
});