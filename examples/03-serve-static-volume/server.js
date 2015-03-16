var finalhandler = require('finalhandler');
var http = require('http');
var serveStatic = require('serve-static');

// Serve up var/www folder
var serve = serveStatic('/var/www', {'index': ['index.html', 'index.htm']});

// Create server
var server = http.createServer(function(req, res){
  var done = finalhandler(req, res);
  serve(req, res, done);
});

// Listen
server.listen(80);
console.log('Static server is up and running!');