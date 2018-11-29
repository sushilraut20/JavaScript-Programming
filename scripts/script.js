/*

var bills=[124, 48, 268];
var counter;
var tip=[];
var tipAmount;



for(counter=0; counter< bills.length; counter++){
  if(bills[counter]<=50){
    tipAmount=bills[counter]*0.2;
    tip.push(tipAmount);
    bills[counter]+=tipAmount;
  }
  else if (bills[counter]>50 && bills[counter]<=200) {
    tipAmount=bills[counter]*0.15;
    tip.push(tipAmount);
    bills[counter]+=tipAmount;
  }
  else if (bills[counter]>200) {
    tipAmount=bills[counter]*0.1;
    tip.push(tipAmount);
    bills[counter]+=tipAmount;
  }
}


document.write("Bills array: "+bills+"<br>");
document.write("Tip array: "+ tip);



var sushilDetails={
    firstName:"Sushil",
    lastName:"Raut",
    birthYear:1992,
  // age:function(){
    //  this.age=(new Date()).getFullYear() - this.birthYear;
    //},
    age: (new Date()).getFullYear() - this.birthYear,
    college:"SDSU",
    course:"CS",
    subjects:["Algorithms","Machine Learning","Scientific Computing"]
}

//sushilDetails.age();
console.log(sushilDetails);

*/

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

markDetails.bmi();
johnDetails.bmi();

console.log(markDetails,johnDetails);

var markBMI=markDetails.bmi;
var johnBMI=johnDetails.bmi;

if(markBMI>johnBMI){
  console.log("Mark's BMI is greater than John's");
}
else if(markBMI<johnBMI){
  console.log("John's BMI is greater than Mark's");
}
else {
  console.log("Mark and John have same BMI");
}
