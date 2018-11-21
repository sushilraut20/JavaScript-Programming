/*

Compare Mark and John's BMI using creating objects. Also create a function to calculate BMI and use that function in the object.

*/


var calculateBMI=function(mass, height){
  var bmi=mass/(height * height);
  return bmi;
}

var markDetails={
    firstName:"Mark",
    lastName:"Smith",
    massInKg:80,
    heightInMeter:1.8,
    bmi: function(){
      this.bmi=this.massInKg/(this.heightInMeter * this.heightInMeter);
      return this.bmi;
    }
}

var johnDetails={
    firstName:"John",
    lastName:"Wile",
    massInKg:70,
    heightInMeter:1.6,
    bmi: function(){
      this.bmi=this.massInKg/(this.heightInMeter * this.heightInMeter);
      return this.bmi;
    }
}

var markBMI=markDetails.bmi();
var johnBMI=johnDetails.bmi();

console.log(markDetails,johnDetails);

if(markBMI>johnBMI){
  console.log("Mark's BMI is greater than John's");
}
else if(markBMI<johnBMI){
  console.log("John's BMI is greater than Mark's");
}
else {
  console.log("Mark and John have same BMI");
}
