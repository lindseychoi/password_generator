//GIVEN I need a new, secure password
//WHEN I click the button to generate a password
//THEN I am presented with a series of prompts for password criteria
//WHEN prompted for password criteria
//THEN I select which criteria to include in the password
//WHEN prompted for the length of the password
//THEN I choose a length of at least 8 characters and no more than 128 characters
//WHEN asked for character types to include in the password
//THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
//WHEN I answer each prompt
//THEN my input should be validated and at least one character type should be selected
//WHEN all prompts are answered
//THEN a password is generated that matches the selected criteria
//WHEN the password is generated
//THEN the password is either displayed in an alert or written to the page


// Assignment Code

//variables:

//need variable for characters, lowercase, and random generator
var characterLowercase = ("abcdefghijklmnopqrstuvwxyz");
randomLetter = characterLowercase[Math.floor(Math.random() * characterLowercase.length)];
console.log(randomLetter);

//need variable for lenght and random generator, 8-128

var passwordLength = Math.floor(Math.random() * 128);
console.log(passwordLength);

//need variable for special characters and random generator

var specialChars = ("!@#$%^&*");
var randomSpecialchar = specialChars[Math.floor(Math.random() * specialChars.length)];
console.log(randomSpecialchar);

//given with the initial code need to figure out what it is:
var generateBtn = document.querySelector("#generate");

//functions
// Write password to the #password input
//code given by assignment and can't figure it out:

function writePassword(howLong, wantSpec, wantLower, wantUpper, wantNum) {

    var howLong = prompt("What is the length of your desired password?");

    var wantSpec = confirm("Do you want special characters in your password?");
    
    var wantLower = confirm("Do you want lowercase letters in your password?");

    var wantUpper = confirm("Do you want uppercase letters in your password?");

    var wantNum = confirm("Do you want numbers in your password?");

    

    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

}

//event listeners
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


//run the function to test it:
writePassword(password);
