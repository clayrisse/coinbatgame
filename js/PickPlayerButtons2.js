'use strict'


window.addEventListener("load",()=>  {
    // button johnny cage
    const johnnyButton = document.querySelector('.btn-johnny');
    johnnyButton.addEventListener('click', () => pickedPlayer2("johnny"));  
    
    // button sonya blade
    const sonyaButton = document.querySelector('.btn-sonya');
    sonyaButton.addEventListener('click', () => pickedPlayer2("sonya"));  
    
    // button rayden
    const raidenButton = document.querySelector('.btn-raiden');
    raidenButton.addEventListener('click', () => pickedPlayer2("raiden"));  
    
    // button liu
    const liuButton = document.querySelector('.btn-liu');
    liuButton.addEventListener('click', () => pickedPlayer2("liu"));  
    
    // button scorpio
    const scorpioButton = document.querySelector('.btn-scorpio');
    scorpioButton.addEventListener('click', () => pickedPlayer2("scorpio"));  
    
    // button subzero
    const subzeroButton = document.querySelector('.btn-subzero');
    subzeroButton.addEventListener('click', () => pickedPlayer2("subzero"));  
    
    // button kano
    const kanoButton = document.querySelector('.btn-kano');
    kanoButton.addEventListener('click', () => pickedPlayer2("kano"));  

    // button kitana
    const kitanaButton = document.querySelector('.btn-kitana');
    kitanaButton.addEventListener('click', () => pickedPlayer2("kitana"));  
})
    



function pickedPlayer2 (player2) {
    const urlParams = new URLSearchParams(window.location.search);
    const player1 = urlParams.get('player1');
    
      setTimeout( ()=> location.assign(`coinbat.html?player1=${player1}&player2=${player2}`), 1000);
    

}
    