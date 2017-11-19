const http = require('http');
const app = require('./server/app');
const settings = require('./config/settings');
const server = http.createServer(app(settings));
server.listen(settings.serverPort);
server.on('listening', () => console.log('Server started'));