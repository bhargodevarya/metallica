const qclient = require('../../../rabbitmqclient/src/index')

function getTradeMessages() {
    qclient.getMessage('trade.queue.get', 'trade.ops', (msg) => console.log(msg))
}

getTradeMessages()