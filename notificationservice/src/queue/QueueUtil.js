var socket;

function exportSocket(sock) {
    socket = sock
}

function emitData(type, msg) {
    if(socket) {
        if(type === 'marketmsg') {
            socket.emit('metaldata', msg)
            console.log("emitted", msg)
            //socket.emit('data',{data:1})
        } else if(type === 'getmsg') {
            socket.emit('getdata', {data:msg})
        } else if(type === 'updatemsg') {
            socket.emit('updatedata', msg)
        }
    } else {
        console.log("no client")
    }
}

module.exports = {exportSocket, emitData}