let myButton = document.querySelector('.btn');
let myJumbotron = document.querySelector('.jumbotron');

// create event listener;

myButton.addEventListener('click', myEvent);

// dblclick (double click);

myButton.addEventListener('dblclick', myEvent);

// mousedown event;

myButton.addEventListener('mousedown', myEvent);

// mouseup event;

myButton.addEventListener('mouseup', myEvent);

// mouseenter event;

myJumbotron.addEventListener('mouseenter', myEvent);

// mouseleave event;

myJumbotron.addEventListener('mouseleave', myEvent);

// mouseover event;

myJumbotron.addEventListener('mouseover', myEvent);

// mouseout event;

myJumbotron.addEventListener('mouseout', myEvent);

// mousemove event;

myJumbotron.addEventListener('mousemove', myEvent);

// create event handler;

function myEvent(h) {
  // console.log(`This is a ${h.type} event.`);
}
