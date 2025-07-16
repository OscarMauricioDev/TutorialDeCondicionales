
// --- Función para la página if.html ---
function verificarEdad() {
    let edad = document.getElementById('edadUsuario').value;

    if (edad >= 18) {
        alert("¡Bienvenido! Eres mayor de edad.");
    }
}


// --- Función para la página if-else.html ---
function verificarParImpar() {
    let numero = document.getElementById('numeroParImpar').value;

    if (numero % 2 == 0) {
        alert("El número " + numero + " es PAR.");
    } else {
        alert("El número " + numero + " es IMPAR.");
    }
}


// --- Función para la página if-else-if.html ---
function clasificarNumero() {
    let numero = document.getElementById('numeroClasificar').value;

    if (numero > 0) {
        alert("El número " + numero + " es POSITIVO.");
    } else if (numero < 0) {
        alert("El número " + numero + " es NEGATIVO.");
    } else {
        alert("El número es CERO.");
    }
}


// --- Función para la página switch.html ---
function verMenuDelDia() {

    let dia = "miercoles"; 

    switch (dia) {
        case "lunes":
            alert("Menú del Lunes: Sopa de Lentejas.");
            break;
        case "martes":
            alert("Menú del Martes: Pollo a la Plancha.");
            break;
        case "miercoles":
            alert("Menú del Miércoles: Fríjoles.");
            break;
        case "jueves":
            alert("Menú del Jueves: Pasta a la Boloñesa.");
            break;
        case "viernes":
            alert("Menú del Viernes: Pescado Frito.");
            break;
        case "sabado":
            alert("¡Hoy es Sábado! Menú especial: Bandeja Paisa.");
            break;
        default:
            alert("Día no válido o no hay menú para ese día.");
            
    } 

} 


// ---- Funciónes para la pagina de operadores Lógicos -----


// Ejemplo del AND
function verificarAccesoVip() {
    let edad = 25;
    let tienePase = true;

    if (edad > 21 && tienePase == true) {
        alert("Acceso VIP concedido.");
    } else {
        alert("Acceso denegado.");
    }
}

// Ejemplo del OR 
function verificarDescuento() {
    let esMartes = false;
    let esEstudiante = true;

    if (esMartes == true || esEstudiante == true) {
        alert("¡Felicidades! Tienes un descuento.");
    } else {
        alert("Lo sentimos, no aplicas para el descuento.");
    }
} 

// Ejemplo del NOT  
function decidirPaseo() {
    let estaLloviendo = false;

    if (!estaLloviendo) {
        alert("El cielo está despejado. ¡Vamos a dar un paseo!");
    } else {
        alert("Está lloviendo, mejor nos quedamos en casa.");
    }
}

// --- Función para la pagina del Ejemplo #1 ---
function evaluarNota(nota) {

    if (nota < 0.0 || nota > 5.0) {
        alert("Error: La nota ingresada no es válida.");
        return; 
    }

    if (nota >= 3.0) {
        alert("Estado: APROBADO. ¡Felicidades!");
    } else {
        alert("Estado: REPROBADO.");
    }
}

// // --- Función para la pagina del Ejemplo #2 ---

function verificarAcceso() {
    let edad = 20;
    let tieneTicket = true;
    let esVip = false;

    if ((edad >= 18 && tieneTicket) || esVip) {
        alert("ACCESO PERMITIDO. ¡Disfruta el evento!");
    } else {
        alert("ACCESO DENEGADO. No cumples los requisitos.");
    }
}

// --- Función para la pagina del Ejemplo #3 ---
function mostrarMensajePorRol() {
    let rol = "admin"; 

    switch (rol) {
        case "admin":
            alert("Bienvenido, Administrador. Tienes acceso total.");
            break;
        case "editor":
            alert("Bienvenido, Editor. Puedes modificar el contenido.");
            break;
        default:
            alert("Bienvenido, Invitado. Tienes acceso de solo lectura.");
    }
}