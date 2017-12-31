const app = require('express')();
const server = require('http').Server(app)
const io = require('socket.io')(server)

const qUtil = require('../queue/QueueUtil')

io.on('connection', (socket) => {
    console.log('user connected')
    qUtil.exportSocket(socket)
})

function startServer() {
    server.listen(5000, () => {console.log('server started')})
}

module.exports={startServer}

