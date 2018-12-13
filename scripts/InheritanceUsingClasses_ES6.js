
class Person{
  constructor(firstName, lastName, yearOfBirth, job){
    this.firstName=firstName;
    this.lastName=lastName;
    this.yearOfBirth=yearOfBirth;
    this.job=job;
  }

  calculateAge(){
    this.age= 2018-this.yearOfBirth;
    return this.age;
  }

}

class Athlete extends Person{
  constructor(firstName, lastName, yearOfBirth, job, noOfOlympics, noOfMedals){
    super(firstName, lastName, yearOfBirth, job);
    this.noOfOlympics=noOfOlympics;
    this.noOfMedals=noOfMedals;
  }

  wonMedal(){
    this.noOfMedals++;
    return this.noOfMedals;
  }

}

const johnAthlete=new Athlete("John","Wile",1990,"athlete",5,10);
const age=johnAthlete.calculateAge();
console.log(age);
const noOfMedals=johnAthlete.wonMedal();
console.log(noOfMedals);
