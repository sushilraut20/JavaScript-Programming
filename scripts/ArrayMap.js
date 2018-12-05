

let year=[1990, 1992, 1961, 1971]
let age=year.map((element, index, array) => {
  console.log(`The element at ${index} is ${element}`);
  console.log(array[index]);

  return 2018-element; //This return will store the (2018-element) value in age array
})

console.log(age);
