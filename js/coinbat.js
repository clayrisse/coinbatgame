'use strict'


// pickPlayer1 page
//   //*shows menu of players to pick PLAYER1  and with 'click' go to next page directly

// pickPlayer2 page
//   //*shows menu of players to pick PLAYER2  and with 'click' go to FIGHT page directly

// coinbat page (coin rule=> the winner out 3)
//     //*shows the 2 players avatar, "life" count, name and a "coin",  -----> CSS
//     // pasar en la url los parametros player 1 y player 2

//   1st click on coin(btn) ==> does js random()odd/even and 
 
//     //resets page with a graphic added to "health level" of the looser 
//     // contador de wins
//   2nd click on coin()
//       //if the looser from 1st clicks wins,           
//           //resets page with a graphic added to "health level" of the looser (now with both player with 1 hit)
//       //if the winner from 1st clicks wins, ====> execute 3rd click 
         
//   3rd click on coin()
//           //shows message on whose the winner (3seg last)
//           //go to FUCK OFF page and show a fucking message.


const players = {
  johnny: { name: 'Johnny Cage', state: true, imgpath:'assets/img/p-johnny.jpg' },
  subzero: { name: 'Sub-Zero', state: true, imgpath:"assets/img/p-subzero.jpg" },
  sonya: { name: 'Sonya Blade', state: true, imgpath:"assets/img/p-sonya.jpg" },
  Raiden: { name: 'Raiden', state: true, imgpath:"assets/img/p-raiden.jpg" },
  liu: { name: 'Liu Kang', state: true, imgpath:"assets/img/p-liu.jpg" },
  Scorpio: { name: 'Scorpio', state: true, imgpath:"assets/img/p-scorpio.jpg" },
  kano: { name: 'Kano', state: true, imgpath:"assets/img/p-kano.jpg" },
  kitana: { name: 'Kitana', state: true, imgpath:"assets/img/p-kitana.jpg" },
}
// let winMessage1 = `Poin for ${play1}`
// let winMessage2 = `Poin for ${play2}`
// let flawlessVictoryMsg = "Flawless Victory" 





// //for display
// function searchRenderInfoPlayer1() {
//   <!--buscar foto en index.html con el id #sonya <img>
//   meter la foto en el <figure> id="battle-player1-img" de coinbat.html
//   quitar clases y id que tenga -->
//   <!--buscar "nombre" en index.html con el id #sonya <h3>
//   meter "nombre" en el  <div id="battle-player1-name"> de coinbat.html-->

//   e.g.
//   function renderMushrooms() {
//     // Iteration 1: set the visibility of `<section class="mushroom">`
//     document.querySelectorAll('.mushroom').forEach(oneMushroom => {
//       if (state.mushrooms) {
//         oneMushroom.style.visibility = 'visible';
//       } else {
//         oneMushroom.style.visibility = 'hidden';
//       }
//     });
//   }
// }

//for display
function searchRenderInfoPlayer1() {}

function searchRenderInfoPlayer2() {}





let winPlayer1 = 0;
let winPlayer2 = 0;
let counter = 0

function coinFlip() {
  // console.log("flip flip")
  let i = Math.floor(Math.random()*10);
 
  counter += 1
  // console.log(`flip no${counter} random es ${i}`)
  
  if (i % 2 === 0){ 
    winPlayer2 += 1
    console.log(`flip no${counter} random es ${i} / gana p 2 winCount2:${winPlayer2}`)
    // messageWinHitPlayer2()// SHOW message P2 Wins(i dont know how!) messageWinHitPlayer1()
    // renderHit2()// add to graphic "health" bar one "hit"
    winnerCheck()
  } else {
    winPlayer1 += 1
    console.log(`flip no${counter} random es ${i} / gana p 1 winCount1:${winPlayer1}`)
    // messageWinHitPlayer1()// SHOW message P2 Wins(i dont know how!) messageWinHitPlayer1()
    // renderHit1()// add to graphic "health" bar one "hit"
    winnerCheck()
  }
}
// }  
function winnerCheck() {
  if (winPlayer1 != 3 && winPlayer2 != 3) {
      console.log(`nadie lleva 2 y aca deberia parar para ejecutar otro click`)
      
    // ----------------------------clean win player 1 
  } else if (winPlayer1 == 3 && winPlayer2 == 0 ) {
    console.log(`FlawlessVictory P2 winCount:${winPlayer2}`)
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderFlawlessVictory()
    // renderVictoryPlayer1()

    // ----------------------------clean win player 2
  } else if (winPlayer2 == 3 && winPlayer1 == 0) {
    console.log(`FlawlessVictory P1 winCount:${winPlayer1}`)
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderFlawlessVictory()
    // renderVictoryPlayer2() 

    // ----------------------------dirty win player 1
  } else if (winPlayer1 == 3) {
    console.log("gana 1")
    coinFlipObj.removeEventListener('click', coinFlip);
    //removeenetlistener
    // renderVictoryPlayer1()       

    // ----------------------------dirty win player 2
  } else if (winPlayer2 == 3) {
    console.log("gana 2")
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderVictoryPlayer2()
     
  } 
} 


// cuando llegue 3 agregat un boton que haga clear del event listener
removeEventListener

function messageWinHitPlayer1() {
 console.log( winMessage1) //dislay this
}

function messageWinHitPlayer2(){
  // winMessage2 //dislay this
}

function renderHit1() {

}

function renderHit2() {
  
}

function renderFlawlessVictory() {

}



function renderWin1() {
//   // Iteration 1: set the visibility of `<section class="mushroom">`
//   document.querySelectorAll('.battle-player1-wincount').forEach(player1Hit => {
//     if (players./*player*/.state) {  //chequear si es asi
//       player1Hit.style.visibility = 'visible';
//     } else {
//       player1Hit.style.visibility = 'hidden';
//     }
//   });
}

const urlParams = new URLSearchParams(window.location.search);
const player1 = urlParams.get('player1');
const player2 = urlParams.get('player2');



  const coinFlipObj = document.querySelector('#battle-player1-img');
  coinFlipObj.addEventListener('click', coinFlip);


  // coinFlipObj.removeEventListener('click', () => coinFlip());
  
//   'use strict';

//     clickTarget.removeEventListener('click',
//         makeBackgroundYellow,
//         false
//     );
//     clickTarget.addEventListener('click',
//     makeBackgroundYellow,
//     false
// );