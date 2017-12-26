const DBservice = require('./service/DBService')

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
        return "created"
    }
},
{
    method: 'PUT',
    path : '/trade/updateTrade',
    handler: (request, h) => {
        console.log('updating the trade', request.payload)
        //reply('updated').code('200')
        return h.response('updated')
    }
},
{
    method: 'POST',
    path: '/trade/search',
    handler: (request, h) => {
        console.log(request.payload)
        return DBservice.searchTrade(request.payload)
    }
}
]

module.exports = routes