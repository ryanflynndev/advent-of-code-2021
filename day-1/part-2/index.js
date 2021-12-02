const { input } = require('./input');

const ex = [
  199,  
  200,  
  208,
  210,  
  200,
  207,
  240,
  269,  
  260,   
  263,
];

function increasingDepthTwo(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length - 3; i++) {
    let a = arr[i];
    let b = arr[i + 1];
    let c = arr[i + 2];
    let d = arr[i + 3];
  
    let left = a + b + c;
    let right = b + c + d;
  
    if (right > left) {
      counter++;
    }
  }
  
  return counter;

}

console.log(increasingDepthTwo(ex));