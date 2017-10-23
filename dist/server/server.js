"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http = require("http");
const WebSocket = require("ws");
// Import WelcomeController from controllers entry point
const _1 = require("./controllers/");
const app = express();
//init http server
const server = http.createServer(app);
//init WebSocket server instance
const wss = new WebSocket.Server({ server });
wss.on('connection', (ws) => {
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
app.use('/', _1.WelcomeController);
//start server
server.listen(process.env.PORT || 8080, () => {
    console.log(`Server started: http://localhost:${server.address().port}`);
});
//# sourceMappingURL=server.js.map