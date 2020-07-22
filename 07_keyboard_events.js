// keydown event;

let myInput = document.querySelector('#inputEmail');

myInput.value = '';

myInput.addEventListener('keydown', myEvent);

// keyup event;

myInput.addEventListener('keyup', myEvent);

// keypress event;

myInput.addEventListener('keypress', myEvent);

// focus event;

myInput.addEventListener('focus', myEvent);

// blur event;

myInput.addEventListener('blur', myEvent);

// Input event;

myInput.addEventListener('input', myEvent);

function myEvent(h) {
  console.log(`This is ${h.type} event.`);
}
