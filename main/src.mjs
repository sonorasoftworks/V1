import { createBareServer } from 'bypass-bare';
import http from 'node:http';
import express from 'express';
import path from 'node:path';
import { hostname } from "node:os";

const __dirname = process.cwd();
const httpServer = http.createServer();
const app = express();

app.use(express.static('./frontend'));
const bareServer = createBareServer();