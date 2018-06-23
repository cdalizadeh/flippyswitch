console.log("Node Application Starting");

var express = require('express');
var app = express();
var path = require('path');
var server = require('http').createServer(app);
var port = 3000;

server.listen(port, () => {
    console.log("Server listening at port " + port);
});
