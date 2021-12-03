const { input } = require('./input');

function depthAndPosition(input) {
  let pos = 0;
  let depth = 0;
  for (let i = 0; i < input.length; i++) {
    switch (input[i].movement) {
      case 'forward':
        pos += input[i].amount;
        break;
      case 'up':
        depth -= input[i].amount;
        break;
      case 'down':
        depth += input[i].amount;
        break;
    }
  }
  return depth * pos;
}

console.log(depthAndPosition(input));