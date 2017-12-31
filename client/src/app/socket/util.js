const io = require('socket.io-client')

const socket = io('http://localhost:5000')

socket.on('connect', () => {console.log('connected to the notification server')})

//socket.on('heartbeat', () => {console.log('heartbeat received')})

function startSocket() {
    
}

socket.on('metaldata', (msg) => console.log(msg))
    socket.on('getdata', (msg) => console.log("getdata",msg))
    socket.on('updatedata', (msg) => console.log(msg))

module.exports={startSocket}