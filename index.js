const path = require('path')

const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app);

const {
  Server
} = require('socket.io')
const io = new Server(server)


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


io.on('connection', (socket) => {

  socket.on('chat-message', (data) => {
    io.emit('chat-message', data)
  })

})


server.listen('3000', () => {
  console.log("Server Listening At 3000")
})

