/*
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
7. After you display the result, remove that question from array and display the next random question present in array, so that the game never ends till all questions get removed and array gets empty or user gives 'exit' as input.
8. Be careful: after Task 8, the game literally never ends. So include the option to quit the game if the user writes 'exit' instead of the answer. In this case, DON'T call the function from task 8.
9. Track the user's score to make the game more fun! So each time an answer is correct, add 1 point to the score (Use closures for this).
10. Display the score in the console. Use yet another method for this.

*/

// Defining a 'Question' function constructor which can be used to create 3 different questions

var Question=function(question, answers, correctAnswer){

  this.question=question,
  this.answers=answers,
  this.correctAnswer=correctAnswer
}

// Adding 3 different functions in 'Question' constructor using prototype.

Question.prototype.displayQuestion= function(){

  console.log(this.question);

  var answersKeys=Object.keys(this.answers);
  var answerValues=Object.values(this.answers)

  for(var i=0; i<answersKeys.length; i++){
    console.log(answersKeys[i]+":"+answerValues[i]);
  }
}

Question.prototype.checkAnswer= function(userAnswer, getScore){

  if(isNaN(userAnswer)){
    console.log("Please choose valid input !!!");
    return;
  }

  var score;

  if(userAnswer===this.correctAnswer){
    console.log("Correct Answer :-) !!!");
    score= getScore(true);

  }else {
    console.log("Wrong Answer :-(");
    score= getScore(false);
  }

  this.displayScore(score);

}

Question.prototype.displayScore= function(score){

  console.log("Your score is: ", score);
  console.log("---------------------------------");

}

//----********************************************************************----

//Creating 3 questions from 'Question' function constructor

var question_1=new Question("Who is the instructor of this course ?",
 {0: "John",
  1: "Mike",
  2: "Jonas"
 },
  2);

var question_2=new Question("Which is the most popular programming language for data science ?",
  {0: "Python",
   1: "Java",
   2: "C++"
   },
   0);

var question_3=new Question("Which city is in Arizona ?",
 {0: "San Diego",
  1: "San Jose",
  2: "Phoenix"
 },
  2);

//----********************************************************************----

/*
Here, we need a global variable to track the score of a player. At places where required, update that score.
We can induce abstraction by using Closure property of Java Script.
i.e. Include all the global variables (here sc) in outer function and the operations on it (here sc++) in inner function

Here the global variable sc is available throughout the program, since data object is still there in Execution Context of Execution Stack
even through the outer function returned.
*/

function Score(){
    var sc=0;
    return function(correct){
      if (correct) {
        sc++;
      }
      return sc;
    }
}

var getScore=Score();


//----********************************************************************----


var questionsArray=[question_1, question_2, question_3];

displayQuestion();

function displayQuestion(){
  var questionIndex= Math.floor(Math.random()*questionsArray.length);

  questionsArray[questionIndex].displayQuestion();

  var userAnswer= prompt("Please enter your answer: ");

  if (userAnswer!='exit') {
    questionsArray[questionIndex].checkAnswer(parseInt(userAnswer),getScore);

    questionsArray.splice(questionIndex,1);

    if (questionsArray.length===0) {
        return;
    }
    else {
        displayQuestion();
    }

  }


}
