// Assignment Code
var generateBtn = document.querySelector("#generate");

// Generate a random password 
function generatePassword() {
  let password = '';
  let charset = '';

// Uppercase Prompt
if (confirm("Would you like to include uppercase letters?")) {
  charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
}
// Lowerercase Prompt
if (confirm("Would you like to include lowercase letters?")) {
  charset += 'abcdefghijklmnopqrstuvwxyz';
}
// Numbers Prompt
if (confirm("Would you like to include numbers?")) {
  charset += '0123456789';
}
// Special Characters Prompt
if (confirm("Would you like to include special charcters?")) {
  charset += '!@#$%^&*()_-+=?<>';
}

// Password length between 8 - 128 characters in length
let passwordLength = prompt("How long would you like your random password? (Type a number bewteen 8 and 128):");
passwordLength = parseInt(passwordLength);

// Validate password length
if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
  alert("Please enter a valid password length between 8 and 128.");
  return "";
}

//Loop
for (let i = 0; i < passwordLength; i++) {
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
