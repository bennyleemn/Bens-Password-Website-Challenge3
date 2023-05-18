    // Object Name
    aPasswordGenerator = {

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
        upperLetters: ["A", "B", "C", "D", "E", "F", "G", "H","I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
        lowerLetters: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "u", "v", "w", "x", "y", "z"],
        numbers: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
        symbols: ["~", "`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "[", "}", "]", "|", ":", ";", "'", "<", ",", ">", ".", "?", "/", "\\"],
        possibleCharacters: [],
        charactersArePossible: false,
        password: "",
        length: [""],
        
        writePassword: function() {
            bHasUpper = false
            bHasLower = false
            bHasSymbols = false
            bHasNumbers = false

            while (this.passwordLengthInvalid)  {  
                this.passwordLength = prompt("How many characters will your password be? Choose a value from 8 to 128")
                
                if ((this.passwordLength <= 128) && (this.passwordLength >=8)){
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
                if ((this.bUpperCase) || (this.bLowerCase) || (this.bNumeric) || (this.bSymbols)){
                    this.passwordPossible = true
                    break
                }
                alert("Must Contain at least 1 character selection!")
            }

            while (!this.charactersArePossible) {
                //  run first, then eval  
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
                    if ((this.bHasUpper) || (this.bHasLower) || (this.bHasNumbers) || (this.bHasSymbols)){
                        this.charactersArePossible = true
                    }
                }

            }
            console.log("Generated Password", this.password);
            document.getElementById("password").value=this.password
        }     
    };
    
    writePassword();

