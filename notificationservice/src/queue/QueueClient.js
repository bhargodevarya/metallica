const qclient = require('../../../rabbitmqclient/src/index')

function getTradeMessages() {
    qclient.getMessage('trade.queue', 'trade.ops', (msg) => console.log(msg))
}

getTradeMessages()