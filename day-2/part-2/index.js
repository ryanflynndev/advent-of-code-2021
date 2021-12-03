const { input } = require('./input');

function depthPositionAndAim(input) {
  let pos = 0;
  let depth = 0;
  let aim = 0;
  for (let i = 0; i < input.length; i++) {
    switch (input[i].movement) {
      case 'forward':
        pos += input[i].amount;
        depth += input[i].amount * aim;
        break;
      case 'up':
        aim -= input[i].amount;
        break;
      case 'down':
        aim += input[i].amount;
        break;
    }
  }
  return depth * pos;
}

console.log(depthPositionAndAim(input));