const io = require('socket.io-client')

const socket = io('http://localhost:5000')

socket.on('connect', () => {console.log('connected to the notification server')})

//socket.on('heartbeat', () => {console.log('heartbeat received')})

socket.on('metaldata', (msg) => console.log(msg))