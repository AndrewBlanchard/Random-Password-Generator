// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random password 
function generatePassword() {
  let password = '';
  let charset = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+=<>?';

// Password lenght between 8 - 128 charcaters in lenght
// This function helps us generate a random number between two numbers. 
//function random(min, max) { return Math.floor(Math.random() * (max - min + 1)) + min; }
let passwordLenght = Math.floor(Math.random() * (128 - 8 + 1)) + 8;
//Loop
  for (let i = 0; i < passwordLenght; i++) {
    let randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  return password;
}

// Write password to the #password input
function createPassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", createPassword);
