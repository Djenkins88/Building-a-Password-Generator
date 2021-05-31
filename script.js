/* Assignmen
var generateBtn = document.querySelector("#generate");


var lowerArr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numberArr = [("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")];
var specialArr = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

  
 
function getPwInput() {
  // prompt and confirms for questions about password

  var length = parseInt(
    prompt("Password length has to be 8 to 128 characters")
  );

  if (getPwInput < 8 ) {
      alert("Password must be at least 8 characters and no longer than 128");
      }
      else if(getPwInput > 8 ); {

      }

      var upper = confirm("Do you want upper cases in your password?");
      var lower = confirm("Do you want lower cases in your password?");
      var numbers = confirm("Do you want numbers in your password?");
      var specialCharacters = confirm("Do you want special characters in your password?");
  
  if (!shouldIncludeLowercase && !shouldIncludeUppercase && !shouldIncludeNumeric && !shouldIncludeSpecialCharacters) {
    alert("Your password must contain at least one special, numeric, lowercase, or uppercase character");
    return;
  }

  var pwInput = {
    length: length,
    hasUpper: upper,
    hasLower: lower,
    hasNum: numbers,
    hasSpecialCharacters: specialCharacters,
  };

  return pwInput
}

function generatePassword() {
  var passwordChoices = getPwInput();
  var possibleCombo = [];
  var finalPassword = "";
}

if (passwordChoices.upper) {
  for (var i of numbers)
    possibleCombo.push(i);
}
if (passwordChoices.lower) {
  for (var i of lowerCase)
    possibleCombo.push(i);
}
if (passwordChoices.numbers) {
  for (var i of upperCase)
    possibleCombo.push(i);
}
if (passwordChoices.specialCharacters) {
  for (var i of special)
    possibleCombo.push(i);

  }

    
  console.log(possibleCombo);


  for (var i = 0; i < passwordChoices.length; i++) {
    finalPassword += possibleCombo[Math.floor(Math.random() * possibleCombo.length)];
    
  }
  console.log(finalPassword);

  return finalPassword;
}




// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}


  //Add event listener to generate button
generateBtn.addEventListener("click", writePassword); {
  var numberArr = numberArr;
}*/