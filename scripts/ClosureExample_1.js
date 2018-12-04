
/*
Closure property:
"The inner function can access the variables and properties of outer function even after the outer function is returned".
This is because when outer function returns, its execution context gets removed from Execution stack but variable object still
remains in the Execution stack.

*/


function retirement(retirementAge){
  var str="years left until retirement";
  return function(yearOfBirth){
    console.log((retirementAge-(2018-yearOfBirth))+" "+str);
  }
}


var retirementUS=retirement(66);
/*
Here the retirement() function is returned, so it gets removed from Execution stack but variables 'retirementAge' and 'str'
are still there in the Execution stack. Hence they are accessible for the inner function also.
*/
var retirementIndia=retirement(58);
var retirementIceland=retirement(67);

retirementUS(1992);
/* For this inner function, 'retirementAge' and 'str' are variables outside of the function.
But still they are accessible due to Closure property of JavaScript.
*/
retirementIndia(1992);
retirementIceland(1992);
