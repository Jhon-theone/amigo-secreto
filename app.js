// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Array para almacenar los nombres.
let amigos = [];
let lista = document.getElementById('listaAmigos');

// Funcion para agregar amigos.
function agregarAmigo () {

    // Captuarar el valor de campo de entrada.
    const nombre = document.getElementById('amigo').value.trim();

    // Validar la entrada.
    if (nombre == "") {
        alert("Por favor inserte un nombre");
        return;
    } 
    // Actualizar el array de amimgos.
    amigos.push(nombre); 
    console.log(amigos);
    // Limpiar el campo de entrada.
    document.getElementById('amigo').value = "";
    

    actualizarLista();
}

// Función para actualizar la lista de amigos.
function actualizarLista () {
    // Obtener el elemto de la lista.
    lista = document.getElementById('listaAmigos');
    // Limpiar la lista existente.
    lista.innerHTML = "";
    // Iterar sobre el arreglo.
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}