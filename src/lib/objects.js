const createPerson = (name, age) => {
  return {
    name,
    age
  };
};

const getName = object => {
  return object.name;
};

const getProperty = (property, object) => {
  return object[property];
};

const hasProperty = (property, object) => {
  // return object[property] ? true : false;
  return object[property];
};

const isOver65 = person => {
  // return person.age > 65 ? true : false;
  return person.age > 65;
};

const getAges = people => {
  return people.map(person => person.age);
};

const findByName = (name, people) => {
  return people.find(person => person.name === name);
};

const findHondas = cars => {
  return cars.filter(car => car.manufacturer === 'Honda');
};

const averageAge = people => {
  const totalAge = people.reduce((acc, cur) => acc + cur.age, 0);
  return totalAge / people.length;
};

const createTalkingPerson = (name, age) => {
  return {
    name,
    age,
    introduce(person) {
      return `Hi ${person}, my name is ${this.name} and I am ${this.age}!`;
    }
  };
};

module.exports = {
  createPerson,
  getName,
  getProperty,
  hasProperty,
  isOver65,
  getAges,
  findByName,
  findHondas,
  averageAge,
  createTalkingPerson
};
