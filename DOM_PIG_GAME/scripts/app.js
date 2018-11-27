/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
- The first player to reach Winning points on GLOBAL score wins the game

*/

var globalScore, roundScore, currentPlayer, gamePlaying, lastDiceValue;
init();


document.querySelector(".btn-roll").addEventListener("click",function(){

  if(gamePlaying){
    //1. Generate Random Number
    var dice= Math.floor(Math.random() * 6 ) + 1;

    //2. Display the dice picture
    var diceDOM=document.querySelector(".dice");
    diceDOM.style.display='block';
    diceDOM.src="pictures/dice-" + dice + ".png";

    /*
    3. Update the round score if rolled number is NOT 1 else pass the control to next player
     Update the global score to 0, if last value and current value are both 6 and pass the control to next player
    */

    if(dice === 1){
      nextPlayer();
    }
    else if (dice===6 && lastDiceValue===6) {
      globalScore[currentPlayer]=0;
      document.querySelector("#score-"+currentPlayer).textContent=globalScore[currentPlayer];
      nextPlayer();
    }
    else{
      roundScore+=dice;
      document.querySelector("#current-"+currentPlayer).textContent=roundScore;
      lastDiceValue=dice;
    }
  }

});


document.querySelector(".btn-hold").addEventListener("click",function(){
if (gamePlaying) {
  //Add global score by current score
  globalScore[currentPlayer]+=roundScore;
  document.querySelector("#score-"+currentPlayer).textContent=globalScore[currentPlayer];

  var setWinningValue=document.querySelector("#setValue").value;
  var winningScore;
  if(setWinningValue){
    winningScore=setWinningValue;
  }
  else {
    winningScore=100;
  }

  if(globalScore[currentPlayer]>=winningScore){
    document.querySelector("#name-"+currentPlayer).textContent="Winner!!!";
    document.querySelector(".dice").style.display="none";
    document.querySelector(".player-"+currentPlayer+"-panel").classList.add("winner"); // Changing the CSS by adding a class
    document.querySelector(".player-"+currentPlayer+"-panel").classList.remove("active");

    gamePlaying=false;

  }
  else {
    nextPlayer();

  }
}

});

function nextPlayer(){

  //Make current score of current player 0
  document.querySelector("#current-"+currentPlayer).textContent=0;

  //Remove dice picture
  document.querySelector('.dice').style.display="none";

  //Change Current player
  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
  roundScore=0;

  document.querySelector(".player-0-panel").classList.toggle("active");// toggle will add class if not present and remove if present
  document.querySelector(".player-1-panel").classList.toggle("active");

};

document.querySelector(".btn-new").addEventListener("click",function(){
  init();

});


function init(){

  globalScore=[0,0];
  roundScore=0;
  currentPlayer=0;
  lastDiceValue=0;
  gamePlaying=true;

  document.querySelector('.dice').style.display="none";

  document.querySelector('#score-0').textContent = 0;
  document.querySelector('#score-1').textContent = 0;
  document.querySelector('#current-0').textContent = 0;
  document.querySelector('#current-1').textContent = 0;

  document.querySelector("#name-0").textContent = "Player 1";
  document.querySelector("#name-1").textContent = "Player 2";

  document.querySelector(".player-0-panel").classList.remove("winner");
  document.querySelector(".player-1-panel").classList.remove("winner");

  document.querySelector(".player-0-panel").classList.remove("active");
  document.querySelector(".player-1-panel").classList.remove("active");

  document.querySelector(".player-0-panel").classList.add("active");

};
