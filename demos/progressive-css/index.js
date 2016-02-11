const express = require('express');
const app = express();
const staticConfig = {maxAge: '2s'};

app.use('/:min(\\d+)/:max(\\d+)/', (req, res, next) => {
  const min = Number(req.params.min) || 0;
  const max = Number(req.params.max) || 0;
  const delay = Math.random() * (max-min) + min;
  setTimeout(next, delay * 1000);
}, express.static(`${__dirname}/public/`, staticConfig));

app.use('/', express.static(`${__dirname}/public/`, staticConfig));

module.exports = app;
