
//Parent object
var Person=function(firstName, lastName, yearOfBirth, job){
  this.firstName=firstName;
  this.lastName=lastName;
  this.yearOfBirth=yearOfBirth;
  this.job=job;
}

Person.prototype.calculateAge= function(){
  this.calculateAge= 2018-this.yearOfBirth;
  console.log(this.calculateAge);
}

//sub-Object
var Athlete= function(firstName, lastName, yearOfBirth, job, noOfOlympics, noOfMedals){
  Person.call(this,firstName, lastName, yearOfBirth, job);
  this.noOfOlympics=noOfOlympics;
  this.noOfMedals=noOfMedals;
}

//Linking prototype of Athlete with that of Person
Athlete.prototype=Object.create(Person.prototype);


//Creating Prototype method for Athlete
Athlete.prototype.wonGame=function(){
  this.noOfMedals++;
  console.log(this.noOfMedals);
}

var johnAthlete=new Athlete("John","Wile",1990,"athlete",5,10);
johnAthlete.calculateAge();
johnAthlete.wonGame();
