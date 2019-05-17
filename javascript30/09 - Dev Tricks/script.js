const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}
let str = "happy";

// Regular
console.log('hey');

// Interpolated
console.log(`Hello I am a ${str} string`)

// Styled
console.log('%c I am some offset text', 'font-size:20px; text-shadow: 5px 5px 0 grey')

// warning!
console.warn('Oh no!');

// Error :
console.error('This is a console.error')

// Info
console.info('This is a fun fact')

// Testing
console.assert(1 === 2, 'This is not correct');

// clearing
// console.clear();

// Viewing DOM Elements
const p = document.querySelector('p');
console.log(p);
console.dir(p);

// Grouping together
console.clear();
dogs.forEach(dog => {
  console.group(`${dog.name}`)
  console.log(`This is ${dog.name}.`)
  console.log(`${dog.name} is ${dog.age} years old.`)
  console.log(`${dog.name} is ${dog.age*7} dog years old.`)
  console.groupEnd(`${dog.name}`)
})

// counting
console.count('counter')

// timing
console.clear();
console.time('fetching data');
fetch('https://api.github.com/users/paulosullivan22')
  .then(data => data.json())
  .then(data => {
    console.log(data.name + '\'s Github account');
    console.timeEnd('fetching data')
  })
