const express = require('express');
const bodyParser = require('body-parser');

const professionalRoute = require('./routes/professional');

const app = express();

app.use(bodyParser.json()); // application/json

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/professional', professionalRoute);

app.listen(8080);