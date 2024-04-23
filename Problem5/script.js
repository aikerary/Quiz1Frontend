// Get the input with the id idToChange
let idToChange = document.getElementById('idToChange');
// Get the input with the id classToAdd
let classToAdd = document.getElementById('classToAdd');
// Get the button with the id change
let button = document.getElementById('change');

// Create a function that receives a
// id as a parameter and a class
// and adds the class to the element
function addClass(id, className) {
  document.getElementById(id).classList.add(className);
}

// When press the button  get the value of the input
// with the id idToChange and the value of the input
// with the id classToAdd and call the function addClass
// with the values of the inputs
button.addEventListener('click', function() {
  addClass(idToChange.value, classToAdd.value);
});