function negate(a) {
  // your code here
  return !a
};

function both(a, b) {
  // your code here
  return a && b
};

function either(a, b) {
  // your code here
return a || b;
};

function none(a, b) {
  // your code here
  return !a && !b;
};

function one(a, b) {
  // your code here
  return a!==b;
};

function truthiness(a) {
  // your code here
  return !!a;
};

function isEqual(a, b) {
  // your code here
  return a === b;
};

function isGreaterThan(a, b) {
  // your code here
  return a > b;
};

function isLessThanOrEqualTo(a, b) {
  // your code here
  return a<= b;
};

function isOdd(a) {
  // your code here
  if(a % 2 === 1){
    return true;
  } else {
    return false;
  }
};

function isEven(a) {
  // your code here
  if(a % 2 === 0){
    return true;
  } else {
    return false;
  }
};

function isSquare(a) {
  // your code here
  if(Number.isInteger(Math.sqrt(a)))
  {return true;}
  else {
      return false; 
  }
};

function startsWith(char, string) {
  // your code here
  if(string.startsWith(char)){
    return true;
  } else {
    return false;
  }
};

function containsVowels(string) {
  // your code here
  return Boolean( string.match(/[aeiou]/gi))
};

function isLowerCase(string) {
  // your code here
  return Boolean (!string.match(/[A-Z]/g))
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
