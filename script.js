// Assignment Code
 var generateBtn = document.querySelector("#generate");
 //var charsets = 'abcdefghijklmnopqrstuvwxqzABCDEFGHIJKLMNOPRSTUVWXYZ123456789!@#$%^&';
 //generateBtn.addEventListener("click", writePassword);

 
 // Write password to the #password input
function writePassword() {
  //charsets is a var for character to be choosen from.
  var charsets = 'abcdefghijklmnopqrstuvwxqzABCDEFGHIJKLMNOPRSTUVWXYZ123456789!@#$%^&';
  // setting size to charsets so the entire string can be accessed 
  var  size = charsets.length;
  var password = generatePassword();  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // running a for loop so charsets characters can be loop through until done 
  for (i = 0; i < charsets.length; i++) {
    generatePassword = generatePassword + charsets.length(Math.floor(Math.random() * size));
  
  }
  password();  
  
  //var password = generatePassword();  
  //var passwordText = document.querySelector("#password");


  //passwordText.value = password;

}



//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// pronpt for questions about password
var criteria = prompt("Password citeria includes length, upper, lower, numeric, and special characters.");
var length = prompt("Password length has to be 8 to 128 characters):","enter tag");
var upper = prompt("Do you want upper cases in your password?")
var lower = prompt("Do you want lower cases in your password?")
var numbers = prompt("Do you want numbers in your password?")
var specialCharacters = prompt("Do you want special characters in your password?")


/*ar legth = "";
var numbers = "";
var lower = "";
var upper = "";
var specialCharacters = "";

for (i = 0; i < length; i++) {
    length+=charsets(Math.floor(Math.random() *charsets.length));
    numbers+=charsets(Math.floor(Math.random() *charsers.length));
    lower+=charsets(Math.floor(Math.random() * charsets));
    upper+=charsets(Math.floor(Math.random() * charsets));
    specialCharacters+=charsets(Math.floor(Math.random() * charsets));*/











