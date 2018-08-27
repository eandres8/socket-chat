var socket = io();
var params = new URLSearchParams(window.location.search);

if (!params.has('nombre') || !params.has('sala')) {
    window.location = 'index.html';
    throw new Error('El nombre/sala son necesarios');
}

var usuario = {
    nombre: params.get('nombre'),
    sala: params.get('sala')
}

socket.on('connect', function() {
    console.log('Conectado al servidor');

    socket.emit('entrarChat', usuario, function(resp) {
        console.log('Usuario conectados: ', resp);

    });

});

socket.on('disconnect', function() {
    console.log('perdimos conexión con el servidor');
});

// Envia información
// socket.emit('crearMensaje', {
//     usuario: usuario,
//     mensaje: 'Hola Mundo'
// }, function(resp) {
//     console.log('respuesta server: ', resp);
// });

// Escucha información
socket.on('crearMensaje', function(mensaje) {
    console.log('Servidor: ', mensaje);
});

// Cuando un usuario entra o sale del chat
socket.on('listaPersona', function(personas) {
    console.log('Personas: ', personas);
});

// envia un mensaje privado a un usuario especifico
socket.on('mensajePrivado', (data) => {

    console.log('mensaje Privado', data);

});