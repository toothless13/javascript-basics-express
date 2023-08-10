const express = require('express');
const { sayHello } = require('./lib/strings');

const app = express();

app.get('/strings/hello/:input', (req, res) => {
  // res.status(200);
  // res.send({ result: 'Hello, world!' });
  res.status(200).json({ result: `${sayHello(req.params.input)}` });
});

module.exports = app;
