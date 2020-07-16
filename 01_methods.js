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

// MULTIPLE ELEMENTS SELECTORS OR METHODS:

// document.getElementsByClassName();

let myTitles = document.getElementsByClassName('card-title');

console.log(myTitles);
console.log(myTitles[2]);

myTitles[2].style.color = 'blue';
myTitles[0].textContent = 'The first item';

// document.getElementsByTagName();

let myHeaders = document.getElementsByTagName('h2');

console.log(myHeaders);
myHeaders[2].style.color = 'blue';

// // Array.from() method:

myHeaders = Array.from(myHeaders);

myHeaders.forEach((h2) => {
  h2.textContent = 'Hi there';
});

console.log(myHeaders);

// document.querySelectorAll();

let myHeaders = document.querySelectorAll('card-title');

let allHeaders = document.querySelectorAll('h2');
let i;
for (i = 0; i < allHeaders.length; i++) {
  allHeaders[i].style.backgroundColor = 'red';
}
