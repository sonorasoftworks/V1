const PORT = 8080;

import path from 'node:path';
import { createBareServer } from 'bsn';
import http from 'node:http';
import express from 'express';
import { hostname } from "node:os";
import Unblocker from "fetch-behind";

const __dirname = process.cwd();
const httpServer = http.createServer();
const app = express();
app.use(express.static('./frontend'));
const bareServer = createBareServer('/bare/');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var unblocker = new Unblocker({prefix: '/webinstance/'});
app.use(unblocker);

httpServer.on('request', (req, res) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeRequest(req, res);
    } else {
        app(req, res);
    }
});


httpServer.on('upgrade', (req, socket, head) => {
    if (bareServer.shouldRoute(req)) {
        bareServer.routeUpgrade(req, socket, head);
    } else {
        socket.end();
    }
});

httpServer.listen(PORT, () => {
const reset = "\x1b[0m";
const fgBlue = "\x1b[34m";
const fgWhite = "\x1b[37m"; 
console.log(`${fgBlue}S${fgWhite}onora${reset}`);
console.log(`${fgBlue}v1`)
});