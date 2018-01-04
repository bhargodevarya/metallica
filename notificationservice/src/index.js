const qClient = require('./queue/QueueClient')
const sockUtil = require('./socket/util')

sockUtil.startServer()
qClient.getMetalPrices()
qClient.getTradeMessages()
qClient.getTradeUpdateMsgs()