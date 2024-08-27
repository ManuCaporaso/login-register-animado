// Se agregan listeners a los botones para que llamen a la funcion de inicio de sesion y registro

document.getElementById("btn-login").addEventListener("click", inicioSesion);
document.getElementById("btn-register").addEventListener("click", registro);

//Listener para el ajuste de pagina a cierto tamaño
window.addEventListener("resize", ajustePagina);

// variables
let loginForm = document.querySelector(".login-form");
let registerForm = document.querySelector(".register-form");
let formContainer = document.querySelector(".form-container");
let backBoxLogin = document.querySelector(".back-box-login");
let backBoxRegister = document.querySelector(".back-box-register");

// Funciones

function ajustePagina() {
    if (window.innerWidth > 850) {
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "block";
    } else {
        backBoxRegister.style.display = "block";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.display = "none";
        loginForm.style.display = "block";
        formContainer.style.left = "0px";
        registerForm.style.display = "none";   
    }
}

ajustePagina();

function inicioSesion() {
    if (window.innerWidth > 850) {
        loginForm.style.display = "block";
        formContainer.style.left = "10px";
        registerForm.style.display = "none";
        backBoxRegister.style.opacity = "1";
        backBoxLogin.style.opacity = "0";
    } else {
        loginForm.style.display = "block";
        formContainer.style.left = "0px";
        registerForm.style.display = "none";
        backBoxRegister.style.display = "block";
        backBoxLogin.style.display = "none";
    }
}

function registro() {
    if (window.innerWidth > 850) {
        registerForm.style.display = "block";
        formContainer.style.left = "410px";
        loginForm.style.display = "none";
        backBoxRegister.style.opacity = "0";
        backBoxLogin.style.opacity = "1";
    } else {
        registerForm.style.display = "block";
        formContainer.style.left = "0px";
        loginForm.style.display = "none";
        backBoxRegister.style.display = "none";
        backBoxLogin.style.display = "block";
        backBoxLogin.style.opacity = "1";
    }
}
