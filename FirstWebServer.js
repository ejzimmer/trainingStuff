/**
 * Created by zed on 26/06/14.
 */
var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(3000, '127.0.0.1');

console.log('Webserver is running at localhost:3000');