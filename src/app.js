const express = require('express');
const {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters,
} = require('./lib/strings');

const { add, subtract, multiply, divide, remainder } = require('./lib/numbers');

const { negate, truthiness, isOdd, startsWith } = require('./lib/booleans');

const {
  getNthElement,
  arrayToCSVString,
  addToArray,
  elementsStartingWithAVowel,
  removeNthElement,
} = require('./lib/arrays');

const app = express();

app.use(express.json());

app.get('/strings/hello/:string', (req, res) => {
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
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
  if (Number.isNaN(num1) || Number.isNaN(num2)) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  } else {
    res.status(200).json({ result: add(num1, num2) });
  }
});

app.get('/numbers/subtract/:num1/from/:num2', (req, res) => {
  const num1 = parseInt(req.params.num1, 10);
  const num2 = parseInt(req.params.num2, 10);
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
  // eslint-disable-next-line no-restricted-globals
  if (isNaN(req.body.a) || isNaN(req.body.b)) {
    res.status(400).send({ error: 'Parameters "a" and "b" must be valid numbers.' });
  }
  res.status(200).send({ result: multiply(req.body.a, req.body.b) });
});

app.post('/numbers/divide', (req, res) => {
  if (req.body.a != null && req.body.b != null) {
    // eslint-disable-next-line no-restricted-globals
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

app.post('/numbers/remainder', (req, res) => {
  if (req.body.a == null || req.body.b == null) {
    res.status(400).send({ error: 'Parameters "a" and "b" are required.' });
  }
  if (Number.isNaN(parseInt(req.body.a, 10)) || Number.isNaN(parseInt(req.body.b, 10))) {
    res.status(400).send({ error: 'Parameters must be valid numbers.' });
  }
  if (req.body.b === 0) {
    res.status(400).send({ error: 'Unable to divide by 0.' });
  }
  res.status(200).send({ result: remainder(req.body.a, req.body.b) });
});

app.post('/booleans/negate', (req, res) => {
  res.status(200).send({ result: negate(req.body.value) });
});

app.post('/booleans/truthiness', (req, res) => {
  res.status(200).send({ result: truthiness(req.body.value) });
});

app.get('/booleans/is-odd/:value', (req, res) => {
  if (Number.isNaN(parseInt(req.params.value, 10))) {
    res.status(400).send({ error: 'Parameter must be a number.' });
  } else {
    res.status(200).send({ result: isOdd(req.params.value) });
  }
});

app.get('/booleans/:string/starts-with/:char', (req, res) => {
  if (req.params.char.length > 1) {
    res.status(400).send({ error: 'Parameter "character" must be a single character.' });
  }
  res.status(200).send({ result: startsWith(req.params.char, req.params.string) });
});

app.post('/arrays/element-at-index/:index', (req, res) => {
  res.status(200).send({ result: getNthElement(req.params.index, req.body.array) });
});

app.post('/arrays/to-string', (req, res) => {
  res.status(200).send({ result: arrayToCSVString(req.body.array) });
});

module.exports = app;
