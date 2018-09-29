var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var on = document.getElementById("on_switch");
var off = document.getElementById("off_switch");

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
    if (data) {
        ctx.drawImage(on, 0, 0)
    }
    else {
        ctx.drawImage(off, 0, 0)
    }

}
