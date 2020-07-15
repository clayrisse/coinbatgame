'use strict'


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



const urlParams = new URLSearchParams(window.location.search);
const player1 = urlParams.get('player1');
const player2 = urlParams.get('player2');

