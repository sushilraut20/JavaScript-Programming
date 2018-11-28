/*
Bind is used to create functions with preset arguments.
It return a function.

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


var jean={
  name:"Jean",
  age:35,
  job:"Doctor"
}

var johnFormal= john.presentation.bind(john,"formal");
johnFormal("Morning");
johnFormal("Evening");
johnFormal("Afternoon");

var jeanCasual=john.presentation.bind(jean,"casual");
jeanCasual("Morning");
jeanCasual("Evening");
jeanCasual("Afternoon");
