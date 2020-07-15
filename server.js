var http = require('http');
var fs = require('fs');

const allowedURLs = ['/index.html', '/inner.html', '/inner.js'];

http.createServer(function (req, res) {
  const url = req.url === '/' ? '/index.html' : req.url;
  if (!allowedURLs.includes(url)) {
    res.writeHead(404);
    res.end();
    return;
  }
  fs.readFile(__dirname + '/pages' + url, function (err, data) {
    res.writeHead(200);
    res.end(data);
  });
}).listen(8000);

console.log("Listening on http://localhost:8000");
