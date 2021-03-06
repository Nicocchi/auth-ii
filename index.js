require('dotenv').config();

const express = require('express');
const cors = require('cors');

const server = express();

const userRoutes = require('./routes/userRoutes.js');

server.use(express.json(), cors());

server.get("/", (req, res) => {
    res.send("Its Alive!");
});

server.use('/api', userRoutes);

function runServer() {
    console.log('\x1b[34m', `\n[server] started server`);
    console.log(`[server] running on port: ${port}\n`);
    console.log('\x1b[0m', '');
}

const port = process.env.PORT || 3300;
server.listen(port, runServer());