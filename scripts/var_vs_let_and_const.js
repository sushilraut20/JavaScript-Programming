/*
1) The value of let variable can be changed while that oc const variable cant be changed
2) var is function scoped while let and const are block scoped

*/


//ES5/ES2014
//Since var is function scoped, following code would work without any error
function driversLicenseES5(testPassed){

    if(testPassed){
      var name= "Mike";
      var yearOfBirth= 1992;
    }

    console.log("The candidate "+name+" with year of birth "+yearOfBirth+" is eligible to drive a car");

}

driversLicenseES5(true);


//ES6/ES2015
//Since let and const are block scoped, following code would give an error
function driversLicenseES6(testPassed){

    if(testPassed){
      let name= "Mike";
      const yearOfBirth= 1992;
    }

    console.log("The candidate "+name+" with year of birth "+yearOfBirth+" is eligible to drive a car");

}

driversLicenseES6(true);


//ES6/ES2015
//Since let variable is declared outside of the if block, its accessible in function block now.
//Also, const variable cant be just declared, the value should be assigned to it while declaration, Hence its moved outside of if block
//The following code runs without any error
function driversLicenseES6_modified(testPassed){

  let name;
  const yearOfBirth= 1992;

    if(testPassed){
      name= "Mike";
    }

    console.log("The candidate "+name+" with year of birth "+yearOfBirth+" is eligible to drive a car");

}

driversLicenseES6_modified(true);
