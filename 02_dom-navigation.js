// navigate from parent to child element and vice-versa

let myVar;

let mainList = document.querySelector('#navbarNavDropdown');

myVar = mainList;
console.log(myVar);
// console.log(myVar.children);

myVar = mainList.children;

// navigate from sibling to sibling

let myVar;
let mainList = document.querySelector('#navbarNavDropdown');

myVar = mainList;

console.log(myVar.nextSibling);
console.log(myVar.nextElementSibling);
console.log(myVar.previousElementSibling);

// move from button toward the previous element:

let myVar;
let mainButton = document.querySelector('#mainButton');

myVar = mainButton;
console.log(myVar.previousElementSibling);
