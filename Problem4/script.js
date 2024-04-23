// Get the element with the id key
let key = document.getElementById("key");
// Get the element with the id value
let value = document.getElementById("value");
// Get the element with id create
let create = document.getElementById("create");

// When click on create create a cooki with the value of key and value
// and set the expiration date to 1 day from now, also handle the errors
// with alerts

create.addEventListener("click", function() {
    // Check if the key is empty
    if (key.value === "") {
        alert("Key cannot be empty");
        return;
    }
    // Check if the value is empty
    if (value.value === "") {
        alert("Value cannot be empty");
        return;
    }
    // Create a new date object
    let date = new Date();
    // Set the expiration date to 1 day from now
    date.setDate(date.getDate() + 1);
    // Create a cookie with the key and value
    document.cookie = `${key.value}=${value.value}; expires=${date.toUTCString()}`;
    // Alert the user that the cookie was created
    alert("Cookie created");
    // Clear the key and value
    key.value = "";
    value.value = "";
}
);