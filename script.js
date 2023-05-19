// var generateBtn = document.querySelector("#generate"); <--**commented out because i didn't like the chrome debugger error**

// Object Name
aPasswordGenerator = {
// Set variables used within Object on click of "Generate Password Button"
    bUpperCase: false,
    bLowerCase: false,
    bSymbols: false,
    bNumeric: false,
    bHasUpper: false,
    bHasLower: false,
    bHasSymbols: false,
    bHasNumbers: false,
    passwordLength: 7,
    passwordLengthInvalid: true,
    passwordPossible: false,
    upperLetters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
    lowerLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"],
    numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
    symbols: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "\\"],
    possibleCharacters: [],
    charactersArePossible: false,
    password: "",
    length: [""],

    // Function to prompt user responses for possible input variables such as length, upper, lower, symbol and num chars where it is initialized to false.
    // validate at least 1 is selected, validate length is within param set,
    // alerts user if any length or 1 char selection min is not met,
    writePassword: function () {
        bHasUpper = false
        bHasLower = false
        bHasSymbols = false
        bHasNumbers = false

        while (this.passwordLengthInvalid) {
            this.passwordLength = prompt("How many characters will your password be? Choose a value from 8 to 128")

            if ((this.passwordLength <= 128) && (this.passwordLength >= 8)) {
                this.passwordLengthInvalid = false
                break
            }
            alert("Password length must be greater than 7 characters and less than 129 characters!")
        }
        while (!this.passwordPossible) {
            this.bUpperCase = confirm("Do you want uppercase letters?")
            this.bLowerCase = confirm("Do you want lower case letters?")
            this.bNumeric = confirm("Do you want numbers?")
            this.bSymbols = confirm("Do you want symbols?")

            if (this.bUpperCase) {
                // var randomVariable = this.possibleCharacters.concat(this.upperLetters); <-- **commented out because i didn't like the chrome debugger error**
                this.possibleCharacters = this.possibleCharacters.concat(this.upperLetters);
            }
            if (this.bLowerCase) {
                this.possibleCharacters = this.possibleCharacters.concat(this.lowerLetters);
            }
            if (this.bSymbols) {
                this.possibleCharacters = this.possibleCharacters.concat(this.symbols);
            }
            if (this.bNumeric) {
                this.possibleCharacters = this.possibleCharacters.concat(this.numbers);
            }
            if ((this.bUpperCase) || (this.bLowerCase) || (this.bNumeric) || (this.bSymbols)) {
                this.passwordPossible = true
                break
            }
            alert("Must Contain at least 1 character selection!")
        }

        while (!this.charactersArePossible) {
            // Loop through and generate a password with the specified length using a random index, validate for length and selected char properties (whatever user hit 'ok'  
            // and 'cancel'for on UI). If the password index value is missing a selected char from randomized set the loop runs until the all true ifs are satisfied 
            // and the final condition of 'True' is met where the desired character selection(s) are true.
            for (var i = 0; i < this.passwordLength; i++) {
                var randomIndex = Math.floor(Math.random() * this.possibleCharacters.length);
                this.password += this.possibleCharacters[randomIndex];
            }
            for (var i = 0; i < this.password.length; i++) {
                this.password[i]

                if (this.symbols.includes(this.password[i])) {
                    this.bHasSymbols = true;
                }
                if (this.numbers.includes(this.password[i])) {
                    this.bHasNumbers = true;
                }
                if (this.upperLetters.includes(this.password[i])) {
                    this.bHasUpper = true;
                }
                if (this.lowerLetters.includes(this.password[i])) {
                    this.bHasLower = true;
                }
                if ((this.bHasUpper) || (this.bHasLower) || (this.bHasNumbers) || (this.bHasSymbols)) {
                    this.charactersArePossible = true
                }
            }

        }
        // log randomized, generated password to Console and set to password textarea in html - added a "hotfix" within textarea alerting user to refresh page to run again
        console.log("Generated Password", this.password);
        document.getElementById("password").value = this.password + "    ¯\_(ツ)_/¯    Refresh Page to Begin Anew!";
        
    }
}
window;
// add click event - link it to a button.
// generateBtn.addEventListener("click", aPasswordGenerator.writePassword); <-- **commented out because i didn't like the chrome debugger error**
// adding the bits of code for the generate button caused UI artifacts (questions asked multiple times) and errors and did not reset the page as intended.