var http = require('http');

var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('feed me now mitch!');
});

server.listen(4000, '127.0.0.1');
console.log("yo mitch!, we're listening to port 4000");
