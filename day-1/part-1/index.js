const { input } = require('./input');

function increasingDepth(arr) {
  let counter = 0;
  for (let i = 0; i < arr.length; i++) {
    let left = arr[i];
    let right = arr[i + 1];
    if(right - left > -1) {
      counter++;
    }
  } 
  return counter;
}


console.log(increasingDepth(input));

// If the difference between right and left is positive add 1 to the counter