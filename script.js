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


//functions

function generatePassword(upper, lower, number, special, howLong) {

    var characterLowercase = ("abcdefghijklmnopqrstuvwxyz");
    var characterUppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
    var specialChars = ("!@#$%^&*");
    var numberSet = ("0123456789");

    // set available character sets
    var availableCharacterSet;
    var resultingPassword = "";
    var numCharactersToGenerate = howLong;

    if (lower === true) {
        randomLower = characterLowercase[Math.floor(Math.random() * characterLowercase.length)];
        resultingPassword += randomLower;
        availableCharacterSet += characterLowercase;
        numCharactersToGenerate--;
    }
    
    if (special === true) {
        randomSpecialchar = specialChars[Math.floor(Math.random() * specialChars.length)];
        resultingPassword += randomSpecialchar;
        numCharactersToGenerate--;
        availableCharacterSet += specialChars;
    } 
    
    if (upper === true) {
        randomUpper = characterUppercase[Math.floor(Math.random() * characterUppercase.length)];
        resultingPassword += randomUpper;
        numCharactersToGenerate--;
        availableCharacterSet += characterUppercase;
    }
    
    if (number === true) {
        randomNum = numberSet[Math.floor(Math.random() * numberSet.length)];
        resultingPassword += randomNum;
        numCharactersToGenerate--;
        availableCharacterSet += numberSet;
    }

    console.log("resulting password: "+ resultingPassword);

    // generate the rest of the characters
    var i = 0;

    while (i < numCharactersToGenerate) {

        randomCharacter = availableCharacterSet[Math.floor(Math.random() * availableCharacterSet.length)];
        resultingPassword += randomCharacter;
        console.log("iteration "+i+" curent resultingpassword: "+resultingPassword);
        i++;
    }

    return resultingPassword;
}
 
function writePassword() {

    // user specifications for the password
    var special = confirm("Do you want SPECIAL characters in your password?");     
    var lower = confirm("Do you want LOWERCASE letters in your password?");
    var upper = confirm("Do you want UPPERCASE letters in your password?");
    var number = confirm("Do you want NUMBERS in your password?");
    var howLong = prompt("What is the LENGTH of your desired password?");

    // input validation for password length 8 to 128 characters
    if (howLong < 8 || howLong > 128) {

        window.alert("Your password must be between 8 and 128 characters long. Please re-enter your password length.");
        prompt("What is the LENGTH of your desired password?");
    }

    var password = generatePassword(upper, lower, number, special, howLong);
    var passwordText = document.querySelector("#password").value = password;
    return password;
}


// adding eventlistener to generate password button
var generateBtn = document.querySelector("#generate").addEventListener("click", writePassword);
