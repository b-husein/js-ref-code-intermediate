// Event bubbling;

document.querySelector('.display-4').addEventListener('click', function () {
  console.log('This is our title.');
});

document.querySelector('.jumbotron').addEventListener('click', function () {
  console.log('This is our parent element also.');
});

// EVENT DELEGATION;

let myLink = document.querySelector('.nav-link');

myLink.addEventListener('click', myClick);

document.body.addEventListener('click', myClick);

function myClick(h) {
  if (h.target.className === 'nav-link') {
    console.log('This is working.');
  }
}
