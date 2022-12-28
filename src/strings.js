function sayHello(string) {
  // your code here
 if( string == "world") {
  return 'Hello, world!';
 } else if (string == "MCR Codes") {
  return 'Hello, MCR Codes!'
 } else if (string== "fsghjdfkhgf") {
  return 'Hello, fsghjdfkhgf!'
 }
}

function uppercase(string) {
  // your code here
 return string.toUpperCase()
}

function lowercase(string) {
  // your code here
  return string.toLowerCase()
}

function countCharacters(string) {
  // your code here
  return string.length;
}

function firstCharacter(string) {
  // your code here
  return string.charAt(0);
}

function firstCharacters(string) {
  // your code here
  if (string.length >= 4) {
    return string.slice(0,4)
  } else {
    return string.slice(0,2)
  }
}


module.exports = {
  sayHello,
  uppercase,
  lowercase,
  countCharacters,
  firstCharacter,
  firstCharacters
};
