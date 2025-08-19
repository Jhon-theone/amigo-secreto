// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres.
let amigos = [];

// Funcion para agregar amigos.
function agregarAmigo () {

    // Captuarar el valor de campo de entrada.
    const nombre = document.getElementById('amigo').value.trim();

    // Validar la entrada.
    if (nombre == "") {
        alert("Por favor inserte un nombre");
        return;
    }

    // Actualizar el array de amigos.
    amigos.push(nombre);
    console.log(amigos);
    // Limpiar el campo de entrada.
    document.getElementById('amigo').value = "";
}