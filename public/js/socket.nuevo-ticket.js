var socket = io();
var label = $('#lblNuevoTicket');

socket.on('connect', function() {
    console.log('Usuario Online');
});

socket.on('disconnect', function() {
    console.log('Usuario Offline');
})

socket.on('estadoActual', function(resp) {
    label.text(resp.actual)
    console.log(resp);
})

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });

});