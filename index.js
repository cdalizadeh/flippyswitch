console.log("Node Application Starting");

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 3000;

server.listen(port, () => {
    console.log("Server listening at port " + port);
});

app.use(express.static(path.join(__dirname, 'public')));

var flip = true;

io.on('connection', (socket) => {
    console.log('wow connection is recieve');
    socket.on('flip', () => {
        console.log('switch is flip');
        flip = !flip;
        io.sockets.emit('switchFlipped', flip);
    });
});