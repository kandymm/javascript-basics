/* eslint-disable prettier/prettier */
const createPerson = (name, age) => {
  // your code here
return {name, age};
}

const getName = object => {
  // your code here
  return object.name;
};

const getProperty = (property, object) => {
  return object[property]
};

const hasProperty = (property, object) => {
  // your code here
  if (object.hasOwnProperty(property)){
    return true
  } else {return false}
};

const isOver65 = person => {
  // your code here
  return person.age > 65;
};

const getAges = people => 
  // your code here
  people.map(person => person.age);
;

const findByName = (name, people) => {
  // your code here
  return people.filter(a => a.name === name) [0];
};

const findHondas = cars => {
  // your code here
  return cars.filter(a =>a.manufacturer ==='Honda')
};

const averageAge = people => {
  // your code here
  let ages = people.map(a =>{return a.age});
  return ages.reduce((totalAge, currentValue)=> totalAge + currentValue,
   0) / people.length;
};

const createTalkingPerson = (name, age) => {
  // your code here
  return {
    name: name,
    age: age,
    introduce: strangersName => {
      return `Hi ${strangersName}, my name is ${name} and I am ${age}!`;
    }
  };
}
  ;

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
