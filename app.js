const express = require('express')
const app = express()
const server = require('http').Server(app)
// const io = require('socket.io')(server)
const { ExpressPeerServer } = require('peer');

const peerServer = ExpressPeerServer(server, {
  debug: true
});

app.use('/', peerServer);

server.listen(process.env.PORT || 443);