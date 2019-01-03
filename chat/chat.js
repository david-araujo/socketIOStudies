const express = require('express')
const app = express()
const socketio = require('socket.io')
const expressServer = app.listen(9000)
const io = socketio(expressServer)

app.use(express.static(__dirname + '/public'))

io.on('connection', (socket) => {
    socket.emit('messageFromServer', { data: 'Welcome to Socket.IO Server!!!' })
    socket.on('messageToServer', (clientData) => {
        console.log(clientData)
    })
})
