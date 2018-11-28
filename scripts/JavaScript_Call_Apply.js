/*

One object can use functions from other object by using call property of JavaScript.
Below, object jean wants to access the presentation method of object john.

Syntax:
object.method.call(objectOnWhichMethodIsToBeCalled, parameters)

*/

var john={
  name:"John",
  age:26,
  job:"Engineer",
  presentation: function(style,timeOfDay){
    if(style==="formal"){
      console.log("Hi all, good "+timeOfDay+" I am "+this.name+". I am "+this.age+" years old. "+" I am "+this.job+". Have a great "+ timeOfDay);
    }
    else if (style==="casual") {
      console.log("Hi all, Wassssup !!! "+" Good "+timeOfDay+" to all. I am "+this.name+". I am "+this.age+" years old. "+" I am "+this.job+". Have a great "+ timeOfDay);
    }

  }
}

john.presentation("casual","evening");

var jean={
  name:"Jean",
  age:35,
  job:"Doctor"
}

john.presentation.call(jean,"formal","morning");

/*
apply is similar to that of call, only difference is, apply accepts an array of parameters.


john.presentation.apply(jean,["formal","morning"]);

*/
