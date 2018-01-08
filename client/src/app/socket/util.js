import Constants from '../../app/Constants'
const io = require('socket.io-client')
const socket = io(Constants.NOTIFICATION_SERVICE)

import * as TradesActions from '../actions/TradesAction'

socket.on('connect', 
() => {console.log('connected to the notification server')})

let myStore;
function importStore(store) {
    myStore = store;
    console.log("store imported", myStore)
}

socket.on('metaldata', (msg) => {
    //console.log(msg);
    //Scroller
})
socket.on('getdata', (msg) => {
    console.log("getdata",JSON.stringify(msg));
    //TradesActions.loadTrades(msg)
    myStore.dispatch(TradesActions.loadTrades(msg))
})
socket.on('updatedata', (msg) => console.log(msg))

module.exports = {importStore, socket}
