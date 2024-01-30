const input = require('readline-sync');

function getValidInput(prompt, isValid) {
    
    let userInput = input.question(prompt);

    while (!isValid(userInput)) {
      console.log("Invalid input. Try again.");
      userInput = input.question(prompt);
    }

    return userInput;
}

// TODO 1: write a validator 
// that ensures input starts with "a"
let inputStartsA = function(str) {
  return str[0] === 'a' || str[0] === 'A';
};

// console.log(getValidInput('Enter a string: ', inputStartsA))

// TODO 2: write a validator 
// that ensures input is a vowel
let inputBeAVowel = function(str) {
  return str[0] === 'a' || str[0] === 'A' || str[0] === 'ea' || str[0] === 'E' || str[0] === 'i' || str[0] === 'I' || str[0] === 'o' || str[0] === 'O' || str[0] === 'u' || str[0] === 'U';
};

console.log(getValidInput('Enter a string: ', inputBeAVowel))

// Be sure to test your code!
