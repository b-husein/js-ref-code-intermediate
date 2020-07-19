// create element;

let listItem = document.createElement('li');

// create a class;

listItem.className = 'nav-item active';

// // create and append the text node;

let myText = document.createTextNode('Testimonials');

listItem.appendChild(myText);

// create and append the new link;

let myLink = document.createElement('a');

// add classes to link;

myLink.className = 'nav-link';

// create and append the text node for the link;

let myTextLink = document.createTextNode('Testimonials');

myLink.appendChild(myTextLink);

// append link to listItem;

listItem.appendChild(myLink);

// add link attribute;

myLink.setAttribute('href', '#');

// append listItem as child to ul;

document.querySelector('ul.navbar-nav').appendChild(listItem);

console.log(listItem);
