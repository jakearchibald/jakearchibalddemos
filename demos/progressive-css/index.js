const express = require('express');
const app = express();

app.use('/css/:delay/', (req, res, next) => {
  const delay = Number(req.params.delay) || 0;
  setTimeout(next, delay * 1000);
}, express.static(`${__dirname}/public/css/`));

app.use('/async-css/:delay/', (req, res, next) => {
  const delay = Number(req.params.delay) || 0;
  setTimeout(next, delay * 1000);
}, express.static(`${__dirname}/public/async-css/`));

app.use('/async-css/:min/:max/', (req, res, next) => {
  const min = Number(req.params.min) || 0;
  const max = Number(req.params.max) || 0;
  const delay = Math.random() * (max-min) + min;
  setTimeout(next, delay * 1000);
}, express.static(`${__dirname}/public/async-css/`));

app.use('/', express.static(`${__dirname}/public/`));

module.exports = app;
