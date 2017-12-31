const qclient = require('../../../rabbitmqclient/src/index')

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
}

//getTradeMessages()
//getTradeUpdateMsgs()

getMetalPrices(['au','ag','al','cu','zn'])