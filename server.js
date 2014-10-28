// Load the HTTP library
var http = require("http");

// Create an HTTP server to handle responses
http.createServer(function(request, response){
	response.writeHead(200, {"Content-type": "text/plain"});
	response.write("Hello World");
	response.end()
}).listen(8888)

//  This code creates a simple HTTP server on local machine.