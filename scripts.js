// UC FIRST

// initializing my hello world variable
const helloWorld = "hello world";

// using the charAt function to retrieve a character at a specific position
// here, the first letter of the string
const firstLetter = helloWorld.charAt(0);

// i capitalize the aforementioned first letter thanks to the toUpperCase method
const firstLetterCapitalize = firstLetter.toUpperCase();

// i use the slice method to separate the first letter from the rest of the string
const lowercaseLetters = helloWorld.slice(1);

// i concatenate the capitalized first letter and the rest of the string
const capitalizedHello = firstLetterCapitalize + lowercaseLetters;

console.log(capitalizedHello);

// CAPITALIZE

// initializing my other hello world variable
const capitalize = "hello world";

// i split my hello world string into an array of words with the .split method
const splitString = capitalize.split(" ");

// i create a for loop to loop over the array i just created. i initialize i as 0
// as long as i is smaller than the length of the array, the loop continues to increment
for (let i = 0; i < splitString.length; i++) {
  // i pick the first letter of each word from the array and make it uppercase
  // then add the capitalized letter to the rest of the string
  splitString[i] = splitString[i][0].toUpperCase() + splitString[i].substr(1);
}
// i turn the array back into a string of words with the .join method
console.log(splitString.join(" "));

// REVERSE WORD

// initializing hello world variable
const word = "Hello World";

// splitting the string into an array with split method
const wordSplit = word.split(" ");

// i use the reverse method to swap the string's two words
const wordReverse = wordSplit.reverse();

// console logging my wordReverse variable while turning it back into a string
console.log(wordReverse.join(" "));
