// Assignment Code
var generateBtn = document.querySelector("#generate");

//prompts and confirms user of its choices
var passLength = prompt("How many characters do you want in your password?");
var needSpecial = confirm("Do you want special characters in your password?");
var needNum = confirm("Do you want numbers in your password?");
var needLower = confirm("Do you want lowercase characters in your password?");
var needUpper = confirm("Do you wanr uppercase characters in your password?");

///these variables contains password categories
var lowerCase = "abcdefghijklmnopqrstuvwxyz".split("");
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var numbers = "0123456789".split("");
var specialCase = "!@#$%^&*()_+[]{}|/~`".split("");
//this function collects user arguments
function generatePassword(
  numberCharacter,
  lowerPass,
  upperPass,
  numberPass,
  spcecialPass
) {
  //an empty array created to collect the password data 
  var passwordType = [];
  var passwordResult = [];

  if (
    //checks if numbercharacter is zero, none or not a number
    numberCharacter === "" ||
    numberCharacter === null ||
    isNaN(numberCharacter)
  ) {
    //if noy alert user with this message
    alert("Please enter length for the password");
    return location.reload();
  }
  if (
    //if user declines all the confirms then this message displays
    lowerPass === false &&
    upperPass === false &&
    numberPass === false &&
    spcecialPass === false
  ) {
    alert("Please select atleast one character type for the password!");
    return location.reload();
  }
  //make sure that the user choses password length from 8 to 128
  if (parseInt(numberCharacter) >= 8 && parseInt(numberCharacter) <= 128) {
    //does user want special characters
    if (spcecialPass === true) {

      //add special character to the password array
      for (var i = 0; i < specialCase.length; i++) {
        passwordType.push(specialCase[i]);
      }
    }
    //does user want numbers in password
    if (numberPass === true) {

      //if yes, then it add number in the password array
      for (var i = 0; i < numbers.length; i++) {
        passwordType.push(numbers[i]);
      }
    }

    //does user want lowercase
    if (lowerPass === true) {

      //if yes, then add 1 lowercase character to empty password array
      for (var i = 0; i < lowerCase.length; i++) {
        passwordType.push(lowerCase[i]);
      }
    }
    //does user want uppercase
    if (upperPass === true) {

      //if yes, then add 1 uppercase character to empty password array
      for (var i = 0; i < upperCase.length; i++) {
        passwordType.push(upperCase[i]);
      }
    }


    //loop the function till it reaches the password lenth specified by the used
    for (var i = 0; i < passLength; i++) {
      var randomNum = Math.floor(Math.random() * passwordType.length);
      passwordResult.push(passwordType[randomNum]);
    }
  } else {
    //if not then alert user to select between 8 to 128 characters
    alert(
      "Please select minimum 8 to maximum 128 characters for your password"
    );
    return location.reload();
  }
  //joins the characters created by the above function and makes a password
  return passwordResult.join("");
}
//adds the generated password to the html
function writePassword() {
  var password = generatePassword(
    passLength,
    needSpecial,
    needNum,
    needUpper,
    needLower
  );
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
