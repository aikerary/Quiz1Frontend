// Get the element with the id miFormulario
let form = document.getElementById('miFormulario');

// Create a function named verifyForm
function verifyForm() {
    // Get the value of the input with the id nombre
    let nombre = document.getElementById('nombre');
    // Get the value of the input with the id email
    let email = document.getElementById('email');
    // Get the value of the input with the id mensaje
    let mensaje = document.getElementById('mensaje');
    // Get all the label elements and delete it
    let labels = document.querySelectorAll('label');
    let error= false;
    labels.forEach(label => {
        label.remove();
    });
    // Verify if any empty value
    if (!verifyEmpty(nombre.value)) {
        // Create a label with the message "This field is required"
        let label = document.createElement('label');
        label.innerHTML = 'The name is empty';
        label.style.color = 'red';
        // Append the label to the form
        form.appendChild(label);
        error=true;
    }
    if (!verifyEmpty(email.value)) {
        // Create a label with the message "This field is required"
        let label = document.createElement('label');
        label.innerHTML = 'The email is empty';
        label.style.color = 'red';
        // Append the label to the form
        form.appendChild(label);
        error=true;
    }
    if (!verifyEmpty(mensaje.value)) {
        // Create a label with the message "This field is required"
        let label = document.createElement('label');
        label.innerHTML = 'The message is empty';
        label.style.color = 'red';
        // Append the label to the form
        form.appendChild(label);
        error=true;
    }
    // Verify if the email has the correct format
    if (!verifyEmail(email.value)) {
        // Create a label with the message "This field is required"
        let label = document.createElement('label');
        label.innerHTML = 'Email is in incorrect format';
        label.style.color = 'red';
        // Append the label to the form
        form.appendChild(label);
        error=true;
    }
    // Verify if the name has only letters
    if (!verifyName(nombre.value)) {
        // Create a label with the message "This field is required"
        let label = document.createElement('label');
        label.innerHTML = 'Name has to have only letters';
        label.style.color = 'red';
        // Append the label to the form
        form.appendChild(label);
        error=true;
    }
    return error;
}

// Create a function that receives undefined arguments
// then verify that the value is not empty in all the arguments
// if the value is empty put a label in red color with the message
// "This field is required" and return false

function verifyEmpty(value) {
    if (value === '') {
        return false;
    }
    return true;
}

// Create a function that receives an email as an argument
// then verify that the email has the correct format
function verifyEmail(email) {
    let emailFormat = /\S+@\S+\.\S+/;
    return emailFormat.test(email);
}


// Create a function that receives a name
// then verify that the name has only letters
function verifyName(name) {
    let nameFormat = /^[a-zA-Z]+$/;
    return nameFormat.test(name);
}

// Get the button with id button
let button = document.getElementById('button');

// When press the button verify form also prevent the default behavior
button.addEventListener('click', function (event) {
    event.preventDefault();
    if (!verifyForm()) {
        form.submit();
    }
});