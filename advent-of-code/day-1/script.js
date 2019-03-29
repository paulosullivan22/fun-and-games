const fs = require('fs');

function counter(input) {
  let counter = 0;
  input.map((i) => {
    if (i === "\(") {
      counter++;
    } else if (i ==="\)") {
      counter--;
    }
  })
  console.log(counter);
}

function firstChar(input) {
  let upFloor = [], downFloor = [], basementCounter = [];
  input.map((i) => {
       if (i === "\(") {
      upFloor.push(i);
    } else if (i ==="\)") {
      downFloor.push(i);
      if (downFloor.length > upFloor.length) {
        basementCounter.push(downFloor.length + upFloor.length);
      }
    }
  })
  console.log(basementCounter[0]);
}

fs.readFile('./input.txt', (err, data) => {
  if (err) {
    console.log('error');
  }
  const str = data.toString().split('');
  counter(str);
  firstChar(str);
  }
)
