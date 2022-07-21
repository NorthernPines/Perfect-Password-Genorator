// Assignment Code
var generateBtn = document.querySelector('#generate');

function generatePassword() {
  //declaring my variables
  var password = "";
  var passLength;
  var specials;
  var numerals;
  var uppercase;
  var lowercase;

  var charList = [];
  var specialsList = ["!", "\"", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\\", "]", "^", "_", "`", "{", "|", "}", "~"];
  var numeralsList = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var lowercaseList = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var uppercaseList = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

  //prompting for user input
  var passLength = window.prompt("How many characters would you like in your password?");
  var specials = window.confirm("Would you like special characters in your password?");
  var numerals = window.confirm("Would you like numerals in your password?");
  var uppercase = window.confirm("Would you like uppercase letters in your password?");
  var lowercase = window.confirm("Would you like lowercase letters in your password?");

  //testing each boolean and adding those characters to charList if they want the characters in their password

  if (numerals) {
    charList = charList.concat(numeralsList);
  }
  if (specials) {
    charList = charList.concat(specialsList);
  }
  if (lowercase) {
    charList = charList.concat(lowercaseList);
  }
  if (uppercase) {
    charList = charList.concat(uppercaseList);
  }
  
  //for loop to run as many times as characters that the user wants
  for (i = 0; i < passLength; i++){
    password += charList[Math.random(0, charList.length)]
  }

  console.log(charList);

  return password;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
