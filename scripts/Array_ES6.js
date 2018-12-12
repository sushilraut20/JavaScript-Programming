/*
Select all the boxes and store that in an array.
*/


const boxes= document.querySelectorAll('.box'); // It returns 'Node List' and needs to convert it into an array.
const boxArray=Array.from(boxes);

/*
In ES5,
var boxArray= Array.prototype.slice.call(boxes);
*/

boxArray.forEach((box)=>{
box.style.backgroundColor='blue';
});


/*
For-Of loop ----> combination of for loop and forEach loop
We cant use continue or break inside map or forEach loop, but can in For-Of loop
*/

for (const box of boxArray){
  if(box.className.includes('blue')){
    continue;
  }
  else {
    box.textContent ="Color changed to blue";
  }

}
