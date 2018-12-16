/*
Suppose that you're working in a small town administration, and you're in charge of two town elements:
1. Parks
2. Streets
It's a very small town, so right now there are only 3 parks and 4 streets. All parks and streets have a name and a build year.
At an end-of-year meeting, your boss wants a final report with the following:
1. Tree density of each park in the town (forumla: number of trees/park area)
2. Average age of each town's park (forumla: sum of all ages/number of parks)
3. The name of the park that has more than 1000 trees
4. Total and average length of the town's streets
5. Size classification of all streets: tiny/small/normal/big/huge. If the size is unknown, the default is normal
All the report data should be printed to the console.

*/


class Town{
  constructor(name, buildYear){
      this.name=name;
      this.buildYear=buildYear;
  }

  calculateAge(){
    return (2018-this.buildYear);
  }

}


class Park extends Town{
  constructor(name, buildYear, noOfTrees, parkArea){
    super(name,buildYear);
    this.noOfTrees=noOfTrees;
    this.parkArea=parkArea;
  }

  calculateTreeDensity(){
    return this.noOfTrees/ this.parkArea;
  }

}


class Street extends Town{
  constructor(name, buildYear, length, size=3){
    super(name,buildYear);
    this.length=length;
    this.size=size;

  }

  classifyStreet(){
    const classification=new Map();
    classification.set(1,"tiny");
    classification.set(2,"small");
    classification.set(3,"normal");
    classification.set(4,"big");
    classification.set(5,"huge");

    console.log(`The street ${this.name} is ${classification.get(this.size)}`);
  }
}


console.log("-------------Parks Report--------------");

var park1=new Park("park1", 1960, 1250, 400);
var park2=new Park("park2", 1965, 1321, 200);
var park3=new Park("park3", 1970, 900, 350);

var parks=[park1, park2, park3];
var parksAge=0;
var moreThanThousandTrees=[]

var parksIterator=parks.map(park=>{
console.log(`${park.name} has a tree density of ${park.calculateTreeDensity()}`);
parksAge+=park.calculateAge();
if(park.noOfTrees>1000){
  moreThanThousandTrees.push(park.name);
}
});

console.log(`Average age of ${parks.length} parks is ${parksAge/parks.length}`);

for(const park of moreThanThousandTrees){
  console.log(`The park ${park} has more than 1000 trees`);
}


console.log("-------------Street Report--------------");

var street1=new Street("street1", 1980, 50);
var street2=new Street("street2", 1985, 10, 1);
var street3=new Street("street3", 1990, 1720, 5);
var street4=new Street("street4", 1985, 200, 4);

var streets=[street1, street2, street3, street4];
var streetlengths=0;

 var streetIterator=streets.map(street=>{
   streetlengths+=street.length;
   street.classifyStreet();
 })

 console.log(`Total length of ${streets.length} streets is ${streetlengths}`);
 console.log(`Average length of ${streets.length} streets is ${streetlengths/streets.length}`);
