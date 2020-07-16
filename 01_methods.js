// SINGLE ELEMENT SELECTORS OR METHODS;

getElementById: console.log(document.getElementById('title'));

// get additional info:

console.log(document.getElementById('title').id);
console.log(document.getElementById('title').className);

let myTitle = document.getElementById('title');

// manipulate CSS values:

myTitle.style.color = '#fff';
myTitle.style.background = '#333';
myTitle.style.padding = '1rem';
myTitle.style.border = '4px solid black';

// manipulate content:

myTitle.textContent = 'Simple';
myTitle.innerText = 'Simple Bootstrap';
myTitle.innerHTML = 'Simple Bootstrap Template';

document.querySelector();

console.log(document.querySelector('#title'));
console.log(document.querySelector('.brand'));
console.log(document.querySelector('h2'));

document.querySelector('h2').textContent = 'Hi there';
