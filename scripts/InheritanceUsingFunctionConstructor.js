
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

console.log(John);
console.log(Matt);
console.log(George);
