'use strict';

class Validator {
    constructor() {
    //predetermin messages
    this.invalidEmailError = 'Introduce valid email';
    this.emailExistsError = 'This email is already register';
    this.passwordError = 'Introduce a 6 character or more, password';
    this.repeatPasswordError = 'The characters do not match';
    
    //obj whith "errors" that we are going to show the user
        this.errors = {
        invalidEmailError = this.invalidEmailError,
        passwordError = this.passwordError,
        repeatPasswordError = this.repeatPasswordError,

        } 


    }    
     // validate  email name
    validateValidEmail = (email) => {
        //if is valid, the function takes out the "error". if no, it'll show
        

        if (isValid) {
            delete this.errors.invalidEmailError; 
        } else {
            this.errors.invalidEmailError = this.invalidEmailError;
            
        }

    }

     //validate mail isn't taken
    emailIsValid = (email)=> {
        const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;

        const isValid = emailRegEx.test(email);
    }

     //validate password length
    validatePasswordRepeat = (password) => {

    }

     //validate if password y repeat-password match
    validatePasswordRepeat = (password) => {

    }
    
    getErrors () => {
        return this.errors
    }

    resetValidator = () => {

    }
    
}

const validator = new Validator();
 
