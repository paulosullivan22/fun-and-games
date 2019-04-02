const fs = require('fs');

const INPUT = fs.readFileSync('./input.txt', 'utf-8');
const set = new Set(INPUT);
console.log(set);




// array.map
// starting at 0, if >; add
