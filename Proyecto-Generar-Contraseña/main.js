let campoCantidad = document.getElementById('cantidad');
let botonGenerar = document.getElementById('generar');
let campoContrasena = document.getElementById('contrasena');
let mensajeSeguridad = document.getElementById('seguridad');

const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function generar() {
    let numeroIngresado = parseInt(campoCantidad.value);

    if (numeroIngresado < 8) {
        alert("La cantidad debe ser mayo que 8");
        return; // Salir si no es válida la cantidad
    }

    let password = ''

    for (let i = 0; i < numeroIngresado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];

        password += caracterAleatorio
    }

    campoContrasena.value = password

    let nivelSeguridad = determinarSeguridad(password);
    mensajeSeguridad.textContent = `Seguridad: ${nivelSeguridad}`;
}

function limpiar() {
    campoCantidad.value = '';
    campoContrasena.value = '';
    mensajeSeguridad.textContent = '';
    campoContrasena.placeholder = 'contraseña';
}

function determinarSeguridad(password) {
    if (password.length === 0) {
        return "N/A"; 
    }

    let contieneMayuscula = /[A-Z]/.test(password); // Al menos una letra mayúscula
    let contieneMinuscula = /[a-z]/.test(password); // Al menos una letra minuscula
    let contieneNumero = /[0-9]/.test(password); // Al menos un número
    let contieneEspecial = /[!@#$%^&*()]/.test(password); // Al menos un carácter especial

    if (contieneMayuscula && contieneMinuscula && contieneNumero && contieneEspecial) {
        mensajeSeguridad.className = 'seguridad_fuerte'
        return "Fuerte";
    }
    else if (contieneMayuscula && contieneMinuscula && contieneNumero) {
        mensajeSeguridad.className = 'seguridad_media'
        return "Media";
    }
    else {
        mensajeSeguridad.className = 'seguridad_debil'
        return "Debil";
    }
}
