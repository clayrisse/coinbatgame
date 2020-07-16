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
  raiden: { name: 'Raiden', state: true, imgpath:"assets/img/p-raiden.jpg" },
  liu: { name: 'Liu Kang', state: true, imgpath:"assets/img/p-liu.jpg" },
  Scorpio: { name: 'Scorpio', state: true, imgpath:"assets/img/p-scorpio.jpg" },
  kano: { name: 'Kano', state: true, imgpath:"assets/img/p-kano.jpg" },
  kitana: { name: 'Kitana', state: true, imgpath:"assets/img/p-kitana.jpg" },
}
// let winMessage1 = `Poin for ${play1}`
// let winMessage2 = `Poin for ${play2}`
// let flawlessVictoryMsg = "Flawless Victory" 



// function renderSetUp() {
//   renderImageP1();
//   renderImageP2();
//   renderNameP1();
//   renderNameP2();
// }

function renderPage(player1, player2) {
  let oldMainGone =  document.querySelector('main')
  document.body.removeChild(oldMainGone);
  const main = document.createElement('main');
 console.log(players)
  main.innerHTML = `          
  <section id="playboard" class="board">           
  <!-- ------------------player 1--------------------------- -->     
  <div id="player1" class="player"> 
      <div id="p1avatar" class="playeravatar1">
        <img id="battle-player1-img" class="playerimg" src="${players[player1].imgpath}">
      </div>
      <div id="battle-player1-stats" class="playerstats1">
          <div id="p1ref" class="playerref">
          </div>
          <!-- -------- -->
          <div id="battle-player1-wincount" class="wincount">
          </div>     
          <!-- -------- -->             
          <div id="battle-player1-name" class="statsname">
              <h3>${players[player1].name}</h3>
          </div>
      </div>
  </div>
  <!-- ----------F U C K I N G    C O I N ------------------ -->
  <div id="fliplingspace" class="fliplingspace"><!-- fliping coin -->
      <figure id="battle-coin-img" class="coinimg">
          <img id="thecoin" src="assets/img/logocoin-mortalcoinbat.png">
      </figure>
  </div>
  <!-- ------------------player 2--------------------------- -->
  <div id="player2" class="player reverse"> <!-- player 2  recordar el reverse-->
      <div id="p2avatar" class="playeravatar2">
          <img id="battle-player2-img" class="playerimg" src="${players[player2].imgpath}">
      </div>
      <div id="battle-player2-name" class="playerstats2 reversestats">
          <div id="p2name" class="statsname">
              <h3>${players[player2].name}</h3>
          </div>
          <!-- -------- -->
          <div id="battle-player2-wincount" class="wincount">
          </div>
          <!-- -------- -->
          <div id="battle-player2-stats" class="playerref">
          </div>
      </div>
  </div>
</section>
<div>
  <img class="battleplayer-logo" src="assets/img/logoletters-mortalcoinbat.png" alt="player">  
</div>
  `;


 
  document.body.appendChild(main);

}


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
    console.log(`flip no${counter} random es ${i} / gana p2 winCount2:${winPlayer2}`);
    renderHit1()
    winnerCheck()
  } else {
    winPlayer1 += 1
    console.log(`flip no${counter} random es ${i} / gana p1 winCount1:${winPlayer1}`);
    renderHit2()
    winnerCheck()
  }
}

function renderHit1() {
  let lifeBar2 =  document.querySelector('#battle-player2-wincount'); 
  lifeBar2.style.width="33%"//pq esta mostrando esto

  switch (winPlayer1) {
    case 1:
    lifeBar2.style.width="33%";
    break;
    case 2:
    lifeBar2.style.width="66%";
    break;
    case 3:
    lifeBar2.style.width="95%";
    break;
  } 
}

function renderHit2() {
  let lifeBar1 =  document.querySelector('#battle-player1-wincount'); 
  lifeBar1.style.width="33%"//pq esta mostrando esto
  
  switch (winPlayer2) {
    case 1:
    lifeBar1.style.width="33%";
    break;
    case 2:
    lifeBar1.style.width="66%";
    break;
    case 3:
    lifeBar1.style.width="95%";
    break;
  } 
}


function winnerCheck() {
  if (winPlayer1 != 3 && winPlayer2 != 3) {
      console.log(`nadie lleva 3, vuelve a lanzar`)
      
    // ----------------------------clean win player 1 
  } else if (winPlayer1 == 3 && winPlayer2 == 0 ) {
    console.log(`FlawlessVictory P2 winCount:${winPlayer2}`);
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderFlawlessVictory()
    // renderVictoryPlayer1()

    // ----------------------------clean win player 2
  } else if (winPlayer2 == 3 && winPlayer1 == 0) {
    console.log(`FlawlessVictory P1 winCount:${winPlayer1}`);
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderFlawlessVictory()
    // renderVictoryPlayer2() 

    // ----------------------------dirty win player 1
  } else if (winPlayer1 == 3) {
    console.log("gana 1");
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


function messageWinHitPlayer1() {
 console.log( winMessage1) //dislay this
}

function messageWinHitPlayer2(){
  // winMessage2 //dislay this
}

function renderFlawlessVictory() {

}



const urlParams = new URLSearchParams(window.location.search);
const player1 = urlParams.get('player1');
const player2 = urlParams.get('player2');



 
window.addEventListener('load', () => {
  renderPage(player1, player2);
  const coinFlipObj = document.querySelector('#thecoin');
  coinFlipObj.addEventListener('click', coinFlip);


});