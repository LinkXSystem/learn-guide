const http = require('http');

const server = http.createServer((req, res) => {
    console.log("=========================");
    console.warn(req);
    console.log("=========================");
    res.end({ status: true, message: 'This is Github\'s Robot !!!' });
});

server.listen(80);