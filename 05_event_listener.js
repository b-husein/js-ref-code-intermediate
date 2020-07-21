// Select the element:

// document.querySelector('.btn').addEventListener('click', function () {
//   console.log('Hi there!');
// });

document.querySelector('.btn').addEventListener('mouseover', clickMe);

function clickMe(h) {
  let myVar;

  myVar = h;

  // look at target:

  myVar = h.target;
  myVar = h.target.className;
  myVar = h.target.id;
  myVar = h.target.classList;

  // info about event type:

  myVar = h.type;

  console.log(myVar);
}
