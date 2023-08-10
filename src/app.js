const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const app = express();

app.get('/strings/hello/:string', (req, res) => {
  // res.status(200);
  // res.send({ result: 'Hello, world!' });
  res.status(200).json({ result: `${sayHello(req.params.string)}` });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: `${uppercase(req.params.string)}` });
});

module.exports = app;
