// Assignment Code
var generateBtn = document.querySelector("#generate");

var specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", ")", "(", "}", "{", "]", "[", "~", "-", "_", "."];
var lowerCasedCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCasedCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var NumericalCharacters = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

function validateandgetPasswordOptions() {
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

    var hasSpecialCharacters = confirm('Click Ok to confirm special characters');
    var hasNumericalCharacters = confirm('Click Ok to confirm numerical characters');
    var haslowerCasedCharacters = confirm('Click Ok to confirm lower cased characters');
    var hasupperCasedCharacters = confirm('Click Ok to confirm upper cased characters');

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

    function getRandomElement(arr) {
        var randomIndex = Math.floor(Math.random() * arr.length);
        var randomElement = arr[randomIndex];
        return randomElement;
    }

    function generatePassword() {
      var passwordOptions = validateandgetPasswordOptions();
      
      var userPassword = [];

      var allPossibleCharacters = [];

      var guaranteedCharacters = [];
      
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
      console.log('starting loop');
     for (var i = 0; i < passwordOptions.passwordlength; i++) {
        var possibleCharacters = getRandomElement(allPossibleCharacters);
        userPassword = userPassword.concat(possibleCharacters);
     }
        for (var i = 0; i < guaranteedCharacters.length; i++) {
          userPassword[i] = guaranteedCharacters[i];
            
            console.log(userPassword);
            return userPassword.join('');
            

        }
    }

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
