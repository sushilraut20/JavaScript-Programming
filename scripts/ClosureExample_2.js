/*
Closure property:
"The inner function can access the variables and properties of outer function even after the outer function is returned".
This is because when outer function returns, its execution context gets removed from Execution stack but variable object still
remains in the Execution stack.

*/
function interview(job){
  return function(name){
    if(job==="designer"){
      console.log(name+","+" Which languages have you used in UX design?");
    }
    else if (job==="teacher") {
      console.log(name+","+" What programming languages you have taught?");
    }
    else {
      console.log(name+","+"What do you do?");
    }
  }
}


var interviewDesigner=interview("designer");
/*
Here the interview() function is returned, so it gets removed from Execution stack but variables 'job'
is still there in the Execution stack. Hence they are accessible for the inner function also.
*/
var interviewTeacher=interview("teacher");
var interviewAnonymous=interview();

interviewDesigner("John");
/* For this inner function, 'job' is a variable outside of the function.
But still it is accessible due to Closure property of JavaScript.
*/
interviewTeacher("Mike");
interviewAnonymous("Jed");
