// require the HTTP module

const http = require("http");

// here we define the port to listen on
const PORT = 8080;

// create a generic function to handle requests and responses
function handleRequests(request, response) {
	// the below statement is triggered (client-side) when the user visits the PORT url
	response.end("It works!! Path hit: " + request.url);
}

// here we use the Node http package to creat our server
// we then pass it the handleRequest function to empower it with functionality
const server = http.createServer(handleRequests);

// start the server so that it can begin listening to client requests
server.listen(PORT, function() {
	// trigger this statement (server-side) when the user vistits the PORT url
	console.log("Server listening on: http://localhost:" + PORT);
})


