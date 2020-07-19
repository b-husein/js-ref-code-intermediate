// REPLACE ELEMENT

// 01_create new element;

let myHeading = document.createElement('h3');

// 02_add id;

myHeading.id = 'title';

// 03_add a new text node;

myText = document.createTextNode('Very cool template.');

myHeading.appendChild(myText);

// 04_fetch the previous heading:

let prevHeading = document.getElementById('title');

// 05_use the parent:

let ourParent = document.querySelector('.jumbotron');

// 06_replace;

ourParent.replaceChild(myHeading, prevHeading);

// REMOVE ELEMENT (from navbar);

// 01_create a variable for list items;

let myListItems = document.querySelectorAll('li');
let myList = document.querySelector('ul');

// 02_remove a list item;

myListItems[1].remove();

// 03_remove child element;

myList.removeChild(myListItems[3]);
