/*
This is the one way to implement inheritance in javascript. The other way is using Function constructor
*/


var personProto={
  calculateAge: function(){
    this.calculateAge=2018-this.yearOfBirth;
  }
}

var john=Object.create(personProto);
john.name="John";
john.yearOfBirth= 1990;
john.job="Engineer";

john.calculateAge();

/*
We can use Javascript console to track the prototype chain

Console output:

-john
-{name: "John", yearOfBirth: 1990, job: "Engineer", calculateAge: 28}
calculateAge: 28
job: "Engineer"
name: "John"
yearOfBirth: 1990
__proto__:
calculateAge: ƒ ()
__proto__:
constructor: ƒ Object()
hasOwnProperty: ƒ hasOwnProperty()
isPrototypeOf: ƒ isPrototypeOf()
propertyIsEnumerable: ƒ propertyIsEnumerable()
toLocaleString: ƒ toLocaleString()
toString: ƒ toString()
valueOf: ƒ valueOf()
__defineGetter__: ƒ __defineGetter__()
__defineSetter__: ƒ __defineSetter__()
__lookupGetter__: ƒ __lookupGetter__()
__lookupSetter__: ƒ __lookupSetter__()
get __proto__: ƒ __proto__()
set __proto__: ƒ __proto__()

*/
