// script.js
function toggleForm(formType) {
    if (formType === 'register') {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    } else {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    }
}

function login() {
    var username = document.getElementById('loginUsername').value;
    var password = document.getElementById('loginPassword').value;

    // Implement login logic here

    alert('Login functionality not implemented in this example.');
}

function register() {
    var fullName = document.getElementById('fullName').value;
    var username = document.getElementById('registerUsername').value;
    var email = document.getElementById('registerEmail').value;
    var password = document.getElementById('registerPassword').value;

    // Implement registration logic here

    alert('Registration functionality not implemented in this example.');
}
