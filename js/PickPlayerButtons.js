'use strict';

// button sonya blade
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
kitanaButton.addEventListener('click', () => pickedPlayer1("kitana"));  


function pickedPlayer1 (player1) {
      console.log(player1);
  setTimeout( ()=> location.assign(`player2.html?player1=${player1}`), 500);
}
