// When press the element with id element toggle the class active

let element = document.getElementById('element');

element.addEventListener('click', function() {
    element.classList.toggle('active');
});