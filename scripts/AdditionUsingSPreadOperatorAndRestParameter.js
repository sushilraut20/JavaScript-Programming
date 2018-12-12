
function Add(...test){ //Rest Parameter
  let sum=0;
  test.forEach((el)=>{
    sum+=el;
  })
  return sum;
}

let test1=[1,2];
let test2=[1,2,3];
let test3=[1,2,3,4];
let test4=[1,2,3,4,5];
let test5=[1,2,3,4,5,6];
let test6=[1,2,3,4,5,6,7];

let result1=Add(...test1);//Spread Opearator
let result2=Add(...test2);
let result3=Add(...test3);
let result4=Add(...test4);
let result5=Add(...test5);
let result6=Add(...test6);

console.log(result1);
console.log(result2);
console.log(result3);
console.log(result4);
console.log(result5);
console.log(result6);
