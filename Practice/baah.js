var http = require('http');

var fs = require('fs');


var server = http.createServer(function(req, res){
  console.log('request was made: ' + req.url);

  if(req.url === 'home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if (req.url === '/contact') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if (req.url === '/api/singers') {
    var singers = [{name: 'Jay-z', age: 44}, {name: 'Beyonce', age: 35}, {name: 'Prince', age: 60}, {name: 'Kanye', age: 36}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(singers));
  } else {
    res.writeHead(404, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);

  if(req.url === '/home' || req.url === '/'){
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
  	res.writeHead(200, {'Content-Type': 'text/html'});
  	fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas'){
  	var ninjas = [{name: 'ryu', age: 29}, {name: 'yoshi', age: 32}];
  	res.writeHead(200, {'Content-Type': 'application/json'});
  	res.end(JSON.stringify(ninjas));
  } else {
  	res.writeHead(404, {'Content-Type': 'text/html'});
  	fs.createReadStream(__dirname + '/404.html').pipe(res);

  }
});

server.listen(3000, '127.0.0.1');
console.log("yo mitch!, we're listening to port 3000");
