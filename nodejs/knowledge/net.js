const net = require('net');

net.createServer(function (socket){
    socket.write('HELLO !');
    socket.end();
}).listen(2017)