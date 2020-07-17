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

//----------------no borrar esto nunca!
let coinFlipObj;

const urlParams = new URLSearchParams(window.location.search);
const player1 = urlParams.get('player1');
const player2 = urlParams.get('player2');
//------------------------------------



function renderPage(player1, player2) {
  let oldMainGone =  document.querySelector('main')
  document.body.removeChild(oldMainGone);
  const main = document.createElement('main');
//  console.log(players)
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
  
  if (i % 2 === 0){ 
    winPlayer2 += 1
    console.log(`flip no${counter} random es ${i} / gana p2 winCount2:${winPlayer2}`);
    renderHit2()
    winnerCheck()
  } else {
    winPlayer1 += 1
    console.log(`flip no${counter} random es ${i} / gana p1 winCount1:${winPlayer1}`);
    renderHit1()
    winnerCheck()
  }
}

function renderHit1() {
  let lifeBar2 =  document.querySelector('#battle-player2-wincount'); 

  switch (winPlayer1) {
    case 1:
    lifeBar2.style.width="66%";
    break;
    case 2:
    lifeBar2.style.width="33%";
    break;
    case 3:
    lifeBar2.style.width="1%";
    break;
  } 
}

function renderHit2() {
  let lifeBar1 =  document.querySelector('#battle-player1-wincount'); 
  
  switch (winPlayer2) {
    case 1:
    lifeBar1.style.width="66%";
    break;
    case 2:
    lifeBar1.style.width="33%";
    break;
    case 3:
    lifeBar1.style.width="1%";
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
    // renderVictoryPlayer1()
    setTimeout( ()=> location.assign(`fumessage.html?loser=${player1}&flawlessV=${true}`), 1000);

    // ----------------------------clean win player 2
  } else if (winPlayer2 == 3 && winPlayer1 == 0) {
    console.log(`FlawlessVictory P1 winCount:${winPlayer1}`);
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderVictoryPlayer2() 
    setTimeout( ()=> location.assign(`fumessage.html?loser=${player2}&flawlessV=${true}`), 1000);

    // ----------------------------dirty win player 1
  } else if (winPlayer1 == 3) {
    console.log("gana 1");
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderVictoryPlayer1()       

    setTimeout( ()=> location.assign(`fumessage.html?loser=${player1}&flawlessV=${false}`), 1000);

    // ----------------------------dirty win player 2
  } else if (winPlayer2 == 3) {
    console.log("gana 2")
    coinFlipObj.removeEventListener('click', coinFlip);
    // renderVictoryPlayer2()   
    setTimeout( ()=> location.assign(`fumessage.html?loser=${player2}&flawlessV=${false}`), 1000);
  } 
} 


function messageWinHitPlayer1() {
  //salto a pagina mensaje
 console.log(winMessage1, winPlayer2)
  if (winPlayer2 == 0){
  renderFlawlessVictory//hacer codigo
  } 
  //render 
}





 
window.addEventListener('load', () => {
  renderPage(player1, player2);
  coinFlipObj = document.querySelector('#thecoin');
  coinFlipObj.addEventListener('click', coinFlip);

});