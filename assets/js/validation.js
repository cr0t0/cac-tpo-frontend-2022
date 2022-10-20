const formulario = document.getElementById('form');
// valida campos
const nameError = document.getElementById('nombre-error');
const phoneError = document.getElementById('telefono-error');
const emailError = document.getElementById('email-error');
const messageError = document.getElementById('mensaje-error');
const submitError = document.getElementById('submit-error')

// cambia colores
const nombreValido = document.getElementById('nombre');
const telefonoValido = document.getElementById('telefono');
const correoValido = document.getElementById('email');
const mensajeValido = document.getElementById('textarea');


// NOMBRE
function validateName(){
    let name = document.getElementById('nombre').value;
    // si el input de nombre esta vacio
    if (name.length == 0) {
        // imprime en nombre-error
        nameError.innerHTML = 'El campo es requerido.';
        nombreValido.style.borderColor = 'crimson';
        setTimeout(() => {nameError.innerHTML= ''}, 4000);
        return false;
    }

    if (!name.match (/^[A-Za-z]+\s{1}[A-Za-z]+[A-Za-z\s]*$/)){
        nameError.innerHTML = 'Por favor, ingresa tu nombre completo.';
        nombreValido.style.borderColor = 'crimson';
        return false;
    }
    nameError.innerHTML = '<i class="fa-regular fa-circle-check valid"></i>';
    nombreValido.style.borderColor = 'lightseagreen';
    return true;
}

// TELEFONO
function validatePhone(){
    let phone = document.getElementById('telefono').value;
    // si el input de telefono esta vacio
    if (phone.length == 0) {
        // imprime en telefono-error
        phoneError.innerHTML = 'El campo es requerido.';
        telefonoValido.style.borderColor = 'crimson';
        setTimeout(() => {phoneError.innerHTML= ''}, 4000);
        return false;
    }

    if (phone.length <= 8) {
        // imprime en telefono-error
        phoneError.innerHTML = 'El numero de teléfono debe ser de al menos 10 digitos.';
        telefonoValido.style.borderColor = 'crimson';
        return false;
    }

    if (!phone.match (/^[0-9]{8,14}$/)){
        phoneError.innerHTML = 'Por favor, ingresa un número de teléfono válido.';
        return false;
    }
    phoneError.innerHTML = '<i class="fa-regular fa-circle-check valid"></i>';
    telefonoValido.style.borderColor = 'lightseagreen';
    return true;
}

// CORREO
function validateEmail(){
    let email = document.getElementById('email').value;
    // si el input de email esta vacio
    if (email.length == 0) {
        // imprime en email-error
        emailError.innerHTML = 'El campo es requerido.';
        correoValido.style.borderColor = 'crimson';
        setTimeout(() => {emailError.innerHTML= ''}, 4000);

        return false;
    }
    if (!email.match (/^[A-Za-z0-9_.-]+[@][A-Za-z0-9-]+[A-Za-z0-9-.]+[.]+[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Por favor, ingresa una dirección de correo válida.';
        correoValido.style.borderColor = 'crimson';
        return false;
    }
    emailError.innerHTML = '<i class="fa-regular fa-circle-check valid"></i>';
    correoValido.style.borderColor = 'lightseagreen';
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
        mensajeValido.style.borderColor = 'crimson';
        setTimeout(() => {messageError.innerHTML= ''}, 4000);
        return false;
    }
    if (missing > 0) {
        messageError.innerHTML = 'Se requieren al menos 30 caracteres.';
        mensajeValido.style.borderColor = 'crimson';
        return false

    }
    messageError.innerHTML = '<i class="fa-regular fa-circle-check valid"></i>';
    mensajeValido.style.borderColor = 'lightseagreen';
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
        submitError.style.color = 'lightseagreen';
        setTimeout(() => {submitError.innerHTML= ''}, 4000);
    }
}


formulario.addEventListener('submit' , (e) => {
    e.preventDefault();
})