import * as restify from "restify";
import * as path from "path";

// Create a Restify server
const server = restify.createServer({
	name: "YourServerName",
	version: "1.0.0"
});




// Serve static files from the 'build' folder
// Serve static files from the 'client/build' folder
server.get(
	'*',
	// restify.plugins.serveStatic({
	//   directory: path.join( '.', 'client', 'build'),
	//   default: 'index.html',
	//   appendRequestPath: false,
    // })
    restify.plugins.serveStaticFiles('./client/build/index.html')
);
  

// Start the server
server.listen( 2001, () => {
	console.log(`Server is listening on port 2001`);
});

// Close the Prisma connection when the server is closed
server.on("close", () => {
	prisma.$disconnect();
});