const getNthElement = (index, array) => {
  // your code here
  if(index < array.length){
    return array[index]
  } else if( index - (array.length)< array.length){
    return array[index - (array.length)]
  }
};

const arrayToCSVString = array => {
  // your code here
  return array.join()

};

const csvStringToArray = string => {
  // your code here
  return string.split(",")
};

const addToArray = (element, array) => {
  // your code here
  array.push(element);
};

const addToArray2 = (element, array) => {
  // your code here
  return array.concat(element);
 
};

const removeNthElement = (index, array) => {
  // your code here
  let removedItem = array.splice(index, 1)
};

const numbersToStrings = numbers => {
  // your code here
  return numbers.map(String);
};

const uppercaseWordsInArray = strings => {
  // your code here
  const upCase = strings.map(a=>{
    return a.toUpperCase()
  })
  return upCase
};

const reverseWordsInArray = strings => {
  // your code here
  return strings.map(function(e){
    return e.split("").reverse().join("")
  })
};

const onlyEven = numbers => {
  // your code here
  return numbers.filter((e) => e % 2 === 0 );
};

const removeNthElement2 = (index, array) => {
  // your code here
  const newArr = [...array]
  newArr.splice(index, 1);
  return newArr
};

const elementsStartingWithAVowel = strings => {
  // your code here
  return strings.filter((e) => (e.match(/^[aeiou]/gi)))
};

const removeSpaces = string => {
  // your code here
  return string.split(' ').join('')
};

const sumNumbers = numbers => {
  return numbers.reduce((total, amount) => total + amount);
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
  let newArr = strings.map(function (e) {return e.split("").reverse().join("")});
    newArr.sort();
    let answer = newArr.map(function (e) {return e.split("").reverse().join("")});
    return answer;
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
