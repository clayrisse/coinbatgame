'use strict'



// Localizador del mensaje de array
// const pickedMessages = [0, 3, 32, 33, 39, 59, 70, 75, 79, 82] //55 is out

function fuckOff () {

  const section = document.querySelector(".fu-list");

    fetch(`https://www.foaas.com/operations/`)
      .then((response) => {
        // convertiremos la respuesta a un objeto legible,
        // porque los datos de la respuesta (response.body) están codificados
        // console.log(response);
        return response.json(); // response.json() es tambien una operacion asincrona
      })
      .then((data) => {
        console.log(data)
        // idnumber of the messages I personally selected to be shown
        const pickedMessages = [0, 3, 32, 33, 39, 59, 70, 75, 79, 82] //55 is out
        // I do a random operation to pick one of the 10 messages and look specifically for that one
        let i = Math.floor(Math.random()*10);
        const article = document.createElement('article');
        article.innerHTML = `<h1>${data[pickedMessages[i]].name}</h1>`;
        // `<a href="https://www.foaas.com${data[1].url}"> go to special message ;)</a>`;
        
        console.log(article)
        section.appendChild(article);
      })
      .catch((err) => {
        // `<a href="https://www.foaas.com${data[1].url}"> go to special message ;)</a>`;
      })
      
  
}

fuckOff ();

// async function getPokemonsAA () {
//   const section = document.querySelector(".fu-list");

//   for (let i = 0; i < 21; i++) {
//     try {
//       const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i + 1}`);
//       const data = await response.json();
  
//       const article = document.createElement('article');
//       article.innerHTML = `
//         <img src="${data.sprites.front_default}" alt="${data.name}"/>
//         <h3>${data.name}</h3>
//       `;
  
//       section.appendChild(article);
//     } catch (err) {
      
//     }
//   }
// }

// getPokemonsAA();