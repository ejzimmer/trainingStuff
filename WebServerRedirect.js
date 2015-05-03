/**
 * Created by zed on 26/06/14.
 */
var http = require('http'), url = require('url');

http.createServer( function(req, res) {

    var pathname = url.parse(req.url).pathname;

    if (pathname === '/') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('Home Page\n');
    } else if (pathname === '/about') {
        res.writeHead(200, { 'Content-Type': 'text/plain'});
        res.end('About Us\n');
    } else if (pathname === 'redirect') {
        res.writeHead(301, { 'Location': '/'});
        res.end();
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain'});
        res.end('File not found');
    }
}).listen(3000, 'localhost');

console.log('Web server with redirects listening on port 3000');