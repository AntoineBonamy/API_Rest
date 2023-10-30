const ENV = require("./environnement/environnement.js");

// server
const http = require('http');
const port = ENV.PORT || 3000; 
const app = require('./app');

const server = http.createServer(app);

server.listen(port);

console.log('Server created');
console.log('Listen on port ' + port + '!');

