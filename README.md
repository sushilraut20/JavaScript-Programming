# JavaScript-Programming

For DOM-Pig-Game: 

GAME RULES:
- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- A player looses his ENTIRE score when he rolls two 6 in a row. After that, it's the next player's turn.
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- Add an input field to the HTML where players can set the winning score, so that they can change the predefined score of 100.
- The first player to reach Winning points on GLOBAL score wins the game


--------------------------------------------------------------------------------------------------------------
scripts folder consists of short programs implementing important concepts in JavaScript eg. prototype, closures, call, apply, bind etc.

scripts/FunQuizeGame.js --------->

Game specification:

1. Build a function constructor called Question to describe a question. A question should include:
  a) question itself
  b) the answers from which the player can choose the correct one (choose an adequate data structure here, array, object, etc.)
  c) correct answer
2. Create a couple of questions using the constructor
3. Store them all inside an array
4. Select one random question and log it on the console, together with the possible answers (each question should have a number).
5. Use the 'prompt' function to ask the user for the correct answer. The user should input the number of the correct answer such as you displayed it on Task 4.
6. Check if the answer is correct and print to the console whether the answer is correct ot not.
7. After you display the result, display the next random question, so that the game never ends.
8. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
9. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Use closures for this).
10. Display the score in the console. Use yet another method for this.


