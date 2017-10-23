"use strict";
/* app/controllers/welcomeController.ts */
Object.defineProperty(exports, "__esModule", { value: true });
// Import only what we need from express
const express_1 = require("express");
// Assign router to the express.Router() instance
const router = express_1.Router();
// The / here corresponds to the route that the WelcomeController
// is mounted on in the server.ts file.
// In this case it's /welcome
router.get('/', (req, res) => {
    // Reply with a hello world when no name param is provided
    res.send(`
<h1 id="clock"></h1>
<script>  
var ws = new WebSocket('ws://localhost:8080');
      ws.onmessage = function (event) {
        console.log(event.data);
        document.getElementById("clock").innerHTML = event.data;
      };
</script>`);
});
// Export the express.Router() instance to be used by server.ts
exports.WelcomeController = router;
//# sourceMappingURL=welcomeController.js.map