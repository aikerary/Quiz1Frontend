// Get the element with id unorderedList
let unorderedList = document.getElementById('unorderedList');
// Get the element with id input
let input = document.getElementById('input');
// Get the element with id addButton
let addButton = document.getElementById('addButton');

// Add an event listener to the addButton
addButton.addEventListener('click', function() {
    // Create a new list item
    let listItem = document.createElement('li');
    // Set the text of the list item to the value of the input
    listItem.textContent = input.value;
    // Append the list item to the unordered list
    unorderedList.appendChild(listItem);
    // Clear the input
    input.value = '';
});