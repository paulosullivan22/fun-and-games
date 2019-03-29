const fs = require('fs');

// fs.readFile('./input.txt', (err, data) => {
//   let singleEntry = data.toString().split('\n');
//   let newArr = singleEntry.map((value) => {
//     let singleValue = value.split('x');
//     console.log(singleValue);
//     let l = singleValue[0], w = singleValue[1], h = singleValue[2];
//     let value = 2*l*w + 2*w*h + 2*h*l + Math.min(l, w, h);
//   });
//   console.log(newArr);
// })

// const INPUT = fs.readfileSync('./input.txt', 'utf-8').split('\n');
// const result = INPUT.reduce((acc, _lwh) => {
//   const lwh = _lwh.split('x');
//   const length = lwh[0];
//   const width = lwh[1];
//   const height = lwh[2];
//
//   return acc
//     + (2 * length * width)
//     + (2 * width * height)
//     + (2 * height * length)
//     + Math.min(length * width, width * height, height * length);
// }, 0);
//
// console.log(result);

// const fs = require('fs');
const INPUT = fs.readFileSync('./input.txt', 'utf-8').split('\n');
const result = INPUT.reduce((total, _lwh) => {
  const lwh = _lwh.split('x');
  const length = lwh[0];
  const width = lwh[1];
  const height = lwh[2];

  return total
    + (2 * length * width)
    + (2 * width * height)
    + (2 * height * length)
    + Math.min(length * width, width * height, height * length);
}, 0);

console.log(result);
