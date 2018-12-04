// Design a simple game where if random number is greater or equal to 5 then player wins
// This can be achieved in 2 ways

function play(){
  var number=Math.floor(Math.random()*10);
  if(number>=5){
    console.log("Player wins");
  }
  else {
    console.log("Player looses");
  }
}

play();

//------------------------****************--------------------------

/*
There are 2 ways by which we can declare functions:
1) function functionName(){
}
2) var functionName= function(){

}

Now if we declare function as
function(){

}

interpreter will throw an error since it is a statement(declaration), but it doesn't have any function name.
Hence put above structure in (), which converts it into an expression and add () afterwards to be called automatically.

Hence,
(above structue)();

We dont need to call below function explicitly. It gets invoked automatically. Hence the name Immediately Invoked.

*/

(
  function(){
    var number=Math.floor(Math.random()*10);
    if(number>=5){
      console.log("Player wins");
    }
    else {
      console.log("Player looses");
    }
  }
)();


//IIFE in ES6
/*
1) Use let and const instead of variable
2) Include all the code in {} instead of ()(); in as in ES5
3) Since let and const are block scoped, they would not be accessible out side of {}, hence data privacy is achieved
*/

{
  let a=5;
  const b=6;
}

//The following line would give an error
console.log(a+b);
