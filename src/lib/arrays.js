const getNthElement = (index, array) => {
  return index > (array.length - 1) ? array[index - array.length] : array[index];
};

const arrayToCSVString = array => {
  return array.join(',');
};

const csvStringToArray = string => {
  return string.split(',');
};

const addToArray = (element, array) => {
  array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index, 1);
};

const numbersToStrings = numbers => {
  return numbers.map(number => number.toString());
};

const uppercaseWordsInArray = strings => {
  return strings.map(string => string.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(string => {
    return string.split("").reverse().join("");
  });
};

const onlyEven = numbers => {
  return numbers.filter(number => number % 2 === 0);
};

const removeNthElement2 = (index, array) => {
  const newArray = array.slice();
  newArray.splice(index, 1);
  return newArray;
};

const elementsStartingWithAVowel = strings => {
  // return strings.filter(string => {
  //   return string[0] === 'a' || string[0] === 'e' || string[0] === 'i' || string[0] === 'o' || string[0] === 'u';
  // });
  const regEx = new RegExp('[aeiou]', 'i');
  return strings.filter(string => {
    return string[0].match(regEx);
  });
};

const removeSpaces = string => {
  // return string.split(' ').join('');
  const strings = string.split(' ');
  return strings.reduce((acc, val) => {
    return `${acc}${val}`;
  });
};

const sumNumbers = numbers => {
  return numbers.reduce((acc, cur) => {
    return acc + cur;
  });
};

const sortByLastLetter = strings => {
  return strings.sort((a, b) => {
    const aLastLetter = a[a.length - 1];
    const bLastLetter = b[b.length - 1];
    if (aLastLetter < bLastLetter) {
      return -1;
    }
    if (aLastLetter > bLastLetter) {
      return 1;
    }
    if (aLastLetter === bLastLetter) {
      return 0;
    }
  });
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
