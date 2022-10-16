const formulario = document.getElementById('form');

const nameError = document.getElementById('nombre-error');
const phoneError = document.getElementById('telefono-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('mensaje-error');
const submitError = document.getElementById('submit-error')

// NOMBRE
function validateName(){
    let name = document.getElementById('nombre').value;
    // si el input de nombre esta vacio
    if (name.length == 0) {
        // imprime en nombre-error
        nameError.innerHTML = 'El campo es requerido.';
        setTimeout(() => {nameError.innerHTML= ''}, 4000);
        return false;
    }

    if (!name.match (/^[A-Za-z]+\s{1}[A-Za-z]+[A-Za-z\s]*$/)){
        nameError.innerHTML = 'Por favor, ingresa tu nombre completo.';
        return false;
    }
    nameError.innerHTML = 'valido';
    return true;
}

// TELEFONO
function validatePhone(){
    let phone = document.getElementById('telefono').value;
    // si el input de telefono esta vacio
    if (phone.length == 0) {
        // imprime en telefono-error
        phoneError.innerHTML = 'El campo es requerido.';
        setTimeout(() => {phoneError.innerHTML= ''}, 4000);
        return false;
    }

    if (phone.length <= 8) {
        // imprime en telefono-error
        phoneError.innerHTML = 'El numero de teléfono debe ser de al menos 10 digitos.';
        return false;
    }

    if (!phone.match (/^[0-9]{8,14}$/)){
        phoneError.innerHTML = 'Por favor, ingresa un número de teléfono válido.';
        return false;
    }
    phoneError.innerHTML = 'valido';
    return true;
}

// CORREO
function validateEmail(){
    let email = document.getElementById('email').value;
    // si el input de email esta vacio
    if (email.length == 0) {
        // imprime en email-error
        emailError.innerHTML = 'El campo es requerido.';
        setTimeout(() => {emailError.innerHTML= ''}, 4000);

        return false;
    }
    if (!email.match (/^[A-Za-z0-9_.-]+[@][A-Za-z0-9-]+[A-Za-z0-9-.]+[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Por favor, ingresa una dirección de correo válida.';
        return false;
    }
    emailError.innerHTML = 'valido';
    return true;
}

// // MENSAJE
function validateMessage(){
    let message = document.getElementById('textarea').value;
    let requerido = 30;
    let missing = requerido - message.length;

    // si el input de mensaje esta vacio
    if (message.length == 0) {
        // imprime en mensaje-error
        messageError.innerHTML = 'El campo es requerido.';
        setTimeout(() => {messageError.innerHTML= ''}, 4000);
        return false;
    }
    if (missing > 0) {
        messageError.innerHTML = 'Se requieren al menos 30 caracteres.';
        return false

    }
    messageError.innerHTML = 'valido';
    return true;
}

// BOTON SUBMIT
function validateSubmit(){
    if(!validateName() || !validatePhone() || !validateEmail() || !validateMessage()) {
        validateName();
        validatePhone();
        validateEmail();
        validateMessage();
        submitError.innerHTML = '¡Por favor, completa los campos requeridos!';
        setTimeout(() => {submitError.innerHTML = ''}, 4000)
        return false;
    } else {
        submitError.innerHTML = '¡Enviado correctamente!';
    }
}


formulario.addEventListener('submit' , (e) => {
    e.preventDefault();
})