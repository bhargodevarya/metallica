var socket;

function exportSocket(sock) {
    socket = sock
}

function emitMarketData(msg) {
    if(socket) {
        socket.emit('metaldata', msg)
    } else {
        console.log("no client")
    }
}

module.exports = {exportSocket, emitMarketData}