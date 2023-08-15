const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const {
  add,
  subtract,
  multiply,
  divide,
  power,
  round,
  roundUp,
  roundDown,
  absolute,
  quotient,
  remainder,
} = require('./lib/numbers');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
  // res.status(200);
  // res.send({ result: 'Hello, world!' });
  res.status(200).json({ result: `${sayHello(req.params.string)}` });
});

app.get('/strings/upper/:string', (req, res) => {
  res.status(200).json({ result: `${uppercase(req.params.string)}` });
});

app.get('/strings/lower/:string', (req, res) => {
  res.status(200).json({ result: `${lowercase(req.params.string)}` });
});

app.get('/strings/count-characters/:string', (req, res) => {
  res.status(200).json({ result: `${countCharacters(req.params.string)}` });
});

app.get('/strings/first-characters/:string', (req, res) => {
  if (!req.query.length) {
    res.status(200).json({ result: `${firstCharacter(req.params.string)}` });
  } else {
    res.status(200).json({ result: `${firstCharacters(req.params.string, req.query.length)}` });
  }
});

app.get('/numbers/add/:num1/and/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1);
  const num2 = parseInt(req.params.num2);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: subtract(num2, num1) });
  }
});

app.post('/numbers/multiply', (req, res) => {
  if (!req.body.a || !req.body.b) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: multiply(req.body.a, req.body.b) });
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a != null && req.body.b != null) {
    if (isNaN(req.body.a) || isNaN(req.body.b)) {
      res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
    }
    if (req.body.b === 0) {
      res.status(400).send({ error: 'Unable to divide by 0.' });
    }
    res.status(200).send({ result: divide(req.body.a, req.body.b) });
  } else {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
});

module.exports = app;
