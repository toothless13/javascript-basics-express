/* eslint-disable prettier/prettier */
/* eslint-disable eqeqeq */
/* eslint-disable no-unneeded-ternary */
const negate = a => {
  return !a;
};

const both = (a, b) => {
  if (a && b) {
    return true;
  }
  return false;
};

const either = (a, b) => {
  return !!(a || b);
};

const none = (a, b) => {
  return !!(!a && !b);
};

const one = (a, b) => {
  return (a && !b) || (!a && b) ? true : false;
};

const truthiness = a => {
  return a ? true : false;
};

const isEqual = (a, b) => {
  return a === b ? true : false;
};

const isGreaterThan = (a, b) => {
  return a > b ? true : false;
};

const isLessThanOrEqualTo = (a, b) => {
  return a <= b ? true : false;
};

const isOdd = a => {
  return a % 2 != 0 ? true : false;
};

const isEven = a => {
  return a % 2 === 0 ? true : false;
};

const isSquare = a => {
  if (a === 0 || (a % (Math.sqrt(a)) === 0)) {
    return true;
  } 
    return false;
  
};

const startsWith = (char, string) => {
  return string[0] === char ? true : false;
};

const containsVowels = string => {
  const lcString = string.toLowerCase();
  if (lcString.includes('a') || lcString.includes('e') || lcString.includes('i') || lcString.includes('o') || lcString.includes('u')) {
    return true;
  } 
    return false;
  
};

const isLowerCase = string => {
  return string === string.toLowerCase() ? true : false;
};

module.exports = {
  negate,
  both,
  either,
  none,
  one,
  truthiness,
  isEqual,
  isGreaterThan,
  isLessThanOrEqualTo,
  isOdd,
  isEven,
  isSquare,
  startsWith,
  containsVowels,
  isLowerCase
};
