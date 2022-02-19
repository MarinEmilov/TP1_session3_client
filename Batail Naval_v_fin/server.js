const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server, {
    cors: {
        origin: "*"
      }
    });


//  app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/public/chat.html');
// });

io.on('connection', socket => {
    socket.emit('your id', socket.id);
    socket.on('send-message', body => {    
        io.emit('message', body);
    });
});

server.listen(3001, () => {
  console.log('listening on *:3001');
});