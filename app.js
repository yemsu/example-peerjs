//Peer server
// const fs = require('fs');
// const privateKey  = fs.readFileSync('sslcert/server.key', 'utf8');
// const certificate = fs.readFileSync('sslcert/server.crt', 'utf8');
const { PeerServer } = require('peer');
const peerServer = PeerServer({ 
  port: 9000, 
  path: '/' ,
  // ssl: {
  //     key: privateKey,
  //     cert: certificate
  //   }
});
console.log('start peerServer')