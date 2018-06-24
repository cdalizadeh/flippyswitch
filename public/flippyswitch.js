var socket = io();
socket.on('switchFlipped', receiveFlipEvent);
socket.on('currentSwitchStatus', receiveSwitchStatus);
querySwitchStatus();

function switchClicked(){
    console.log("switch has been clicked");
    sendFlipEvent();
}

function querySwitchStatus(){
    socket.emit('query');
}

function sendFlipEvent(){
    socket.emit('flip');
}

function receiveSwitchStatus(data){
    console.log("switch status recieved");
    updateSwitch(data);
}

function receiveFlipEvent(data){
    console.log("flip event received");
    updateSwitch(data);
}

function updateSwitch(data){

    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");

    var On = document.getElementById("On_switch");
    var Off = document.getElementById("Off_switch");


    if (data) {
        ctx.drawImage(On, 0, 0)
    }
    else {
        ctx.drawImage(Off, 0, 0)
    }

}
