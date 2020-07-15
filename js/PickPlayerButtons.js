'use strict';

pickPlayer1 page
  //*shows menu of players to pick PLAYER1  and with 'click' go to next page directly

pickPlayer2 page
  //*shows menu of players to pick PLAYER2  and with 'click' go to FIGHT page directly

coinbat page (coin rule=> the winner out 3)
    //*shows the 2 players and a "coin"
    // pasar en la url los parametros player 1 y player 2

  1st click on coin(btn) ==> does js random()odd/even and 
 
    //resets page with a graphic added to "health level" of the looser 
    // contador de wins
  2nd click on coin()
      //if the looser from 1st clicks wins,           
          //resets page with a graphic added to "health level" of the looser (now with both player with 1 hit)
      //if the winner from 1st clicks wins, ====> execute 3rd click 
         
  3rd click on coin()
          //shows message on whose the winner (3seg last)
          //go to FUCK OFF page and show a fucking message.




window.addEventListener("load",()=>  {
// button johnny cage
const johnnyButton = document.querySelector('.btn-johnny');
johnnyButton.addEventListener('click', () => pickedPlayer1("johnny"));  

// button sonya blade
const sonyaButton = document.querySelector('.btn-sonya');
sonyaButton.addEventListener('click', () => pickedPlayer1("sonya"));  

// button rayden
const raidenButton = document.querySelector('.btn-raiden');
raidenButton.addEventListener('click', () => pickedPlayer1("raiden"));  

// button liu
const liuButton = document.querySelector('.btn-liu');
liuButton.addEventListener('click', () => pickedPlayer1("liu"));  

// button scorpio
const scorpioButton = document.querySelector('.btn-scorpio');
scorpioButton.addEventListener('click', () => pickedPlayer1("scorpio"));  

// button subzero
const subzeroButton = document.querySelector('.btn-subzero');
subzeroButton.addEventListener('click', () => pickedPlayer1("subzero"));  

// button kano
const kanoButton = document.querySelector('.btn-kano');
kanoButton.addEventListener('click', () => pickedPlayer1("kano")); 

// button kitana
const kitanaButton = document.querySelector('.btn-kitana');
kitanaButton.addEventListener('click', () => pickedPlayer2("kitana"));  
})
})




pickedPlayer1 (player1) {
    redirect = () => {
    setTimeout( ()=> location.assign(`player2.html?player1=${player1}`), 1000);
    }
}




















// // make img in to buttons for choosing player
// // pass function pickPlayer1 and pickPlayer2 to choose player

// // button johnny cage
// const johnnyButton = document.querySelector('.btn-johnny');
// johnnyButton.addEventListener('click', () => //pickedPlayer1("johnny"));  ?

// // button sonya blade
// const sonyaButton = document.querySelector('.btn-sonya');
// sonyaButton.addEventListener('click', () => //pickedPlayer1("sonya"));  ?

// // button rayden
// const raydenButton = document.querySelector('.btn-rayden');
// raydenButton.addEventListener('click', () => //pickedPlayer1("rayden"));  ?

// // button liu
// const liuButton = document.querySelector('.btn-liu');
// liuButton.addEventListener('click', () => //pickedPlayer1("liu"));  ?

// // button scorpio
// const scorpioButton = document.querySelector('.btn-scorpio');
// scorpioButton.addEventListener('click', () => //pickedPlayer1("scorpio"));  ?

// // button subzero
// const subzeroButton = document.querySelector('.btn-subzero');
// subzeroButton.addEventListener('click', () => //pickedPlayer1("subzero"));  ?

// // button kano
// const kanoButton = document.querySelector('.btn-kano');
// kanoButton.addEventListener('click', () => //pickedPlayer1("kano"));  ?



// // btn-jonhy
// // btn-sonya
// // btn-rayden
// // btn-liu
// // btn-scorpio
// // btn-kano
// // btn-subzero