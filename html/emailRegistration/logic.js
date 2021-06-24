const form = document.getElementById('form');
const firstName = document.getElementById('first-name');
const lastName = document.getElementById('last-name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const inputTerms = document.getElementById('input-terms');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
})

function checkInputs () {
    firstNameValue = firstName.value.trim();
    lastNameValue = lastName.value.trim();
    emailValue = email.value.trim();
    passwordVale = password.value.trim();
    password2Value = password2.value.trim();

    var firstNameValidation = null;
    var lastNameValidation = false;
    var emailValidation = false;
    var passwordValidation = false;
    var password2Validation = false;
    var termValidation = false;
    
    
    if (firstNameValue === '') {
        var  element = document.getElementById("first-name");
        element.classList.add("error");
        document.getElementById("first-name").classList.remove("successfully");
        document.getElementById("first-n-succ").classList.replace("successfully-symbol-show", "successfully-symbol-hide");
        document.getElementById("first-n-err").classList.remove("error-symbol");
        document.getElementById("first-n-err").classList.add("error-symbol-show");
        document.getElementById("fn-error-message").classList.replace("error-message", "error-message-show");
        firstNameValidation = false;
    } else {
        document.getElementById("fn-error-message").classList.replace("error-message-show","error-message");
        document.getElementById("first-n-err").classList.replace("error-symbol-show", "error-symbol");
        document.getElementById("first-n-succ").classList.remove("successfully-symbol-hide");
        document.getElementById("first-n-succ").classList.add("successfully-symbol-show");
        var element = document.getElementById("first-name")
        element.classList.add("successfully")
        firstNameValidation = true;
    };

    if (lastNameValue === '') {
        var  element = document.getElementById("last-name");
        element.classList.add("error");
        document.getElementById("last-name").classList.remove("successfully");
        document.getElementById("last-n-succ").classList.replace("successfully-symbol-show", "successfully-symbol-hide");
        document.getElementById("last-n-err").classList.remove("error-symbol");
        document.getElementById("last-n-err").classList.add("error-symbol-show");
        document.getElementById("ln-error-message").classList.replace("error-message", "error-message-show");
        lastNameValidation = false;
    } else {
        document.getElementById("ln-error-message").classList.replace("error-message-show","error-message");
        document.getElementById("last-n-err").classList.replace("error-symbol-show", "error-symbol");
        document.getElementById("last-n-succ").classList.remove("successfully-symbol-hide");
        document.getElementById("last-n-succ").classList.add("successfully-symbol-show");
        var element = document.getElementById("last-name");
        element.classList.add("successfully");
        lastNameValidation = true;
    };

    if(emailValue === "") {
        document.getElementById("email-succ").classList.replace("successfully-symbol-show", "successfully-symbol-hide");
        document.getElementById("email").classList.replace("successfully", "error");
        document.getElementById("email-error-p").innerText = "Error: empty input field!";
        document.getElementById("email-error-message").classList.replace("error-message","error-message-show");
        document.getElementById("email").classList.add("error");
        document.getElementById("email-err").classList.replace("error-symbol", "error-symbol-show");
        emailValidation = false;
    } else if (!checkEmail(emailValue)) {
        document.getElementById("email-error-p").innerText = "Invalid email";
        document.getElementById("email-error-message").classList.replace("error-message","error-message-show");
        document.getElementById("email").classList.add("error");
        emailValidation = false;
    } else {
        document.getElementById("email-error-message").classList.replace("error-message-show","error-message");
        document.getElementById("email-err").classList.replace("error-symbol-show", "error-symbol");
        document.getElementById("email-succ").classList.replace("successfully-symbol-hide", "successfully-symbol-show");
        document.getElementById("email").classList.add("successfully");
        emailValidation = true;
    }

    function checkEmail (email) {
        return (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
    }

    if (passwordVale === "") {
        document.getElementById("password").classList.replace("successfully","error");
        document.getElementById("password").classList.add("error");
        document.getElementById("password-succ").classList.replace( "successfully-symbol-show", "successfully-symbol-hide")
        document.getElementById("password-message").classList.replace("error-message", "error-message-show")
        document.getElementById("password-err").classList.replace("error-symbol", "error-symbol-show")
        passwordValidation = false;
    } else {
        document.getElementById("password").classList.replace("error", "successfully");
        document.getElementById("password").classList.add("successfully")
        document.getElementById("password-message").classList.replace("error-message-show", "error-message")
        document.getElementById("password-err").classList.replace("error-symbol-show","error-symbol")
        document.getElementById("password-succ").classList.replace("successfully-symbol-hide", "successfully-symbol-show")
        passwordValidation = true;
    }

    if (password2Value === "") {
        document.getElementById("password2").classList.replace("successfully","error");
        document.getElementById("password2").classList.add("error");
        document.getElementById("password2-succ").classList.replace( "successfully-symbol-show", "successfully-symbol-hide")
        document.getElementById("password2-message").classList.replace("error-message", "error-message-show")
        document.getElementById("password2-err").classList.replace("error-symbol", "error-symbol-show")
        password2Validation = false;
    } else if (password2Value !== passwordVale) {
        document.getElementById("password2").classList.replace("successfully","error");
        document.getElementById("password2").classList.add("error");
        document.getElementById("password2-succ").classList.replace( "successfully-symbol-show", "successfully-symbol-hide")
        document.getElementById("password2-message").classList.replace("error-message", "error-message-show")
        document.getElementById("password2-err").classList.replace("error-symbol", "error-symbol-show")
        password2Validation = false;
        
    } else {
        document.getElementById("password2").classList.replace("error", "successfully");
        document.getElementById("password2").classList.add("successfully")
        document.getElementById("password2-message").classList.replace("error-message-show", "error-message")
        document.getElementById("password2-err").classList.replace("error-symbol-show","error-symbol")
        document.getElementById("password2-succ").classList.replace("successfully-symbol-hide", "successfully-symbol-show")
        password2Validation = true;
    }

    if (inputTerms.checked) {
        document.getElementById("terms-message").classList.replace("error-message-show", "error-message")
        termValidation = true;
    } else {
        document.getElementById("terms-message").classList.replace("error-message", "error-message-show");
        termValidation = false;   
    }

    if (firstNameValidation && lastNameValidation && emailValidation && passwordValidation && password2Validation && termValidation) {
        document.getElementById('spinner').classList.replace('spinner-remove', 'spinner-add')
        function myFunction() {
            setTimeout(function(){ 
                document.getElementById('h1-registration').innerHTML = ("registration successful")
                document.getElementById('h1-registration').classList.add('green-letter');
                document.getElementById('spinner').classList.replace('spinner-add','spinner-remove') }, 1000); 
            }
        myFunction();  
    } 
}