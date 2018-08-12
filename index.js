console.log("Node Application Starting");

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var port = 8080;

server.listen(port, () => {
    console.log("Server listening at port " + port);
});

app.use(express.static(path.join(__dirname, 'public')));

var flip = true;
var totalFlips = 0;

io.on('connection', (socket) => {
    console.log('wow connection is recieve');
    socket.on('flip', () => {
        flip = !flip;
        totalFlips++;
        console.log("Total flips: " + totalFlips);
        io.sockets.emit('switchFlipped', flip);
    });

    socket.on('query', () => {
        console.log('switch status queried');
        socket.emit('currentSwitchStatus', flip);
    });
});