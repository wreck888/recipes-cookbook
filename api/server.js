const express = require('express');
const server = express();
const helmet = require('helmet')
const recipesRouter = require('./recipes/recipes-router')
const authRouter = require('./auth/auth-router')


server.use(helmet())
server.use(express.json());
server.use('/api/recipes', recipesRouter)
server.use('/api/auth', authRouter)

server.use("*", (req, res)=> {
    res.json({api: "API is up and running"});
});

server.use((err, req, res, next) => { 
    res.status(500).json({
        message: err.message,
        stack: err.message
    })
})

module.exports = server; 