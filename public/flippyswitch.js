var socket = io();

socket.on('switchFlipped', receiveFlipEvent);

function switchClicked(){
    console.log("sending flip event");
    sendFlipEvent();
}

function sendFlipEvent(){
    socket.emit('flip');
}

function receiveFlipEvent(data){
    console.log("flip event received");
    $('#paragraph').text(data);
}