const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];
function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'poop');

// Styled
console.log('%c I am some great text', 'font-size:50px;background:red');

// warning!
console.warn('Oh Noooo!');

// Error :|
console.error('Shit!');

// Info
console.info('Crocodiles eat 3-4 people per year');

// Testing
// Will only alert when it is wrong
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'That is wrong');

// clearing
console.clear();

// Viewing DOM Elements
console.dir(p);

// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json)
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  })

// tables
console.table(dogs);
