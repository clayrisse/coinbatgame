
'use strict';

function getPokemons () {

  const section = document.querySelector(".pokemon-list");


  for (let i = 0; i < 21; i++) {
    // cada pokemon lleva su propio indice
    // tenemos que añadir el indice al fin de URL de la API
    fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`)
      .then((response) => {
        // convertiremos la respuesta a un objeto legible,
        // porque los datos de la respuesta (response.body) están codificados

        return response.json(); // response.json() es tambien una operacion asincrona
      })
      .then((data) => {
        
        const article = document.createElement('article');
        article.innerHTML = `
          <img src="${data.sprites.front_default}" alt="${data.name}"/>
          <h3>${data.name}</h3>
        `;

        section.appendChild(article);
      })
      .catch((err) => {})
  }
}


async function getPokemonsAA () {
  const section = document.querySelector(".pokemon-list");

  for (let i = 0; i < 21; i++) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
      const data = await response.json();
  
      const article = document.createElement('article');
      article.innerHTML = `
        <img src="${data.sprites.front_default}" alt="${data.name}"/>
        <h3>${data.name}</h3>
      `;
  
      section.appendChild(article);
    } catch (err) {
      
    }
  }
}

getPokemonsAA();





























// 'use strict';


// class Signup {
//     constructor () {
//         this.nameInput = document.querySelector("#name");
//         this.emailInput = document.querySelector("#email");
//         this.passwordInput = document.querySelector("#password");
//         this.repeatPasswordInput = document.querySelector("#repeat-password");
        


//         this.buttonInput = document.querySelector("#signup-button");
//         this.errorsWrapper = document.querySelector(".message-container");
    
//     }


//     //mang changes of input 'email'
//     handleEmailInput = (event) => {
//         const email = event.target.value;
      
//         //remember:validate input email text
//         validator.validateValidEmail(email);

//         const errors = validator.getErrors();

//         //if name of email is valid
//         if (!errors.invalidEmailError) {
//             //check if email is unique
//             validator.validateUniqueEmail(email);
//         }

//         this.setErrorMessages();
    
//     }

//     //mang changes of input  'password'
//     handlePasswordInput = (event) => {
//         const password = event.target.value;
//         const passwordRepeat = this.repeatPasswordInput.value;

        
//         //remember: validate input password text
//         validator.validatePassword(password);
//         validator.validatePasswordRepeat(password, passwordRepeat);

//         this.setErrorMessages();
//     }

//     //manage changes of input  'repeat-password'
//     handleRepeatPasswordInput = (event) => {
//         const passwordRepeat = event.target.value;
//         const password = this.passwordInput.value;
        
//         //remember:validate input Password tex
//         //remember:validate input repeatPassword text
//         validator.validatePassword(password)
//         validator.validatePasswordRepeat(password, passwordRepeat);

//         this.setErrorMessages();
//     }

//     //manage data sending 'submit'
//     saveData = (event) => {
//         //we do this to prevent the linked to "a database" cause we dont have one for this project// we cancel it so it doen no load
//         event.preventDefault(); 
//         //takes the value of each input
//         const name = this.nameInput.value;
//         const email = this.emailInput.value;
//         const password = this.passwordInput.value;
//         const repeatPassword = this.repeatPasswordInput.value;       
//         //the "new User" references the User.js file we cereated to separate functions 
//         const newUser = new User(name, email, password);  
//         // WE ARE GOING TO MOVE THIS FUNCTION TO "User.js" SO WE SEPARATE AND KEEP IT CLEAN 
//         // function createUser(name, email, password) {
//         //     const userObj = {
//         //         name,  //this also means: "name: name;"
//         //         email,
//         //         password,
//         //     }
//         //     return userObj;
//         // }
//         //save new user in our "database" (cause our database will be simulated;)
//         db.saveNewUser(newUser);
//         //empty the form
//         this.nameInput.value = ""; 
//         this.emailInput.value = "";
//         this.passwordInput.value = ""; 
//         this.repeatPasswordInput.value = "";
        
//         this.showSuccessMessage();
//         this.removeMessages();
//     }
//     //register functions for each input/field
//     addListeners = () => {
//             //listens to text changes when we type
//             this.emailInput.addEventListener("input", this.handleEmailInput);
//             this.passwordInput.addEventListener("input", this.handlePasswordInput);
//             this.repeatPasswordInput.addEventListener("input", this.handleRepeatPasswordInput);

//             this.buttonInput.addEventListener("click", this.saveData)
//     }


//     showSuccessMessage = () => {
//         // show errors so they dont add up
//         this.errorsWrapper.innerHTML = "";
    
//         const errorsObj = validator.getErrors();
//        // convert  object in an array of string
//         const errorsStringsArr = Object.values(errorsObj);
    
//         if (errorsStringsArr.length > 1) {
//           return;
//         }
    
//         const successMessageP = document.createElement('p');
//         successMessageP.innerHTML = "La cuenta ha sido creada con exito";
    
//         this.errorsWrapper.appendChild(successMessageP);
    
//     }

//     removeMessages = () => {
//         setTimeout( () => {
//             this.errorsWrapper.innerHTML = "";
//         }, 2000)
//     }

    
//     setErrorMessages = () => {
//         //empties all errors so they dont add
//         this.errorsWrapper.innerHTML = "";

//         const errorsObj = validator.getErrors();

//         //conver object to array of strings
//         const errorsStringsArr = Object.values(errorsObj);

//         errorsStringsArr.forEach ( (errorStr) => {
//             const errorMessageP = document.createElement ('p');  
//             errorMessageP.innerHTML = errorStr;

//             this.errorsWrapper.appendChild(errorMessageP);
//         })

//     }
// }

// //create a new instance for the Signup (object)
// const signup = new Signup();

// window.addEventListener("load", signup.addListeners);


