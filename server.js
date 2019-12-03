const express = require('express');

const projectsRouter = require('./router/projectsRouter.js')
const resourcesRouter = require('./router/resourcesRouter.js')
const tasksRouter = require('./router/tasksRouter.js')

const server = express();

server.use(express.json());


server.use('/api/projects', projectsRouter)
server.use('/api/resources', resourcesRouter)
server.use('/api/tasks', tasksRouter)



server.get("/api/business", (req, res) => {
   res.send(` 
   
   <h1>Business Tasks.</h1>
   <p>Application Programming Interface - Server is up!</p>
   
   `);
});


module.exports = server; 