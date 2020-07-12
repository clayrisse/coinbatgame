'use strict';

class Signup {
    constructor () {
        this.nameInput = document.querySelector("#name");
        this.emailInput = document.querySelector("#email");
        this.passwordInput = document.querySelector("#password");
        this.repeatPasswordInput = document.querySelector("#repeat-password");
        
        this.buttonInput = document.querySelector("#signup-button");
        this.errorsWrapper = document.querySelector(".message-container");
    }

//mang changes of input 'email'
handleEmailInput = (event) => {
    const email = event.target.value;

    console.log('email', email)

    //remember:validate input email text
}

//mang changes of input  'password'
handlePasswordInput = (event) => {
    const password = event.target.value;

    console.log('password', password)
    
    //remember: validate input password text
}

//mang changes of input  'repeat-password'
handleRepeatPassword = (event) => {
    const repeatPassword = event.target.value;

    console.log('repeatPassword', repeatPassword)
    
    //remember:validate input repeatPassword text
}

//manage data sending 'submit'
saveData = (event) => {
    //we do this to prevent the linked to "a database" cause we dont have one for this project
    // we cancel it so it doen no load
    event.preventDefault(); 
    //takes the value of each input
    const name = this.nameInput.value;
    const email = this.emailInput.value;
    const password = this.passwordInput.value;
    const repeatPassword = this.repeatPasswordInput.value;
    
    //the "new User" references the User.js file we cereated to separate functions 
    const newUser = new User(name, email, password);  
    // WE ARE GOING TO MOVE THIS FUNCTION TO "User.js" SO WE SEPARATE AND KEEP IT CLEAN 
    // function createUser(name, email, password) {
    //     const userObj = {
    //         name,  //this also means: "name: name;"
    //         email,
    //         password,
    //     }
    //     return userObj;
    // }

    
    
     //save new user in our "database" (cause our database will be simulated;)
     db.saveNewUser(newUser);



    //empty the form
    this.nameInput.value = ""; 
    this.emailInput.value = "";
    this.passwordInput.value = ""; 
    this.repeatPasswordInput.value = "";




}

//register functions for each input/field
    addListener = () => {
        //listens to text changes when we type
        this.emailInput.addEventListener("input", this.handleEmailInput);
        this.passwordInput.addEventListener("input", this.handlePasswordInput);
        this.repeatPasswordInput.addEventListener("input", this.handleRepeatPassword)

        this.buttonInput.addEventListener("click", this.saveData)
    }
}

//create a new instance for the Signup (object)
const signup = new Signup();

window.addEventListener("load", signup.addListens);


