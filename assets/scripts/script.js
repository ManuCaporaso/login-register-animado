// Se agregan listeners a los botones para que llamen a la funcion de inicio de sesion y registro

document.getElementById("btn-login").addEventListener("click", inicioSesion);
document.getElementById("btn-register").addEventListener("click", registro);

//Listener para el boton submit, cuando enviamos los datos
document.getElementById("btn-submit").addEventListener("click", generarJSON);

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


function generarJSON() {
    // Se obtienen los valores ingresados en los campos del formulario utilizando sus IDs.
    const nombreCompleto = document.getElementById("nombreCompleto").value;
    const email = document.getElementById("email").value;
    const nombreUsuario = document.getElementById("nombreUsuario").value;
    const password = document.getElementById("password").value;

    // Se crea un objeto 'usuario' con los valores obtenidos del formulario.
    const usuario = {
        nombreCompleto,
        email,
        nombreUsuario,
        password
    };

    // Se convierte el objeto 'usuario' a una cadena de texto en formato JSON.
    // El segundo argumento (null) indica que no se aplicará ningún reemplazo, 
    // y el tercero (2) indica la cantidad de espacios de indentación en el JSON resultante.
    const jsonString = JSON.stringify(usuario, null, 2);

    // Se crea un objeto 'Blob' que representa un archivo con el contenido JSON.
    // El tipo de archivo se especifica como "application/json".
    const blob = new Blob([jsonString], { type: "application/json" });

    // Se genera una URL que apunta al objeto Blob, lo que permite crear un enlace para descargar el archivo.
    const url = URL.createObjectURL(blob);

    // Se crea un elemento <a> en el DOM 
    const a = document.createElement("a");

    // Se establece la URL generada como el destino del enlace.
    a.href = url;

    // Se establece el nombre del archivo que se descargará.
    a.download = "usuarionuevo.json";

    // Se simula un clic en el enlace para iniciar la descarga del archivo JSON.
    a.click();

    // Se libera la memoria asociada con la URL del Blob una vez que ya no es necesaria.
    URL.revokeObjectURL(url);
}

