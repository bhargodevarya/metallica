const qclient = require('../../../rabbitmqclient/src/index')
const qUtil = require('./QueueUtil')

function getTradeMessages() {
    qclient.getMessage('trade.queue.get', 'trade.ops', msgOuputCB)
}

function getTradeUpdateMsgs() {
    qclient.getMessage('trade.queue.updates', 'trade.ops', msgOuputCB)
}

function getMetalPrices(metals) {
    metals.forEach(metal => 
        qclient.getMessage('market.data.'.concat(metal),'market.ops', 
        msgOuputCB));
}

function msgOuputCB(msg) {
    console.log(msg)
    qUtil.emitMarketData(msg)
}

function sendToClient() {

}
//getTradeMessages()
//getTradeUpdateMsgs()

//getMetalPrices(['au','ag','al','cu','zn'])

module.exports = {
    getMetalPrices, getTradeMessages, getTradeUpdateMsgs
}