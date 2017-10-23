import * as express from 'express';
import * as http from 'http';
import * as WebSocket from 'ws';

// Import WelcomeController from controllers entry point
import {WelcomeController} from './controllers/';

const app = express();

//init http server
const server = http.createServer(app);

//init WebSocket server instance
const wss = new WebSocket.Server({ server });

wss.on('connection', (ws: WebSocket) => {

	//Start Clock time and send to all Clients
	setInterval(() => {

		let clock = new Date();
		//Show on Server
		console.log(clock);

		//Push to clients
	   wss.clients
	    .forEach(client => {
	        if (client != ws) {
	            client.send(`${clock}`);
	        }    
	    });

	}, 1000);


});


// Mount the WelcomeController at the /welcome route
app.use('/', WelcomeController);


//start server
server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started: http://localhost:${server.address().port}`);
});