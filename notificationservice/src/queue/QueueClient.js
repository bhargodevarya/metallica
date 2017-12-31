const qclient = require('../../../rabbitmqclient/src/index')
const qUtil = require('./QueueUtil')

function getTradeMessages() {
    qclient.getMessage('trade.queue.get', 'trade.ops', (msg) => emitViaSocket('getmsg', msg))
}

function getTradeUpdateMsgs() {
    qclient.getMessage('trade.queue.updates', 'trade.ops', 
    (msg) => emitViaSocket('updatemsg', msg))
}

function getMetalPrices(metals) {
    metals.forEach(metal => 
        qclient.getMessage('market.data.'.concat(metal),'market.ops', 
        (msg) => emitViaSocket('marketmsg', msg)));
}

function msgOuputCB(msg) {
    console.log(msg)
}

function emitViaSocket(type,msg) {
    qUtil.emitData(type, msg)
    msgOuputCB(msg)
}
//getTradeMessages()
//getTradeUpdateMsgs()

//getMetalPrices(['au','ag','al','cu','zn'])

module.exports = {
    getMetalPrices, getTradeMessages, getTradeUpdateMsgs
}