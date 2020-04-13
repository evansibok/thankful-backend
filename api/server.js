const express = require('express');

const routes = require('./base-router');
const rootMiddleware = require('./root-middleware');

const app = express();

rootMiddleware(app);

app.use('/', routes);

module.exports = app;