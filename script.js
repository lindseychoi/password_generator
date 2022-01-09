// Assignment Code

passwordLength = Math.floor(Math.random() * 128);
console.log(passwordLength);
var characterLowercase = ("abcdefghijklmnopqrstuvwxyz");


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
