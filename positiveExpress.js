// require the HTTP module

const http = require("http");

// here we define the port to listen on
const PORT = 7000;
const PORT2 = 7500;
const goodArray = ["Well done good sir.  Now you're cooking with gas!", "Yippee!"]

// create a generic function to handle requests and responses
function handleRequests(request, response) {
	// the below statement is triggered (client-side) when the user visits the PORT url
	response.end(goodArray[Math.floor(Math.random() * goodArray.length)] + request.url);
}

function handleRequests2(request, response) {
	// the below statement is triggered (client-side) when the user visits the PORT url
	response.end("Congrats... you did a good job copy and pasting you simpleton." + request.url);
}

// here we use the Node http package to creat our server
// we then pass it the handleRequest function to empower it with functionality
const server = http.createServer(handleRequests);
const server2 = http.createServer(handleRequests2);

// start the server so that it can begin listening to client requests
server.listen(PORT, function() {
	// trigger this statement (server-side) when the user vistits the PORT url
	console.log("Server listening on: http://localhost:" + PORT);
})

server2.listen(PORT2, function() {
	// trigger this statement (server-side) when the user vistits the PORT url
	console.log("Server listening on: http://localhost:" + PORT2);
})

