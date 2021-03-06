// Assignment Code
var generateBtn = document.querySelector("#generate");
// These are the characters that will be used to make the random password.
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];

// This function will get the users information about what characters they would like in there password.
function confirmPasswordCharacters() {
    // Here we are asking the user about password length and letting them know how long and short it can be.
    var passwordLength = prompt('How many characters would you like you password to be?')
    passwordLength = parseInt(passwordLength);

    if (isNaN(passwordLength)  === true) {
        alert('Password length must be provided as a number');
        return;
    }

    if (passwordLength < 8) {
        alert('Password length must be at least 8 characters');
        return;
    }

    if (passwordLength > 128) {
        alert('Password length must be at less than 129 characters');
        return;
    }
    // Here the user will confirm what all characters they want in there password.
    var hasSpecialCharacters = confirm('Click Ok to confirm special characters');
    var hasNumericalCharacters = confirm('Click Ok to confirm numerical characters');
    var haslowerCasedCharacters = confirm('Click Ok to confirm lower cased characters');
    var hasupperCasedCharacters = confirm('Click Ok to confirm upper cased characters');
    // Here we let the user know they have to pick one character type.
    if (hasSpecialCharacters === false && hasNumericalCharacters === false && haslowerCasedCharacters === false && hasupperCasedCharacters === false) {
        alert('You must selected at least one character type');
        return;
    }
    
    var passwordOptions = {
        passwordLength,
        hasSpecialCharacters,
        haslowerCasedCharacters,
        hasupperCasedCharacters,
        hasNumericalCharacters,
    };
     
    return passwordOptions;
}    
    // Created a function to loop through characters and get a random.
    function getRandomElement(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        var randomElement = arr[randomIndex];
        return randomElement;
    }
    // Here we created a function that builds a  random password by using all the characters types the user confirmed.
    function generatePassword() {
      var passwordOptions = confirmPasswordCharacters();
      
    
      var finalPassword = [];

      var allPossibleCharacters = [];

      var guaranteedCharacters = [];
      // Here we are adding characters to the empty arrs 
      if (passwordOptions.hasSpecialCharacters === true) {
        allPossibleCharacters = allPossibleCharacters.concat(specialCharacters);
        guaranteedCharacters = guaranteedCharacters.concat(getRandomElement(specialCharacters));
      }
      
      if (passwordOptions.hasNumericalCharacters === true) {
        allPossibleCharacters = allPossibleCharacters.concat(NumericalCharacters);
        guaranteedCharacters = guaranteedCharacters.concat(getRandomElement(NumericalCharacters));
     }
      
      if (passwordOptions.hasupperCasedCharacters === true) {
        allPossibleCharacters = allPossibleCharacters.concat(upperCasedCharacters);
        guaranteedCharacters = guaranteedCharacters.concat(getRandomElement(upperCasedCharacters));
     }
     
     if (passwordOptions.haslowerCasedCharacters === true) {
        allPossibleCharacters = allPossibleCharacters.concat(lowerCasedCharacters);
        guaranteedCharacters = guaranteedCharacters.concat(getRandomElement(lowerCasedCharacters));
    }
      
     for (var i = 0; i < passwordOptions.passwordLength; i++) {
        var possibleCharacter = getRandomElement(allPossibleCharacters);
        finalPassword = finalPassword.concat(possibleCharacter);
     }

        for (var i = 0; i < guaranteedCharacters.length; i++) {
          finalPassword[i] = guaranteedCharacters[i];
            
            return finalPassword.join('');
        }
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  console.log(password);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
