'use strict'


const players = {
  johnny: { name: 'Johnny Cage', state: true, imgpath:'assets/img/p-johnny.jpg' },
  subzero: { name: 'Sub-Zero', state: true, imgpath:"assets/img/p-subzero.jpg" },
  sonya: { name: 'Sonya Blade', state: true, imgpath:"assets/img/p-sonya.jpg" },
  raiden: { name: 'Raiden', state: true, imgpath:"assets/img/p-raiden.jpg" },
  liu: { name: 'Liu Kang', state: true, imgpath:"assets/img/p-liu.jpg" },
  scorpio: { name: 'Scorpio', state: true, imgpath:"assets/img/p-scorpio.jpg" },
  kano: { name: 'Kano', state: true, imgpath:"assets/img/p-kano.jpg" },
  kitana: { name: 'Kitana', state: true, imgpath:"assets/img/p-kitana.jpg" },
}
// let winMessage1 = `Poin for ${play1}`
// let winMessage2 = `Poin for ${play2}`
// let flawlessVictoryMsg = "Flawless Victory" 


const urlParams = new URLSearchParams(window.location.search);
const winner = urlParams.get('winner');
const flawlessV = urlParams.get('flawlessV');



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
      // id number of the messages I personally selected to be shown
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
    }) 
}

fuckOff ();






function pickedPlayer2 (player2) {
  const urlParams = new URLSearchParams(window.location.search);
  const player1 = urlParams.get('player1');
  
  setTimeout( ()=> location.assign(`coinbat.html?player1=${player1}&player2=${player2}`), 500);
}