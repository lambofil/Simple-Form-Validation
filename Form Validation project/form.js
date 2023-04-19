// Variable declaration
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

                    // BETTER METHOD (II) 

// show error function
function showError(input, message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// show success function
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

// check email is valid
function checkEmail(input){
    const re = /\S+@\S+\.\S+/;
    if(re.test(input.value.trim())){
        showSuccess(input);
    }else {
        showError(input, 'Email not valid');
    }
    // return re.test(email.toLoweCase());
}


// Check Required Fields
function checkRequired(inputArr){  
    inputArr.forEach(function (input) {
        if(input.value.trim() === ''){
            showError(input, `${getFieldName(input)} is required!`);
        }else {
            showSuccess(input);
        }
    })  
}

// Check Input Length 
function checkLength(input, min, max){
    if(input.value.length < min){
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    }else if(input.value.length > max){ 
        showError(input, `${getFieldName(input)} must be less than ${max} characters`);
    }else {
        showSuccess(input);
    }   
}

// check password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value ){
        showError(input2, 'Password do not match');
    }
}

// Get field input function
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// Event Listener
form.addEventListener('submit', function(e) {
    e.preventDefault();

    checkRequired([username, email, password, password2]);
    checkLength(username, 3, 15);
    checkLength(password, 6, 25);
    checkEmail(email);
    checkPasswordMatch(password, password2);
});



                     // OLD METHOD (I)
/*
    // show input error message
    function showError(input, message){
        const formControl = input.parentElement;
        formControl.className = 'form-control error';
        const small = formControl.querySelector('small);
        small.innerText = message;
    }

    // show success outline
    function showSuccess(input){
        const formControl = input.parentElement;
        formControl.className = 'form-control success';
    }

    // Show Email validation (re: regular expression - )
    function isValidEmail(input){
        const re = /\S+@\S+\.\S+/;
        return re.test(email.toLoweCase());
    }

    

    // Event Listener

    form.addEventListener('submit', function(e) {
        e.preventDefault();

          if(username.value.trim() === ''){
                showError(username, 'Username is required!');
            }else {
                showSuccess(username);
            }

         if(email.value.trim() === ''){
                showError(email, 'Email is required!');
            }else {
                showSuccess(email);
            }

         if(password.value.trim() === ''){
                showError(password, 'Password is required!');
            }else {
                showSuccess(password);
            }

         if(password2.value.trim() === ''){
                showError(unsername, 'Password2 is required!');
            }else {
                showSuccess(password2);
            }

    });
    
*/