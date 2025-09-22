// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. 
// Aquí deberás desarrollar la lógica para resolver el problema.

let listaDeAmigos = [];
const LIMITE_AMIGOS = 10;

// Agrega un nuevo amigo a la lista
function agregarAmigo() { 
    const input = document.getElementById('amigo'); // caja de texto
    const nuevoAmigo = input.value.trim(); // valor sin espacios extra

    // Validar que no esté vacío
    if (!nuevoAmigo) {
        alert('No se aceptan valores vacíos');
        return;
    }

    // Validar que no supere el límite permitido
    if (listaDeAmigos.length >= LIMITE_AMIGOS) {
        alert('Se llegó al límite de amigos');
        return;
    }

    // Agregar el nuevo amigo a la lista
    listaDeAmigos.push(nuevoAmigo);

    // Limpiar el input
    input.value = '';

    // Mostrar en pantalla la lista actualizada
    listarAmigos();
}

// Muestra todos los amigos en el contenedor HTML
function listarAmigos() {
    document.getElementById('listaAmigos').innerHTML = listaDeAmigos.join('<br>');
}

// Sortea un amigo al azar y limpia la lista
function sortearAmigo() {
    // Si no hay amigos, avisar al usuario
    if (listaDeAmigos.length === 0) {
        alert("No hay amigos para sortear");
        return;
    }

    // Generar un número aleatorio como índice
    const indice = Math.floor(Math.random() * listaDeAmigos.length);
    const ganador = listaDeAmigos[indice];

    // Mostrar al ganador en el contenedor HTML
    document.getElementById('resultado').innerHTML = 
        `Tu amigo secreto es: <strong>${ganador}</strong>`;

    // Reiniciar la lista de amigos y limpiar la vista
    listaDeAmigos = [];
    listarAmigos();
}













