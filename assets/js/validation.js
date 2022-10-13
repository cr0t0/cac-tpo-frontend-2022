const nameError = document.getElementById('nombre-error');
// const phoneError = document.getElementById('telefono');
const emailError = document.getElementById('email-error');
// const name = document.getElementById('asunto');
const messageError = document.getElementById('mensaje-error');
const submitError = document.getElementById('submit-error')


function validateName(){
    let name = document.getElementById('nombre').value;
    // si el input de nombre esta vacio
    if (name.length == 0) {
        // imprime en nombre-error
        nameError.innerHTML = 'El campo es requerido.';
        return false;
    }

    if (!name.match (/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = 'Por favor, ingresa tu nombre completo.';
        return false;
    }
    nameError.innerHTML = 'valido';
    return true;
}
