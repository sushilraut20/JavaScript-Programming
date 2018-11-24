/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var globalScore, roundScore, currentPlayer, gamePlaying;
init();


document.querySelector(".btn-roll").addEventListener("click",function(){

  if(gamePlaying){
    //1. Random Number
    var dice= Math.floor(Math.random() * 6 ) + 1;

    //2. Display the result
    var diceDOM=document.querySelector(".dice");
    diceDOM.style.display='block';
    diceDOM.src="pictures/dice-" + dice + ".png";

    //3. Update the round score if rolled number is NOT 1
    if(dice !== 1){
      roundScore+=dice;
      document.querySelector("#current-"+currentPlayer).textContent=roundScore;

    }
    else{
      nextPlayer();

    }
  }

});


document.querySelector(".btn-hold").addEventListener("click",function(){
if (gamePlaying) {
  globalScore[currentPlayer]+=roundScore;
  document.querySelector("#score-"+currentPlayer).textContent=globalScore[currentPlayer];

  if(globalScore[currentPlayer]>=100){
    document.querySelector("#name-"+currentPlayer).textContent="Winner!!!";
    document.querySelector(".dice").style.display="none";
    document.querySelector(".player-"+currentPlayer+"-panel").classList.add("winner");
    document.querySelector(".player-"+currentPlayer+"-panel").classList.remove("active");

    gamePlaying=false;

  }
  else {
    nextPlayer();

  }
}

});

function nextPlayer(){

  document.querySelector("#current-"+currentPlayer).textContent=0;
  document.querySelector('.dice').style.display="none";

  currentPlayer === 0 ? currentPlayer = 1 : currentPlayer = 0;
  roundScore=0;

  document.querySelector(".player-0-panel").classList.toggle("active");
  document.querySelector(".player-1-panel").classList.toggle("active");

};

document.querySelector(".btn-new").addEventListener("click",function(){
  init();

});

function init(){

  globalScore=[0,0];
  roundScore=0;
  currentPlayer=0;
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
