const DBservice = require('./service/DBService')
const Trade = require('./schema/Trade')


//TODO logic to generate TradeId randomly
var routes = [{
    method: 'GET',
    path : '/trade/getAllTrades',
    handler : function(request, reply) {
        console.log("received a request")
        return DBservice.getAll()
    },
    config: {
        cors: true
    }
},
{
    method: 'DELETE',
    path : '/trade/deleteTrade/{id}',
    handler : (request, reply) => {
        console.log("received a request to delete trade", request.params.id)
        DBservice.deleteTrade(request.params.id)
        return "deleted"
    },
    config: {
        cors: true
    }
},
{
    method:'POST',
    path : '/trade/createTrade',
    handler: (request, reply) => {
        console.log("creating a trade", request.payload);
        DBservice.generateTradeIdAndSave(request.payload)
        return "created"
    },
    config: {
        cors: true
    }
},
{
    method: 'PUT',
    path : '/trade/updateTrade',
    handler: (request, h) => {
        console.log('updating the trade', request.payload)
        let trade = new Trade({
            TradeId:request.payload.TradeId,TradeDate: request.payload.TradeDate, 
            Commodity: request.payload.Commodity, 
            Side: request.payload.Side, Qty: request.payload.Qty, 
            Price: request.payload.Price, Counterparty: request.payload.Counterparty, 
            Location: request.payload.location
        })
        DBservice.upsertTrade(trade, true)
        //reply('updated').code('200')
        return h.response('updated')
    },
    config: {
        cors: true
    }
},
{
    method: 'POST',
    path: '/trade/search',
    handler: (request, h) => {
        console.log(request.payload)
        return DBservice.searchTrade(request.payload)
    },
    config: {
        cors: true
    }
}
]

module.exports = routes