// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

// *****************************************************

// Goals: 
// Use above starter code to:
    // Confirm whether to include uppercase, lowercase, symbols or numbers.
        // Declare what are acceptable variables (alpha, num, sym)
    // Validate for all inputs
    // Generate Password
    // Check it meets criteria
    // Display generated value to textbox
    // Write password to the #password Input

    // **WhileTrueDO (uncomment to see code)**
    // this.Condition = true
    // while(true) {
    //     do
    //     if (conditionmet){
    //     this.condition = false
    //     }
    // }

    // small b in front of variables (vars) = boolean
// *****************************************************
function_aPasswordGenerator = function(variable) {
    console.log("Enter something")
    return
}
    aPasswordGenerator = {
    
        bUpperCase: false,
        bLowerCase: false,
        bSymbols: false,
        bNumeric: false,
        bHasUpper: false,
        bHasLower: false,
        bHasSymbols: false,
        bHasNumbers: false,
        passwordLength: 8,
        letters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", 'q", "r", "s", "u", "v", "w", "x", "y", "z"],
        numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        symbols: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "\\"],
        possibleCharacters: "",

    writePassword: function() {
        // Add a while loop here to ensure a number is between 8 and 128
        this.passwordLength = prompt("How many characters will your password be? Choose a value from 8 to 128")
            if ((passwordLength <= 128) && (passwordLength >=8))
        // Needs to handle edge of under 8 characters and over 128
        // Add a while loop here to retake asnwers if not possible
        this.bUpperCase = confirm("Do you want uppercase letters?")
        this.bLowerCase = confirm("Do you want lower case letters?")
        this.bNumeric = confirm("Do you want numbers?")
        this.bSymbols = confirm("Do you want symbols?")
        // One character type MUST BE SELECTED
        if ((this.bUpperCase) || (this.bLowerCase) || (this.bNumeric) || (this.bSymbols)){
        console.log("One is true!")
        }
        if (this.bUpperCase || this.bLowerCase) {
            this.possibleCharacters += this.letters
        }
        if (this.bSymbols) {
            this.possibleCharacters += this.symbols
        }
        if (this.bNumeric) {
            this.possibleCharacters += this.numbers
        }
        this.possibleCharacters.replace(",", "")
        console.log(this.possibleCharacters)
    }
        
    

}

// aPasswordGenerator.()