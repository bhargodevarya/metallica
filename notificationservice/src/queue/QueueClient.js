const qclient = require('../../../rabbitmqclient/src/index')
const qUtil = require('./QueueUtil')

function getTradeMessages() {
    qclient.getMessage('trade.queue.get', 'trade.ops', (msg) => emitViaSocket('getmsg', msg))
}

function getTradeUpdateMsgs() {
    qclient.getMessage('trade.queue.updates', 'trade.ops', 
    (msg) => emitViaSocket('updatemsg', msg))
}

function getMetalPrices() {
    qclient.getMessage('market.data','market.ops',
    (msg) => emitViaSocket('marketmsg',msg));
}

function msgOuputCB(msg) {
    //console.log(msg)
}

function emitViaSocket(type,msg) {
    qUtil.emitData(type, msg)
    msgOuputCB(msg)
}

module.exports = {
    getMetalPrices, getTradeMessages, getTradeUpdateMsgs
}