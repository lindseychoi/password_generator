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
randomLower = characterLowercase[Math.floor(Math.random() * characterLowercase.length)];

//need variable for characters, uppercase, and random generator
var characterUppercase = ("ABCDEFGHIJKLMNOPQRSTUVWXYZ");
randomUpper = characterUppercase[Math.floor(Math.random() * characterUppercase.length)];

randomNum = [Math.floor(Math.random() * 100)];
console.log(randomNum);

//need variable for lenght and random generator, 8-128

var passwordLength = Math.floor(Math.random() * howLong);

//need variable for special characters and random generator

var specialChars = ("!@#$%^&*");
var randomSpecialchar = specialChars[Math.floor(Math.random() * specialChars.length)];
console.log(randomSpecialchar);

//given with the initial code need to figure out what it is:
var generateBtn = document.querySelector("#generate");

//variables with confirms and a prompt

var willContinue = confirm("Do you want to generate a random password? Click OKAY to enter password specifications, or click CANCEL to decline.")

var wantSpec = confirm("Do you want special characters in your password?");
    
var wantLower = confirm("Do you want lowercase letters in your password?");

var wantUpper = confirm("Do you want uppercase letters in your password?");

var wantNum = confirm("Do you want numbers in your password?");

var howLong = prompt("What is the length of your desired password?");


//if statements


if (howLong < 8 || howLong > 128) {

    window.alert("Your password must be between 8 and 128 characters long. Please re-enter your password length.");

    prompt("What is the length of your desired password?");

    } else {

        console.log(passwordLength); 
        
    }

if (wantSpec === true) {

    console.log(randomSpecialchar);

    } else {
        
        console.log("No special characters.");

    }

if (wantLower === true) {

    console.log(randomLower);
    
    } else {
            
        console.log("No lowercase letters.");
    
    }

if (wantUpper === true) {

    console.log(randomUpper);
        
    } else {
                
    console.log("No uppercase letters.");
        
    }

if (wantNum === true) {

    console.log(randomNum);
            
    } else {
                    
    console.log("No numbers.");
            
    }


function writePassword() {

    var password = generatePassword();

    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    return password
}

//event listeners
// Add event listener to generate button

generateBtn.addEventListener("click", writePassword);


//run the function to test it:

writePassword(password);
