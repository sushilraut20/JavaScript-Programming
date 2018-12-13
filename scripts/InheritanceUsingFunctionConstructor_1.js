/*
This is the one way to implement inheritance in javascript. The other way is using object.create
*/

//Here the 1st letter of the variable is capital, which indicates its Function constructor
var Person=function(firstName, lastName, yearOfBirth, job){
  this.firstName=firstName;
  this.lastName=lastName;
  this.yearOfBirth=yearOfBirth;
  this.job=job;
}

Person.prototype.calculateAge= function(){
  this.calculateAge= 2018-this.yearOfBirth;
}

Person.prototype.city="San Diego";

var John=new Person("John","Lee", 1990,"Engineer")
var Matt=new Person("Matt","Riggins", 1971,"Doctor")
var George=new Person("George","Woofer", 1968,"Painter")

John.calculateAge();
Matt.calculateAge();
George.calculateAge();

/*
We can use Javascript console to track the prototype chain

Console Output:

-John
-Person {firstName: "John", lastName: "Lee", yearOfBirth: 1990, job: "Engineer", calculateAge: 28}
calculateAge: 28
firstName: "John"
job: "Engineer"
lastName: "Lee"
yearOfBirth: 1990
__proto__:
calculateAge: ƒ ()
city: "San Diego"
constructor: ƒ (firstName, lastName, yearOfBirth, job)
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
