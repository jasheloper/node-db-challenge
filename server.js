const express = require('express');

const projectsRouter = require("./router/projectsRouter");

const server = express();

server.use(express.json());

server.use('/api/projects', projectsRouter);

server.get('/', (req, res) => {
   res.send('<h3>business api</h3>');
 });

module.exports = server;
