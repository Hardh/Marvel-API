const express = require('express');
const app = express();
const router = express.Router();

const logger = require('./helpers/logger')

app.use(function (req, res, next) {
    //Marcando header
    res.setHeader('Content-Type', 'application/json');
    logger.info(req.ip);
    next();
});

//Rotas
const index = require('./routers/index');
const heroRoute = require('./routers/herores.router');
app.use('/', index);
app.use('/heroes', heroRoute);
module.exports = app;