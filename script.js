// Assignmen
var lowerArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

var upperArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

var numberArr = numbers[("0", "1", "2", "3", "4", "5", "6", "7", "8", "9")];

var specialArr = [
  "@",
  "%",
  "+",
  "/",
  "'",
  "!",
  "#",
  "$",
  "^",
  "?",
  ":",
  ",",
  ")",
  "(",
  "}",
  "{",
  "]",
  "[",
  "~",
  "-",
  "_",
  ".",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  // // running a for loop so charsets characters can be loop through until done
  // //for (i = 0; i < charsets; i++) {
  //   //password = password + charsets(Math.floor(Math.random() * size));

  // }
}

var generateBtn = document.querySelector("#generate");
//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
alert("criteria for password");

function getPwInput() {
  // pronpt for questions about password

  var length = parseInt(
    prompt("Password length has to be 8 to 128 characters):", "enter tag")
  );

  var upper = confirm("Do you want upper cases in your password?");
  var lower = confirm("Do you want lower cases in your password?");
  var numbers = confirm("Do you want numbers in your password?");
  var specialCharacters = confirm(
    "Do you want special characters in your password?"
  );

  var pwInput = {
    length: length,
    hasUpper: upper,
    hasLower: lower,
    hasNum: numbers,
    hasSpecs: specialCharacters,


  };
  return pwInput
}

