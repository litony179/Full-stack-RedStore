const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, '../', 'front-end', 'build')));

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'front-end', 'build', 'index.html'));
});

app.listen(5000);