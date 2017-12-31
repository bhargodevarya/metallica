const qClient = require('./queue/QueueClient')
const sockUtil = require('./socket/util')

sockUtil.startServer()
qClient.getMetalPrices(['au','ag','al','cu','zn'])
qClient.getTradeMessages()
qClient.getTradeUpdateMsgs()